//  a=10;
// b=120;
// c1=a+b;
// var c;
// console.log("sum of a and b is="+c1);
// console.log("swap two no ");
// c=a;
// a=b;
// b=c;

// console.log("after swap no a"+a);
// console.log("after swap no b"+b);
// console.log("reverse no")
// d=12345
// a1=parseInt(d/10000);
// a2=parseInt(d/1000)%10;
// a21=parseInt(d/100)%10;// 1234/100=12%10=2
// a3=parseInt(d/10)%10;
// a4=parseInt(d%10);
// s=a4*10000+a3*1000+a2*100+a21*10+a1;;
// console.log("reverse no "+s);
// r=(a4+a3+a2+a1).toString();
// console.log(r)
// console.log("armsstrong no ")
// u=1635;
// a1=parseInt(u/1000);
// a21=parseInt(u/100)%10;

// a31=parseInt(u/10)%10;
// a41=parseInt(u%10);
// h=a1*a1*a1+a21*a21*a21+a31*a31*a31+a41*a41*a41;
// console.log("arms"+h)
// if(u==h){
//     console.log("yes")
// }
// console.log("no")

// w=1635;
// a=parseInt(w/1000);
// b=parseInt(w/100)%10;
// c=parseInt(w/10)%10;
// d=parseInt(w%10);
// r=a*a*a*a+b*b*b*b+c*c*c*c+d*d*d*d;
// if(r==w){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }
// n=123541;
// c=0;;
// do{
//     c=c+1;
//     n=parseInt(n/10);
//     // console.log(c)
// }while(n>0)
// console.log(c)
// function sum(){
//     var a="pintu karode "
    
//     var i,c=0;
   
//     for(i=0;i<a.length;i++){
//         // console.log(a[i])
       
        
       
   
      
       
           
       
//         if(a[i]=='a'|| a[i]=='e'|| a[i]=='i' || a[i]=='o'|| a[i]=='u'){
          
//             c++;
            
      
//         }
//         if(a[i][0]=="p"){
//             console.log("yes")

        
//         }
//         // else{
//         //     console.log("no")
//         // }
   
//     }
//     console.log(c)
   
   
// }
// sum();
// d="aeiouki"
// var q=0
// for (var i=0;i<d.length;i++){
//     console.log(d[i])
// if(d[i]=='a'|| d[i]=='e'|| d[i]=='i' || d[i]=='o'|| d[i]=='u'){
          
//     q++;
    
//     console.log("yes"+q)
// }
// }
// console.log("ok"+q)
// function cell(a,b){
//     var c;
//     c=a+b;
//     if(c%2==0){
//         console.log("it is prime no only check  ")
//         return("it is prime no "+c);
        
//     }
//     else{
//         console.log("it is not  prime no  only check ")
//        return ("it is not prime no ")
       
//     }
// }
// var a=15,b=5;
// // cell(a,b);
// r=cell(a,b);
// // if(r==30){



// console.log("with return and argument r\n"+r)
// // }
// // else{
// //     console.log("not prime no and  find out")
// // }






//




// function multi(n){
//     var i,m=1;
//     for(i=1;i<=10;i++){
//         m=n*i;


//        return m;
//         // return m;
//     }
// }
// n=55
// e=multi(n)
//  console.log(e)



////



// var a,i;
// a=[1,5,78,2,2,5,4]
// a[1]=5252
// console.log(a.length);
// for(i=0;i<a.length;i++){
//     a[i][3]=5258
//     console.log(a[i])
// }



//////

//     function arrays(a){
// //  var a=[1,5,7,8,112,5,2,6,55]
// console.log("length of array is "+a.length);
// var i;
//  var max=min=a[0]
// for(i=0;i<=a.length;i++){
//     if(a[i]<min){
//        min=a[i]
//         // console.log(max)
//         // return max;
       
//     }
//     if(a[i]>max){
//         max=a[i]
//         // console.log(max)
//         // return max;
       
//     }
// }
// // console.log(max)
//  return max+"min"+min;
 
