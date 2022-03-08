let res=document.getElementById('res')
let txt=document.getElementById('txth2')

function iniciar(){
  let nome=window.prompt('Qual o nome do aluno?')
  let nota=Number(window.prompt(`Primeira nota de ${nome}`))
  let nota2=Number(window.prompt(`Segunda nota de ${nome}`))
  txt.innerHTML=`Analisando a siutação de ${nome}`
  if((nota+nota2)/2<3)
  {
    res.innerHTML=`com as notas de ${nota} e ${nota2} <strong> a média é ${(nota+nota2)/2}</strong>`
    res.innerHTML+=`<br>com média abaixo de 3 o aluno está <strong>REPROVADO</strong>`
  }else if((nota+nota2)/2<6 &&(nota+nota2)/2>3)
  {
    res.innerHTML=`com as notas de ${nota} e ${nota2} <strong> a média é ${(nota+nota2)/2}</strong>`
    res.innerHTML+=`<br>com média abaixo de 6 o aluno está <strong>DE RECUPERAÇÂO</strong>`
  }else{
    res.innerHTML=`com as notas de ${nota} e ${nota2} <strong> a média é ${(nota+nota2)/2}</strong>`
    res.innerHTML+=`<br>com média acima de 6 o aluno está <strong>APROVADO</strong>`
  }
}