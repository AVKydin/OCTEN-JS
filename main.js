
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
//     console.log(user);
//     console.log(user.name);
    
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
//     console.log(user);
//     let us = user;
//   for (const filName in user) {
//     console.log(filName, us[filName]);
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
//     console.log(users[i]);
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


// function userFilter(users) {
//   let filteredUsers = [];
//   for (const user of users) {
//     if (user.age > 30) {
//       console.log(user);
//       filteredUsers.push(user);
//     }
//   }
//   return filteredUsers;
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
// let filter = userFilter(users);
//       console.log(filter);

// function calc(a, b) {
//   return a + b;
// }
// function calc(a, b, c) {
//   return a + b + c;
// }

// function foobar() {
//   console.log(arguments)
//   if (arguments.length === 2) {
//     return arguments[0] + arguments[1]
//   } else if (arguments.length === 3) {
//     return arguments[0] + arguments[1] +arguments[2];
//   }
// }
//   console.log(foobar(1,2,55));


// greeting()
// let greeting = function () {
//     console.log('hi');
// }

// greeting();

// function greeting() {
//   console.log("hi");
// }

// function calc(a, b) {
//   return a + b;
// }

// let calc = (a, b) => a + b;

// console.log(calc(10, 20));

// let asd = () => console.log(arguments);

// console.log(asd());

// let user = {
//   name: 'vasya',
//   age: 31,
//     greeting: function (msg) {
//       return `${msg} my name is ${this.name}`
//   },
//     vitanny: (msg) => `${msg} my age is ${user.age}`
// }
// console.log(user.greeting("hi"));
// console.log(user.vitanny("hello"));

// let str = 'hello octen';
// console.log(str);
// console.log(str[0]);
// for (const iterator of str) {
//   console.log(iterator);
// }
// let s = new String('dsfsdfsdfsd');
// console.log(s);

// let s = str.concat('!!!');
// console.log(s);
// console.log(str.toLocaleUpperCase());

// console.log(str.startsWith("hel"));

// console.log(str.endsWith("hel"));

// console.log(str.substring(0, 7));
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));
// console.log(str.indexOf("o", 5));
// console.log(str.charAt(8));
// console.log(str.replace('e', '!'));
// console.log(str.replaceAll("e", "!"));
// console.log(str.split(" "));

// let arr = [];
// console.log(typeof(arr));

// arr[arr.length] = 'dasdfdfsd';
// arr.push('dsfsd');
// console.log(arr.push("dgfhfg"));
// console.log(arr.push("dgfhfg2"));
// console.log(arr.push("dgfhfg3"));
// console.log(arr.push("dgfhfg4"));
// console.log(arr.push("dgfhfg5"));
// console.log(arr);

// console.log( arr.pop());
// console.log(arr);

// console.log(arr.unshift("!!!"));
// console.log(arr);

// console.log(arr.shift("!!!"));
// console.log(arr);


// console.log(arr.join(';'));

// let nums = [1, 2, 32];

// let concat = arr.concat(nums);
// console.log(concat);

// console.log(nums.reverse());

// console.log(concat);

// let slice = concat.slice(0, 4)
// concat.slice(0,4)
// console.log(slice);

// let splice = concat.splice(0,2, 'gdfgdf', 'hkjhhj,', 11111)
// console.log(concat.splice(0));
// console.log(splice);
// console.log(concat);

// console.log(concat.indexOf(1));

// concat.includes(1);
// console.log(concat.includes(1));

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

// users.forEach(function (value) {
//     console.log(value);

// });

// users.forEach((value) => console.log(value));

// let filteredUser = users.filter(value => value.age > 30);
// console.log(filteredUser);
// console.log(users);

// let mapsUsers = users.map(function (value, index) {
//     return {...value, id: index+1
//         // name: value.name,
//         // age: value.age,
//         // status: value.status,
//         // id: index + 1
//     };
// })
// console.log(mapsUsers);


// users.map((value, index) => {return{id: index + 1,name:value.name,age:value.age,status:value.status}})

// let find = users.find(value => value.name === 'max');
// console.log(find);

// console.log(users.every((value) => value.status));
// console.log(users.some((value) => value.status));


// let sort = users.sort((a, b) => {
//     return a.age - b.age;
// })
// console.log(sort);

