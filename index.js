const nomePetshop = "PETSHOP DH"


//const moment = require ('moment');
const fs = require ('fs');
let bancodedados = fs.readFileSync('./bancodedados.json');

    bancodedados = JSON.parse(bancodedados);

    const atualizarBanco = () => {
    // Conversão de objeto javascript para JSON
     let petsAtualizado = JSON.stringify(bancodedados);
        // Atualização do arquivo bancodedados.json 
      fs.writeFileSync('bancodedados.json', petsAtualizado, 'utf-8');
}



    const listarPets = () =>{
        for(let pet of bancodedados.pets){
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
    atualizarBanco();
}

const campanhaVacina = () => {

    let naoVacinados = 0;
    for(let pet of bancodedados.pets){
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
    bancodedados.pets.push(petNovo);
    atualizarBanco();
}


const darBanho = () =>{
    console.log("BANHO:");
    for(let pet of bancodedados.pets){

    const tomouBanho = pet.servicos.includes('banho');
    if(tomouBanho == true){
        console.log(`${pet.nome} já tomou banho`)
    }
        
    }

    atualizarBanco();
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

    atualizarBanco();
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
    atualizarBanco();    
}

const atenderCliente = (pet, servico) => {

    console.log(`Olá, ${pet.nome}`);


    servico(pet);

    console.log(`Tchau, até mais!`);


    atualizarBanco();
}

 //listarPets();
 atenderCliente(bancodedados.pets[3], darBanho);



