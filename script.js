//On récupère tous les boutons
let btns = document.querySelectorAll('button');

//On récupère l'écran de la calculatrice
let screen = document.querySelector('.screen');

//On initialise la chaîne de calcul
let chain = '';

//On ajoute un évènement sur tous les boutons
for(let i=0;i<btns.length;i++){

    let btn = btns[i];

    btn.addEventListener('click',function(){

        //Si c'est le bouton "égal"
        if(btn.classList.contains('equal')){

            //Et que la chaîne d'opération n'est pas vide
            if(chain!=''){
                //On fait le calcul et on l'affiche
                let result = eval(chain);
                screen.innerHTML = result;
                chain = result;
                //On doit également reconvertir le nombre obtenir en chaîne de caractère
                chain = chain.toString();
            }
        
        //Si c'est / + - ou *
        }else if(btn.classList.contains('operation')){
            //Que la chaîne n'est pas vide
            if(chain!=''){
                //On récupère le dernier caractère de la chaîne
                let last_char = chain.slice(-1);
                //Et si ce n'est pas une opération...
                if(last_char != '+' && last_char != '-' && last_char != '*' && last_char != '/'){
                    //On l'ajoute à la chaîne
                    chain = chain+btn.innerText;
                    //Et on affiche la chaîne à l'écran (par exemple 5+3)
                    screen.innerHTML = chain;
                }
                
            }
        //Si c'est C pour "Clear"
        }else if(btn.classList.contains('clear')){
            //On remet tout à zéro
            chain = '';
            screen.innerHTML = 0;
        }else{
            //Sinon c'est un nombre, on l'ajoute à la chaîne
            chain = chain+btn.innerText;
            //Et on affiche la chaîne. 
            screen.innerHTML = chain;
        }
    });
}