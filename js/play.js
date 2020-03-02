///PROMISE
function Step1() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("After 3000 msecs");
      resolve();
    }, 3000);
  });
}

function Step2() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("3000 msecs After 3000");
      resolve();
    }, 3000);
  });
}

function Step3() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("3000 secs After 3000 After 3000 msecs");
      resolve();
    }, 3000);
  });
}

//let step1Promise = Step1();
//let step2Promise = step1Promise.then(() => Step2());
//let step3Promise = step2Promise.then(() => Step3());

/////*********************************** */

function getPosts() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(post => {
        getPost(post.id);
      });
    });
}

function getPost(id) {
  let url = "https://jsonplaceholder.typicode.com/posts/";
  postUrl = url.concat(id);
  fetch(postUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.id, data.title);
    });
}

//const Posts = getPosts();
/////*********************************** */
//with async and await

async function getPosts2() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  posts.forEach(post => {
    let url = "https://jsonplaceholder.typicode.com/posts/";
    postUrl = url.concat(post.id);
    (async () => {
      const response2 = await fetch(postUrl);
      const post2 = await response2.json();
      console.log(post2.id, post2.title);
    })();
  });
}

getPosts2();

/////*********************************** */

let arr = [2, 4, 6, 8, 10];

function createArray() {
  let arr2 = [];
  for (let i = 0; i < 10; i++) {
    arr2[i] = Math.floor(Math.random() * 10);
  }
  return arr2;
}

function printArray(arr) {
  arr.forEach(element => {
    console.log(element);
  });
}

function squareWtFEach(arr) {
  let tempArr = [];
  arr.forEach((x, index) => {
    tempArr[index] = x * x;
  });
  return tempArr;
}

function squareWtMap(arr) {
  return arr.map(n => n * n);
}

//console.log(
//    [1, 2, 3, 4].reduce((a, b) => a + b, 0)
// )

function cloneArraySpread(arr) {
  let newArr = [];
  newArr = [...arr];
  return newArr;
}

//console.log("Real Time");
/*
setTimeout(function() {
  console.log("After 1000");
  setTimeout(function() {
    console.log("1000 seconds aftetr previous");
    setTimeout(() => {
      console.log("1000 seconds aftet after previous");
    }, 1000);
  }, 1000);
}, 1000);
*/

//arr=createArray();

//console.log("return a new copy of arr")
//arr2=squareWtFEach(arr);
//arr3=squareWtMap(arr);
//console.log(arr3);
//console.log(arr2);
//console.log(arr);

//printArray(arr2);
//printWithForEach(arr);
//manipulateWithMap(arr);
