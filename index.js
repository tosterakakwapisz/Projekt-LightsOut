

var hints = [];

function podpowiedzi() {

  var a, b, c;
  for (var i = 0; i < hints.length - 2; i++) {
    a = hints[i]; b = hints[i + 1]; c = hints[i + 2];
    if (a == b && b == c) { hints.splice(i, 3) }
  }

  console.log("tabela przed usunieciem i przed zazn.: ", hints);
  document.getElementById(hints[hints.length - 1]).style.border = "6px solid black";

  document.getElementById(hints[hints.length - 1]).addEventListener("click", function () {
    console.log("tablica przed usunieciem TOP: ", hints);
    hints.slice(hints.length - 1, 1);

    //TUTAJ ZMIENIA KOLOR TLA, A ZA CHWILE WSTAWWZÓR DODAJE DO TABELI TE SAMO POLE
    //document.getElementById(hints[hints.length-1]).style.border="1px solid rgba(0, 0, 55, 0.8)";
  }

  )

  console.log("tablica podpowiedzi (hints): ", hints);
  //console.log("ostatni element hintsów: ", hints[hints.length-1]);

}




function losujPola(wzor) {

  var tab = [];
  for (var i = 0; i < 3; i++) {
    tab.push(Math.floor(Math.random() * 25) + 1);

    console.log("wylosowane pole: " + tab[i] + " i wzor: " + wzor);
  }
  for (var i = 0; i < tab.length; i++) {
    if (wzor == 1) shape1(tab[i]);
    if (wzor == 2) shape2(tab[i]);
    if (wzor == 3) shape3(tab[i]);
  }
  hints = tab;
  tab.sort();

  console.log("wylosowane pola: ", tab);

  for (var i = 0; i < 3; i++) {
    hints[i + 3] = tab[i];
  }
  hints.sort();
  console.log("tablica podpowiedzi: ", hints);


}



function zmienKolor() {

  var header = document.getElementById("headerUp");
  var myColors = ['AliceBlue', 'Aqua', 'AntiqueWhite', 'Aquamarine', 'BlanchedAlmond', 'Bisque', 'BurlyWood', 'CadetBlue', 'CornflowerBlue', 'Cornsilk'];
  const randomElement = myColors[Math.floor(Math.random() * myColors.length)];

  header.style.color = randomElement;
  setTimeout("zmienKolor()", 3000);
}






//funkcja jako argument przyjmuje tablice (ta mieści ID pól) albo ID pola i koloruje odpowiednie pola
function colorFields(idPola) {
  //console.log("colorFields wykonuje sie: ", idPola);
  if (document.getElementById(idPola).style.backgroundColor == "rgba(255, 255, 155, 0.8)") {
    document.getElementById(idPola).style.backgroundColor = "red";
  }
  else if (document.getElementById(idPola).style.backgroundColor == "red") {
    document.getElementById(idPola).style.backgroundColor = "green";
  }
  else if (document.getElementById(idPola).style.backgroundColor == "green") {
    document.getElementById(idPola).style.backgroundColor = "rgba(255, 255, 155, 0.8)";
  }
}





function resetGame() {
  console.log("resetgame wykonuje sie");
  for (var i = 1; i < 26; i++) {
    document.getElementById(i).style.backgroundColor = "rgba(255, 255, 155, 0.8)";
  }
  document.getElementById("wzor" + whichShape()).style.backgroundColor = "Cornsilk";
  document.getElementById("wzor" + whichShape()).style.border = "3px solid #ffcc00";

}



function isFinish() {
  var licznik = 0;
  var licznikP = 0;
  var licznikR = 0;

  for (var i = 1; i < 26; i++) {
    if (document.getElementById(i).style.backgroundColor == "green") {
      licznik++;
    }
    else if (document.getElementById(i).style.backgroundColor == "red") {
      licznikR++;

    }
    else if (document.getElementById(i).style.backgroundColor == "rgba(255, 255, 155, 0.8)") {
      licznikP++;

    }
    document.getElementById("licznik1").innerHTML = licznik;
    document.getElementById("licznikR").innerHTML = licznikR;
    document.getElementById("licznikP").innerHTML = licznikP;
  }

  if (licznik < 5) {
    document.getElementById("licznik2").innerHTML = "Mizernie :(";
  }
  else if (licznik >= 5 & licznik < 10 || licznikP >= 5 & licznikP < 10 || licznikR >= 5 & licznikR < 10) {
    document.getElementById("licznik2").innerHTML = "Coraz lepiej";
  }

  else if (licznik >= 10 & licznik < 15 || licznikP >= 10 & licznikP < 15 || licznikR >= 10 & licznikR < 15) {
    document.getElementById("licznik2").innerHTML = "Dobrze!";
  }
  else if (licznik >= 15 & licznik < 20 || licznikP >= 15 & licznikP < 20 || licznikR >= 15 & licznikR < 20) {
    document.getElementById("licznik2").innerHTML = "Wybornie!";
  }
  else if (licznik >= 20 & licznik < 25 || licznikP >= 20 & licznikP < 25 || licznikR >= 20 & licznikR < 25) {
    document.getElementById("licznik2").innerHTML = "Blisko celu!";
  }

  if (licznik == 25 || licznikP == 25 || licznikR == 25) {
    document.getElementById("licznik2").innerHTML = "BRAWO!!!";
    //document.getElementById("przyciskB").removeEventListener("click", podpowiedzi(hints));
    resetGame();
  }
  //jesli true, wyskakuje okienko "wygrales" i resetuje gre
  //jesli false, nic nie robi(?)
}




function whichShape() {
  var shapeID = 0;
  for (var i = 1; i < 4; i++) {
    if (document.getElementById("wzor" + i).style.border == "5px solid green") shapeID = i;
  }
  return shapeID;
}



