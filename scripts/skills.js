const habilidades = [
    { iconColor: '#f05033', iconName: 'fa-git-alt', description: 'Git' },
    { iconColor: '#eb502f', iconName: 'fa-html5', description: 'HTML5' },
    { iconColor: '#58abd1', iconName: 'fa-css3-alt', description: 'CSS3' },
    { iconColor: '#66dbfb', iconName: 'fa-react', description: 'React Native' },
    { iconColor: '#66dbfb', iconName: 'fa-react', description: 'React' },
    { iconColor: '#f7df1e', iconName: 'fa-square-js', description: 'JavaScript' },
];


const cardsContainer = document.getElementById('cards-container');

habilidades.map((habilidade) => {
    const card = document.createElement('div');
    card.classList.add('cards');
    card.innerHTML = `
    <i style="color: ${habilidade.iconColor};" class="fa-brands ${habilidade.iconName}"></i>
    <p class="description">${habilidade.description}</p>
  `;
    cardsContainer.appendChild(card);
});
