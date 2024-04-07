// alert('oi');

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

// console.log(projetosInativos);
// console.log(botaoMostrarProjetos);

botaoMostrarProjetos.addEventListener('click', () =>{
    // console.log('teste');
    mostrarMaisProjetos();

    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

