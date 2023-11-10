const projetos = [
    {
        name: 'Cardápio Japonês',
        device: 'img-mobile',
        image: './src/imagens/cardapio.png',
        description: 'Um aplicativo de cardápio Japonês. Aonde foi utilizado conceitos de manipulção de array, com Filter e Map. ',
        skillFirst: 'fa-react',
        skillSecond: 'fa-square-js',
        githubLink: 'https://github.com/Taqueuti/Menu-Japones'
    },
    {
        name: 'Medidor de consumo de Água',
        image: './src/imagens/medidor.jpg',
        description: 'Uma aplicação de JavaScript aonde você controla sue consumo de água. Quando tu beber uma certa quantidade de água você seleciona no botão, e ele vai aumentando o valor até chegar em 2L que é o objetivo de consumo.',
        skillFirst: 'fa-css3-alt',
        skillSecond: 'fa-html5',
        skillThird: 'fa-square-js',
        githubLink: 'https://github.com/Taqueuti/Medidor',
        linkWeb: 'https://taqueuti.github.io/Medidor/'
    },
    {
        name: 'Calculadora',
        image: './src/imagens/calculadora.jpg',
        description: 'Calculadora Web Interativa: Esta calculadora web permite que os usuários realizem operações matemáticas simples, como adição, subtração, multiplicação e divisão. A interface é intuitiva e fácil de usar, com botões para números e operadores matemáticos. Os recursos incluem a capacidade de limpar o visor, realizar cálculos de várias etapas e obter resultados precisos. Uma ferramenta prática para realizar cálculos em seu navegador da web.',
        skillFirst: 'fa-css3-alt',
        skillSecond: 'fa-html5',
        skillThird: 'fa-square-js',
        githubLink: 'https://github.com/Taqueuti/Calculadora',
        linkWeb: 'https://taqueuti.github.io/Calculadora/'
    },
    {
        name: 'Jogo Da Velha',
        image: './src/imagens/jogoDaVelha.png',
        description: 'Este projeto é uma implementação do clássico jogo da velha (Tic-Tac-Toe) desenvolvido em React Native. Ele combina a simplicidade do jogo com uma interface intuitiva e atraente, proporcionando uma experiência de jogo envolvente. Aonde você pode jogar com os amigos e contém um marcador de placar.',
        skillFirst: 'fa-react',
        skillSecond: 'fa-square-js',
        githubLink: 'https://github.com/Taqueuti/React-Native-Projetos/tree/main/JogoDaVelha',
    },

    {
        name: 'Landing Page',
        image: './src/imagens/drStrange.png',
        description: 'Este projeto é uma Landing Page do Dr.Stranger.',
        skillFirst: 'fa-css3-alt',
        skillSecond: 'fa-html5',
        skillThird: 'fa-square-js',
        githubLink: 'https://github.com/Taqueuti/Dr.strange',
        linkWeb: 'https://taqueuti.github.io/Dr.strange/#'
    },

];

const projetosContainer = document.getElementById('container-projetos');

projetos.map((projeto, index) => {
    const card = document.createElement('div');
    card.classList.add('cards-projetos');
    card.innerHTML = `
    <a><img class=${projeto.device} src=${projeto.image} /></a>
    <div class="espelho">
       <p>${projeto.name}</p>
    </div><!----espelho-->
    `;
    card.addEventListener("click", () => openModal(index));
    projetosContainer.appendChild(card);
});


const skillColors = {
    'fa-react': '#66dbfb',
    'fa-css3-alt': '#58abd1',
    'fa-html5': '#eb502f',
    'fa-square-js': '#f7df1e'
};

function openModal(projetoIndex) {
    const modal = document.getElementById("myModal");
    const projeto = projetos[projetoIndex];

    modal.style.display = "block";


    const modalContent = modal.querySelector('.modal-content');
    modalContent.querySelector('h3').textContent = projeto.name;
    modalContent.querySelector('img').src = projeto.image;

    modalContent.querySelector('p').textContent = projeto.description;
    const githubLink = modalContent.querySelector('a[target="_blank"]');
    githubLink.href = projeto.githubLink;

    const skillsContainer = modalContent.querySelector('.skills');
    skillsContainer.innerHTML = "";

    const skillFirstIcon = document.createElement('i');
    skillFirstIcon.className = `fa-brands ${projeto.skillFirst}`;
    skillFirstIcon.style.color = skillColors[projeto.skillFirst] || '';

    skillsContainer.appendChild(skillFirstIcon);

    const skillSecondIcon = document.createElement('i');
    skillSecondIcon.className = `fa-brands ${projeto.skillSecond}`;
    skillSecondIcon.style.color = skillColors[projeto.skillSecond] || '';

    skillsContainer.appendChild(skillSecondIcon);

    const skillThirdIcon = document.createElement('i');
    skillThirdIcon.className = `fa-brands ${projeto.skillThird}`;
    skillThirdIcon.style.color = skillColors[projeto.skillThird] || '';

    skillsContainer.appendChild(skillThirdIcon);

    const linkIcon = modalContent.querySelector('i.fa-link');
    if (projeto.linkWeb) {
        linkIcon.style.display = 'inline';
        modalContent.querySelector('a.link').href = projeto.linkWeb;
    } else {
        linkIcon.style.display = 'none';
    }
}


function closeModal() {
    document.getElementById("myModal").style.display = "none";
}



