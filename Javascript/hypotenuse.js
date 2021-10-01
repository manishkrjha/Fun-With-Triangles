const input = document.querySelectorAll('.inputs');
const btn   = document.querySelector('#btn');
const output = document.querySelector('#output')

function getHypotenuse(){
    var A = parseInt(input[0].value);
    var B = parseInt(input[1].value);

    // console.log('A' + A);
    
    return Math.sqrt((A*A + B*B));
    // console.log('gh');
}

function displayResult(){
    output.innerHTML = 'The value of hypotenous is ' + getHypotenuse().toFixed(2);
    // console.log('dr called');
}

btn.addEventListener('click', displayResult)