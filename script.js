let questions = [
    {
        'libelle': 'De quelle espèce est Raditz ?',
        'reponses': {
            'a': 'Namek',
            'b': 'Humain',
            'c': 'Saiyan',
            'd': 'Cyborg',
        },
        'reponseValide': 'c'
    }, {
        'libelle': 'A qui Nail ressemble-t-il ?',
        'reponses': {
            'a': 'Piccolo',
            'b': 'Krillin',
            'c': 'Shenron',
            'd': 'Dendé',
        },
        'reponseValide': 'a'
    }, {
        'libelle': 'Quel personnage tue Son Goku pour la deuxième fois ?',
        'reponses': {
            'a': 'Boo',
            'b': 'Cell',
            'c': 'Freezer',
            'd': 'Shenron',
        },
        'reponseValide': 'b'
    }, {
        'libelle': 'De quelle planète Son Goku est-il originaire ?',
        'reponses': {
            'a': 'Allia',
            'b': 'Terre',
            'c': 'Namek',
            'd': 'Vegeta',
        },
        'reponseValide': 'd'
    }, {
        'libelle': 'Quel personnage meurt le plus souvent ?',
        'reponses': {
            'a': 'Krillin',
            'b': 'Yamcha',
            'c': 'Chaozu',
            'd': 'Tenshinhan',
        },
        'reponseValide': 'a'
    }, {
        'libelle': 'Combien y\'a t-il de dragon ball ?',
        'reponses': {
            'a': '2',
            'b': '9',
            'c': '7',
            'd': '4',
        },
        'reponseValide': 'c'
    },{
        'libelle': 'Comment s\'appelle la femme de Vegeta',
        'reponses': {
            'a': 'Bulma',
            'b': 'Videl',
            'c': 'Chi-Chi',
            'd': 'C-18',
        },
        'reponseValide': 'a'
    },{
        'libelle': 'Avec qui Goku va-t-il passer son entraînement chez Tortue Géniale ?',
        'reponses': {
            'a': 'Piccolo',
            'b': 'Vegeta',
            'c': 'Nappa',
            'd': 'Krillin',
        },
        'reponseValide': 'd'
    },{
        'libelle': 'Qui entraîne le fils de Son Goku ?',
        'reponses': {
            'a': 'Yamcha',
            'b': 'Tortue Géniale',
            'c': 'Piccolo',
            'd': 'Dendé',
        },
        'reponseValide': 'c'
    },{
        'libelle': 'Quel est le premier vœu réalisé par Shenron ?',
        'reponses': {
            'a': 'Une fourchette',
            'b': 'Une culotte',
            'c': 'Une assiette',
            'd': 'Une montagne de nourriture',
        },
        'reponseValide': 'b'
    },{
        'libelle': 'Qui est le créateur des Dragon Balls ?',
        'reponses': {
            'a': 'Boo',
            'b': 'Tout-Puissant',
            'c': 'Shenron',
            'd': 'Cell',
        },
        'reponseValide': 'b'
    },{
        'libelle': 'De quelle espèce est le Tout-Puissant ?',
        'reponses': {
            'a': 'Saiyan',
            'b': 'Cyborg',
            'c': 'Namek',
            'd': 'Humain',
        },
        'reponseValide': 'c'
    },{
        'libelle': 'Qui est responsable de la destruction de la planète Végéta ?',
        'reponses': {
            'a': 'Freezer',
            'b': 'Bibidi',
            'c': 'Babidi',
            'd': 'Boo',
        },
        'reponseValide': 'a'
    },{
        'libelle': 'Lequel de ces personnages fut le disciple de Tortue Géniale ?',
        'reponses': {
            'a': 'C-17',
            'b': 'Bulma',
            'c': 'Krillin',
            'd': 'Cell',
        },
        'reponseValide': 'c'
    },{
        'libelle': 'Combien de fois Krilin meurt-il ?',
        'reponses': {
            'a': '1',
            'b': '2',
            'c': '3',
            'd': '4',
        },
        'reponseValide': 'd'
    },{
        'libelle': 'Qui parvient à devenir le maire de Satan City ?',
        'reponses': {
            'a': 'Tortue Géniale',
            'b': 'Hercule',
            'c': 'Bulma',
            'd': 'Son Gohan',
        },
        'reponseValide': 'b'
    },{
        'libelle': 'Quel personnage possède une queue de singe ?\n',
        'reponses': {
            'a': 'Dendé',
            'b': 'Hercule',
            'c': 'Son Goku',
            'd': 'Yamcha',
        },
        'reponseValide': 'c'
    },{
        'libelle': 'Combien d\'épisode dure le plus long combat de l\'anime ?',
        'reponses': {
            'a': '10',
            'b': '14',
            'c': '19',
            'd': '24',
        },
        'reponseValide': 'c'
    },{
        'libelle': 'Comment s\'appelle le frère de Son Goku ?',
        'reponses': {
            'a': 'Nappa',
            'b': 'Vegeta',
            'c': 'Son Goten',
            'd': 'Raditz',
        },
        'reponseValide': 'd'
    },{
        'libelle': 'Sur quel ennemi Sangoku a-t-il lancé son premier Genkidama ?',
        'reponses': {
            'a': 'Raditz',
            'b': 'Freezer',
            'c': 'Cell',
            'd': 'Boo',
        },
        'reponseValide': 'b'
    },
];
let nbQuestions = 0;
let score = 0;
let reponsesBtn = document.querySelectorAll('.reponse');

