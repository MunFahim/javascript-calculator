let calcBtn = document.querySelectorAll("#calcBtn");
let screen = document.querySelector(".screen");


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
}


const showValue = ()=>{

}


const setValue = (number)=>{
    numShown = numShown+number;
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
    }
    if (!calcSecond){
        switch (op){
            case "o":
                let neg = parseFloat(numShown) * -1;
                numShown = ""+neg;
                screen.textContent = numShown;
                calcSecond = true;
                break;
            case "p":
                break;
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
            setValue(value[1]);
        }else {
            operator(value[0]);
        }
        
    })
});

