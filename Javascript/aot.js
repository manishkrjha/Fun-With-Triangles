const input = document.querySelectorAll('.inputs');
const btn   = document.querySelector('#btn');
const output = document.querySelector('#output')

function getAreaOfTraingle(){
    var A = parseInt(input[0].value);
    var B = parseInt(input[1].value);
    var C = parseInt(input[2].value);
    
    var s = (A + B +C)/2;
    var prod = (s*(s-A)*(s-B)*(s-C));
    return Math.sqrt(prod);
}

function displayArea(){
    var area = getAreaOfTraingle();
    output.innerHTML = `Area by heron's formula: ${area}`;
}

btn.addEventListener('click', displayArea)