let display1 = document.querySelector('.display1');
let display2 = document.querySelector('.display2'); // Fixed spelling
const buttons = document.querySelectorAll('.flex-box');
let lastbtn;
let output1;
let o="";
let ocount=0;
let i=0;
let arr=[];
let a1 = 0;
let b1 = 0;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent; 
        console.log(buttonText);
        lastbtn = buttonText;

        if (lastbtn == "C") {
            display1.value = "";
            display2.value = "";
            arr = [];
            o = "";
            ocount = 0;
            output1 = 0;
            a1=0;
            b1=0;
        } 
        else if(lastbtn=="="){
      if(ocount>1){
        display1.value="Error ";
         display2.value="press C";
      }
            arr.forEach(num => {
    if (num != "+" && num != "-" && num != "*" && num != "/" && ocount == 0 && num !="=" && num !="C") {
        a1 = a1 * 10 + Number(num);
    } else if (num == "+" || num == "-" || num == "*" || num == "/") {
        if (ocount == 0) {
            o = num;
            ocount++;
        } else {
            console.log("error");
        }
    } else if (num != "+" && num != "-" && num != "*" && num != "/" && ocount > 0) {
        b1 = b1 * 10 + Number(num);
    }
});


if (o == "*") {
    output1 = a1 * b1;  // Multiply if o is '*'
} else if (o == "+") {
    output1 = a1 + b1;  // Add if o is '+'
} else if (o == "/") {
    output1 = a1 / b1;  // Divide if o is '/'
}
else if (o == "-") {
    output1 = a1 - b1;
}

console.log("a1: ", a1, " b1: ", b1, " operator: ", o);

    display2.value=output1;
    arr=[];
    o="";
    ocount=0;
    output1=0;
    a1=Number( display2.value);
    b1=0;

 }
            else {

            display1.value += lastbtn;
            arr.push(lastbtn);
        }
    });
});

