
let articles = {
    'movies': [
        { name: 'Pulp Fiction', score: 5 },
        { name: 'Armageddon', score: 2 },
        { name: 'Titanic', score: 1 }],
    'series': [
        { name: 'Breaking Bad', score: 5 },
        { name: 'House of Cards', score: 4 }]
};

const nombrePelicula = prompt('Indicame el nombre de tu película favorita');
const valoracionPelicula = prompt('¿Que valoración le pones?');
articles.movies.push({ name: `${nombrePelicula}`, score: `${valoracionPelicula}` });


const nombreSerie = prompt('Indicame el nombre de tu serie favorita');
const valoracionSerie = prompt('¿Que valoración le pones?');
articles.series.push({ name: `${nombreSerie}`, score: `${valoracionSerie}` });

function imprimeConsola(articlesLocal) {
    console.log(articlesLocal);
    imprimeConsola(articles);
}

function imprimeSeries() {
    document.write(`<h1>Séries</h1>`);
    for (let serie of articles['series']) {
        document.write(`<p>${serie.name}, puntaje: ${serie.score}.</p>`);
    }
}
imprimeSeries();

function imprimePeliculas() {
    document.write(`<h1>Películas</h1>`);
    for (let pelicula of articles.movies) {
        if (pelicula.score === 5) {
            document.write(`<div>${pelicula.name}, puntaje: <div style="color:green; font-weight: bold; display: inline-block">  ${pelicula.score}</div>.</div>`);
        } else if (pelicula.score === 1) {
            document.write(`<div>${pelicula.name}, puntaje: <div style="color:red; font-weight: bold; display: inline-block">${pelicula.score}</div>.</div>`);
        } else {
            document.write(`<p>${pelicula.name}, puntaje: ${pelicula.score}.</p>`);
        }
    }
}
imprimePeliculas();

document.write(`<h2>The best</h2>`);
articles.movies.filter(function (pelicula) {
    if (pelicula.score >= 5) {
        document.write(`<p>Mejor pelicula: ${pelicula.name}.</p>`);
    }
});

articles.series.filter(function (serie) {
    if (serie.score >= 5) {
        document.write(`<p>Mejor serie: ${serie.name}.</p>`);
    }
});

const preguntaScore = prompt('Dime una película o serie para que descubras su puntaje: Pulp Fiction, Armageddon, Titanic, Breaking Bad o House of Cards.');

function resultadoScore() {
    articles.movies.filter(function (pelicula) {
        if (pelicula.name === preguntaScore) {
            alert(`El putaje es: ${pelicula.score}.`)
        }
    });

    articles.series.filter(function (serie) {
        if (serie.name === preguntaScore) {
            alert(`El putaje es: ${serie.score}.`)
        }
    });
}
resultadoScore(preguntaScore);
