export class UI {
    displayGameCards(array) {
        let cartona = "";
        for (let i = 0; i < array.length; i++) {
            cartona += `
            <div class="col-md-6 col-lg-4 col-xl-3 g-3">
                <div data-id="${array[i].id}" role=""button class="card rounded-3 h-100">
                    <figure>
                        <img src="${array[i].thumbnail}" class="card-img-top" alt="Game Poster">
                    </figure>
                    <figcaption>
                        <div class="card-body px-2 py-3">
                            <div class="py-1 d-flex justify-content-between align-items-center">
                                <h5 class="h6 mb-0">${array[i].title}</h5>
                                <span class="badge price">Free</span>
                            </div>
                            <p class="card-text text-center py-2">
                                ${array[i].short_description.slice(0, 30)}...
                            </p>
                        </div>
                        <div class="card-footer p-2 text-body-secondary d-flex justify-content-between align-items-center">
                            <span class="badge rounded-pill">${array[i].genre}</span>
                            <span class="badge rounded-pill">${array[i].platform}</span>
                        </div>
                    </figcaption>
                </div>
            </div> 
            `;
        };
        document.querySelector(".game-cards").innerHTML = cartona;
    };

    getGameDetails(array) {
        const box = `
            <div class="col-12 col-md-6 col-xl-5 mb-3">
                <img src="${array.thumbnail}" alt="Game Thumbnail">
            </div>
            <div class="col-12 col-md-6 col-xl-7">
                <h3 class="title">Title: <span>${array.title}</span></h3>
                <p class="category">Category: <span class="badge">${array.genre}</span></p>
                <p class="plateform">Plateform: <span class="badge">${array.platform}</span></p>
                <p class="status">Status: <span class="badge">${array.status}</span></p>
                <p class="description">${array.description.slice(0, 700)}...</p>
                <a class="my-btn" target="_blank" href="${array.game_url}">Show Game</a>
            </div>
            `;
        document.querySelector(".details-content").innerHTML = box;
    };
};
