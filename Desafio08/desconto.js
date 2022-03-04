function iniciar()
{
 let produto=window.prompt('Qual produto você deseja comprar?')
 let preço=Number(window.prompt(`Qual o preço deste ${produto}`))
 let desconto=Number(preço*0.10)
 let write=document.getElementById("txth2")
 let res=document.getElementById('res')
 write.innerHTML=`Calculando desconto de 10% para ${produto} temos`
 res.innerHTML=`o preço original era ${preço}<br>`
 res.innerHTML+=`você acaba de ganhar ${preço*0.10} reais de desconto<br>`
 res.innerHTML+=`sendo assim você vai pagar ${preço-desconto} no produto ${produto}`

}