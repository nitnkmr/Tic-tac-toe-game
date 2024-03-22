

let entryText = "x"
let count = 0;
// let reset = document.getElementById("single").addEventListener("click", hello)
let boxes = document.getElementsByClassName("box");
let result = document.getElementById("result")
let winArray = ["123","456","789","147","258","369","159","358"]
let p1 = ""
let p2 = ""

hello()
function hello(){
    setTimeout(()=>{
        result.innerText = "Player 1's Turn"
        result.style.backgroundColor = "Yellow"
    },2000)
}
function handleClick(i,e){
    if(!boxes[i-1].innerText){
 count%2 == 0 ? entryText = "x": entryText = "o";
 boxes[i-1].innerText = entryText;
  if(entryText.toLowerCase()!="x"){
     boxes[i-1].style.color = "red"
     p2 = p2 + i;
     result.innerText = "Player 1's Turn"
    }else{
        boxes[i-1].style.color = "blue"
        p1 = p1 + i;
        result.innerText = "Player 2's Turn"
  }
   console.log(boxes[i-1]);
   count++;
   console.log(p1,p2);
}else{
    alert("Box is already fill")
}
checkWin();
}
// function trackEntry(){
//     count%2 == 0 ? entryText = "x": entryText = "o";
// }
let xcount = 0
function checkWin(){
    console.log(p1);
    console.log(p2);
  let result1 =  winArray.some(str => str == p1)
//   let result1 =  winArray.some(str => {
//       console.log(str, "str");
//     for(let i= 0;i<str.length;i++){
//         if(p1.includes(str[i])){
//             console.log(str.length, "length");
//             xcount++;
//             if(xcount > 2){
//                 return true
//             }else{

//                 return false
//             }
//         }else{
//             return false
//         }
//     }
//   })
  let result2 =  winArray.some(str => str == p2)
   if(result1 == true){
       for(let i =0;i<9;i++){
           boxes[i].innerText = "x"
           boxes[i].style.color = "blue"
        }
    result.innerText = "Player 1 is winner"
}
if(result2 == true){
    for(let i =0;i<9;i++){
        boxes[i].innerText = "o"
        boxes[i].style.color = "red"
    }
    result.innerText = "Player 2 is winner"
   }
}