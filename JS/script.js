const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
    });
});

var data = {
    "portuguese":
    {
        "title": "Olá!",
        "description":
            "Eu me chamo Gabriel Henrique, e estou imerso na busca incessante por conhecimento e experiência na área do desenvolvimento web. Atualmente, estou embarcando na jornada do conhecimento ao cursar Tecnólogo em Informática para Negócios na Fatec.Esta escolha não foi apenas uma decisão acadêmica, mas uma estratégia cuidadosa para adquirir uma compreensão abrangente não somente do mundo de TI, mas também o empresarial e seus processos. Juntamente com o curso Proprofissão, estou confiante de que esta jornada educacional irá equipar-me não apenas com as competências técnicas necessárias, mas um profissional completo para o mercado de trabalho."
    },
    "english":
    {
        "title": "Hello!",
        "description":
            "My name is Gabriel Henrique and I am in the incessant search for knowledge and experience in the area of ​​web development. Currently I am on the journey of knowledge by studying Informática para Negócios at Fatec. This choice was not just an academic decision, but a careful strategy to acquire a comprehensive understanding of not only the IT world, but also the business world and its processes. Also with Proa I am confident that this educational journey will equip me not only with the necessary technical skills, but a complete professional for the job market."
    }
}