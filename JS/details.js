import { UI } from "./ui.js";

export class Details {
    constructor(id) {
        this.ui = new UI();
        document.getElementById("closeBtn").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });
        this.getGameDetails(id);
    }
    
    getGameDetails(gameId) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '94cc35aad7msh825290b1191703bp10178ejsn10a3d5362235',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            },
        };
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
        .then((response => response.json()))
        .then((response) => this.ui.getGameDetails(response));
    };
}