function startGame() {
  console.log("startgame wykonuje sie");
  for (var i = 1; i < 26; i++) {
    document.getElementById(i).style.backgroundColor = "rgba(255, 255, 155, 0.8)";
    document.getElementById(i).style.border = "1px solid rgba(0, 0, 55, 0.8)";
  }


  if (whichShape() == 1 || whichShape() == null) {

    document.getElementById("wzor2").style.border = "3px solid #ffcc00";
    document.getElementById("wzor2").style.backgroundColor = "Cornsilk";
    document.getElementById("wzor3").style.border = "3px solid #ffcc00";
    document.getElementById("wzor3").style.backgroundColor = "Cornsilk";

  }

  else if (whichShape() == 2) {

    document.getElementById("wzor1").style.border = "3px solid #ffcc00";
    document.getElementById("wzor1").style.backgroundColor = "Cornsilk";
    document.getElementById("wzor3").style.border = "3px solid #ffcc00";
    document.getElementById("wzor3").style.backgroundColor = "Cornsilk";

  }

  else if (whichShape() == 3) {

    document.getElementById("wzor1").style.border = "3px solid #ffcc00";
    document.getElementById("wzor1").style.backgroundColor = "Cornsilk";
    document.getElementById("wzor2").style.border = "3px solid #ffcc00";
    document.getElementById("wzor2").style.backgroundColor = "Cornsilk";
  }


}







function chooseShape(shapeNumber)
//dziala


{
  console.log("choosegame wykonuje sie");

  document.getElementById("wzor1").style.border = "3px solid #ffcc00";
  document.getElementById("wzor1").style.backgroundColor = "Cornsilk";
  document.getElementById("wzor2").style.border = "3px solid #ffcc00";
  document.getElementById("wzor2").style.backgroundColor = "Cornsilk";
  document.getElementById("wzor3").style.border = "3px solid #ffcc00";
  document.getElementById("wzor3").style.backgroundColor = "Cornsilk";

  if (shapeNumber == 1) {
    document.getElementById("wzor1").style.border = "5px solid green";
    document.getElementById("wzor1").style.backgroundColor = "rgba(0, 255, 0, 0.8)";
    startGame();
  }
  if (shapeNumber == 2) {
    document.getElementById("wzor2").style.border = "5px solid green";
    document.getElementById("wzor2").style.backgroundColor = "rgba(0, 255, 0, 0.8)";
    startGame();
  }
  if (shapeNumber == 3) {
    document.getElementById("wzor3").style.border = "5px solid green";
    document.getElementById("wzor3").style.backgroundColor = "rgba(0, 255, 0, 0.8)";
    startGame();
  }
  losujPola(shapeNumber);
}






function shape1(id) {

  //nasz wzór w tablicy
  var tab = [id - 5, id - 4, id - 1, id, id + 5, id + 6];

  //jesli dojdziemy do prawej krawedzi, nasz wzór jest przycięty z prawej
  if (id % 5 == 0) tab = [id - 5, id - 1, id, id + 5];

  //jesli dojdziemy do lewej krawedzi, nasz wzór jest przycięty z lewej
  if ((id - 1) % 5 == 0) tab = [id - 5, id - 4, id, id + 5, id + 6];

  //przejscie po calej tablicy, jesli jakieś pole wychodzi poza ekran, to go nie wyświetla

  for (var i = 0; i < tab.length; i++) {

    if (tab[i] > 0 && tab[i] < 26) {
      colorFields(tab[i]);
    }
  }
  console.log("shape1 wykonuje sie: ", id);
  isFinish();
}





function shape2(id) {
  var tab = [id - 5, id - 1, id, id + 1, id + 4, id + 6];

  //jesli dojdziemy do prawej krawedzi, nasz wzór jest przycięty z prawej
  if (id % 5 == 0) tab = [id - 5, id - 1, id, id + 4];

  //jesli dojdziemy do lewej krawedzi, nasz wzór jest przycięty z lewej
  if ((id - 1) % 5 == 0) tab = [id - 5, id, id + 1, id + 6];

  //przejscie po calej tablicy, jesli jakieś pole wychodzi poza ekran, to go nie wyświetla

  for (var i = 0; i < tab.length; i++) {
    if (tab[i] > 0 && tab[i] < 26) {
      colorFields(tab[i]);
      console.log("koloruje pole: ", tab[i]);
    }
  }
  isFinish();
}





function shape3(id) {
  var tab = [id - 5, id - 4, id - 1, id, id + 5];

  //jesli dojdziemy do prawej krawedzi, nasz wzór jest przycięty z prawej
  if (id % 5 == 0) tab = [id - 5, id - 1, id, id + 5];

  //jesli dojdziemy do lewej krawedzi, nasz wzór jest przycięty z lewej
  if ((id - 1) % 5 == 0) tab = [id - 5, id - 4, id, id + 5];

  //przejscie po calej tablicy, jesli jakieś pole wychodzi poza ekran, to go nie wyświetla

  for (var i = 0; i < tab.length; i++) {
    if (tab[i] > 0 && tab[i] < 26) {
      colorFields(tab[i]);
      console.log("koloruje pole: ", tab[i]);
    }

  }
  isFinish();
}






function wstawWzor(id) {


  console.log("dodaje dwa elementy do tabeli: ", id, id)
  hints.push(id, id);
  hints.sort();
  document.getElementById(id).style.border = "1px solid rgba(0, 0, 55, 0.8)";



  if (whichShape() == 1) shape1(id);
  if (whichShape() == 2) shape2(id);
  if (whichShape() == 3) shape3(id);
}
