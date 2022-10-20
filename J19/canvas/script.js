const canvas = document.getElementById('canvas1');
const cxt = canvas.getContext('2d');
const particleArray = [];
let hue = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
}
canvas.addEventListener('click', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 50; i++){
    particleArray.push(new Particle());
  }
});

canvas.addEventListener('mousemove.', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 10; i++){
       particleArray.push(new Particle());
    }
});

class Particle{
  constructor(){
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = 'hsl(' + hue + ', 100%, 50%)';
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > .2) this.size -= .1;
  }
  draw(){
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    cxt.fill();
  }
}

function handleParticles(){
  for (let i = 0; i < particleArray.length; i++){
    particleArray[i].update();
    particleArray[i].draw();
    for (let j = i; j < particleArray.length; j++){
      const dx = particleArray[i].x - particleArray[j].x;
      const dy = particleArray[i].y - particleArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100){
        cxt.beginPath();
        cxt.strokeStyle = particleArray[i].color;
        cxt.lineWidth = .2;
        cxt.moveTo(particleArray[i].x, particleArray[i].y);
        cxt.lineTo(particleArray[j].x, particleArray[j].y);
        cxt.stroke();
        cxt.closePath();
      }
    }
    if (particleArray[i].size <= .3){
      particleArray.splice (i, 1);
      console.log(particleArray.length);
      i--;
    }
  }
 }

function animate(){
  cxt.clearRect(0, 0, canvas.width, canvas.height);
  cxt.fillStyle = 'rgba(0,0,0,0.1)';
  cxt.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue+=.5;
  requestAnimationFrame(animate);
}
animate();