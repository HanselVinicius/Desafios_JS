function iniciar(){
    let produto=window.prompt('Qual produto você quer comprar?')
    let preço=Number(window.prompt(`Qual o preço do ${produto} que você quer comprar?`))
    let valor=Number(window.prompt(`Qual o valor que você pagou no ${produto} que você quer comprar?`))
    window.alert(`Você comprou um ${produto} que custou ${preço}.\nVocê deu ${valor} em dinheiro, e vai receber ${valor-preço} de troco, volte sempre`)
}