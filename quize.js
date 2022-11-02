
// const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       audio.play();
//     });
//   });
let q=[
    {
        // URL:"https://www.quizexpo.com/wp-content/uploads/2020/02/22-super-saiyan-wallpaper-9-1-1024x576.png",
        question: "Q1: how many tail beast in Naruto ?",
        a:"8",
        b:"9",
        c: "10",
        d:"6",
        ans:"ans3"
    },
    {
        question: "Q2:what is goku signature move ?",
        a:"final flash",
        b:"instant transmission",
        c: "spical bean canon ",
        d:"kamehameha",
        ans:"ans4"
    },
    {
        question: "Q3: how many kids naruto have ?" ,
        a:"4",
        b:"2",
        c: "1",
        d:"3",
        ans:"ans2"
    },
    {
        question: "Q4: what is the name of luffy devil fruit ?",
        a:"fire fire",
        b:"water water",
        c: "chop chop ",
        d:"gum gum",
        ans:"ans4"
    },
    {
        question: "Q5: what naruto want to be ?",
        a:"leader",
        b:"king",
        c: "hokage",
        d:"raikage",
        ans:"ans3"
    },
    {
        question: "Q6: who is pokemon anime main character ?",
        a:"Ash",
        b:"pikachu",
        c: "gary",
        d:"brock",
        ans:"ans1"
    },
    {
        
        question: "Q7: What kind of wizard is Lucy in “Fairy Tail” anime?",
        a:"Ice Wizard",
        b:"Sky Wizard",
        c: "Celestial Wizard",
        d:"Fire Wizard",
        ans:"ans3"
    },
    {
        
        question: "Q8: Which of the following characters does the Gum-Gum Pistol attack belong to ?",
        a:"Black Butler",
        b:"Chobits",
        c: "Titan",
        d:"Monkey D. Luffy",
        ans:"ans4"
    },
    {
        
        question: "Q9: who is luffy frist recqueiter ?",
        a:"Rorona Zoro",
        b:"Nami",
        c:"Nico Robin ",
        d:"Usopp",
        ans:"ans1"
    },
    {
        
        question: "Q10: what Asta want to be in anime “?",
        a:"wizard king",
        b:"hokage",
        c:"prirate king",
        d:"Demon king",
    
        ans:"ans1"
    },

    
]; 
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');
let questionCount=0;
let score=0;


const loadQuestion=()=>{
    const questionList=q[questionCount]
    // question.innerHTML= q[questionCount].question;
        question.innerHTML=questionList.question;  
        
       option1.innerHTML=questionList.a;
       option2.innerHTML=questionList.b;
       option3.innerHTML=questionList.c;
       option4.innerHTML=questionList.d;
}
loadQuestion();

const getCheckAnswer=()=>{
let answer;

answers.forEach((currentAnsEle)=>{
if(currentAnsEle.checked){
    answer=currentAnsEle.id;
}

});
return answer;
};
const deselectall=()=>
{
    answers.forEach((customElements)=>customElements.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==q[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectall();
    if(questionCount<q.length){
        loadQuestion();
    }else{
        showscore.innerHTML=`
        <h3> Your Score ${score}/${q.length}✌️✌️✌️</h3>
        <button class="btnr" onClick="window.location.reload();">Play Again</button>
        `;
        showscore.classList.remove('scorearea');
    }
});