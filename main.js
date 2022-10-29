
// let arr = [123, 223, 345, -123, 0, true, 'dfgfdsgdf'];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);
// console.log(arr.length);

// arr[0] = 'new'

// console.log(arr);

// arr[7] = 'octen';
// console.log(arr);
// arr[arr.length]= '842456465';
// console.log(arr);
// arr[arr.length] = "dfdsfd";
// console.log(arr);


// let arr = [
//     [11, 22, 33],
//     [],
//     [],
// ]
// console.log(arr);

// console.log(arr[0][1]);

// let users = [
//     {id:1, name: "vasya", age: 31, status: true, skills: ['html', 'mysql', 'mongo']},
//     {id:2, name: "petya", age: 33, status: false, skills: ['html', 'js']},
//     {id:3, name: "anna", age: 28, status: true, skills: ['html', 'js']},
//     {id:4, name: "olya", age: 29, status: false, skills: ['html', 'mysql', 'mongo']},
// ]
// console.log(users);
// console.log(users[0].age);
// console.log(users[0].skills[2]);
// console.log(users[0]['skills'][2]);

// let user = {
//   id: 1,
//   name: "vasya",
// };

// user.age = 22;
// user['status'] = false;
// console.log(user);

// delete user.id;
// console.log(user);


// let user = {
//     name: 'vasya',
// }

// let user2 = user;
// console.log(user2);
// user2.age = 31;
// console.log(user2);
// console.log(user);


// let color = 'green'
// if (color === 'red') {
//   console.log("stop");
// } else {
//   console.log("go");
    
// }


// let age = +prompt('enter your age');
// console.log(age, typeof age);

// if (age >= 18) {
//     alert('go');
// } else {
//     alert('підрости');
// }

// let color = prompt('enter color');
// let b = confirm("is road clear?");
// if (color === 'green' && b) {
//      console.log("go");
   
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if(color === 'red'){
//     console.log("stop");
// } else {
//     console.log("???");
    
// }

// let color = prompt('enter color');

// switch (color) {
//   case "green":
//     console.log("go");
//     break;
//   case "yellow":
//     console.log("wait");
//     break;
//   case "red":
//     console.log("stop");
//     break;
//   default:
//       console.log("???");
// }

// let x = 0;
// x = x + 1;
// console.log(x);
// x++
// console.log(x);
// x += 1;
// console.log(x);

// x = x - 1;
// console.log(x);

// x--;
// console.log(x);

// x -= 1;
// console.log(x);


// let x = 0;
// x++;
// console.log(x);

// ++x
// console.log(x);

// let a = 0;
// let b = ++a;
// console.log(a, b);

// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 28, status: true },
//   { name: "kolya", age: 22, status: true },
//   { name: "olya", age: 27, status: false },
//   { name: "max", age: 23, status: true },
//   { name: "anya", age: 35, status: false },
//   { name: "oleg", age: 34, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 40, status: true },
//   { name: "olya", age: 17, status: false },
//   { name: "max", age: 26, status: true },
// ];

// for (let i = 0; i < users.length; i ++){
//   console.log(users[i]);
//   let user = users[i];
//     document.write(`<div>${user.name}</div>`)
// }
// console.log(users[0]);


// let products = [
//   {
//     title: "milk",
//     price: 22,
//     image: "dcgdfsgdfgdf",
//   },
//   {
//     title: "juice",
//     price: 27,
//     image: "xzc",
//   },
//   {
//     title: "tomato",
//     price: 47,
//     image: "wqewqeqwe",
//   },
//   {
//     title: "tea",
//     price: 15,
//     image: "hjkhjkhj",
//   },
// ];

// for (let i = 0; i < products.length; i++){
//   const product = products[i];
//   document.write(`
//   <div>
//         <h2> ${product.title} - ${product.price} UAH</h2>
//         <img src="${product.image}">
  
//   </div>`)
// }

// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 28, status: true },
//   { name: "kolya", age: 22, status: true },
//   { name: "olya", age: 27, status: false },
//   { name: "max", age: 23, status: true },
//   { name: "anya", age: 35, status: false },
//   { name: "oleg", age: 34, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 40, status: true },
//   { name: "olya", age: 17, status: false },
//   { name: "max", age: 26, status: true },
// ];

// for (const user of users) {
//   console.log(user);
// }

// let user = {
//   id: 1,
//   name: 'vasya',
//   status: true,
// }

// for (const filName in user) {
//     console.log(user[filName]);
// }

// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 28, status: true },
//   { name: "kolya", age: 22, status: true },
//   { name: "olya", age: 27, status: false },
//   { name: "max", age: 23, status: true },
//   { name: "anya", age: 35, status: false },
//   { name: "oleg", age: 34, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 40, status: true },
//   { name: "olya", age: 17, status: false },
//   { name: "max", age: 26, status: true },
// ];

// for (const user of users) {
//   console.log(user);
//   for (const filName in user) {
   
//   console.log(filName, user.filName);
//   }
// }

// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 28, status: true },
//   { name: "kolya", age: 22, status: true },
//   { name: "olya", age: 27, status: false },
//   { name: "max", age: 23, status: true },
//   { name: "anya", age: 35, status: false },
//   { name: "oleg", age: 34, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 40, status: true },
//   { name: "olya", age: 17, status: false },
//   { name: "max", age: 26, status: true },
// ];
// let i = 0;

// while (i < users.length) {
//   console.log(users[i]);
//   i++;
// }

// do {
//   console.log('sdfsdfsdfsdfsdf');

// } while (false);


// function writer(productTitle, price, descr) {
//   document.write(
//     `<div>
//       <h2>${productTitle} ${price} </h2>
//       <p>${descr}</p>
//     </div>`
//   );
// }
// writer("milk", 23, "some milk");
// writer("meat", 150, "some meat");

// function printerArr(array) {
//   for (const item of array) {
//     console.log(item);
//   }
// }

// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 28, status: true },
//   { name: "kolya", age: 22, status: true },
//   { name: "olya", age: 27, status: false },
//   { name: "max", age: 23, status: true },
//   { name: "anya", age: 35, status: false },
//   { name: "oleg", age: 34, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 40, status: true },
//   { name: "olya", age: 17, status: false },
//   { name: "max", age: 26, status: true },
// ];

// printerArr(users);

// let products = [
//   {
//     title: "milk",
//     price: 22,
//     image: "dcgdfsgdfgdf",
//   },
//   {
//     title: "juice",
//     price: 27,
//     image: "xzc",
//   },
//   {
//     title: "tomato",
//     price: 47,
//     image: "wqewqeqwe",
//   },
//   {
//     title: "tea",
//     price: 15,
//     image: "hjkhjkhj",
//   },
// ];

// printerArr(products);

// function calc(a, b) {
//   let result = a + b;
//   return result;
// }

// r1 = calc(10, 20);
// r2 = calc(20, 22);

// console.log(r1,r2)

// function persent(sum, per) {
//   return (sum / 100) * per;
// }

// function tax(sum) {
//   return sum - persent(sum, 20) - persent(sum, 1.5);
   
// }
// let number = tax(10000);
// console.log(number);


function userFilter(users) {
  let filteredUsers = [];
  for (const user of users) {
    if (user.age > 30) {
      console.log(user);
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 28, status: true },
  { name: "kolya", age: 22, status: true },
  { name: "olya", age: 27, status: false },
  { name: "max", age: 23, status: true },
  { name: "anya", age: 35, status: false },
  { name: "oleg", age: 34, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 40, status: true },
  { name: "olya", age: 17, status: false },
  { name: "max", age: 26, status: true },
];
let filter = userFilter(users);
      console.log(filter);


      
