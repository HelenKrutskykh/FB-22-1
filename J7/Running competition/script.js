// Соревнования по бегу
// Создайте функцию, которая принимает массив из 6 объектов, 
// в каждом есть фамилия бегуна и результаты трех его забегов в секундах.

// Вернуть объект с полями:

// -фамилию самого медленного
// -фамилию самого быстрого спортсмена.
// -общую таблицу забегов(сформированную на ваше усмотрение)

let sprint = [
  {name:'Thompson', run1: 93, run2: 129, run3: 111},
  {name:'Smith', run1: 87, run2: 104, run3: 95},
  {name:'Kelly', run1: 89, run2: 121, run3: 105},
  {name:'Cruz', run1: 103, run2: 122, run3: 112},
  {name:'Butler', run1: 97, run2: 100, run3: 98},
  {name:'Allen', run1: 129, run2: 133, run3: 131}
]

function getSprintData(sprint) {

  const result = {
      SlowMan: '',
      FastMan: '',
      Table: []
  }

  let slow = 0;
  let fast = 0;

  for (let i = 0; i < sprint.length; i++) {

      let total = sprint[i].run1 + sprint[i].run2 + sprint[i].run3;

      if (i === 0){
          slow = total;
          fast = total;
      }
      if (total >= slow){
          slow = total;
          result.SlowMan = sprint[i].name;
      }
      if (total <= fast){
          fast = total;
          result.FastMan = sprint[i].name;
      }
      
      result.Table = sprint.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  return result;
}

console.log(getSprintData(sprint))
