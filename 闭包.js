// function outer() {
//     let count = 0; 
//     return function () {
//       count++;
//     };
//   }
//   const innerA = outer(); 

//   console.log(innerA)
  

  function outer() {
    let count = 0; 
    return {
      increment: function () {
        count++;
      },
      getCount: function () {
        return count;
      }
    };
  }
  
  const innerA = outer();
  innerA.increment();
  console.log(innerA.getCount()); // 输出 1




  function f() {
    let value = 123;
  
    return function() {
      console.log(value);
    }
  }
  
  let g = f(); // g.[[Environment]] 存储了对相应 f() 调用的词法环境的引用
  g()




  function makeWorker() {
    
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // 创建一个函数
  let work = makeWorker();
  
  // 调用它
  work(); // 会显示什么？


  function sum(a){
    let a1=a;
    return function(b){
        return a1+b
    }
  }

  console.log(sum(1)(2))
  console.log(sum(5)(-1))


 
 var x = 2;
function func() {
   
  console.log(x); // ReferenceError: Cannot access 'x' before initialization 死区
  var x = 2;
}

func();




let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  // 通过 name (Ann, John, Pete)
console.log(users.sort((a, b) => a.name > b.name ? 1 : -1))

// 通过 age (Pete, Ann, John)
console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));






const arr=[];

for(let i=0;i<10;i++){
  arr[i]=function(){
    return i;
  }
}
console.log(arr[6]())