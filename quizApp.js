let ansBtn = document.getElementsByClassName ('button');
let nextBtn = document.getElementById('next');
let choose = true;
let index = 0;
let questionStatement = document.getElementById('question');
let ans = 0;



let questions = [
    {
        question:'How many days are there in a week?',
        options:[
            {option:'3 days', status:'false'},
            {option:'7 days', status:'true'},
            {option:'8 days', status:'false'},
            {option:'11 days', status:'false'},
        ]
    },
    {
        question:'How many hours are there in a day?',
        options:[
            {option:'24 hours', status:'true'},
            {option:'18 hours', status:'false'},
            {option:'8 hours', status:'false'},
            {option:'20 hours', status:'false'},
        ]
    },
    {
        question:'How many letters are there in the English alphabet?',
        options:[
            {option:'20 letters', status:'false'},
            {option:'22 letters', status:'false'},
            {option:'26 letters', status:'true'},
            {option:'30 letters', status:'false'},
        ]
    },
    {
        question:'Rainbow consist of how many colours?',
        options:[
            {option:'5 colors', status:'false'},
            {option:'7 colors', status:'true'},
            {option:'3 colors', status:'false'},
            {option:'8 colors', status:'false'},
        ]
    },
    {
        question:'How many minutes are there in an hour?',
        options:[
            {option:'10 minutes', status:'false'},
            {option:'20 minutes', status:'false'},
            {option:'30 minutes', status:'false'},
            {option:'60 minutes', status:'true'},
        ]
    }
]


function select(){

    questionStatement.textContent = questions[index].question;
for(let i = 0; i < ansBtn.length; i++){
    ansBtn[i].textContent = questions[index].options[i].option;
    ansBtn[i].classList.remove('correct', 'incorrect'); 

    ansBtn[i].addEventListener('click', function(){
        if(choose === true){
        check(ansBtn[i]);
        nextBtn.style.display = 'block';    
        choose = false;
    }
    });
}
}
select();

nextBtn.addEventListener('click', function(){
    if(index < questions.length - 1){
    index++;
    choose = true;
    nextBtn.style.display = 'none';
    select();
    }else{
        remove();           
    }
})

function remove(){
    nextBtn.style.display = 'none';
        questionStatement.style.fontSize = '30px';
        questionStatement.textContent = `Test Scores:  ${ans} / ${index+1}`;
        document.getElementById('buttons').style.display = 'none';
        let result = document.createElement('h1');
        questionStatement.appendChild(result);
        if(ans >= 3){       
        result.textContent = "YOU PASS";
        }else{
        result.textContent = "YOU FAIL";
        result.style.color = 'red';
        let retake = document.createElement('button');
        retake.textContent = 'Retake Test';
        result.appendChild(retake);
        retake.classList.add('restart');

        retake.addEventListener('click', function(){
            location.reload();
        });
        };
        
}

function check(selectedButton) {
    const selectedIndex = Array.from(ansBtn).indexOf(selectedButton);
    const currentStatus = questions[index].options[selectedIndex].status;

    if (currentStatus === 'true') {
        selectedButton.classList.add('correct');
        ans++;
    } else {
        selectedButton.classList.add('incorrect');
    }
}
