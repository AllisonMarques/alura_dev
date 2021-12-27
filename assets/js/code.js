const linguagem = document.querySelector('.projeto__linguagem')
const areaDoCodigo = document.querySelector('.codigo__fundo')
const botao = document.querySelector('.botao--highlight')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="codigo__texto hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})