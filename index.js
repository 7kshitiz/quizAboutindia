var readlineSync = require("readline-sync");

var score  = 0;

var username = readlineSync.question("WHat is your name\n");
("HEllo "+ username+"\n");
var n = readlineSync.question("DO you know about india\n");

function play(question,a,b,c,d,answer)
{
  console.log(question);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  var useranswer = readlineSync.question();
  if(answer === useranswer)
    {
      console.log("Right");
    score++;
    }
  else
  {
    console.log("Wrong");
  }

  console.log("score = "+score);
}

var questionOne = {
  question:"India is a federal union comprising twenty-eight states and how many union territories?\n",
  oA:"A.6",
  oB:"B.7",
  oC:"C.8",
  oD:"D.9",
  answer:"D"
}

var questionTwo = {
  question:" Which of the following is the capital of Arunachal Pradesh?\n",
  oA:"A.Itanagar",
  oB:"B.Dispur",
  oC:"C.Imphal",
  oD:"D.Panaji",
  answer:"A"
}
var questionThree = {
  question:"What are the major languages spoken in Andhra Pradesh?\n",
  oA:"A.odia and telgu",
  oB:"B.telgu and urdu",
  oC:"C.telgu and kannada",
  oD:"D.All of the language",
  answer:"B"
}

var questionFour = {
  question:" What is the state flower of Haryana?\n",
  oA:"A.Lotus",
  oB:"B.Rhododendron",
  oC:"C.Golden Shower",
  oD:"D.Not declared",
  answer:"A"
}
var questionFive = {
  question:"Which of the following states is not located in the North?\n",
  oA:"A.Jharkhand",
  oB:"B.Jammu and kashmir",
  oC:"C.Himachal pradesh",
  oD:"D.haryana",
  answer:"A"
}

var questionSix = {
  question:"In which of the following state, the main language is Khasi?\n",
  oA:"A.Mizoram",
  oB:"B.Nagaland",
  oC:"C.Meghalaya",
  oD:"D.Tripura",
  answer:"C"
}
var questionSeven = {
  question:"Which is the largest coffee-producing state of India?\n",
  oA:"A.Kerala",
  oB:"B.Tamil Nadu",
  oC:"C.Karnataka",
  oD:"D.Arunachal Pradesh",
  answer:"C"
}

var questionEight = {
  question:"Which state has the largest area?\n",
  oA:"A.Rajasthan",
  oB:"B.Uttar Pradesh",
  oC:"C.Goa",
  oD:"D.Myanmar",
  answer:"A"
}
var questionNine = {
  question:"Which state has the largest population?\n",
  oA:"A.Rajasthan",
  oB:"B.Uttar Pradesh",
  oC:"C.Goa",
  oD:"D.Myanmar",
  answer:"B"
}

var questionTen = {
  question:"In what state is Elephant Falls located?\n",
  oA:"A.Mizoram",
  oB:"B.Orissa",
  oC:"C.Manipur",
  oD:"D.Megahlaya",
  answer:"D"
}

var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen,];

if(n==="yes" || n === "Yes" || n==="YES")
{
for(var i=0;i<questions.length;i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.oA,currentQuestion.oB,currentQuestion.oC,currentQuestion.oD,currentQuestion.answer);
}
}
else
{
  console.log("You are not INDIAN");
}

console.log("\n\n");

if(score>8)
  console.log("You are an indian");
else
  console.log("You are not an indian");