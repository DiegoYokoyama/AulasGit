let nome = "miguel";
let idade = "15";

function podeVotar(nome, idade){
    if(idade >= "16"){ 
        
        console.log(`${nome},pode votar`);

    }else{
        console.log(`${nome},Não pode votar`);
    }
}

podeVotar(nome,idade);