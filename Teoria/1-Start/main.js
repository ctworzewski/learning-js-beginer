console.log('Start');

// instrukcja - najmniejsza składowa programu
// weż wartość z lewej strony i dodaj wartość z prawejk strony

2 + 2;

console.log(2 + 2); // wynik wyrażenia
console.log('2' + '2'); // '2' jako tekst, operator + nie dodaje tylko łączy, będzie to nie typ number, tylko zwykły String

//tworzymy zmienną poprzez jej deklarację
/*
zmienną tworzymy poprzez jej deklarację
słowo kluczowe let, nazwa 

zmienna => slowo kluczowe, nazwa, znak =, wartość
let result = 2 + 2;

znak = nie oznacza że jest równe 4, tylko
przypisz to co jest po prawej stronie do tego co jest po lewej stronie
wynik  
*/

let result = 2 + 4;

//wykonanie metody - zrób coś z jakimiś danymi
'tekst'.toUpperCase();
console.log('czarek'.toUpperCase());

/* 
INSTRUKCJA:
- instrukcja może coś zwracać, ale nie tzn:
    * let result = 'sss';  - zmienna nic nie zwraca, tylko jest zadeklarowana
        // w konsoli będzie widoczne jako undefined
    * result lub console.log(result); zwróci już wartość 'sss';

- średniki są obowiązkowe! jeśli nie damy, to interpreter niejawnie go nam doda
- instrukcje są wykonywane z góry na dół - tak jest czytany program
*/