//     }
//     var a=[1785,7,8,112,5,2,6,55]
//     var d= arrays(a);
//     console.log(d)


///   


//  var a = [12,45,78,54,554,46,24,46]

// //  var i,j;
// //  for(i=0;i<a.length;i++){
// //     for(j=0;j<a[i].length;j++){
// //         console.log(a[i][j])

// //     }
// //     // console.log(a[i])
// //  }
// for(var i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         console.log("even  no "+a[i])
//     }
// }

// var a = [
//     [12, 45, 78],
//     [54, 554, 46]
// ];

// var i, j;
// for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }
// }

// object 
// var obj=[{
//     name:"pintu",
//     age:23,
//     city:"indore",
//     state:"mp"
// }, {name:"pintus",
// age:232,
// city1:"indores",
// state1:"mps"}

// ]
// // console.log(obj.age)
// for(var i=0;i<obj.length;i++){
//     console.log(obj[i].age,obj[i].name)
    
// }



// arrow function 

// var sum=(a,b)=>{
//      var c=a+b;
//      return c;
//     }
//     a=sum(10,20);
//     console.log(a)

//     var arrow=()=>{
//         // function sum(a,b){}
//     }



// map function 

//  a=[1,54,15,26,52,856,25]
//  a.map((item)=>{
//     // console.log(item);
//     if(item%2==0){
//         console.log(item)
//     }
//  })


// //  prime no
// a=27;
// var c=0;
// for(var i=1;i<=a;i++){
//     if(a%i==0){
//         c++;
//     }
// }
//     if(c==2){
//         console.log("yes"+a)
//     }
//     else{
//         console.log("no")
//     }

// // console.log("yes"+a)


// sort function 
// a=[1,54,15,26,52,'l',856,25,'h'];
// b=a.sort()
// console.log(b)
 

// spread function 

// var sum=(...a)=>{
//     var max=min=a[0]
//     for(var i=0;i<a.length;i++){
//         if(a[i]>max){
//             max=a[i]
//         }
//         if(a[i]<min){
//             min=a[i]
//         }
//     }
//     console.log(`max =${max} min  and ${min}`)
// }
// sum(4,"sd","sdsd",514,465,"dsw",42
// )

   


// set interval function 


// var time=()=>{
//     var a=1,i,c=0;

//     a=a+a
//     console.log("count"+a)
// }
// setInterval(time=()=>{
//     var a=2,i,c=0;
//     while(a<10){

   
    
//     a=a+a
//     console.log("count"+a)
// }
// },1000);
// time();

// function time() {
//     var a = 1;
//     a = a + 2;
//     console.log("count" + a);
// }

// setInterval(time, 5000);
// time(); // call once immediately


//  var time=()=>{
//     var a=2,b,i,c=0;
//     while(a<25){

   
    
//     a=a+10
//     console.log("count"+a)
// }
// }
// setInterval(time,1000)
// time()

// setInterval(()=>{
//     console.log("hello ji ")
// },100)

//  setTimeout(()=>{
//     console.log("hello ji ")
//  },9000)

// var time=()=>{
//         var a=2,b,i,c=0;
//       while(a<25){
    
       
        
//         a=a+10
//         console.log("count"+a)
//     }
//   }
//     setTimeout(time,9000)
//     time()

//aray reverse 


// var a=[1,465,1,8,255,3,2];
// console.log("hello")
// var i,j;
// var c=[]
// for(i=a.length;i>=0;i--){
    
// c=a[i]
// console.log(c)
// }
// // console.log(c)


//concat method 
//   a,b,c;
// a=[4,52,22,5]
// b=[9,8,7,6]
// c=a.concat(b)
// console.log(c)

// var a;
// a=[4,52,22,5]
// var b=a.slice(-1)
// console.log(b)

// factorail no find out using the function 
// var f=1,i;
// var a=5;
// for(i=1;i<=a;i++){
//     f=f*i
   
// }
// console.log(f)

//space count 


// var a="pintu karode from chhindwara ";
// var i,c=1;

// for(i=0;i<=a.length;i++){

