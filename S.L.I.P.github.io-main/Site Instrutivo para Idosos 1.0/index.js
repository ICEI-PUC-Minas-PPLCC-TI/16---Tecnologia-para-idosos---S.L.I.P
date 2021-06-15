function comentsareaBox(title, desc) {
    this.title = title;
    this.desc = desc;
}

let vagas = [];
let x, comentsarea, box;

//Garantir que hajam vagas ficticias postadas 

if (localStorage.getItem('Vagas') === null) {
    localStorage.setItem('Vagas', `[{"title":"Lucas","desc":"Muito bem feito!"}]`);
} else {
    console.log("local storage preenchido");
}

vagas = JSON.parse(localStorage.getItem("Vagas"));

window.onload = () => {

    for (x = vagas.length - 1; x >= 0; x--) {

        comentsarea = document.getElementById('comentsarea');

        box = `
        <div class="card col-12">
            <div class="card-body">
                <h5>${vagas[x].title}</h5>
                <p>${vagas[x].desc}</p>
            </div>
        </div>`;

        comentsarea.innerHTML += box;
    }

    register.onsubmit = (e) => {

        if (titleForm.value.length == 0 ||
             descForm.value.length == 0 ) {

            instruction.classList.add("erro");
            instruction.innerHTML = "Preencha todos os campos";
            console.log("erro");

        } else {

            let info = new comentsareaBox(titleForm.value, descForm.value);

            vagas[vagas.length] = info;
            instruction.innerHTML = "";
            instruction.classList.remove("erro");

            localStorage.setItem('Vagas', JSON.stringify(vagas));

            comentsarea = document.getElementById('comentsarea');

            box = `
            <div class="card col-12">
                <div class="card-body">
                    <h5>${vagas[vagas.length - 1].title}</h5>
                    <p>${vagas[vagas.length - 1].desc}</p>
                </div>
            </div>`;

            comentsarea.innerHTML += box;

            titleForm.value = "";
            descForm.value = "";
        }
        e.preventDefault();
    }
}

       function Avaliar(estrela) {

        var url = window.location;
        url = url.toString()
        url = url.split("index.html");
        url = url[0];

        var s1 = document.getElementById("s1").src;
        var s2 = document.getElementById("s2").src;
        var s3 = document.getElementById("s3").src;
        var s4 = document.getElementById("s4").src;
        var s5 = document.getElementById("s5").src;
        var avaliacao = 0;

        if (estrela == 5){        
        if (s5 == url + "images/star0.png") {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star1.png";
            document.getElementById("s3").src = "images/star1.png";
            document.getElementById("s4").src = "images/star1.png";
            document.getElementById("s5").src = "images/star1.png";
            avaliacao = 5;
        } else {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star1.png";
            document.getElementById("s3").src = "images/star1.png";
            document.getElementById("s4").src = "images/star1.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 4;
        }}
        
        //ESTRELA 4
        if (estrela == 4){  
        if (s4 == url + "images/star0.png") {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star1.png";
            document.getElementById("s3").src = "images/star1.png";
            document.getElementById("s4").src = "images/star1.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 4;
        } else {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star1.png";
            document.getElementById("s3").src = "images/star1.png";
            document.getElementById("s4").src = "images/star0.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 3;
        }}

        //ESTRELA 3
        if (estrela == 3){  
        if (s3 == url + "images/star0.png") {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star1.png";
            document.getElementById("s3").src = "images/star1.png";
            document.getElementById("s4").src = "images/star0.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 3;
        } else {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star1.png";
            document.getElementById("s3").src = "images/star0.png";
            document.getElementById("s4").src = "images/star0.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 2;
        }}
        
        //ESTRELA 2
        if (estrela == 2){  
        if (s2 == url + "images/star0.png") {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star1.png";
            document.getElementById("s3").src = "images/star0.png";
            document.getElementById("s4").src = "images/star0.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 2;
        } else {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star0.png";
            document.getElementById("s3").src = "images/star0.png";
            document.getElementById("s4").src = "images/star0.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 1;
        }}
        
        //ESTRELA 1
        if (estrela == 1){  
        if (s1 == url + "images/star0.png") {
            document.getElementById("s1").src = "images/star1.png";
            document.getElementById("s2").src = "images/star0.png";
            document.getElementById("s3").src = "images/star0.png";
            document.getElementById("s4").src = "images/star0.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 1;
        } else {
            document.getElementById("s1").src = "images/star0.png";
            document.getElementById("s2").src = "images/star0.png";
            document.getElementById("s3").src = "images/star0.png";
            document.getElementById("s4").src = "images/star0.png";
            document.getElementById("s5").src = "images/star0.png";
            avaliacao = 0;
        }}
        
        document.getElementById('rating').innerHTML = avaliacao;
        
    }

