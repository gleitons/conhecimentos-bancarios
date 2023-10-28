async function geraDados() {
    const respose = await fetch('./src/dados/questoes')
    const data = await respose.json()
    const numb = Math.floor(Math.random() * 3)
    console.log(numb)
    const paginas = document.querySelector('.paginas')

    paginas.innerHTML = `<div class="primeira" style="background-image: url('./src/imagens/agencia-bb.webp');">
    <div class="infoPrimeira">
        <h2>${data[numb].titulo} <br>Clique 2X</h2>
    </div>

    <div class="perguntaPrimeira">

        <p>${data[numb].questao}</p>
    </div>
    <div class="respostasPrimeira">
        <div>
            <div class="opcaoPrimeira">
                <p>A</p>
            </div>
            <p>${data[numb].a}</p>
        </div>

        <div>
            <div class="opcaoPrimeira">
                <p>B</p>
            </div>
            <p>${data[numb].b}</p>
        </div>

        <div>
            <div class="opcaoPrimeira">
                <p>C</p>
            </div>
            <p>${data[numb].c}</p>
        </div>

        <div>
            <div class="opcaoPrimeira">
                <p>D</p>
            </div>
            <p>${data[numb].d}</p>
        </div>

        <div>
            <div class="opcaoPrimeira">
                <p>E</p>
            </div>
            <p>${data[numb].e}</p>
        </div>
    </div>
    <div class="footerPrimeira">
        <p>@concurso.bancario.tecnico</p>
    </div>
</div>
<div class="primeira" style="background-image: url('./src/imagens/agencia-bb.webp');">
<div class="infoPrimeira">
    <h2>RESPOSTA!!! <br>DEIXE SEU GOSTEI</h2>
</div>

<div class="perguntaPrimeira">

    <p>${data[numb].resposta}</p>
</div>
<div class="respostasPrimeira">
    <div>
        <div class="opcaoPrimeira pCorreta">
            <p>${data[numb].razao.toUpperCase()}</p>
        </div>
        <p>RESPOSTA CORRETA - LETRA ${data[numb].razao.toUpperCase()}</p>
    </div>
    <div>
        
        <img src="./src/imagens/gostei-deixei-seu-gostei.jpeg" alt="">
    </div>
</div>
<div class="footerPrimeira">
    <p>@concurso.bancario.tecnico</p>
</div>
</div>
<div>

</div>`

}
geraDados()