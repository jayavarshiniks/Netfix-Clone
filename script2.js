const api = "api_key=afd43e413a07312005eb1227b6f021af";
const baseUrl = "https://api.themoviedb.org/3";
const bannerUrl = "https://image.tmdb.org/t/p/original";
const imgUrl = "https://image.tmdb.org/t/p/w300"; 

const requests = {
    
    
    fetchTrending: `${baseUrl}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${baseUrl}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${baseUrl}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${baseUrl}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${baseUrl}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${baseUrl}/discover/movie?${api}&with_genres=99`,
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())

    .then((data) => {
        console.log(data.results);

        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner");
        var bannerTitle = document.getElementById("banner-title");
        var bannerDescription = document.getElementById("banner-description");

        banner.style.backgroundImage= "url(" + bannerUrl + setMovie.backdrop_path + ")";
        bannerDescription.innerText = truncate(setMovie.overview, 150);
        bannerTitle.innerText = setMovie.name;
    });

//originals
fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row-title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const rowPosters = document.createElement("div");
        rowPosters.className = "row-posters";
        row.appendChild(rowPosters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row-posterLarge";

            var s = movie.name.replace(/\s+/g,"");
            poster.id = s;
            poster.src = imgUrl + movie.poster_path;
            rowPosters.appendChild(poster);
        });
    });

//trending
fetch(requests.fetchTrending)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row-title";
        title.innerText = "TOP RATED";

        row.appendChild(title);

        const rowPosters = document.createElement("div");
        rowPosters.className = "row-posters";
        row.appendChild(rowPosters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row-posterLarge";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = imgUrl + movie.poster_path;
            rowPosters.appendChild(poster);
        });
    });

//action
fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row-title";
        title.innerText = "ACTION MOVIES";

        row.appendChild(title);

        const rowPosters = document.createElement("div");
        rowPosters.className = "row-posters";
        row.appendChild(rowPosters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row-poster";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = imgUrl + movie.backdrop_path;
            rowPosters.appendChild(poster);
        });
    });

//comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row-title";
        title.innerText = "COMEDY MOVIES";

        row.appendChild(title);

        const rowPosters = document.createElement("div");
        rowPosters.className = "row-posters";
        row.appendChild(rowPosters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row-poster";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = imgUrl + movie.backdrop_path;
            rowPosters.appendChild(poster);
        });
    });

//horror
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerText = "HORROR MOVIES";

    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className = "row-poster";

        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.backdrop_path;
        rowPosters.appendChild(poster);
    });
});

//romance
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row-title";
        title.innerText = "ROMANCE MOVIES";

        row.appendChild(title);

        const rowPosters = document.createElement("div");
        rowPosters.className = "row-posters";
        row.appendChild(rowPosters);

        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row-poster";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = imgUrl + movie.backdrop_path;
            rowPosters.appendChild(poster);
        });
    });

//documentary
fetch(requests.fetchDocumentaries)
.then((res) => res.json())

.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row-title";
    title.innerText = "DOCUMENTARIES";

    row.appendChild(title);

    const rowPosters = document.createElement("div");
    rowPosters.className = "row-posters";
    row.appendChild(rowPosters);

    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className = "row-poster";

        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.backdrop_path;
        rowPosters.appendChild(poster);
    });
});