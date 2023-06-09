var readline=require('readline-sync');
var name=readline.question("What is your name? ");
console.log("Welcome",name,",Do you know Aryan Mehta?");
var choice= readline.question("Welcome",name,",Do you know Aryan Mehta?");
if(choice=="Yes"){
  console.log("Great!");
  
}
else{
  console.log("He will be the CEO of Google.");
}
var score=0;
function play(question,answer){
  var useranswer=readline.question(question);
  if(useranswer==answer){
    score++;
  }
  else{
    score--;
  }
  console.log("YOU ARE RIGHT");
  console.log(score);
}


var questions =[{
  question:"Who is my crush? ",
  answer:"Kashish Sachdeva",
},{
  question:"Who is my biggest inspiration?",
  answer:"MS Dhoni",
}];

for(var i=0;i<questions.length;i++){
  var currentQue=questions[i];
  play(currentQue.question,currentQue.answer);
}