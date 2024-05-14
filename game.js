let cnt = 1

// let buttons = document.querySelectorAll('button')
// let arrayButtons = Array.from(buttons)

let inputs = document.querySelectorAll('input')
let inputsArray = Array.from(inputs)

let btn1 = document.getElementById('bt1')
let btn2 = document.getElementById('bt2')
let btn3 = document.getElementById('bt3')
let btn4 = document.getElementById('bt4')
let btn5 = document.getElementById('bt5')
let btn6 = document.getElementById('bt6')
let btn7 = document.getElementById('bt7')
let btn8 = document.getElementById('bt8')
let btn9 = document.getElementById('bt9')

let resetBtn = document.querySelector('button')

let printResult = document.querySelector('#print')

document.querySelector('#msg').innerHTML = `X's turn`

function btnClick (e) {
    // console.log('click me');

    if(cnt == 1){
        e.target.value = 'X'    
        e.target.disabled = true
        document.querySelector('#msg').innerHTML = `O's turn`
        cnt = 0
    }
    else{
        e.target.value = 'O'    
        e.target.disabled = true
        document.querySelector('#msg').innerHTML = `X's turn`
        cnt = 1
    }

    result(e)
}

function result (e) {
    
    let b1 = document.querySelector('#bt1').value
    let b2 = document.querySelector('#bt2').value
    let b3 = document.querySelector('#bt3').value
    let b4 = document.querySelector('#bt4').value
    let b5 = document.querySelector('#bt5').value
    let b6 = document.querySelector('#bt6').value
    let b7 = document.querySelector('#bt7').value
    let b8 = document.querySelector('#bt8').value
    let b9 = document.querySelector('#bt9').value

    if(b1 == 'X' && b2 == 'X' && b3 == 'X'){

        printResult.style.display = 'inline'
        document.querySelector('#print').innerHTML = 'Player X Win'

        btn4.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true;

        

        btn1.style.color = 'red'
        btn2.style.color = 'red'
        btn3.style.color = 'red'
    }
    else if(b4 == 'X' && b5 == 'X' && b6 == 'X') {
        document.querySelector('#print').innerHTML = 'Player X Win'

        btn1.disabled = true; 
        btn2.disabled = true; 
        btn3.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true;  

        btn4.style.color = 'red'
        btn5.style.color = 'red'
        btn6.style.color = 'red'
    }
    else if(b7 == 'X' && b8 == 'X' && b9 == 'X') {
        document.querySelector('#print').innerHTML = 'Player X Win'

        btn1.disabled = true; 
        btn2.disabled = true; 
        btn3.disabled = true; 
        btn4.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
    
        btn7.style.color = 'red'
        btn8.style.color = 'red'
        btn9.style.color = 'red'
    }
    else if(b1 == 'X' && b4 == 'X' && b7 == 'X') {
        document.querySelector('#print').innerHTML = 'Player X Win'

        btn2.disabled = true; 
        btn3.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true;  
    
        btn1.style.color = 'red'
        btn4.style.color = 'red'
        btn7.style.color = 'red'
    }
    else if(b2 == 'X' && b5 == 'X' && b8 == 'X') {
        document.querySelector('#print').innerHTML = 'Player X Win'

        btn1.disabled = true; 
        btn3.disabled = true; 
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn9.disabled = true;    
    
        btn5.style.color = 'red'
        btn2.style.color = 'red'
        btn8.style.color = 'red'
    }
    else if(b3 == 'X' && b6 == 'X' && b9 == 'X') {
        document.querySelector('#print').innerHTML = 'Player X Win'

        btn1.disabled = true; 
        btn2.disabled = true; 
        btn4.disabled = true; 
        btn5.disabled = true; 
        btn7.disabled = true;    
        btn8.disabled = true; 
 
        btn3.style.color = 'red'
        btn6.style.color = 'red'
        btn9.style.color = 'red'
    }
    else if(b1 == 'X' && b5 == 'X' && b9 == 'X') {
        document.querySelector('#print').innerHTML = 'Player X Win'

        btn2.disabled = true; 
        btn3.disabled = true; 
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
   
        btn1.style.color = 'red'
        btn5.style.color = 'red'
        btn9.style.color = 'red'
    }
    else if(b3 == 'X' && b5 == 'X' && b7 == 'X') {
        document.querySelector('#print').innerHTML = 'Player X Win'

        btn1.disabled = true; 
        btn2.disabled = true; 
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true;
    
        btn7.style.color = 'red'
        btn5.style.color = 'red'
        btn3.style.color = 'red'
    }
    else if(b1 == 'O' && b2 == 'O' && b3 == 'O'){
        document.querySelector('#print').innerHTML = 'Player O Win'

        btn4.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true;
    
        btn1.style.color = 'red'
        btn2.style.color = 'red'
        btn3.style.color = 'red'
    }
    else if(b4 == 'O' && b5 == 'O' && b6 == 'O') {
        document.querySelector('#print').innerHTML = 'Player O Win'

        btn1.disabled = true; 
        btn2.disabled = true; 
        btn3.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true;  

        btn4.style.color = 'red'
        btn5.style.color = 'red'
        btn6.style.color = 'red'
    }
    else if(b7 == 'O' && b8 == 'O' && b9 == 'O') {
        document.querySelector('#print').innerHTML = 'Player O Win'

        btn1.disabled = true; 
        btn2.disabled = true; 
        btn3.disabled = true; 
        btn4.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
    
        btn7.style.color = 'red'
        btn8.style.color = 'red'
        btn9.style.color = 'red'
    }
    else if(b1 == 'O' && b4 == 'O' && b7 == 'O') {
        document.querySelector('#print').innerHTML = 'Player O Win'

        btn2.disabled = true; 
        btn3.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true;  
    
        btn1.style.color = 'red'
        btn4.style.color = 'red'
        btn7.style.color = 'red'
    }
    else if(b2 == 'O' && b5 == 'O' && b8 == 'O') {
        document.querySelector('#print').innerHTML = 'Player O Win'

        btn1.disabled = true; 
        btn3.disabled = true; 
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn9.disabled = true;    
    
        btn2.style.color = 'red'
        btn5.style.color = 'red'
        btn8.style.color = 'red'
    }
    else if(b3 == 'O' && b6 == 'O' && b9 == 'O') {
        document.querySelector('#print').innerHTML = 'Player O Win'

        btn1.disabled = true; 
        btn2.disabled = true; 
        btn4.disabled = true; 
        btn5.disabled = true; 
        btn7.disabled = true;    
        btn8.disabled = true; 
    
        btn9.style.color = 'red'
        btn6.style.color = 'red'
        btn3.style.color = 'red'
    }
    else if(b1 == 'O' && b5 == 'O' && b9 == 'O') {
        document.querySelector('#print').innerHTML = 'Player O Win'

        btn2.disabled = true; 
        btn3.disabled = true; 
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
    
        btn1.style.color = 'red'
        btn5.style.color = 'red'
        btn9.style.color = 'red'
    }
    else if(b3 == 'O' && b5 == 'O' && b7 == 'O') {
        document.querySelector('#print').innerHTML = 'Player O Win'

        btn1.disabled = true; 
        btn2.disabled = true; 
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true;

        btn7.style.color = 'red'
        btn5.style.color = 'red'
        btn3.style.color = 'red'
    }
    
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
    || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
    (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
        b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
    (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
        b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
        
        document.querySelector('#print').innerHTML = 'Match tie' 
    } 
}

function resetGame() {
    // inputs.forEach((input) => {
    //     input.value = ''
    //     input.enabled = true
    // })    

    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
}

inputsArray.forEach((input) => {
    input.addEventListener('click', btnClick)
})

resetBtn.addEventListener('click', resetGame)