// let sort = users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//       return 0;
//     }
// })
// console.log(sort);

// let reduce = users.reduce((previousValue, user) => {
//   if (user.status) {
//     previousValue.statT.push(user);
//   } else {
//     previousValue.statF.push(user);

//   }
//   return previousValue;
  
// }, { statT: [], statF: [] });
// console.log(reduce);


// function filter(array, callbackFn) {
//   let filterArr = [];
//   for (const arr of array) {
//     if (callbackFn(arr)) {
//       filterArr.push(arr);
//     }
    
//   }
//   return filterArr;

// }

// console.log(filter(users, (item) => item.status));
// console.log(filter(users, (item) => item.age>30));

// console.log("start");

// try {
//   console.log(a);
// } catch (a){
//   console.log(a);
// } finally {
//   console.log("finally block");
// }

// console.log("end");


// function calc(a, b) {
//   if (b == 0) {
//     throw new Error('b is 0')
//   }
//   return a / b;
// }

// calc(10, 0)


// let user = {
//   name : {}
// };

// // user.foo();

// // if (user) {
  
// // }

// user?.name?.Fn;

// let name = 'vasya';
// let age = 31;

// let user = {
//   name,
//   age,
//   foo() {
//     console.log(this);
//   }
// }
// console.log(user);
// user.foo()

// let user = {
//   name: 'vasya',
//   age: 31,
//   foo() {
//     console.log(this);
//   },
// };
// let { age, name } = user;

// console.log(name);
// console.log(age);


// function asd({ name }){
//   console.log(name);
// }

// asd({a:'sddf',name: 'dfsdfsd'})


// let name = "vasya";
// let age = 31;

// let user = {
//   name,
//   age,
//   foo() {
//     console.log(this);
//   },
//   wife: {
//     name: 'anna',
//   }
// };
// console.log(user);
// user.foo()

// let { name: nameUser, age: ageUser, wife:{name:wifeName} } = user;
// console.log(nameUser);
// console.log(wifeName);


// let nambers = [
//   11,
//   22,
//   33,
// ]

// let [a, , c] = nambers;
// console.log(a, c);

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

// let [{name, age, status}, user2] = users;

// console.log(name);
// console.log(user2);

// let user = {
//   name: 'vasya',
//   age: 123,
// }

// let user2 = user;
// let user3 = {
//   name: "vasya",
//   age: 123,
// };


// console.log(user === user2);
// console.log(user3 === user2);

// let user = {
//   name: 'vasya',
//   age: 123,
// }

// let userCopy = { ...user }

// console.log(userCopy === user);

// userCopy.age = 0;
// console.log(userCopy);
// console.log(user);

// let numbers = [11, 22, 33];

// let numbers2 = [...numbers];

// console.log(numbers === numbers2);

// let user = {
//   name: 'vasya',
//   skills: ['html', 'js'],
//   greet: function () {
    
//   },
// };

// let userClone = {...user}

// console.log(user === userClone);
// console.log(user.skills === userClone.skills);

// let userJsonClone = JSON.stringify(user);
// console.log(userJsonClone);

// let parse = JSON.parse(userJsonClone);
// console.log(parse);
// console.log(user);
// console.log(user.skills === parse.skills);

// let assign = Object.assign({}, user);
// console.log(assign);
// console.log(assign === user);
// console.log(assign.skills === user.skills);


// function asd() {
//   let x = 10;

//   function inner() {
//     return ++x;
//   }
//   return inner;
// }

// let foo = asd()

// console.log(foo());


// let user = {
//   name: 'vasya',
//   age: 22,

// }

// user.age = 100500;

// function userBilder(name, age) {
//   let user = { name, age };
//   return {
//     getName() {
//       return user.name;
//     },
//     getAge() {
//        return user.age;
//     },
//     setAge(age) {
//       if (age > 0 ) {
//         user.age = age
//       }
//     }
//   }
// }

// let bulder = userBilder("vasya", 22);
// console.log(bulder);
// console.log(bulder.getAge());
// console.log(bulder.getName());

// bulder.setAge(100)
// console.log(bulder.getAge());

// function User(name,age,status) {
//   this.name = name;
//   this.age = age;
//   this.status = status;
// }

