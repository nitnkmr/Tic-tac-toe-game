

let entryText = "x"
let count = 0;
let reset = document.getElementById("single").addEventListener("click", hello)
let boxes = document.getElementsByClassName("box");
let winArray = ["123","456","789","147","258","369","159","358"]
let p1 = ""
let p2 = ""
function hello(){
    
}
function handleClick(i,e){
    if(!boxes[i-1].innerText){
 count%2 == 0 ? entryText = "x": entryText = "o";
 boxes[i-1].innerText = entryText;
  if(entryText.toLowerCase()!="x"){
     boxes[i-1].style.color = "red"
     p2 = p2 + i;
    }else{
        boxes[i-1].style.color = "blue"
        p1 = p1 + i;
  }
   console.log(boxes[i-1]);
   count++;
}else{
    alert("Box is already fill")
}
checkWin();
}
// function trackEntry(){
//     count%2 == 0 ? entryText = "x": entryText = "o";
// }
function checkWin(){
    console.log(p1);
    console.log(p2);
  let result1 =  winArray.some(str => str == p1)
  let result2 =  winArray.some(str => str == p2)
   if(result1 == true){
       for(let i =0;i<9;i++){
           boxes[i].innerText = "x"
           boxes[i].style.color = "blue"
        }
        setTimeout(()=>{
        alert("player1 is winner")
        },500)
   }
   if(result2 == true){
    for(let i =0;i<9;i++){
        boxes[i].innerText = "o"
        boxes[i].style.color = "red"
     }
     setTimeout(()=>{
     alert("player2 is winner")
     },500)
   }
}