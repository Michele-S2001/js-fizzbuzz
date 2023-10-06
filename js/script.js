// ciclo for che genera numeri da 1 a 100

//recupero l'elemento grid dal DOM
const gridDomElement = document.querySelector('.grid');

for (let i = 0; i < 100; i++) {
  //dichiaro una variabile che abbia come valore assegnato quello di i + 1
  let n = i + 1;
  //creare una variabile a cui viene assegnato il valore del modulo tra n e 3 per i capire quali siano i suoi multipli
  const rest3 = n % 3;
  //ripeto il passaggio precedente anche per il valore 5
  const rest5 = n % 5;
  //blocco di istruzioni condizionali per decidere i valori stampati
  if ((rest3 + rest5) === 0) {
    //multipli di 3 e 5
    n = 'FizzBuzz';
  } else if (rest3 === 0) {
    //multipli di 3
    n = 'Fizz';
  } else if (rest5 === 0) {
    //multipli di 5
    n = 'Buzz';
  }
  //stampa n in console
  //console.log(n);

  //creo un elemento box
  const boxDomElement = document.createElement('div');
  boxDomElement.classList.add('box');
  boxDomElement.innerHTML = n;
  
  //tramite il metodo .append genero le box all'interno del .grid element
  gridDomElement.append(boxDomElement);
}