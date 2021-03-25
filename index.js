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
    vacinado: true,
    servicos: ['banho', 'tosa',]
},

];

const ListarPets = () => {

    for(let pet of pets){
        
        //console.log(pets[i].nome);

        //console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
        
        console.log(`O nome do pet é ${pet.nome}, e o nome do tutor é ${pet.tutor}`);
    }
}

ListarPets();


console.log
