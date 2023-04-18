

let calcBtn = document.querySelectorAll("#calcBtn");
let screen = document.querySelector(".screen");
let time = document.querySelector("#time");

let calcSecond = false;
let opInUse = "";

let firstNum = 0;
let SecondNum = 0;

let numShown = "";


const calculate = (op, firstNum, secondNum)=>{
    switch (op){
        case "/":
            numShown = Math.round((firstNum/secondNum) * 100) / 100;
            screen.textContent = numShown;
            break;
        case "m":
            numShown = Math.round((firstNum*secondNum) * 100) / 100;
            screen.textContent = numShown;
            break;
        case "-":
            numShown = Math.round((firstNum-secondNum) * 100) / 100;
            screen.textContent = numShown;
            break;
        case "+":
            numShown = Math.round((firstNum+secondNum) * 100) / 100;
            screen.textContent = numShown;
            break;
        default:
            break;
    }
    firstNum = 0;
    secondNum = 0;
    opInUse = "";
    numShown = "";
    checkLen();
}

const checkLen = ()=>{
    if (numShown.length > 11){
        screen.setAttribute("id", "screen-28");
    }else if (numShown.length > 8){
        screen.setAttribute("id", "screen-40");
    }else if (numShown.length > 5){
        screen.setAttribute("id", "screen-52");
    }else {
        screen.setAttribute("id", "screen-64");
    }
}


const setValue = (number)=>{
    numShown = numShown+number;
    checkLen();
    screen.textContent = numShown;
}

const operator = (op)=>{

    if(op == "c"){
        numShown = "";
        opInUse = "";
        firstNum = 0;
        secondNum = 0;
        screen.textContent = numShown;
        calcSecond = false;
        checkLen();
    }

    if (op == "d" && numShown != "" && !numShown.includes(".")){
        numShown = numShown+".";
        screen.textContent = numShown;
    }
    // TODO: create switch loop for each case of the letters
    if (op == "e" && calcSecond && numShown != ""){
        secondNum = parseFloat(numShown);
        calculate(opInUse, firstNum, secondNum);
        calcSecond = false;
        checkLen();
    }
    if (op == "p" && numShown!= ""){
        console.log("test");
        let percent = parseFloat(numShown)/100;
        numShown = percent;
        screen.textContent = numShown;
    }
    if (op == "o" && numShown != ""){
        let neg = parseFloat(numShown) * -1;
        numShown = neg;
        screen.textContent = numShown;
    }
    

    if (!calcSecond){
        switch (op){
            case "f":
                opInUse = "/";
                firstNum = parseFloat(numShown);
                numShown = "";
                screen.textContent = numShown;
                calcSecond = true;
                break;
            case "m":
                opInUse = "m";
                firstNum = parseFloat(numShown);
                numShown = "";
                screen.textContent = numShown;
                calcSecond = true;
                break;
            case "s":
                opInUse = "-";
                firstNum = parseFloat(numShown);
                numShown = "";
                screen.textContent = numShown;
                calcSecond = true;
                break;
            case "a":
                opInUse = "+";
                firstNum = parseFloat(numShown);
                numShown = "";
                screen.textContent = numShown;
                calcSecond = true;
                break;
            default:
                break;
        }
    }

}


calcBtn.forEach(element => {
    element.addEventListener("click", ()=>{
        let value = element.getAttribute("value");
        if (value[0] == "n"){
            if (numShown.length < 14){
                setValue(value[1]);
            }
            console.log(numShown);
        }else {
            operator(value[0]);
        }
        
    })
});

document.addEventListener("keydown", (e)=>{
    console.log(e);
   if (parseInt(e.key) > -1 && parseInt(e.key) < 10){
        if (numShown.length < 14){
            setValue(e.key);
        }
   }
   switch (e.key){
    case "*":
        operator("m");
        break;
    case "/":
        operator("f");
        break;
    case "-":
        operator("s");
        break;
    case "+":
        operator("a");
        break;
    case "%":
        operator("p");
        break;
    case "Backspace":
        operator("c")
        break;
    case "Enter":
        operator("e")
        break;
    case ".":
        operator("d");
        break;

   }
})





let setTime = ()=>{
    let t = new Date();
    let hour = t.getHours();
    let min = t.getMinutes();
    time.textContent = `${hour}:${min}`;
}

setInterval(() => {
    setTime();
    
},10000);

setTime();