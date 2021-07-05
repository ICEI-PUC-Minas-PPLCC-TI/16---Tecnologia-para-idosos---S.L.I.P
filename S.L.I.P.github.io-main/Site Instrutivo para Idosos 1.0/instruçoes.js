function comentsareaBox(title, desc) {
    this.title = title;
    this.desc = desc;
}

let duvidas = [];
let y, comentsarea, box;

//Garantir que hajam duvidas ficticias postadas 

if (localStorage.getItem('Duvidas') === null) {
    localStorage.setItem('Duvidas', `[{"title":"João","desc":"Gostaria de saber mais sobre a parte da barra de pesquisas."}]`);
} else {
    console.log("local storage preenchido");
}

duvidas = JSON.parse(localStorage.getItem("Duvidas"));

window.onload = () => {

    for (y = duvidas.length - 1; y >= 0; y--) {

        comentsarea = document.getElementById('comentsarea');

        box = `
        <div class="card col-12">
            <div class="card-body">
                <h5>${duvidas[y].title}</h5>
                <p>${duvidas[y].desc}</p>
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

            duvidas[duvidas.length] = info;
            instruction.innerHTML = "";
            instruction.classList.remove("erro");

            localStorage.setItem('Duvidas', JSON.stringify(duvidas));

            comentsarea = document.getElementById('comentsarea');

            box = `
            <div class="card col-12">
                <div class="card-body">
                    <h5>${duvidas[duvidas.length - 1].title}</h5>
                    <p>${duvidas[duvidas.length - 1].desc}</p>
                </div>
            </div>`;

            comentsarea.innerHTML += box;

            titleForm.value = "";
            descForm.value = "";
        }
        e.preventDefault();
    }
}