//   if(a[i]==''){
//     c=c+a[i]
//        console.log("space count="+c)
//   }
   
   
// }
// console.log("space count=")

//promise function


// const fact=(num)=>{
//     return new Promise((resolve,reject)=>{
//         if(typeof num==='number'){
//             var i,f=1;
//             for(i=1;i<=num;i++){
//                 f=f*i;
            
//             }
//             resolve(f);
//             // console.log("factorial no ="+f);
//             //  option hai ye bhi work karta hai 
//         }
        
//         else{
//             reject('the no is not a integer no ');
//        }
        

            
      
//     });
// };
// // calling of asynchronous function 
// (async (res)=>{
//     try{
//         var a=4;
//         var result=await fact(a);
//         console.log("factorial ="+result);
//     }
//     catch(error){
//         console.log('err'+error)
//     }
// })();

// const fact=(a)=>{
//     return new Promise((resolve,reject)=>{
//         if(typeof a=="number"){
               
//               var c=0;
//               for(var i=1;i<=a;i++){
//                   if(a%i==0){
//                       c++;
//                   }
//               }
//                   if(c==2){
//                       resolve("yes"+a)
//                   }
//                   else{
//                      resolve("no")
//                   }

               
                  
//                      }
//                      else{
//                         reject("not integer")
//                      }
//                  })
//              }
//         (async(res)=>{
//             try{
//                  var r=15;
//                  var result =await fact(r)
//                  console.log("factorial no\n"+result)
//                  console.log("okji"+res)

//             }
//             catch(err){
//                 console.log("err"+err)
//             }
//         })()

//splice function in array  kya hota hai us ke bare me batayab  gaya hai is me kya hota hai splice function 
// var a=[1,5,852,62,26]
// var i;
// // b=a.splice(1,2);
// b=a.splice(2);
// console.log(b)

//palindrom no ko string se ya name se compare kare khe dekhta hu hota hai ki nahi

//  var a="kanak";
//  var i;
//  var p=[];
//  for(i=a.length;i>=0;i--){
//     p=p+a[i]

//  }
//  console.log(p)
//  if(a==p){
//     console.log("yes")
//  }
//  else{
//     console.log("no")
//  }

//  let str = "Hello";
// str[0] = "Y";
// console.log(str); // "Hello" — it doesn't change
// b=str.split('e')
// console.log(b);
// a=str.slice(0,2)

// console.log(a);


// function reverseString(str) {
//   let reversed = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed =reversed+ str[i];
//   }
//   return reversed;
// }

// console.log(reverseString("OpenAI")); // "IAnepO"
// let n = [1, 2, 3, 4,5];
// n.map((item,index)=>{
//    // a=item%2==0
//    if(item%2==0){
//       // console.log(item)
//        console.log(index)
//    }
//    // console.log(a)
//    // console.log(index)
// })
// console.log("filter ")
// let numbers1 = [1, 2, 3, 4];
//  numbers1.filter(num =>{
//    n=num*2;
//    console.log(n)
//  });
//  console.log("filter reduce  ")
 let numbers4 = [1, 2, 3, 4, 5];
var b;
 numbers4.reduce((acc, curr) =>{
    b=acc+curr;
   // console.log(b)
})
 console.log(b)

 var a=5;
 if(a=="5"){
   console.log("yes")
 }

 console.log("arms o")
 u=1634;
a1=parseInt(u/1000);
a21=parseInt(u/100)%10;

a31=parseInt(u/10)%10;
a41=parseInt(u%10);
h=a1*a1*a1*a1+a21*a21*a21*a21+a31*a31*a31*a31+a41*a41*a41*a41;
console.log("arms"+h)
if(u==h){
    console.log("yes")
}
// console.log("no")
 console.log("noooprime")
a=19;
c=0;
for(var i=1;i<=a;i++){
  if(a%i==0){
    c++
  }
}
if(c==2){
  console.log("prime")
}
else{
  console.log("sorry")
}

a=[1,3,25,7]
b=Math.max(...a)
console.log(b)


var d=10;
var f=20;
console.log("d="+d)
