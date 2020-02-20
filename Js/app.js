'use strict';
var grade=0;
var visitor= prompt('what is your name ?');
var vs= visitor.toLocaleUpperCase();
// //vs is the visitor with uppercase function
// console.log('the visitor name '+vs);
alert('hello '+ vs+' Welcome in my website my name is abdallah i want to play guessing game');
alert('i will ask you simple 7 questions and you have to guess the correct answer are you ready ');

var answer_1 = prompt('how old do you think my age 4 Chances?');
// console.log(answer_1);
var correct=false;
answer_1= Number(answer_1);
// console.log('the #1 answer '+typeof( answer_1));
function myAge(answer_1) {
  for (var i = 0; i < 4; i++) {
    if (answer_1 === 23) {
      alert('good job you guess it  1/7');
      correct=true;
      grade++;
      //console.log(grade);
      break;
    } else if ((answer_1 === 20)|| (answer_1 === 21)||(answer_1 === 22)||(answer_1 === 24)||(answer_1 === 25)||(answer_1 === 26)) {
      answer_1= prompt('sorry you answer is wrong but you are so close"+"you are so close');
      answer_1= Number(answer_1);
      correct=false;
      // console.log(correct) ;
    } else if ((answer_1<20)||(answer_1>26)){
      answer_1= prompt(' try but you are so far ');
      answer_1= Number(answer_1);
      correct=false;
    }
  }
  if (correct===true){
    alert(' next questions');
  }else{
    alert('you can try again');
  }
}
myAge(answer_1);




var carType =['ford','mercedes','mercedes','nissan' ];
var rightanswer=false;
var answer_2=prompt('try to guess the type of car i select  you have 6 Chances ?');
function car(answer_2) {
  for (let y = 0; y < 5; y++){
    // console.log(answer_2);
    for (let r = 0; r < carType.length; r++) {
      if (answer_2===carType[r]){
        rightanswer=true;
        break;
      }}
    if(rightanswer)
    {
      alert('you are good you guess it 2/7');
      grade++;
      // console.log(grade);
      break;
    }else
    {answer_2=prompt(' no yet try to guess the type of car i select  you have 6 Chances ?');}
  }
  alert('that was the correct answer   '+ '\' '+ carType +' \'');
}
car(answer_2);





var marriage = prompt('Are you married ?');
//console.log('the 2 answer '+marriage);
var ma = marriage.toLowerCase();
// ma the marriage with lowercase function
//console.log(ma);

function married (ma) {
  while ((ma !== 'y')&&(ma !== 'yes')&&(ma !== 'n')&&(ma !== 'no')){
    // eslint-disable-next-line no-useless-escape
    ma = prompt(' sorry you answer is wrong ' +'\"Are you married ? \"');
    ma = ma.toLowerCase();
    //console.log('the 2 answer '+ma);
  }
  if ((ma === 'yes')||(ma === 'y'))
  {
    alert('that nice i hope you have happy family 3/7');
    grade++;
    // console.log(grade);
  }
  else if ((ma === 'no')||(ma === 'n')){
    alert('me to single live is good hahah ');
  }
}
married(ma);



var travel= prompt (' Did you like to travel ? ');
// console.log('the 3 answer '+travel);
var tr =travel.toLocaleLowerCase();
// tr the travel with lowercase function
// console.log(tr);
function travel1 (tr) {
  while ((tr !== 'y')&&(tr !== 'yes')&&(tr !== 'n')&&(tr !== 'no')){
    // eslint-disable-next-line no-useless-escape
    tr = prompt(' sorry you answer is wrong "+"\" Did you like to travel ? \"');
    tr =tr.toLocaleLowerCase();
    // console.log('the 3 answer '+tr);
  }
  if ((tr === 'yes')||(tr === 'y')){
    alert(' that cool i would to go all over the world 4/7');
    grade++;
    // console.log(grade);
  }
  else if ((tr === 'no')||(tr === 'n')){
    alert('oh i think you most try it ');
  }
}
travel1(tr);





var read= prompt (' Did you like to read ? ');
// console.log('the 4 awnser '+read);
var re =read.toLocaleLowerCase();
// re the read with lowercase function
// console.log(re);
function read1(re) {
  while ((re !== 'y')&&(re !== 'yes')&&(re !== 'n')&&(re !== 'no')){
    // eslint-disable-next-line no-useless-escape
    re = prompt(' sorry you answer is wrong "+"\" Did you like to read ?\"');
    re =re.toLocaleLowerCase();
    // console.log('the 4 answer '+re);
  }
  if ((re === 'yes')||(re === 'y')){
    alert('that amazing try Agatha Christie books 5/7');
    grade++;
    // console.log(grade);
  }
  else if ((re === 'no')||(re === 'n')){
    alert('i hope you did not waste you time so hahah  ');
  }
}
read1(re);


var tec= prompt ('Did you like technology ? ');
// console.log('the 5 awnser '+t);
var t =tec.toLocaleLowerCase();
// t the tec with lowercase function
// console.log(t);

function tecnology(t) {
  while ((t !== 'y')&&(t !== 'yes')&&(t !=='n')&&(t !== 'no')){
    // eslint-disable-next-line no-useless-escape
    t = prompt(' sorry you answer is wrong "+"\" Did you like technology ?\"');
    t =t.toLocaleLowerCase();
    // console.log('the 7 answer '+tec);
  }
  if ((t === 'yes')||(t === 'y')){
  
    alert('that amazing go learn some code language so you can be involve 6/7');
    grade++;
    // console.log(grade);
  }
  else if ((t ==='no')||(t ==='n')){
    alert('sorry but go die ');
    grade++;
  }
}
tecnology(t);


var enjoy= prompt ('Did you enjoy guessing game ? ');
// console.log('the 5 awnser '+t);
var en =enjoy.toLocaleLowerCase();
// t the tec with lowercase function
// console.log(t);
function enjoy1(en) {
  while ((en !== 'y')&&(en !== 'yes')&&(en !=='n')&&(en !== 'no')){
    // eslint-disable-next-line no-useless-escape
    en = prompt(' sorry you answer is wrong "+"\" Did you enjoy guessing game ? \"');
    en =en.toLocaleLowerCase();
    // console.log('the 7 answer '+tec);
  }
  if ((en === 'yes')||(en === 'y')){
    alert('thank you i enjoy too 7/7');
    grade++;
    // console.log(grade);
  }
  else if ((en ==='no')||(en ==='n')){
    alert(' sorry of i waste you time ');
  }
}
enjoy1(en);


alert('thank you ' + visitor + ' i enjoy playing with you your grade is  ' + grade+'  / 7   good i hope you have good day ');
