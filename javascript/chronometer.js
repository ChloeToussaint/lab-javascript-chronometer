class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
    this.intervalId = intervalId;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;

  }

  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time}`;
    }
    else {
      return time;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;

  }
}