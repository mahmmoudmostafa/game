import { UI } from "./ui.js";
import { Details } from "./details.js";

export class Games {
    constructor() {
        this.getGames("mmorpg");
        document.querySelectorAll(".nav-link").forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
            document.querySelector(".nav-link.active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
            });
        });
        this.ui = new UI();
    }

    async getGames(category) {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "94cc35aad7msh825290b1191703bp10178ejsn10a3d5362235",
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            },
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await api.json();  
        this.ui.displayGameCards(response);
        this.getId();
        
    };
    
    getId() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
            const id = item.dataset.id;
            this.showDetails(id);
            });
        });
    };

    showDetails(gameId) {
        const details = new Details(gameId);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
};
