/* 
Typy danych
- mamy ich 7
typy proste: string, number, boolean, undefined, null, symbol
typy referencyjne: obikety (obiekt, funkcja,  tablica ...)

Typ - to zbiór cech i zachowań przypisany do wartości zaliczonej do danego typu

typeof - operator, który zwraca informację o typie
*/

// operator dodawania na dwóch operandach
2 + 2;

// jeśli damy:
2 + '2'; // nastąpi tutaj niejawna konwersja typu danych Number na String

//String - łańcuch znaków
typeof 'tekst';
typeof '222.222';
typeof `grawis`;
let userName = 'Czarek';
typeof userName;
console.log(typeof userName)

//Number - liczba; nie ma podziału na integer, float, double...)
typeof 222.222; // -> "number"
typeof 122;
typeof 2.3e10;
typeof NaN;

// Boolean - wartość logiczna
typeof true;
typeof false;
typeof 2 == 4; // -> wynik to: false, bo 2 != 4
typeof 4 < 6; // false
console.log(2 != 4) // true

// Undefined - niezdefiniowane
// oznacza to, że zmienna została stworzona (zadeklarowan), ale nie jest nigdzie użyta
typeof undefined;
let dataLogin;
console.log(typeof dataLogin);

// Null - nie posiada
let userSecondName = null; // jęśli tworzymy zmienną, która może być później stworzona, ale nie teraz to dajemy null; może możemy zastosować w obiektach przy tworzeniu, bo nie zawsze user ma drugie imię...
typeof userSecondName;
typeof null; // błędnie okreslony jako object, co nie jest prawdą

// Symbol (od ES6)
// Symbol umożliwa stworznie nowego typu prostego
typeof Symbol();

// Obiekty
// typ referencyjny obiekt
typeof {};
console.log(typeof {});
typeof

function () {};
typeof [];

// Przypisanie wartości i przypisanie referencji do obiektu

let primitiveType1 = 20;
let primitiveType2 = primitiveType1; // 20

let referenceValue1 = [1, 2, 3]; // powstaje miejce w pamięci - gdzie znajduje się ten element; mają swój obszar w pamięci;
let referenceValue2 = referenceValue1;
// Te dwie wartośći (zmienne)  mamy jeden obiekt. Obie zmienne prowadza do jednego miejsca w pamięci

// wcześniej referenceValue1, miał 3 elementy, tablicę  liczymy od zera, więc wyżej mieliśmy dwa elementy ( 0, ,1, 2), natomiast 3 element tablicy to 5;
referenceValue1[3] = 6;
console.log(referenceValue1);