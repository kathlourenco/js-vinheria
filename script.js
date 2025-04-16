
let nomevinho = " ";
let tipovinho = " ";
let dataproducao = " ";
let estoque = " "; 

function cadastrarVinho() {  
   
    nomevinho = prompt("Insira o nome de um vinho: ");
        
        if (nomevinho === " "){
            alert("Insira o nome de um vinho da nossa loja!");
            nomevinho = prompt("Insira o nome de um vinho: ");
        }


    tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ");
        
        if (tipovinho === " "){
            alert("Insira um tipo de vinho!");
            tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ");
        }


    dataproducao = prompt("Insira a data de produção do vinho: ");
       
        if (dataproducao === " "){
            alert("A data de produção do vinho deve ser inserido!");
            dataproducao = parseInt(prompt("Digite a data de produção do vinho: "));
        }


    estoque = parseInt(prompt("Insira quantos vinhos deseja levar: "));
        
        if (estoque === " "){
            alert("Insira a quantidade de vinhos no estoque!");
            estoque = parseInt(prompt("Insira quantos vinhos deseja levar: "));
        }
} 

cadastrarVinho();


function detalhesVinho(nome, tipo, estoque, producao) { 
    const mensagem = `Vinho cadastrado!
    Nome do vinho:  ${nome}
    Tipo do vinho:  ${tipo}
    Estoque disponível:  ${estoque}
    Ano de fabricação:  ${producao}`; 
            
            alert(mensagem);
            alert("Veja os detalhes da sua compra no console!");
                console.log("Detalhes da sua escolha: ");
                console.log(`Nome: ${nome}`);
                console.log(`Tipo:  ${tipo}`);
                console.log(`Estoque:  ${estoque}`);
                console.log(`Ano: " ${producao}`);
    

    if(estoque < 5){
        console.log ("Estoque do vinho escolhido : " + estoque + "Estoque baixo!");
    } 
    else if(producao < 2015){
            console.log("ano do vinho : " + producao + "Vinho Antigo!");
    }
    else if(producao >= 2015 && producao <= 2019){
            console.log("ano do vinho : " + producao + "Vinho Amadurecido!");
    }
    else if(producao >= 2020 ){
            console.log("ano do vinho : " + producao + "Vinho jovem!");
    }
    else {
        if(producao < 2015){
            console.log("Data de produção do vinho : " + producao + "Vinho antigo!");
        }
        if(producao >= 2015 && producao <= 2019){
            console.log("Data de produção do vinho : " + producao + "Vinho amadurecido!");
        }
        if(producao >= 2020 ){
            console.log("Data de produção do vinho : " + producao + "Vinho jovem!");
        }
        
    } 
    
}
detalhesVinho(nomevinho, tipovinho, estoque, dataproducao); 