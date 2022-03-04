function iniciar(){
let nome=window.prompt('Qual o nome?')
let salario=Number(window.prompt(`Qual o sálario de ${nome}`))
let reajuste=Number(window.prompt(`o sálario de ${nome} vai ser reajustado em qual porcentagem?`))
let reajusteReal=reajuste/100
let sal_final=(salario*reajusteReal)+salario
let write=document.getElementById('txth2')
let res=document.getElementById('res')
write.innerHTML=`${nome} recebeu um aumento salarial`
res.innerHTML=`<br>o Salario atual era de ${salario}`
res.innerHTML+=`<br>com um aumento de ${reajuste}% o salario vai aumentar ${salario*reajusteReal} `
res.innerHTML+=`<br>ai ${nome} vai passar a receber ${sal_final}`

}