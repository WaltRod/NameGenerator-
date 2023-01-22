//Card n1 ORCS

var namesorc = ["Gruumshk", "Drogathar", "Krogath", "Hrogathar", "Grommash", "Kazgaroth", 
"Thrakgar", "Grommok", "Grom'gar", "Kaz'garath", "Grommash", "Durotan", "Blackhand", "Azog", "Thrakgar", "Gromkhar", "Kargath", 
"Gorr'gaz", "Grommok", "Uruk", "Zog", "Zul'jin", "Mok'gol", "Rend Blackhand" ];

function generateName1() {
    var randomIndex = Math.floor(Math.random() * namesorc.length);
    var randomName = namesorc[randomIndex];
    document.getElementById("namecard1").innerHTML = randomName;
}

//Card n2 DRAGONBORN

var namesdragon = ["Faasrumar", "Zahfrul", "Grahdun", "Krahdin", "Kaanov", "Kriilun", "Nafni", "Vermithrax", "Cyrion", 
"Glaedr", "Krynnoth"];

function generateName2() {
    var randomIndex = Math.floor(Math.random() * namesdragon.length);
    var randomName = namesdragon[randomIndex];
    document.getElementById("namecard2").innerHTML = randomName;
}

//Card n3 ELFO

var nameself = ["Galadriel", "Elrond", "Legolas", "Thranduil", "Glorfindel", 
"Arwen", "Erestor", "Gwindor", "Glorfindel", "Elrod", "Gwindor", "Melian", "Thranduil", 
"Eldarion", "Aranel", "Elwing", "Gil-Galad", "Fëanor", "Círdan", "Celeborn", "Lúthien", "Finwë", "Nessa", "Ulmo", "Melkor", "Eärendil"];

function generateName3() {
    var randomIndex = Math.floor(Math.random() * nameself.length);
    var randomName = nameself[randomIndex];
    document.getElementById("namecard3").innerHTML = randomName;
}

//Card n4 NECRO

var namesnecro = ["Kel'Thuzad", "Marrowfiend", "Ghoulgoth", "Rotfiend", "Bloodseker", "Nightstalker"];

function generateName4() {
    var randomIndex = Math.floor(Math.random() * namesnecro.length);
    var randomName = namesnecro[randomIndex];
    document.getElementById("namecard4").innerHTML = randomName;
}