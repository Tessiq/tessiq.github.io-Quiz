function check()
{
    var score=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    
    if(q1=="B"){
        score++;
        document.getElementById("q1").style.color = "green";
    }
    else{
        document.getElementById("q1").style.color = "red";
    }
    if(q2=="C"){
        score++;
        document.getElementById("q2").style.color = "green";
    }
    else{
        document.getElementById("q2").style.color = "red";
    }
    if(q3=="B"){
        score++;
        document.getElementById("q3").style.color = "green";
    }
    else{
        document.getElementById("q3").style.color = "red";
    }
    if(q4=="B"){
        score++;
        document.getElementById("q4").style.color = "green";
    }
    else{
        document.getElementById("q4").style.color = "red";
    }
    if(q5=="A"){
        score++;
        document.getElementById("q5").style.color = "green";
    }
    else{
        document.getElementById("q5").style.color = "red";
    }
    
    var percent= (score/5)*100;
  
 document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}