function iniciar(){
    let medida=Number(window.prompt('Digite um valor em metros(m)'))
    let res=document.getElementById('res')
    res.innerHTML=`<h2>o valor ${medida} em metros corresponde a:</h2>`
    let write=document.getElementById('write')
   for(let passo=0;passo<6;passo++){
       if(passo==0){
        write.innerHTML=`${medida/1000}kms`
       }if(passo==1)
       {
        write.innerHTML+=`<br>${medida/100}hms` 

       }if(passo==2)
       {
        write.innerHTML+=`<br>${medida/10}dams` 

       }if(passo==3)
       {
        write.innerHTML+=`<br>${medida*10}dms` 

       }if(passo==4)
       {
        write.innerHTML+=`<br>${medida*100}cms` 

       }if(passo==5)
       {
        write.innerHTML+=`<br>${medida*1000}mms` 

       }
}
}