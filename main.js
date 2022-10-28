
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

let color = prompt('enter color');
let b = confirm("is road clear?");
if (color === 'green' && b) {
     console.log("go"); 
   
} else if (color === 'yellow') {
    console.log('wait');
} else if(color === 'red'){
    console.log("stop");
} else {
    console.log("???");
    
}


