var resultaat = document.getElementById("resultaat");

alert("U heeft de keuze uit de volgende producten: wijn, bier, fris of een snack");

function drank(){
	do {
		var bestelling = prompt("Welke bestelling wilt u toevoegen ? Kies uit fris, bier, wijn of snack");
		if (bestelling != "fris" && bestelling != "bier" && bestelling != "wijn" && bestelling != "snack"){
			alert("Vul alstublieft een van de gegeven opties in");
		}
	}
	while(bestelling != "fris" && bestelling != "bier" && bestelling != "wijn" && bestelling != "snack");

	return bestelling;
}

var bestellen = true;

var bestellingen = {"hoeveelheidFris":0, "hoeveelheidBier":0, "hoeveelheidWijn":0, "hoeveelheidSnack":0};

while(bestellen == true){
	var bestelling = drank();

	if(bestelling == "fris"){
		bestellingen["hoeveelheidFris"] += Number(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling ?"));
		var frisPrijs = 1;
	}

	if(bestelling == "bier"){
		bestellingen["hoeveelheidBier"] += Number(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling ?"));
		var bierPrijs = 2;
	}

	if(bestelling == "wijn"){
		bestellingen["hoeveelheidWijn"] += Number(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling ?"));
		var wijnPrijs = 3;
	}

	if(bestelling == "snack"){
		bestellingen["hoeveelheidSnack"] += Number(prompt("Hoeveel bitterballen wilt u toevoegen aan uw bestelling ?"));
		var snackPrijs = 3;
	}

	var antwoord = prompt("Wil je nog meer bestellen ?");

	if(antwoord.toLowerCase() != "ja"){
		var rekening = prompt("Wilt u de rekening zien ?");
		if (rekening.toLowerCase() != "ja"){
			bestelling = false;
		}else{
			var frisTotaal = frisPrijs * bestellingen["hoeveelheidFris"];
			var bierTotaal = bierPrijs * bestellingen["hoeveelheidBier"];
			var wijnTotaal = wijnPrijs * bestellingen["hoeveelheidWijn"];
			var snackTotaal = snackPrijs * bestellingen["hoeveelheidSnack"];
			resultaat.innerText = "U heeft €" + frisPrijs * bestellingen["hoeveelheidFris"] + " aan fris besteld\r" +
			"U heeft €" + bierPrijs * bestellingen["hoeveelheidBier"] + " aan bier besteld\r " +
			"U heeft €" + wijnPrijs * bestellingen["hoeveelheidWijn"] + " aan wijn besteld\r" +
			"U heeft €" + snackPrijs * bestellingen["hoeveelheidSnack"] + " aan bitterballen besteld \r" + 
			"U moet in totaal €" + (frisTotaal + bierTotaal + wijnTotaal + snackTotaal) + " betalen";
			bestellen = false;
		}
	}
}