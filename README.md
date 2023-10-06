# FizzBuzzDOM

Consegna: Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

- generare un loop che genera numeri da 1 a 100
  - creare un ciclo "for" che generi numeri da 1 a 100
  - creare una variabile "n" che sommi "1" al valore di index attuale
  - creare una variabile a cui viene assegnato il valore del modulo tra n e 3 per i capire quali siano i suoi multipli
  - creare una variabile a cui viene assegnato il valore del modulo tra n e 5 per i capire quali siano i suoi multipli
  - creare un blocco di istruzioni condizionali per modificare il valore da stampare
    - SE ((modulo n%3 + modulo n%5) è uguale a 0): 
      - allora stampa "FizzBuzz"
    - ALTRIMENTI SE ( il modulo di n%5 è uguale a 0):
      - allora stampa "Buzz"
    - ALTRIMENTI SE (il modulo di n%3 è uguale a 0 )
      - allora stampa "Fizz"
  - stampa n in console