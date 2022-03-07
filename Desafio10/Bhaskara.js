function iniciar(){
    var res=document.getElementById('res')
    var txt=document.getElementById('txth2')
    var a=Number(window.prompt('Qual o valor de a?'))
    var b=Number(window.prompt('Qual o valor de b?'))
    var c=Number(window.prompt('Qual o valor de c?'))
    txt.innerHTML='Calculando o Bhaskara'
    res.innerHTML=`a equação atual é: ${a}x<sup>2</sup>+${b}x+${c}=0<br>`
    res.innerHTML+=`o calculo realizado é &Delta;= ${a}x<sup>2</sup>-4.${b}.${c}<br>`
    res.innerHTML+=`O valor calculado foi:&Delta;=${(a*a)-(4*b*c)}`
}