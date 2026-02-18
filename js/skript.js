console.log("----------------------_-_-_-_-_-_-_-_-")

function print(param){// скрип которыц позволяет при помоши 
    // созданой функции укоротить вывод в консоль
console.log(param)
}

// alert("Привет")

// function myfanc(){
//     console.log("helo")
// }
// myfanc()

// function f1(a,b){
//     s=a+b
//     return s
// }
// console.log("сложение = "+f1(2,3))
// function f2(a,b){
//     s=a-b
//     return s
// }
// console.log("вычитание = "+ f2(3,3))
// function f3(a,b){
//     s=a*b
//     return s
// }
// console.log("умножение = "+ f3(2,3))
// function f4(a,b){
//     s=a/b
//     return s
// }
// console.log("Деление = "+ f4(10,2))


// let a=30
// let b=20
// if (a>b){
//     console.log("Первное число(а) больше второго") 
// } else if (a==b){
//     console.log("Первное число(а и b) равны")
// }else {
//     console.log("Первное число(b) больше Второго")
// }

// function w(z,x){
//     if (z>x){
//         console.log("Первное число(z) больше второго") 
//     } else if (z==x){
//         console.log("Первное число(z и x) равны")
//     }else {
//         console.log("Второе число(x) больше первного")
//     }
// }
// w(1,3)


// //функция проверки 3 чисел
// //и расположить наименьшее и среднее и наиболшее в ответе
// let a=3
// let b=1
// let c=2
// function e(a,b,c){
//     if (a<b&& b<c){
//         console.log(a,b,c)
//     } else if (a<b && c<b && a<c){
//         console.log(a,c,b)
//     }else if (a>b && c>b && a>c){
//         console.log(c,b,a)
//     }
// }
// e(3,1,2)

// let param=3
// switch (param){
//     case 1:{
//         alert(1)
//         break
//     }case 2:{
//         alert(2)
//         break
//     }case 3:{
//         alert(3)
//         break
//     }
//     default:{
//         alert("ВЫ ошиблись")
//     }
// }



// ТАЙМЕР = setTimeout

// function show(){
//     console.log(124)
// }
// let time=setTimeout(show,2000)





/*                      Объекты и масивы  */

// let groceries =['Milk','Eggs','frosted Flakes', 'Salam','Juice']
// print(groceries[0])//   Вывести 1(один) элемент

// print(groceries)//      вывести специальным списком в консоли

// //                   цикл для перебора масива
// for(let i=0;i<groceries.length;i++){
//     print(groceries[i])
// }
// //                   цикл для перебора масива
// let j=0;
// while(j<groceries.length){
//     print(groceries[j])
//     j++
// }

////                    цикл для складывание всех элементов
// let q=0;
// let nums =[1,2,3,4,5]
// for(let i=0;i<nums.length;i++){
//     print('nums[i]='+nums[i])
//     q = q + nums[i]
//     print('q='+q)
// }



////                    цикл для складывание всех 
////                      цетных и не четных цисел
// w=0;
// e=0;
// let numbers = [1,2,3,4,5,6,7,8,10]
// for(let i=0;i<numbers.length;i++){
//     if (numbers[i] %2==0){
//         w=w+numbers[i]
//         print('чётный элемент='+numbers[i])
//     }else{
//         e=e+numbers[i]
//         print('не чётный элемент='+numbers[i])
//     }
// }
// print('Сумма чётных элеменов='+e)
// print('Сумма нечётных элеменов='+w)


// let a1=[]
// let a2=[]
// let a3=[]

// let arr = [0,-1,-5,2,3,5,0,7,-8,-3,9,0,-3,-4,4,0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         a3.push(arr[i])
//     }
//     if(arr[i]%2==0&arr[i]>0){
//         a1.push(arr[i])
//     }
//     if(arr[i]%2!==0&arr[i]>0){
//         a2.push(arr[i])
//     }
// }
// print(a1)
// print(a2)
// print(a3)



// //                              6
// s1=0;
// s2=0
// arr=[1,2,3,4,20,6,7,8,9,5,14,15,16,17,27,14,37,12,64,37]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         // print('Чет'+arr[i])
//         //s1=s1+i //Сумма
//         s1+=arr[i] //количество
//     }
//     if(arr[i]%2!==0){
//         // print('нечет'+arr[i])
//         //s2=s2+i //Сумма
//         s2+=arr[i] //количество
//     }
// }
// print('Чет'+s1)
// print('Не чет'+s2)
// print("---------------------")


// //                              3
// arr=[-1,2,-3,4,-5,6,7,-8,9,10,11]
// s=0;
// sr=0;
// for(let i=0;i<arr.length;i++){
//     s=s+Math.abs(arr[i])
// }
// sr=s/arr.length
// print('1 Задание='+sr)


// col=0;
// for(let i=0;i<arr.length;i++){
//     if(Math.abs(arr[i])>sr){
//         col+=1
//     }
// }
// print("2 Задание="+col)

