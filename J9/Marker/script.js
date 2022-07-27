// Маркер 2
// Реалізувати клас, що описує маркер, що заправляється, 
// успадкувавши його від простого маркера і додавши метод 
// для заправки маркера. Продемонструвати роботу написаних методів.

class Marker{
  regExpSpace = /\s/g;
  WORD_INK_COUNT = .5;
  constructor(ink = 100, color = 'black'){
      this.ink = ink;
      this.color = color;
  }

  set ink(value){
      if(value >= 0 && value <= 100){
          this._ink = value;
      }else{
          this._ink = 0;
          console.warn(`Expect Ink property as Number in range [0,100]. Result: ${ value }`);
      }
  }

  print(text){
      const countedInk = text.replace(this.regExpSpace, '').length * this.WORD_INK_COUNT;
      let resultText = text;
      if(this._ink > countedInk){
          this._ink -= countedInk;
      }else{
          resultText = '';
          for(let i = 0; this._ink >= this.WORD_INK_COUNT; i++){
              resultText += text[i];
              this._ink -= this.regExpSpace.test(text[i]) ? 0 : this.WORD_INK_COUNT;
          }
      }
      this.#printText(resultText);
  }

  #printText(text){
      console.log(`%c${ text }`, `color: ${ this.color }`);
  }


}

const testOne = new Marker(10, 'yellow');
console.log(testOne);

testOne.print('Hello!');
testOne.print('Hello!');
testOne.print('Hello!');
testOne.print('Hello!');

//заправка маркера

class FilledMarker extends Marker {
  fill(ink) {
    if (ink > 100) {
      ink = 100;
    } else {
    this._ink += ink;
    }
  }
  
}

let testTwo = new FilledMarker( 3, 'pink');

testTwo.fill(6);//насколько дозаправляем;

console.log(testTwo);
testTwo.print('Hello!');
testTwo.print('Hello!');
testTwo.print('Hello!');
testTwo.print('Hello!');