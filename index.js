// ! LOOPS

// ? TASK-1 : Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// let eded= prompt('eded daxil ele')
// let sum=0
// let average=0
// let multiply=1
// let count = 0

// if (eded.length==3) {
//     for (let i = 0; i < eded.length; i++) {
//         count ++
//         sum += parseInt(eded[i])
//         average = parseInt(sum/count)
//         multiply *= parseInt(eded[i])
//     }
// }
// else{
//     alert("3 reqemli eded yaz xais olunurrrrr plssss")
// }

// console.log(sum,average,multiply);


// ? TASK-2 : Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// let eded = prompt("eded daxil edin")

// for (let i = 1; i <= eded; i++) {
//     if (eded % i === 0) { 
//         console.log(i); 
//     }
// }


// ? TASK-3 : Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// let eded = prompt("eded daxil edin")
// let counter=0

// for (let i = 1; i <= eded; i++) {
//     if (eded % i === 0) { 
//         counter ++
        
//     }
// }

// console.log(counter); 


// ? TASK-4 : for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

// for (let i = 0; i <= 10; i++) {
  
//    console.log(i + " x " + i + " = " + (i * i));
// }
    

// ? TASK-5 : for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

// for (let i = 0; i <= 10; i++) {
  
//    let kvadrat =i * i 
//    let kub=i * i * i

//    console.log(i + " " + kvadrat + " " + kub);
// }


// ? TASK-6 : 0 - 100 arası yalnız sadə ədədləri console'da çap edin

// for (let i = 0; i <= 100; i++) {
//     if (i === 0 || i === 1) {
//         continue; 
//     }

//     let sade = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             sade = false; 
//             break;
//         }
//     }

//     if (sade) {
//         console.log(i);
//     }
// }


// ? TASK-7 : 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

// let tek = 0
// let cut = 0

// for (let i = 0; i <= 100; i++) {
//   if (i % 2==0) {
//     cut += i
//   }
//   else{
//     tek += i
//   }
  
// }
// console.log(`tek ededlerin cemi: ${tek}`);
// console.log(`cut ededlerin cemi: ${cut}`);


// ! ARRAYS


// ? TASK-1 : studentlərin ortalama score'nu yeni bir arrayda yığın

// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//   ];
  
//   const averageScores = [];
  
//   for (let i = 0; i < students.length; i++) {
//       const student = students[i];

//       const total = student.scores.reduce((acc, score) =>{
//         acc + score
//       } , 0);

//       const averageScore = total / student.scores.length;

//       averageScores.push({ name: student.name, averageScore: averageScore });
//   }
  
//   console.log(averageScores);
  

// ? TASK-2 : webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//   ];

//   const newArr = [];

// for (let i = 0; i < webTechs.length; i++) {
//     if (webTechs[i].length > 4) {
//         newArr.push(webTechs[i]);
//     }
// }

// console.log(newArr);


// ? TASK-3 : product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];

//   let total = 0;

//   for (let i = 0; i < products.length; i++) {
//     total += products[i].price;
// }

// const average = total / products.length;

// console.log("Cem:", total);
// console.log("Orta qiymet:", average);  


// ? TASK-4 : countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// let newCountries = [];

// for (let i = 0; i < countries.length; i++) {
//     let country = countries[i];
//     if (country[0] === 'A' & country[country.length - 1] === 'a') {
//         newCountries.push(country);
//     }
// }

// console.log(newCountries);


// ? TASK-5 :  Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// function findNumberOfDivisors(n){

//     let counter=0


// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) { 
//         counter ++
        
//     }
   
// }
// return counter

// }

// console.log(findNumberOfDivisors(120));


// ? TASK-6 : daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

    // function findSpaceCounts(str) {
    //     let counter = 0;
    
    //     for (let i = 0; i < str.length; i++) {
    //         if (str[i] === ' ') {
    //             counter++;
    //         }
    //     }
    
    //     return counter;
    // }
    
    // console.log(findSpaceCounts("Salam  usaglar oturun   yerinize  ")); 


// ! FUNCTIONS

// ? TASK-1 :  printFullName adında funksiya yaradırsız və 2 parameter qəbul edir 

// function printFullName(firstName, lastName) {
//     return "I am " + firstName + " " + lastName;
// }

// console.log(printFullName("Jhon", "Doe")); 


// ? TASK-2 :  daxil edilən ədədin kvadratını return edən funksiya yazın 

// const square=(number)=>{
//     return number * number
// }

// console.log(square(12));


// ? TASK-3 :  4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// function sum(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// function divide(x, y) {
//     return x / y;
// }

// console.log(sum(6,5));
// console.log(multiply(6,5));
// console.log(subtract(6,5));
// console.log(divide(6,5));


// ? TASK-4 :  Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// function calculator(x, y, operator) {
//     if (operator === '+') {
//         return x + y;
//     } 
//     else if (operator === '-') {
//         return x - y;
//     } 
//     else if (operator === '*') {
//         return x * y;
//     } 
//     else if (operator === '/') {
//         if (y === 0) {
//             return "sifira bolme yoxdu";
//         } else {
//             return x / y;
//         }
//     } else {
//         return "Düzgün operator yazzzzzz";
//     }
// }

// console.log(calculator(5,0,"/"));


// ? TASK-5 :  arrayın ilk və son elementinin cəmini return edən function yazın

// const getSum = (array) => {
//     return array[0] + array[array.length - 1];
// };

// console.log(getSum([8,10,200]));


// ? TASK-6 :  arrayın bütün elementlərinin cəmini qaytaran funksiya yazın

// const sumFunc = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// };

// console.log(sumFunc([78,98,120,-60,3,5,6]));


// ? TASK-7 :  arrayin daxilindəki max elementi return edən funksiya yazın

// const findMax = (array) => {

//     let max = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// };

// console.log(findMax([7,8,-5]));


// ? TASK-8 :   filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin

// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];

//   const filterEmployees = (employees) => {

//     let filteredEmployees = [];

//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].salary > 60000) {
//             filteredEmployees.push(employees[i]);
//         }
//     }
//     return filteredEmployees;
// };

// console.log(filterEmployees(employees));


// ? TASK-9 : verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// let arr=[8,7,16,80,3,4,5]

// function findElement(arr, number) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === number) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(findElement(arr,9));


// ? TASK-10 : sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// function countSpaces(text) {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === ' ') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countSpaces(sampleNews));


// ? TASK-11 : Daxil edilən iki arrayi birləşdirən funksiya yazın.

// function concatArray(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(concatArray([1,2,3,4,5],[6,7,8,9]));


// ? TASK-12 : Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.

// function array_filled(count, value) {
//     let result = [];
//     for (let i = 0; i < count; i++) {
//         result.push(value);
//     }
//     return result;
// }

// console.log(array_filled(6, 0));


// ? TASK-13 : Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
// ? 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.

// function move(arr, from, to) {
    

//     if (from === to) {
//         return arr;
//     }


//     let elementMove = arr.splice(from, 1)[0];
//     arr.splice(to, 0, elementMove);

//     return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 1, 4)); 


// ? TASK-14 : Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.

function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(3, 10))