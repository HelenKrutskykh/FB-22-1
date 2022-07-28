class Stopwatch {
timerBlock = document.getElementById('timer');
circleBlock = document.getElementById('circle-tab');
circles = [];
time = 0;
timer = false;

// Метод setInterval()продолжает вызывать функцию до тех пор 
// clearInterval(), пока не будет вызвана или окно не будет закрыто.

format() {
  const millis = this.time % 10;
  const sec = '0' + Math.floor(this.time/10)%60;
  const min = '0' + Math.floor(this.time/600);
  return `${min.slice(-2)}:${sec.slice(-2)}:${millis}`;
}

//Вызов slice(-2) извлечёт два последних элемента последовательности.

tick(){
  this.time += 1;
  this.timerBlock.innerText = this.format();
};

start(){
  if(!this.timer) {
    this.timer = setInterval(() => this.tick(), 100);
  }
};

stop(){
  this.pause();
  this.time = 0;
  this.circles = [];
  this.timerBlock.innerText = this.format();
  this.circleBlock.innerHTML = '';
};

pause(){
  clearInterval(this.timer);
  this.timer = false;
};

circle(){
  if (this.time > 0){
    this.circles.push(this.format());
  }
    this.circleBlock.innerHTML = this.circles.reduce((html,circle) => html + `<li>${circle}</li>`," ");
  };
}

const timer = new Stopwatch();