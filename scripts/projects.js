const projetos = [
    { name: 'Conversor de milhas para quilômetros', device: 'img-mobile', image: './src/imagens/conversor.jpg' },
    { name: 'Medidor de consumo de Água', image: './src/imagens/medidor.jpg' },
];

const projetosContainer = document.getElementById('container-projetos');

projetos.map((projeto) => {
    const card = document.createElement('div');
    card.classList.add('cards-projetos');
    card.innerHTML = `
    <a><img class=${projeto.device} src=${projeto.image} /></a>
    <div class="espelho">
       <p>${projeto.name}</p>
    </div><!----espelho-->
    `;
    card.setAttribute("onclick", "openModal()");
    projetosContainer.appendChild(card);

    
});


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