window.addEventListener('load', quizBuild);
for (let button of reponsesBtn) {
    button.addEventListener('click', () => {
        if (nbQuestions < questions.length) {
            if (button.id === questions[nbQuestions].reponseValide) {
                score++;
            }
        }
        nbQuestions++;
        quizBuild()
    });
}

function quizBuild () {
    if (nbQuestions < questions.length) {
        let nbQuestionsSpan = document.querySelector('.nbQuestions');
        nbQuestionsSpan.innerHTML = `${nbQuestions + 1} / ${questions.length}`;

        let questionP = document.querySelector('.question');

        let question = questions[nbQuestions];
        questionP.innerHTML = question.libelle;


        for (let i = 0; i < reponsesBtn.length; i++) {
            reponsesBtn[i].innerHTML = question.reponses[reponsesBtn[i].id];
        }
    } else {
        let app = document.querySelector('.app');

        while (app.firstChild) {
            app.removeChild(app.firstChild);
        }

        let scoreBoard = document.createElement('span');
        let p = document.createElement('p');

        scoreBoard.innerText = `${score} / ${questions.length}`;
        p.innerText = jugement();

        app.appendChild(scoreBoard);
        app.appendChild(p);
    }
};

function jugement() {
    if (score < 5) {
        return "Il va falloir sérieusement réviser vos classiques ^^'";
    } else if (score >= 5 && score < 10) {
        return "C'est pas cool de dormir devant LE manga !";
    } else if (score >= 10 && score < 15) {
        return "Pas mal, mais vous allez devoir réserver du temps pour un revisionnage !";
    } else {
        return "Vous êtes une personne parfaitement respectable !";
    }
}

let openModalBtn = document.querySelector("#openModal");
openModalBtn.addEventListener('click', openModal);
function openModal () {
    let modal = document.querySelector(".modal");
    modal.classList.add("open");
}
let closeModalBtn = document.querySelector("#closeModal");
closeModalBtn.addEventListener('click', closeModal);
function closeModal () {
    let modal = document.querySelector(".modal");
    modal.classList.remove("open");
}

let btn = document.querySelector(".modal input:last-child");
btn.addEventListener("click", addQuestion);

function addQuestion () {
    let input = document.querySelectorAll(".modal input");

    let newQuestion = {
        'libelle': input[0].value,
        'reponses': {
            'a': input[1].value,
            'b': input[2].value,
            'c': input[3].value,
            'd': input[4].value,
        },
        'reponseValide': input[5].value.toLowerCase()
    };

    questions.push(newQuestion);

    for (let i of input) {
        i.value = "";
    }
    btn.value = "Valider";
    btn.style.backgroundColor = "#6f84ff";
    setInterval(() => {
        btn.style.backgroundColor = "white";
        btn.value = "Ajouter";
    }, 1000);
    quizBuild();
}