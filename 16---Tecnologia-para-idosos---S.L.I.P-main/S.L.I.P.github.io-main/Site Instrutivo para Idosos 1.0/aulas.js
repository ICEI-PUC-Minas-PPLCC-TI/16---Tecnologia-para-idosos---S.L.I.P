function comentsareaBox1(title1, desc1) {
    this.title1 = title1;
    this.desc1 = desc1;
    
}

let vagas1 = [];
let x1, comentsarea1, box1;

//Garantir que hajam vagas ficticias postadas 

if (localStorage.getItem('Vagas1') === null) {
    localStorage.setItem('Vagas1', `[{"title":"Carlos","desc":"Otimo."}]`);
} else {
    console.log("local storage preenchido");
}

vagas1 = JSON.parse(localStorage.getItem("Vagas1"));

window.onload = () => {

    for (x1 = vagas1.length - 1; x1 >= 0; x1--) {

        comentsarea1 = document.getElementById('comentsarea1');

        box1 = `
        <div class="card col-12">
            <div class="card-body">
                <h5>${vagas1[x1].title1}</h5>
                <p>${vagas1[x1].desc1}</p>
            </div>
        </div>`;

        comentsarea1.innerHTML += box1;
    }
        e.preventDefault();
    }

function registro(){
    console.log(titleForm1.value)
    if ( descForm1.value.length == 0 ) {

        instruction1.classList.add("erro");
        instruction1.innerHTML = "Preencha todos os campos";
        console.log("erro");
        
    }
    if(descForm1.value.length > 500){
            instruction1.classList.add("erro"); 
            instruction1.innerHTML = "Reduza a quantidade de caracteres.";
              
        
    } 
    else {
        if(titleForm1.value.length == 0){

            titleForm1.value="Anônimo:"
        }
        

        let info1 = new comentsareaBox1(titleForm1.value, descForm1.value);

        vagas1[vagas1.length] = info1;
        instruction1.innerHTML = "";
        instruction1.classList.remove("erro");

        localStorage.setItem('Vagas1', JSON.stringify(vagas1));

        comentsarea1 = document.getElementById('comentsarea1');

        box1 = `
        <div class="card col-12">
            <div class="card-body">
                <h5>${vagas1[vagas1.length - 1].title1}</h5>
                <p>${vagas1[vagas1.length - 1].desc1}</p>
            </div>
        </div>`;

        comentsarea1.innerHTML += box1;

        titleForm1.value = "";
        descForm1.value = "";
    }
}
