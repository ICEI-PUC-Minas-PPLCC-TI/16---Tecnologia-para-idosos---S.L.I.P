function exibeNoticias(){
    let divTela = document.getElementById('tela50');
    let texto = '';

    let dados = (JSON.parse(this.responseText));
    for(i = 0; i < 6; i++){
        let noticia = dados.articles[i];

        texto = texto + `
            <div class = "news">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <img class="img-fluid" src="${noticia.image}">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <h1>${noticia.title}</h1>
                    <b>Publicado em: </b>${noticia.publishedAt}
                    <p>${noticia.content}</p>
                    
                    <a href="${noticia.url}"><button type="button" class="btn btn-info">Leia mais...</button></a>
                </div>
            </div>
        `;
    };

    divTela.innerHTML = texto
}

function executarNoticias() {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open("GET", `https://gnews.io/api/v4/top-headlines?country=br&q=tecnologia%20idosos&token=4ce709ac2ae73aa8023b1c98f7265ced`);
    xhr.send();
}

window.onload = () => {
    executarNoticias()
}