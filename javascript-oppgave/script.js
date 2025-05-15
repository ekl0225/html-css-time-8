// OPPGAVE 1
// Lag en funksjon som kan legge til flere navn inn i et Array, og console.log resultatet
const ArrayFunction = () => {
  let names = ["Stig", "Per", "Amalie"];
  names.push("Jorgen");
  console.log(names);
};
ArrayFunction();

// OPPGAVE 2
// Lag en funksjon som:
// 1. Sjekker lengden på en tekst
// 2. Hvis teksten er mer enn 20 karakterer så skal console.log returnere en feilmelding

const LengthJavaScript = () => {
  let textLength = "Write your sentence here";
  let length = textLength.length;
  if (length >= 20) {
    console.log("error");
  } else {
    console.log("good");
  }
};
LengthJavaScript();

// OPPGAVE 3
// Lag en funksjon som:
// 1. Tar inn en tekst
// 2. Gjør JAVASCRIPT om til store og små bokstaver som dette: "Javascript"
// 3. Sjekker om den inneholder ordet "Javascript"
// 4. Returnerer "Fant 'Javascript'!" eller "Fant ikke 'Javascript'."
const TextJavaScript = () => {
  let sentence = "This sentence contains the word JAVASCRIPT";
  console.log(sentence);
  console.log(sentence.replace("JAVASCRIPT", "Javascript"));
};

TextJavaScript();

// OPPGAVE 4
// Lag en funksjon som gir det fjerde navnet en stor bokstav, og console.log det nye navnet.
// BONUS: bytt ut 'emil' med 'Emil' i arrayet.
const ArrayJavaScript = (names = ["Gina", "Nils", "Andreas", "emil"]) => {};
ArrayJavaScript();
