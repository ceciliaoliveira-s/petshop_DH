const nomePetshop = "PETSHOP DH"

let pets = [
    {     
    nome: 'tobe',
    tipo: 'cachorro',
    idade: 8,
    raca: 'pastor alemão',
    peso: 3,
    tutor: 'doug',
    contato: '(81) 99999-9999',
    vacinado: true,
    servicos: ['banho', 'tosa',]
},

{   nome: 'dori',
    tipo: 'gato',
    idade: 4,
    raca: 'podlle',
    peso: 3,
    tutor: 'ana',
    contato: '(81) 99999-9999',
    vacinado: true,
    servicos: ['banho', 'tosa',]
},

{   nome: 'tgarfield',
    tipo: 'cachorro',
    idade: 8,
    raca: 'pastor alemão',
    peso: 3,
    tutor: 'josé',
    contato: '(81) 99999-9999',
    vacinado: false,
    servicos: ['banho', 'tosa',]
},

];

const listarPets = () =>{
    for(let pet of pets){
        // console.log(`O Nome do pet é ${pet.nome}, e o nome do  tutor é ${pet.tutor}`);
        vacinarPet(pet.vacinado, pet.nome);
        
    }
}

const vacinarPet = (vacinado, nome) =>{
    if(vacinado === false){
        console.log(`${nome} não foi vacinado`);
    }
    else{
        console.log(`${nome} Já foi vacinado`);
    }

}

const campanhaVacina = () => {

    let naoVacinados = 0;
    for(let pet of pets){
        if(pet.vacinado === false){
            naoVacinados++;
        }
    }
    
    console.log("========================")
    console.log(`${naoVacinados} devem ser vacinados!`);
}

const adicionarPet = () =>{
    let petNovo =
    {
            nome: 'Judas',
            tipo: 'Cachorro',
            idade: 3,
            raca: 'Pug',
            peso: 5,
            tutor: 'Bjuliana',
            contato: '(81) 912357903',
            vacinado: false,
            servicos: ['']
    }
    pets.push(petNovo);
}


adicionarPet();
listarPets();
campanhaVacina();
