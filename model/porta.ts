export default class PortaModel {
  #numero: number;
  #temPresente: boolean;
  #selecionada: boolean;
  #aberta: boolean;
  #fechada: boolean;

  constructor(
    numero: number,
    temPresente = false,
    selecionada = false,
    aberta = false,
    fechada = true
  ) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
    this.#fechada = fechada;
  }
  get numero() {
    return this.#numero;
  }
  get temPresente() {
    return this.#temPresente;
  }
  get selecionada() {
    return this.#selecionada;
  }
  get aberta() {
    return this.#aberta;
  }
  get fechada() {
    return !this.#aberta;
  }

  desselecionar() {
    const selecionada = false;
    return new PortaModel(
      this.numero,
      this.temPresente,
      selecionada,
      this.aberta
    );
  }

  alternarSelecao() {
    const selecionada = !this.selecionada;
    return new PortaModel(
      this.numero,
      this.temPresente,
      selecionada,
      this.aberta
    );
  }
  abrir() {
    const aberta = true;
    return new PortaModel(
      this.numero,
      this.temPresente,
      this.selecionada,
      aberta
    )
  }
}
