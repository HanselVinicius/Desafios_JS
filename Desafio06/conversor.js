function iniciar()
{
    let temp=Number(window.prompt("Digite uma temperatura em C"))
    let res=document.getElementById('res')
    let h2=document.getElementById('txth2')
    h2.innerHTML=`a temperatura ${temp} equivale a:`
    res.innerHTML=`convertendo para kelvin temos:${temp+273.15}`
    res.innerHTML+=`<br>convertendo para Farenheit temos:${(temp*9/5)+32}`

}