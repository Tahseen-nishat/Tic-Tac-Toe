let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rstbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let pO=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(pO){
            box.innerText="O";
            pO=false;
        }else{
            box.innerText="X";
            pO=true;
        }
        box.disabled=true;
        count++;
        
        if(count===9){
            gamedraw();
        }
        checkwinner();
    })
});
const gamedraw=()=>{
    msg.innerText=`Oh!..Noo It's a Draw`;
    disableBoxes();
};
const checkwinner = () =>{
    for(let pattern of winPatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!=""&&p2!=""&&p3!=""){
            if(p1===p2 && p2===p3){
                showWinner(p1);
                return true;
            }
        }
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame = () =>{
    pO=true;
    msg.innerText=`Welcome..! to the Tic-Tac-Toe Game.. Lets play`;
    enableboxes();
    msgContainer.classList.add("hide");
};

newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);


