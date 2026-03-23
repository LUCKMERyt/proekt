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

// const login = document.querySelector("#login");
// const res = document.querySelector("#res"); // Correct selector for your paragraph

// login.addEventListener("keyup", () => {
//   const d = login.value;

//   if (d.length <= 8) {
//     res.style.color = 'green';
//     res.innerHTML = "login подобран правильно";
//   } else {
//     res.style.color = 'red';
//     res.innerHTML = "слишком много символов(" + d.length + "/8)";
//   }
// });

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

// console.log('test')

// async function fetchData() {
// 	// prepar
// 	const param1 = '#param1'
// 	const param2 = '#param2'

// 	let url = `http://localhost/myserver/?param1=${param1.value}&param2=${param2.value}`
// 	let response = await fetch(url, {
// 		method: 'GET',
// 		headers: { Accept: 'application/json' },
// 	})

// 	let param = await response.json()
// 	console.log(param)

// 	//добавление элементов в цикле
// 	for (let key in param) {
// 		if (param.hasOwnProperty(key)) {
// 			const par = document.querySelector('.blocks')
// 			const newDiv = document.createElement('div')
// 			newDiv.className = 'block_inner'
// 			output_str = "| "+param[key].name +" | " + param[key].age+ " | " + param[key].surname + "| "
// 			newDiv.innerHTML = output_str

// 			par.appendChild(newDiv)
// 		}
// 	}
// }

// document.addEventListener('DOMContentLoaded', function () {
// 	fetchData()
// })

async function fetchData(name, firstname, number_year, email, nickname, pass) {
  let url = `http://localhost/myserver/?name=${name}&firstname=${firstname}&number_year=${number_year}&email=${email}&nickname=${nickname}&pass=${pass}`;
  let response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  // let param = await response.json()
  // console.log(param)
}

function get_data_form() {
  //const forms = document.querySelectorAll('#form_reg')
  const btn_reg = document.querySelector("#btn_reg");
  btn_reg.addEventListener("click", (event) => {
    // валидация элементов
    const exp = /[a-zA-Z][0-9]/;
    const exp1 = /[a-zA-Z]/;
    const exp2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const name = document.querySelector("name").value;
    const firstname = document.querySelector("#firstname").value;
    const number_year = document.querySelector("#number_year").value;
    const email = document.querySelector("#email").value;
    const nickname = document.querySelector("#nickname").value;
    const pass = document.querySelector("#exampleInputPassword1").value;
	
	alert(name);
	alert(firstname);
	alert(number_year);
	alert(email);
	alert(pass);

    // проверка на нажатие checkbox
    const chek1 = document.querySelector("#exampleCheck1");
    if (chek1.checked) {
      // проверка на имя и пороль
      if (
		exp1.test(name) &&
		exp1.test(firstname) &&
		exp2.test(email) &&
        exp.test(nickname) &&
        exp.test(pass)
      ) {
        console.log("Истино");
        //d_to_server = JSON.stringify(d)
        //console.log(d_to_server)
        fetchData(name, firstname, number_year, email, nickname, pass);
      } else {
        console.log("Ложно");
      }
    } else {
      alert("вы не согласились с нашими условиями");
    }

    // d = { nickname: nickname }

    event.preventDefault();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  get_data_form();
});
