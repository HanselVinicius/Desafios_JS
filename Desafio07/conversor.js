let cotação=Number(window.prompt('antes de mais nada quanto está a cotação do dolar?:'))
function iniciar(){
    let carteira=Number(window.prompt('Quanto você tem na carteira?'))
    let res=document.getElementById('res')
    res.innerHTML=`você vai conseguir comprar ${carteira/cotação} Dolares`
}