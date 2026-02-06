const Urheilija = require("./cl/Urheilija.js");

const Henkilo = require("./cl/Henkilo.js");

let awards = [
  "SM-kulta 2023",
  "SM-hopea 2022",
  "EM-pronssi 2024",
  "MM-sijoitus 5.",
  "Vuoden urheilija -ehdokas 2021",
];

let urh1 = new Urheilija(
  "Liisa", // fname (etunimet)
  "Korhonen", // sname (sukunimi)
  2001, // year (syntymävuosi)
  61.5, // omapaino
  "Yleisurheilu", // laji
  "Elena",
);

urh1.LinkkiKuvaan = "https...";

urh1.Saavutukset = awards;

console.log(urh1.toString());

let pers = new Henkilo("Masha", "Timonen", 2000);

console.log(pers);
