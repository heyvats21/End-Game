//End Game 
//Let's Play it 

var readlineSync=require("readline-sync")

var score=0;
function endGame(question,answer){
  var userAnswer=readlineSync.question(question)

  if(userAnswer==answer){
    console.log("right")
    score++
    
  }else{
    console.log("wrong")
    score--
    

  }
  console.log(score)
  console.log("======================")
}

var questionList=[{
  question:"How many Infinity Stones are there? ",
  answer:"Six"
},{
  question:"What is the Name of IronMan? ",
  answer:"Tony Stark"
},{
  question:"Who was able to pick up Thor’s hammer in Endgame? ",
  answer:"Captain America"
},{
  question:"Black Panther is set in which fictional country? ",
  answer:"Wakanda"
},{
  question:"What type of doctor is Doctor Strange? ",
  answer:"Neurosurgeon"
}]

for(var i=0;i<questionList.length;i++){
 var  current_question=questionList[i]
  endGame(current_question.question,current_question.answer)
}