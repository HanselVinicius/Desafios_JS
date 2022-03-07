var res=document.getElementById('res')
var txt=document.getElementById('txth2')


function iniciar(){
    var PreçoInicial=Number(window.prompt('Qual o valor antigo do produto'))
    var PreçoFinal=Number(window.prompt('qual o novo valor do produto'))
    var variação=Number(PreçoInicial-PreçoFinal)
    txt.innerHTML='Analisando a mudança temos:'
    res.innerHTML=`O preço mudou de ${PreçoInicial} para ${PreçoFinal}`
    if(PreçoInicial>PreçoFinal){
        res.innerHTML+=`<br>hoje o produto está mais barato `
        res.innerHTML+=`<br>O preço caiu R$${variação} em relação ao preço anterior`
        res.innerHTML+=`<br>Uma variação de ${(variação/PreçoInicial)*100}%,para baixo`
    }else{
        res.innerHTML+=`<br> hoje o produto está mais caro `
        res.innerHTML+=`<br>O preço subiu R$${-variação} em relação ao preço anterior`
        res.innerHTML+=`<br>Uma variação de ${-(variação/PreçoInicial)*100}%,para cima`
    }
    

}