// let user1 = new User("sdas", 12, true);
// let user2 = new User("vasya", 32, true);

// function User(name, age, status, wife) {
//   this.name = name;
//   this.age = age;
//   this.status = status;
//   this.wife = wife;
// }

// let user1 = new User("sdas", 12, true, { name: 'dsfdf', age:22 });
// console.log(user1);

// function User(name, age, status, wifeName, wifeAge) {
//   this.name = name;
//   this.age = age;
//   this.status = status;
//   this.wife = {
//     name: wifeName,
//     age:wifeAge
//   }
//   this.greeting = function(){
//     console.log('hi');
//   }
 
// }

// let user1 = new User("sdas", 12, true, "dsfdf", 22);
// console.log(user1);

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.greeting = function () {
//   return `hello my name is ${this.name}`
// }

// function User(name,age,status) {
//   this.name = name;
//   this.age = age;
//   this.status = status;
// }

// let user = new User('vasya', 33);

// user.greeting = function (msg) {
//   return `${msg} my name is ${this.name}`;
// }

// let user2 = new User('dima', 44);


// console.log(user.greeting('hi'));
// console.log(user.greeting.apply(user2, ["hello"]));
// console.log(user.greeting.call(user2, "hello"));


// function User(name, age, status) {
//   this.name = name;
//   this.age = age;
//   this.status = status;
// }

// let user = new User("vasya", 33);

// user.greeting = msg=> {
//   return `${msg} my name is ${this.name}`;
// };

// let user2 = new User("dima", 44);

// let greetingCopy = user.greeting.bind(user2);
// console.log(greetingCopy('ky-ky'));

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

  // static greeting() {
  //   console.log(this);
  //   return `hello my name is ${this.name}`;
  // }

//    work() {
    
//     return `work in process`;
//   }
// }

// let user = new User('vasya', 22);
// console.log(user);

// console.log(user.greeting());

// console.log(User.greeting());

// class Customer extends User{
//   constructor(username, age, password) {
//     super(username, age);
//     this.password = password;
//     }
// }

// let customer = new Customer("vasya", 31, "111");
// console.log(customer);


// console.log(customer.work());


// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Customer(name, age, password) {
//   User.apply(this, arguments)
//   this.password = password;
// }
// let customer = new Customer('vasya', 44, '4534534')

// console.log(customer);


                        // Об'єктна модель документа DOM та пошук по ній


// DOM

// console.log(document.head);
// console.log(document.head.children);
// console.log(document.body.innerHTML);

// let ul1 = document.getElementById('list1')
// console.log(ul1);

// let ul1 = document.getElementsByClassName('menu')
// console.log(ul1);

// for (const iterator of ul1) {
//   console.log(iterator);
// }

// let li = document.getElementsByTagName("li");
// console.log(li);

// let list = document.getElementById('list1')
// console.log(list);

// let li = list.getElementsByTagName('li');
// console.log(li);

// console.log(document.querySelector("body .menu"));
// console.log(document.querySelectorAll("body .menu"));

// let nodeListOf = document.querySelectorAll("#list2>li")
// console.log(nodeListOf);

// for (const i of nodeListOf) {
// console.log(i);

// }

// let target = document.getElementById('target')
// console.log(target);
// console.log(target.innerText);
// // target.innerText = 'octen'

// target.style.background = 'silver';
// console.log(target.classList);
// target.classList.add("foo");
// target.classList.add("bar");
// console.log(target.classList.keys());
// console.log(target.classList.item(0));
// console.log(target.classList.contains("bar"));
// console.log(target.classList.toggle("bar"));
// console.log(target.classList.toggle("asd"));

// console.log(target.getAttribute("xxx"));
// console.log(target.getAttribute("id"));
// console.log(target.setAttribute("id", 'dsfgfdsgdf'));

// console.log(target.previousElementSibling);
// console.log(target.nextElementSibling);
// console.log(target.children);
// console.log(target.childNodes);


// target.innerHTML = `<b>dsfsdfsdfsd</b>`;

// console.log(target.outerHTML);


let elementsByClassName = document.getElementsByClassName('point');

for (const iterator of elementsByClassName) {
  iterator.innerText = "dfssdfdsfsdf";
  iterator.classList.add("sdf");
}

