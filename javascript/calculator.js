let calculator='';
function cal(value){
  calculator += value;
  document.getElementById('showingtext').innerHTML=calculator;
}
function equal(){
  document.getElementById('result').innerHTML=(`${eval(calculator)}`);
}
function delete1(){
 calculator = calculator.slice(0,calculator.length-1);
 document.getElementById('showingtext').innerHTML=calculator;
}
function alldelete(){
  calculator ='';
  document.getElementById('showingtext').innerHTML=0;
  document.getElementById('result').innerHTML=0;
}