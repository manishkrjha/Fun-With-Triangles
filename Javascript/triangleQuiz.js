var input = document.querySelector('.quiz-form');
var btn = document.querySelector('#btn');
var output = document.querySelector('#output') 

const correctAnswer = ['90°', 'right angled', 'one right angle', '12, 16, 20', 'Equilateral triangle', '85°', '30°', 'a + b + c', 'no', '30°']
function scoreCalculator(){
    // console.log('called line 7');
    let score = 0;
    let i = 0;

    var response = new FormData(input);
    for(let val of response.values()){
        if(val === correctAnswer[i]){
            score = score + 1;
        }
        i = i + 1;
    } 

    console.log(score);
    output.innerHTML = 'Your final score is ' + score;
}

btn.addEventListener('click', scoreCalculator);