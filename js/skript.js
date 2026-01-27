console.log("----------------------_-_-_-_-_-_-_-_-")

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


function print(param){// скрип которыц позволяет при помоши 
                      // созданой функции укоротить вывод в консоль
    console.log(param)
}



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




























// function splitString(stringToSplit, separator) {
//     var arrayOfStrings = stringToSplit.split(separator);
  
//     console.log('Оригинальная строка: "' + stringToSplit + '"');
//     console.log('Разделитель: "' + separator + '"');
//     console.log(
//       "Массив содержит " +
//         arrayOfStrings.length +
//         " элементов: " +
//         arrayOfStrings.join(" / "),
//     );
//   }

// var glas="а у о и э ы я ю е ё"

// var space = " ";

// splitString(glas, space);