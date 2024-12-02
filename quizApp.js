let ansBtn = document.getElementsByClassName ('button');
let nextBtn = document.getElementById('next');
let choose = true;
let index = 0;
let questionStatement = document.getElementById('question');
let ans = 0;



let questions = [
    {
        question:'What is your name?',
        options:[
            {option:'Atif', status:'false'},
            {option:'Rimsha', status:'true'},
            {option:'Kashif', status:'false'},
            {option:'Samavia', status:'false'},
        ]
    },
    {
        question:'What is your choice?',
        options:[
            {option:'IT', status:'true'},
            {option:'CHEM', status:'false'},
            {option:'PSY', status:'false'},
            {option:'NONE', status:'false'},
        ]
    },
    {
        question:'What did you like?',
        options:[
            {option:'A Mobile', status:'false'},
            {option:'A Smart watch', status:'false'},
            {option:'A Laptop', status:'true'},
            {option:'A Tablet', status:'false'},
        ]
    },
    {
        question:'How old are you?',
        options:[
            {option:'22', status:'false'},
            {option:'20', status:'true'},
            {option:'24', status:'false'},
            {option:'18', status:'false'},
        ]
    },
    {
        question:'What is color of your eyes?',
        options:[
            {option:'Blue', status:'false'},
            {option:'Gray', status:'false'},
            {option:'Black', status:'false'},
            {option:'Brown', status:'true'},
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