// arr1=[-1,2,-3,4,-5,6,7,9,10,11]
// print(arr1)
// max=0;
// for(let j=0;j<arr1.length;j++){
//     if(arr1[j]>max){
//         max=arr1[j]
//     }
// }
// let el=arr1.shift()
// let ind = arr1.indexOf(max,0)
// a1 = arr1[ind]
// arr1[ind]=el
// arr1.unshift(a1)
// print(arr1)



// /*              STR-СТРОКИ              */
// //    01234
// str1="HELLO"
// //    01234
// str2="WORLD"
// res=str1+" "+str2
// print(res)

// res1=str1.concat(' '+str2)
// print(res1)

// res2=str1.concat(str2+str1+str2+str1)
// print(res2)

// print(str1.charAt(1))
// print(str2[4])
// print(str2[-1])
// print(str2[28])

// print(res2.length)

// print(res2.slice(5,12))

// print(res2.substr(5,7))

// print(res2.slice(0,-6))



// print(res2.indexOf('WORLD')) // первый индекс этого слого
// print(res2.lastIndexOf('WORLD'))// последний индекс этого слого



// Разделить гласные и согласные буквы
// str1="Привет, Мир"
// glas="а у о и э ы я ю е ё"
// sogl="б в г д ж з й к л м н п р с т ф х ц ч ш щ"

// res_glas=''
// res_sogl=''

// function filter(es){
//     for(let i=0;i<es.length;i++){
//         if((sogl.indexOf(es[i]) !== -1) & (es[i] !==' ')){
//             res_sogl=res_sogl+es[i]
//         }else if ((glas.indexOf( es[i])!==-1) & (es[i] !==' ')){
//             res_glas=res_glas+es[i]
//         }
//     }
//     return res_glas+" "+res_sogl
// }
// r=filter(str1.toLowerCase()).split(' ')
// print(r)
// print(r[0])
// print(r[1])







// let foo ={
//     a:"Hello",
//     b:'Monday'

// }
// print(foo['a'])
// print(foo.a)
// print(foo)

// foo.a=12
// foo.b=10
// print(foo.a+foo.b)
// print(foo)



// let arr={
//     slovo: 1,
//     1:2,
//     2:3,
//     3:4
// }

// s=''
// for (let i=0;i<4;i++){
//     if (arr[i]==undefined){
//         print(i+'='+arr['slovo'])
//     }else{
//         print(i+" = "+arr[i])
//         s=s+i
//     }
// }
// print("s="+s)

// delete arr.slovo



// let arr1={
//     key: 'value',
//     mufac: function(){
//         print('я Метод')
//     },
// }
// let f=arr1.mufac
// f()



// let voin1 = {
// 	hel: 100,
// 	self_hit: function (u) {
// 		this.hel = this.hel - u
// 	},
// 	hit: function () {
// 		r = Math.floor(Math.random() * (10 - 5 + 1)) + 5
// 		return r
// 	},
//     hil:function () {
// 		h = Math.floor(Math.random() * (5 - 2.5 + 1)) + 2
//         this.hel=this.hel+h
// 		return h
//     }
// }

// let voin2 = {
// 	hel: 100,
// 	self_hit: function (u) {
// 		this.hel = this.hel - u
// 	},

// 	hit: function () {
// 		r = Math.floor(Math.random() * (10 - 5 + 1)) + 5
// 		return r
// 	},
//     hil:function () {
// 		h = Math.floor(Math.random() * (5 - 2.5 + 1)) + 2
//         this.hel=this.hel+h
// 		return h
//     }
// }

// s=0
// hil_voin1=0
// hil_voin2=0

// hil_voin2_limit=Math.floor(Math.random() * (10 - 5 + 1)) + 5
// hil_voin1_limit=Math.floor(Math.random() * (10 - 5 + 1)) + 5

// while (true) {
//     voin2.self_hit(voin1.hit());
//     voin1.self_hit(voin2.hit());

//     console.log('\x1b[33m'+"Воин 1 наносит удар = "+voin1.hil()+'\x1b[0m'); // желтый для атаки
//     console.log('\x1b[36m'+'Здоровье 2 воина = '+voin2.hel+'\x1b[0m'); // голубой для здоровья
//     console.log('\x1b[33m'+"Воин 2 наносит удар = "+voin2.hil()+'\x1b[0m'); // желтый для атаки
//     console.log('\x1b[36m'+'Здоровье 1 воина = '+voin1.hel+'\x1b[0m'); // голубой для здоровья
//     s = s + 1;

//     print('\x1b[45m'+"Были совершены по = "+s+" Ударов"+'\x1b[0m')

//     if (voin1.hel <= 0) {
//         console.log('\x1b[31m'+"Воин 1 погиб как герой, выдержав "+s+' ударов'+'\x1b[0m'); 
//         print('\x1b[31m'+"У воина 1 была всего = "+hil_voin1_limit+" Зелий"+'\x1b[0m')
//         break;
//     }
//     if (voin2.hel <= 0) {
//         console.log('\x1b[31m'+"Воин 2 погиб как герой, выдержав "+s+' ударов'+'\x1b[0m'); 
//         print('\x1b[31m'+"У воина 2 была всего = "+hil_voin2_limit+" Зелий"+'\x1b[0m')
//         break;
//     }

