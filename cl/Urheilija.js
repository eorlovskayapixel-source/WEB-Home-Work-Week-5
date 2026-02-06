const Henkilo = require("./Henkilo.js");

class Urheilija extends Henkilo {
  #omapaino = 0;
  #laji = "";
  #linkkiKuvaan = "";
  #saavutukset = [];
  constructor(fname, sname, year, omapaino, laji, thname = "") {
    super(fname, sname, year, thname);
    this.#omapaino = omapaino;
    this.#laji = laji;
  }

  get Omapaino() {
    return this.#omapaino;
  }
  set Omapaino(omapaino) {
    this.#omapaino = omapaino;
  }

  get Laji() {
    return this.#laji;
  }
  set Laji(laji) {
    this.#laji = laji;
  }

  get LinkkiKuvaan() {
    return this.#linkkiKuvaan;
  }
  set LinkkiKuvaan(linkkiKuvaan) {
    this.#linkkiKuvaan = linkkiKuvaan;
  }

  get Saavutukset() {
    return this.#saavutukset;
  }
  set Saavutukset(saavutukset) {
    this.#saavutukset = saavutukset;
  }

  toString() {
    return (
      this.fname +
      " " +
      this.sname +
      " (" +
      this.thname +
      ") " +
      this.year +
      " " +
      this.Laji +
      "\npaino: " +
      this.Omapaino +
      "\nLinkkiKuvaan: " +
      this.LinkkiKuvaan +
      "\nSaavutukset: " +
      this.Saavutukset.join(", ")
    );
  }
}
module.exports = Urheilija;
