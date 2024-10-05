let output = document.querySelector('.display1'); // Fixed spelling
let text1;
const buttons = document.querySelectorAll('.flex-box');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent; 
        console.log(buttonText);
          if(buttonText=="C"){
            output.value ="";
          }
        //   if (buttonText=="=") {
        //     output.value =output.value+ buttonText;
        //   } else {
            
        //   }
          else{
        output.value =output.value+ buttonText;
          }
    });
});
