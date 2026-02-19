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

console.log("------------------------------------------------------")


async function fetchData(){
    // preper
    const param1 = document.querySelector('#param1')
    const param2 = document.querySelector('#param2')



    let url= `http://localhost/myserver/?param1=${param1.value}&param2=${param2.value}`
    let response = await fetch(url, {
        method: 'GET',
        headers: { Accept: 'application/json'},
    })


    let param = await response.json()

    // const p1 = document.querySelector('.p1')
    // p1.innerHTML = param.p1
    // const p2 = document.querySelector('.p2')
    // p2.innerHTML = param.p2

    // выводим результат
    const res =document.querySelector('#res')
    res.innerHTML = param.res
    const res1 =document.querySelector('#res1')
    res1.innerHTML = param.res1
    const res2 =document.querySelector('#res2')
    res2.innerHTML = param.res2
    const res3 =document.querySelector('#res3')
    res3.innerHTML = param.res3
}

const mbtn = document.querySelector('#btn')

btn.addEventListener('click', () =>{
    fetchData()
})