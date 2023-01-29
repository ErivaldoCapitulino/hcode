class CalcController {
  constructor() {
    this._locale = "pt-BR";
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this.currentDate;
    this.initialize();
  }

  initialize() {
    this.setDisplayTime();
    setInterval(() => {
      this.setDisplayTime();
    }, 1000);
  }

  initButtonsEvents() {
    document.querySelectorAll("#buttons > g, #parts > g");
  }

  setDisplayTime() {
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  get displayCalcEl() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalcEl(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }
  set currentDate(value) {
    this.currentDate = value;
  }
}
