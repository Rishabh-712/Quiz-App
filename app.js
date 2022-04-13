
//selectors
const start = document.querySelector(".start")
const container = document.getElementById("container")
const questionE = document.querySelector(".question")
const quesdiv = document.querySelector(".ques")
const nextbtn=document.querySelector(".next")
// const optionbtn=document.querySelector(".option")
const restart =document.querySelector(".scorecard")
const result =document.querySelector(".score-result")
let shuffledques, currentquesin;
let index=0
let score =0
//Event Listners
start.addEventListener("click", () => {
  start.classList.add("hide")
  container.classList.remove("hide")
  start.addEventListener("transitionend",()=>{
    start.classList.add("none")
  })
  startgame()
  
})
nextbtn.addEventListener("click",()=>{
  quesdiv.classList.remove("pointer")
  startgame()
  
})

restart.addEventListener("click",()=>{location.reload()})
//functions Is Here

function startgame() {
  let nindex=index++
  console.log(nindex)
  // currentquesin=0
  if (arrangeques.length<nindex+1) {
    console.log("stop")
    container.classList.add("hide")
    restart.classList.remove("hide")
    
    
  }
  showques(arrangeques[nindex])
  // console.log(shuffledques)
  
  
}
function showques(sawal) {
  resetState()
  
  questionE.innerText = sawal.question
  sawal.answers.forEach(answers => {
    const newbtn = document.createElement("button")
    newbtn.classList.add("btn")
    newbtn.classList.add("option")
    
    newbtn.innerText=answers.text
    quesdiv.appendChild(newbtn)
    if(answers.correct){
      newbtn.dataset.correct= answers.correct
    }
    // newbtn.addEventListener("click",selectAnswer)
    
    newbtn.addEventListener('click',(e)=>{
      console.log(e.target.dataset.correct)
      if(e.target.dataset.correct){
        console.log("you are correct")
newbtn.classList.add("correctans")
       let nscore=score++
        console.log("your score is "+nscore)
result.innerText=nscore+1

      }
      if (!e.target.dataset.correct) {
        newbtn.classList.add("wrong")
        quesdiv.classList.add("pointer")
      }
    })
  });
  
  
}
//select answer




//reset question
function resetState() {
  // clearStatusClass(document.body)
  while(quesdiv.firstChild){
    quesdiv.removeChild(quesdiv.firstChild)
  }
}
//Clear Status class
// function clearStatusClass(element) {
  //   element.classList.remove("correct")
  //   element.classList.remove("wrong")
  // }
  // function stopquiz(nindex) {
   
  // }
  
  
  //question
  const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]
  console.log(questions[0].answers[0].text)
  
  
  
  
  
  const arrangeques = questions.sort(()=>Math.random()-0.5)