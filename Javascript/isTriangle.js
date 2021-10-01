const input = document.querySelectorAll('.inputs');
const btn   = document.querySelector('#btn');
const output = document.querySelector('#output')

function getSumofAngles(){
    var A = parseInt(input[0].value);
    var B = parseInt(input[1].value);
    var C = parseInt(input[2].value);
    
    if(A+B+C === 180){
        return true;
    }else{
        return false;
    }
}

function displayResult(){
    if(getSumofAngles()){
        output.innerHTML = 'Yes!! It is a triangle';
    }else{
        output.innerHTML = 'No. It is not a triangle';
    }
}

btn.addEventListener('click', displayResult)