// ==========================================
// Opdracht 1: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================
const errorCode = 0;
switch (errorCode) {
    case 1:
    console.log("Er zitten geen errors in de code");
        break;
    case 0:
    console.log("ERROR:ERROR:ERROR:ERROR:ERROR:ERROR:ERROR:ERROR:ERROR")
        break;
}

// Je mag ervanuit gaan dat deze variabele altijd een waarde tussen de 0 en de 4 bevat. Deze codes hebben de volgende betekenissen (foutmeldingen):
// 0: "Geen watertoevoer"
// 1: "Temperatuur te laag"
// 2: "Koffiebonen op"
// 3: "Afvalbak vol"
// 4: "Geen druk"

// Verwachtte uitkomsten:
// const errorCode = 0 geeft "Geen watertoevoer" in de terminal
// const errorCode = 4 geeft "Geen druk" in de terminal
// etc.


// ==========================================
// Opdracht 2: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

let monitorColor = "green";
monitorColor = "red";
monitorColor = "yellow";
monitorColor = "orange";
monitorColor = "red";


// Deze variabele zal altijd een kleur bevatten. De specifieke kleuren waar een melding bij gemaakt moet worden zijn: "red", "green", "yellow" en "orange".
// Deze codes zijn gelinkt aan de volgende meldingen:
// "green": "Hartslag stabiel"
// "yellow": "Hartslag verhoogd"
// "orange": "Kritieke hartslag, actie vereist!"
// "red": "Kritieke hartslag, actie vereist!"
// Bij alle andere kleuren is de status van de hartslag onbekend.

switch (monitorColor) {
    case "green":
        console.log("hartslag stabiel");
        break;
    case "yellow":
        console.log("Hartslag verhoogd");
        break;
    case "orange":
    case "red":
        console.log("Kritieke hartslag, actie vereist!");
        break;
    default:
        console.log("Onbekend")
        break;
}

// Verwachtte uitkomsten:
// const monitorColor = "red" geeft "Kritieke hartslag, actie vereist!" in de terminal
// const monitorColor = "green" geeft "Hartslag stabiel" in de terminal
// etc.


// ==========================================
// [BONUSOPDRACHT] - optioneel: kun je de switch-statement uit opdracht 2 ook opschrijven met een aantal if-statements?
// ==========================================

if (monitorColor === "green") {
    console.log("hartslag stabiel");
} else if (monitorColor === "yellow") {
    console.log("hartslag verhoogd");
} else if (monitorColor === "orange" || monitorColor === "red") {
    console.log("Kritieke hartslag, actie vereist!");
} else {
    console.log("Alles is goed, ga door met leven")
}