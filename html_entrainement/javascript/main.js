function calcul_imc() {
    const bouton = document.getElementById('envoyer');
    bouton.addEventListener('click', function (e) {
        e.preventDefault();
        const Name = document.getElementById('Lastname');
        let nom = Name.value;
        const Fname = document.getElementById('Firstname');
        let First = Fname.value;
        const poid = document.getElementById('Weigth');
        let poids = poid.value;
        const taille = document.getElementById('height');
        let tail = taille.value;
        if (tail === '' || nom === '' || poids === '' || First === '') {
            alert("veuillez remplir les champs !");
        }
        else {
            let IMC = (poids * 10000) / (tail*tail)
            IMC = Math.round(IMC)
            let txt = document.createElement('p');
            text_imc(IMC, txt, First, bouton);
            bouton.style.display = 'none';
        };
    });
};


function text_imc(IMC, txt, First, bouton){
    if (IMC >= 0 && IMC <= 18.5) {
        txt.innerHTML = `${First} Voici votre IMC est de ${IMC} vous êtes en état de Maigreur`;
    }
    else if (IMC >= 18.5 && IMC <= 25) {
        txt.innerHTML = `${First} Voici votre IMC est de ${IMC} vous êtes en état normal`;
    }
    else if (IMC >= 25 && IMC <= 30) {
        txt.innerHTML = `${First} Voici votre IMC est de ${IMC} attention vous est en surpoid`;
    }
    else if(IMC >= 30 && IMC <= 40) {
        txt.innerHTML = `${First} Voici votre IMC est de ${IMC} Vous êtes en obésité modéré`;
    }
    else {
        txt.innerHTML = `${First} Voici votre IMC est de ${IMC} ATTENTION VOUS ETES EN OBESITE MORBIDE !`;
    };
    document.body.appendChild(txt);
    reset(txt, bouton);
};

calcul_imc();

function reset(txt, bouton){
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.innerHTML = "réanitialisé le formulaire";
    btn.addEventListener('click', function () {
        const formulaire = document.getElementsByTagName('form')[0];
        formulaire.reset();
        btn.style.display = 'none';
        txt.style.display = 'none';
        bouton.style.display = 'block';
        bouton.style.margin = '0 auto';
    });
};

