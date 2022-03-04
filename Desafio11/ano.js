function iniciar()
{
    let write=document.getElementById('txth2')
    let res=document.getElementById('res')
    let ano=Number(window.prompt('Qual ano quer analisar?'))
    write.innerHTML=`analisando se o ${ano} é bissexto temos:`
    if(ano%4==0)
    {
        res.innerHTML=`o ano de ${ano} é bissexto`
    }else
    {
        res.innerHTML=`o ano de ${ano} não é bissexto`
    }
}