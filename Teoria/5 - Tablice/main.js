/*
TABLICE są obiektem
- jest obiektem wbudowanym, czyli posiada już metody i włąściwości
- każda wartośc przechowywana w tablicy ma swój indeks 
*/

// jeśli stworzymy sobie tablicę, to nowa tablica dziedziczy wszystke właściwości i metody po główmnym obiekcie Array

// TWORZENIE TABLICY:
// - literał tablicy z podaniem zawartości
const nameList = ['Ludomir', 'Zyroslaw', 'Gniewomir', 'Myślimir'];
console.log(nameList);

// - literałpustej tablicy -> później bęzdiemy się do nie odwoływać do indeksu, żeby coś dodać
const cityList = [];
cityList[0] = 'Konin'; // właśnie teraz dodajemy  właściwości odwołując sie do indeksu tablicy
cityList[1] = 'Kielce';
cityList[3] = 'Warszawa';
console.log(cityList);

// - Konstruktor - pusta tablica
const gameItems = new Array();
console.log(gameItems);
// - Konstruktor z uzupełnionymi elementami
const colors = new Array('red', 'blue');