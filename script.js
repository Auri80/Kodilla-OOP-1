function Telefon(marka, cena, kolor, rok, system) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.rok = rok;
	this.system = system;
}

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + " rok produkcji to " + this.rok + ", a system to " + this.system + ".");
};

var iPhone6S = new Telefon("Apple", 2250, "srebrny", 2015, 'Android');
var galaxyS6 = new Telefon("Samsung", 1600, "biały", 2016, 'Android');
var OnePlusOne = new Telefon("OnePlus", 1400, "czarny", 2014, 'iOS');

iPhone6S.printInfo();
galaxyS6.printInfo();
OnePlusOne.printInfo();





