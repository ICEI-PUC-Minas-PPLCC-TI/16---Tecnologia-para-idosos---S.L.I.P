const api_key = '87b5478dc65644f499ec2d3f199074ba';

function mostrarResultado() {
    var tela = document.getElementById("tela");
    var text = '';
    var dados = JSON.parse(this.responseText);


    for (i = 0; i < dados.articles.length; i++) {

        text += `<div class="search-news">
        <a target="_blank"
            href="${dados.articles[i].link}">

                <div class="col-12">
                    <div class="search-news-text">
                        <h2>${dados.articles[i].title}</h2><br>
                        <p>${dados.articles[i].summary}</p>
                        <h5>Autor: ${dados.articles[i].author}</h5>
                        <h5>Data de publicação: ${dados.articles[i].published_date}</h5>
                        <h5>Direitos Reservados: ${dados.articles[i].rights}</h5>
                    </div>
                </div>
            </a>
        </div>`
    }

    
    tela.innerHTML += text;

    console.log(dados);
}

function pesquisaDados() {

    var query = document.getElementById("magico").value;

    var tela = document.getElementById("tela");

    tela.innerHTML = `<h1 class="search-title">Resultados da pesquisa por "${query}"</h1>`

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.onload = mostrarResultado;
    xhr.open("GET", `https://newscatcher.p.rapidapi.com/v1/search?q=${query}&lang=pt&sort_by=relevancy&page=1&media=True`);
    xhr.setRequestHeader("x-rapidapi-key", "8c1a4b3caamsh83d404b33c2ef18p194fb4jsn0bc4efc755c6");
    xhr.setRequestHeader("x-rapidapi-host", "newscatcher.p.rapidapi.com");

    xhr.send(data);
}





function mostrarResultado1() {
    var tela = document.getElementById("tela");
    var text = '';
    var dados = JSON.parse(this.responseText);


    for (i = 0; i < dados.articles.length; i++) {

        text += `<div class="search-news">
        <a target="_blank"
            href="${dados.articles[i].link}">

                <div class="col-12">
                    <div class="search-news-text">
                        <h2>${dados.articles[i].title}</h2><br>
                        <p>${dados.articles[i].summary}</p>
                        <h5>Autor: ${dados.articles[i].author}</h5>
                        <h5>Data de publicação: ${dados.articles[i].published_date}</h5>
                        <h5>Direitos Reservados: ${dados.articles[i].rights}</h5>
                    </div>
                </div>
            </a>
        </div>`
    }

    
    tela.innerHTML += text;

    console.log(dados);
}

function pesquisaDados1() {

    var query = document.getElementById("magico1").value;

    var tela = document.getElementById("tela");

    tela.innerHTML = `<h1 class="search-title">Resultados da pesquisa por "${query}"</h1>`

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.onload = mostrarResultado;
    xhr.open("GET", `https://newscatcher.p.rapidapi.com/v1/search?q=${query}&lang=pt&sort_by=relevancy&page=1&media=True`);
    xhr.setRequestHeader("x-rapidapi-key", "8c1a4b3caamsh83d404b33c2ef18p194fb4jsn0bc4efc755c6");
    xhr.setRequestHeader("x-rapidapi-host", "newscatcher.p.rapidapi.com");

    xhr.send(data);
}