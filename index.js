const nomePetshop = "PETSHOP DH"
let bancodedados = require ("./bancodedados.json");
let pets = bancodedados.pets;




const listarPets = () =>{
    for(let pet of pets){
        console.log(`O Nome do pet é ${pet.nome}, e o nome do  tutor é ${pet.tutor} e ele ${pet.vacinado ? "foi vacinado" : "Não foi vacinado"}`);
      
        
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


const darBanho = () =>{
    console.log("BANHO:");
    for(let pet of pets){

    const tomouBanho = pet.servicos.includes('banho');
    if(tomouBanho == true){
        console.log(`${pet.nome} já tomou banho`)
    }
        
    }
}

const tosarPet = () =>{
    console.log("=============================");
    console.log("TOSA:");
    for(let pet of pets){
    const tosarPet = pet.servicos.includes('tosar');
    if(tosarPet == true){
        console.log(`${pet.nome} Já foi tosado`)
    }
    
    }
}

const apararUnhaPet = () =>{
    console.log("=============================")
    console.log("UNHA:");
    for(let pet of pets){

    const apararUnhaPet = pet.servicos.includes('Aparar unha');
    if(apararUnhaPet == true){
        console.log(`${pet.nome} Já fez a unha`);
    }
    
    }
}

const atenderCliente = (pet, servico) => {

    console.log(`Olá, ${pet.nome}`);


    servico(pet);

    console.log(`Tchau, até mais!`);

}
 //listarPets();
 atenderCliente(pets[0], darBanho);

