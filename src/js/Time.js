class Time {
  constructor(timeEl) {
    this.time = timeEl;
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    this.timer;
  }

  showTime = () => {
    // Output Time
    this.time.innerHTML = `Time: ${this.hour}<span>:</span>${this.addZero(this.min)}<span>:</span>${this.addZero(this.sec)}`;

    this.sec++;
    if (this.sec >= 60) {
      this.sec = 0;
      this.min++;
    }
    if (this.min >= 60) {
      this.min = 0;
      this.hour++;
    }
    if (this.hour >= 24) {
      this.hour = 0;
    }

    this.timer = setTimeout(this.showTime, 1000);
  }

  // Add Zeros
  addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  clearTimer = () => {
    clearTimeout(this.timer);
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
  }

  pause = () => {
    clearTimeout(this.timer);
  }
}

export default Time;