//     if (hil_voin2<hil_voin2_limit){
//         hil_voin2=hil_voin2+1
//         console.log('\x1b[32m'+'Здоровье 2 воина повысилось на = '+voin2.hil()+' составляет = '+voin2.hel+'\x1b[0m');
//     }
//     if (hil_voin1<hil_voin1_limit){
//         hil_voin1=hil_voin1+1
//         console.log('\x1b[32m'+'Здоровье 1 воина повысилось на = '+voin1.hil()+' составляет = '+voin1.hel+'\x1b[0m');
//     }
// }


// console.log('%c*****************', 'color: red; background: black; font-size: 20px');
// console.log('%c****GAME OVER****', 'color: red; background: black; font-size: 20px');
// console.log('%c*****************', 'color: red; background: black; font-size: 20px');






// a = 12
// b = 'test'
// console.log(`Число = ${a}, текст=   ${b}`)

// //1 вариант
// function myfanc(arg) {
// 	console.log(`Значение = ${arg}`)
// }

// myfanc(666)

// // 2 вариант
// const myfanc2 = function (arg) {
// 	console.log(`Значение = ${arg}`)
// }
// myfanc2(777)

// // 3 вариант
// const myfanc3 = arg => {
// 	console.log(`Значение = ${arg}`)
// }

// myfanc3('txt')

// const myfanc4 = () => {
// 	console.log(`myfanc4`)
// }

// myfanc4()

// function myfanc5(a, b) {
// 	function s(x, y) {
// 		return x + y
// 	}
// 	return s(a, b)
// }
// console.log(myfanc5(2, 3))

// ;(function () {
// 	console.log('Привет мир')
// })()

// function s(a) {
// 	su = 0
// 	for (let i = 0; i < arguments.length; i++) {
// 		su = su + arguments[i]
// 	}
// 	return su
// }

// numers = [1, 2, 3]
// res = s(...numers) // s(1,2,3)
// console.log(res)





//              Замыкание

// function youSayGoodBye() {
// 	let s = 0
// 	function andISayHello(a) {
// 		s = s + a
// 		//alert(s)
// 		console.log(s)
// 	}
// 	return andISayHello
// }

// let something = youSayGoodBye()
// ind = 1
// for (let i = 0; i < 10; i++) {
// 	something(ind)
// }

// print("-------------------------------")
// print("-------------------------------")

// function makeAdder(x) {
//     return function (y) {
//     return x + y;
//     };
// }


// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12



// //                          0 Вариант
// console.log('%c**** 0 Вариант****', 'color: red; background: black; font-size: 20px');
// // Таблица умножения через цикл for
// for (let i = 2; i <= 4; i++) {
//     let chislo = 2;
//     let umna = i;
//     let sum = chislo * umna;
//     console.log(`Число = ${chislo} * на = ${umna} ответ = ${sum}`);
// }

// //                          1 Вариант
// console.log('%c**** 1 Вариант****', 'color: red; background: black; font-size: 20px');
// sum1=0
// function primer1(chislo,umna){
//     sum1=sum1+(chislo*umna)
//     print(`Число = ${sum1/umna} * на = ${umna} ответ = ${sum1}`)
// }
// for (let i=0; i < 3; i++){
//     primer1(2,3)
// }


// //                          2 Вариант
// console.log('%c**** 2 Вариант****', 'color: red; background: black; font-size: 20px');
// sum2=0
// const primer2 = (chislo, umna) =>{
//     for (let i=0; i < 3; i++){
//         sum2=sum2+(chislo*umna) 
//         console.log(`Число = ${sum2/umna} * на = ${umna} ответ = ${sum2}`)
//     }
// }
// primer2(3, 3);


// //                          3 Вариант
// console.log('%c**** 3 Вариант****', 'color: red; background: black; font-size: 20px');
// function youSayGoodBye() {
//     const start = 2;
//     const end = 4;
//     return function() {
//     for (let i = start; i <= end; i++) {
//         const chislo = 2;
//         const umna = i;
//         const sum = chislo * umna;
//         console.log(`Число = ${chislo} * на = ${umna} ответ = ${sum}`);
//     }
//     }
// }

// const table = youSayGoodBye();
// table();

let s=0
function sendFrom(e){
    const el1 = document.forms.main_form.your_fam.value
    const el2 = document.forms.main_form.your_name.value
    const el3 = document.forms.main_form.your_otch.value

    alert("Фамилия = "+el1+" Имя = "+el2+" Отчество = "+el3)

    s=s+1
    // alert("рабатет")
    // print("Сработал " +s+" раз")
}
const sendButton = document.main_form.btn_otprav
sendButton.addEventListener('click', sendFrom)


// const headerElement = document.getElementById('btn_otprav')
// console.log('Text: ', headerElement.innerText)

// const d = document.querySelector('#btn_otprav')
// console.log(d.innerHTML)

// d.innerText = 'Приветик'
