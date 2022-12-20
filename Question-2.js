// Mock SET-1 Interview Question 2 - Difference between var, let and const?

// Video Summary:- https://drive.google.com/file/d/19UZJH1jCHC4ZG9whI8QTK2semO6pahEs/view?usp=sharing

function start() {
  for (let i = 0; i < 5; i++) {
    // i=10;
    console.log(i);
  }
  //   console.log(i);
}

start();

// let,const => Block Scope
//var =>function Scope
