// Zmienna - to sposób na przechowywanie danych w pamięci, tak aby móc je wykorzystać

/* 
3 atrybuty zzmiennej w JavaScript:
- nazwa / w nazwie jest jedynie link do miejsca w pamięci
- miejsce w pamięci (prowadzi do niego ID z nazwy)
- wartość

* nie do końca! - czas życia zmiennej  czyli globalna, lokalna

Nie ma typu w JS, ale wartość określa jaki jest typ czy String, Number

*/

let dayBirthday = 11; // Number
typeof dayBirthday;

/* 
- typy istniją w JS, ale są tworzone dynamicznie; tworzone są przez interpreter podczas wykonywania programu
- typy w Java, Python... są tworzone statycznie, czyli int, float ...
- zmienna nie posiada  typu, ale jej wartość, jaki typ tej wartości
*/

/* 
----------------
Deklaracja i przypisanie wartości do zmiennej

Deklaracja - sama deklaracja oznacza przypisanie do zmniennej undefined
*/
let nameUser; // deklaracja
typeof nameUser; // -> undefined

// przypisanie wartości do zmiennej
nameUser = 'Czarek';

// najczęściej w tym samym czasie deklarujemy i przypisujemy wartość
let userSurname = 'Tworzewski';


// możemy również zadeklarować zmienną i przypisać do niej funkcję

let showColorEye = function () {
    console.log('żółty');
}
showColorEye();

//  deklarowanie wielu zmiennych:
let name, age, address;
let position = [200, 300],
    score = null,
    time = 20.3;

// ---------------------------
/* ZMIENNE, STAŁE */

// const - zmienna stała
// let - zmienna
// var - zmienna przed ES6


// let i const można zadeklarować tylko raz w programie, var- wielokrotnie
let nickName = 'Czarek';
//const userSurname = 'Tworzewski';
//let nickName = 'Piotr';
var tests = 'Michał';
var tests = 'Wujek'


// Jeśli wartość się nie zmieni to używajmy const, jeśli tak to let
// const nie można przypisać nowej wartości (można modyfikować obiekty)
// ważny jest zakres zmiennych (scope)


// Obiekt globalny z var. Z let i const nie możliwe
// obiekt globalny - window.globalProperty
var globaProperty1 = 'za pomocą war'
let globaProperty2 = 'za pomocą let'