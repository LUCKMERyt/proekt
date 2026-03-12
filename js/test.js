// const t =document.querySelector('.main_txt')
// console.log(t.innerHTML)

// const z =document.querySelector('#zag')
// console.log(z.innerHTML)

// const a =document.querySelectorAll(".main_txt")
// console.log(a)
// console.log(a[0])

// for(let i=0;i<a.length;i++){
//     console.log(a[i].innerHTML)
// }

// function sendForm_plus(e) {
// 	const e1 = document.forms.main.param1.value
// 	const e2 = document.forms.main.param2.value
// 	const res = document.getElementById('res')
// 	res.innerHTML = parseInt(e1) + parseInt(e2)
// }
// const btn_plus = document.forms.main.btn_plus
// btn_plus.addEventListener('click', sendForm_plus)

// function sendForm(e) {
//     const e1 = document.forms.main.param1.value;
//     const e2 = document.forms.main.param2.value;
//     const res = document.getElementById('res');

//     switch (e) {
//     case '+':
//         res.innerHTML = parseInt(e1) + parseInt(e2);
//         break;
//     case '-':
//         res.innerHTML = parseInt(e1) - parseInt(e2);
//         break;
//     case '*':
//         res.innerHTML = parseInt(e1) * parseInt(e2);
//         break;
//     case '/':
//         res.innerHTML = parseInt(e1) / parseInt(e2);
//         break;
//     }
// }

// const param_main = document.querySelector("#param_main")
// param_main.classList.remove("main")
// param_main.setAttribute("class","main_new")

// param_main.innerHTML="qwerty"

// const h2 =document.createElement('h2')
// const h2_text = document.createTextNode('Hello world')
// h2.appendChild(h2_text)

// param_main.appendChild(h2)

// const param_h1 = document.querySelector("#param_main h2")

// param_h1.setAttribute('id','param_h1')
// param_h1.setAttribute('class','zag')

// param_h1.style.color='red'
// param_h1.style.backgroundColor='blue'
// param_h1.style.fontSize='32px'
// param_h1.style.border = "7px inset  rgb(252, 143, 0)"
// // param_h1.style.margin =" 0 auto"

// console.log(param_h1)

// const div =document.createElement('div')
// document.body.appendChild(div)

// div.style.width = "500px"
// div.style.height = "500px"
// div.style.backgroundColor='blue'
// div.style.margin =" 0 auto"
// div.style.padding = "0 50px"
// div.style.paddingTop ="120px"

// const div1 =document.createElement('div')
// document.body.appendChild(div1)

// div1.style.width = "250px"
// div1.style.height = "250px"
// div1.style.backgroundColor='red'
// div1.style.margin =" 0 auto"

// div.appendChild(div1)

// const btn =document.querySelector('#btn')

// btn.addEventListener('click',()=>{
//     const checkbox = document.querySelectorAll("input[type='checkbox']")

//     for(let i=0;i<checkbox.length;i++){
//         if (checkbox[i].checked==true){
//             console.log(checkbox[i].name)
//         }
//     }

//     const radio= document.querySelectorAll("input[type='radio']")
//     for(let i=0;i<radio.length;i++){
//         if (radio[i].checked==true){
//             console.log(radio[i].value)
//         }
//     }
// })

console.log("------------------------------------------------------");

// async function fetchData(){
//     // preper
//     const param1 = document.querySelector('#param1')
//     const param2 = document.querySelector('#param2')

//     let url= `http://localhost/myserver/?param1=${param1.value}&param2=${param2.value}`
//     let response = await fetch(url, {
//         method: 'GET',
//         headers: { Accept: 'application/json'},
//     })

//     let param = await response.json()

//     // выводим результат
//     const res =document.querySelector('#res')
//     res.innerHTML = param.res
//     const res1 =document.querySelector('#res1')
//     res1.innerHTML = param.res1
//     const res2 =document.querySelector('#res2')
//     res2.innerHTML = param.res2
//     const res3 =document.querySelector('#res3')
//     res3.innerHTML = param.res3
// }

// const mbtn = document.querySelector('#btn')

// btn.addEventListener('click', () =>{
//     fetchData()
// })

// const test = document.querySelector('.test')
// const test_btn = document.querySelector('#test_btn')
// const test_p = document.querySelector('.test_p')
// const test_logo = document.querySelector('#test_logo')

// test.addEventListener('click', () =>{
//     test.style.width = '100px'
//     test.style.height = '100px'
//     test.style.backgroundColor = 'greenyellow'
//     test.removeAttribute('Class')
//     test.setAttribute('class','zag')

//     const zag = document.querySelector('.zag')
//     if (zag){
//         zag.addEventListener('click', () =>{
//             zag.style.marginLeft = '100px'
//             zag.style.width = '150px'
//             zag.style.height = '30px'
//             zag.style.backgroundColor = 'aqua'
//             zag.setAttribute('class','test')
//         })
//     }
// })

