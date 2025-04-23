import { makeAutoObservable, runInAction } from "mobx";
import { Cinema } from "../models/cinema";

class CinemaStore {
    cinemas: Cinema[] = [];
    currentCinema: Cinema | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    selectCinema = (id: number) => {
        this.currentCinema = this.cinemas.find((cinema) => cinema.id === id) || null; // Find the cinema by ID and set it as the current cinema
    }

    loadCinemas = async () => {
        try {
            const response = await fetch("http://localhost:3000/cinemas");
            const data = await response.json();
            runInAction(() => {
                data.forEach((cinema: Cinema) => {
                    // Check for duplicates
                    if (!this.cinemas.find((t) => t.id === cinema.id)) {
                        this.cinemas.push(cinema);
                    }
                })
            });
            this.currentCinema = this.cinemas[0] || null; // Set the first cinema as the current cinema
        } catch (error) {
            console.error("Failed to load cinemas:", error);
        }
    }

    getCinemas() {
        return this.cinemas;
    }

    getCinemaCount() {
        return this.cinemas.length;
    }

    getCinemaByIndex(index: number) {
        return this.cinemas[index] || null;
    }
}

export default new CinemaStore();