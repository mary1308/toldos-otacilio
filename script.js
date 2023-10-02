document.getElementById('buttons').addEventListener('click', (event) => {

    const botoesAtivos = document.getElementsByClassName('is-active')

    for (const botaoAtivo of botoesAtivos) {
        botaoAtivo.classList.remove('is-active')
    }

    if (event.target.localName === "button") {
        const botao = event.target
        botao.classList.add("is-active") //add class is-active

        console.log(botao.value)

        const secoes = document.getElementsByClassName('secao-fotos')

        for (const secao of secoes) {
            if (secao.id !== botao.value && botao.value !== 'todos') {
                secao.style.display = 'none'
            } else {
                secao.style.display = 'block'
            }

            // botaoAtivo.classList.remove('secao-fotos')
        }

    }
})