// test_btn.addEventListener('click', () =>{
//     alert(2222)
// })
// test_p.addEventListener('click', () =>{
//     alert(3333)
// })
// test_logo.addEventListener('click', () =>{
//     alert(4444)
// })

// const block = document.querySelector(".block");
// block.addEventListener("mousemove", () => {
//   block.style.marginLeft = "180px";
//   block.style.width = "150px";
//   block.style.height = "150px";
//   block.style.backgroundColor = "aqua";
// });
// block.addEventListener("mousedown", () => {
//   block.style.marginLeft = "10px";
//   block.style.width = "150px";
//   block.style.height = "150px";
//   block.style.backgroundColor = "crimson";
// });

// function myf(e) {
//   const log = document.querySelector("#log");
//   log.textContent += `${e.code}`;
// }

// const inp = document.querySelector("#inp");
// inp.addEventListener("keydown", myf);

// const element = document.querySelector('#img_log')

// element.style.opacity=0

// setTimeout(() => {
//     const interval = setInterval(()=>{
//         element.style.opacity=parseFloat(element.style.opacity)+ 0.1

//         if(element.style.opacity >=1){
//             clearInterval(interval)
//         }
//     }, 10)
// }, 1000)

// window.addEventListener('scroll', function () {
//     // код, который будет выполняться при скролле
//     this.alert(111)
// });

const login = document.querySelector("#login");
const res = document.querySelector("#res"); // Correct selector for your paragraph

login.addEventListener("keyup", () => {
  const d = login.value;

  if (d.length <= 8) {
    res.style.color = 'green';
    res.innerHTML = "login подобран правильно";
  } else {
    res.style.color = 'red';
    res.innerHTML = "слишком много символов(" + d.length + "/8)";
  }
});





// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };
// user.isAdmin = true;
// console.log(user)

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] );


// for (let i in user) {
//   // ключи
//   console.log('имя переменой = ',i,' значение переменой = ' ,user[i]);  // name, age, isAdmin
//   // значения ключей
//   // console.log('значение переменой = ' ,user[i]); // John, 30, true
//   }



// ЛЮДИ
class Human {
  constructor(name) {
      this.name = name;
      this.health = 100;
      this.Alive = true;
  }

  // Метод получения урона
  takeDamage(damage) {
      if (!this.Alive) return;
      this.health -= damage;
      if (this.health <= 0) {
          this.health = 0;
          this.Alive = false;
          console.log(`${this.name} погибает.`);
      }
  }

  // Метод лечения
  heal(amount) {
      if (!this.Alive) return;
      this.health += amount;
      if (this.health > 100) this.health = 100;
      console.log(`${this.name} лечится на ${amount} HP.`);
  }

  getStatus() {
      return this.Alive ? `${this.name} (HP: ${this.health})` : `${this.name} (мертв)`;
  }
}// ЛЮДИ


// Класс Житель
class Vilaj extends Human {
  constructor(name) {
      super(name);
      this.role = 'Житель';
  }
}// Класс Житель

// Класс Воин
class Warrior extends Human {
  constructor(name) {
      super(name);
      this.role = 'Воин';
      this.damage = 10; // урон при атаке
  }

  attack(target) {
      if (this.Alive && target.Alive) {
          target.takeDamage(this.damage);
          console.log(`${this.name} атакует ${target.name} и наносит ${this.damage} урона.`);
      }
  }
  
}// Класс Воин

// Класс Лекарь
class Doctor extends Human {
  constructor(name) {
      super(name);
      this.role = 'Лекарь';
      this.amount = 5;
  }
  healTarget(target) {
    if (this.Alive && target.Alive) {
        target.heal(this.healAmount);
        console.log(`${this.name} лечит ${target.name} на ${this.healAmount} HP.`);
    }
}
}// Класс Лекарь




//                  созданрие команд

//    Команда 1
const village1 = {
  name: 'Селение 1',
  humans: [
      new Vilaj('Житель1_1'),
      new Warrior('Воин1_1'),
      new Doctor('Лекарь1_1')
  ]
};
//    Команда 2
const village2 = {
  name: 'Селение 2',
  humans: [
      new Vilaj('Житель2_1'),
      new Warrior('Воин2_1'),
      new Doctor('Лекарь2_1')
  ]
};



const raund=0

function getTeamStatus(team) {
  console.log(`Статус команды ${team.name}:`);
  team.humans.forEach(human => {
    console.log(human.getStatus());
  });
}



console.log("Начало битвы!");


const attacker1 = village1.humans.find(h => h instanceof Warrior && h.Alive);
const defender1 = village2.humans.find(h => h.Alive);
if (attacker1 && defender1) {
  attacker1.attack(defender1);
}

// Вторая команда: первый воин атакует первого
const attacker2 = village2.humans.find(h => h instanceof Warrior && h.Alive);
const defender2 = village1.humans.find(h => h.Alive);
if (attacker2 && defender2) {
  attacker2.attack(defender2);
}

// Лекари лечить своих
const doctor1 = village1.humans.find(t => t.Alive);
  if (village1 && village1.health < 100) {
    h.healTarget(village1);
    console.log()
}
  



