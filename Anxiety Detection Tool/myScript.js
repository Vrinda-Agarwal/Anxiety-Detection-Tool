// On button click 
// only for page 1 
const disease = [false,false,false,false,false];
const have_disease = [false,false,false,false,false,false];
const ans = [];
var index = 0;
var d1=0;
var d2=0;
var d3=0;
var d4=0;
var d5=0;
var d6=0;

// ORDER -: OCD , PTSD , Social anxiety , seperation ,gcd , panic
var d1total = 3;
var d2total = 14;
var d3total = 8;
var d4total = 4;
var d5total = 9;
var d6total = 5;

// for page 1 each question will have a different id
function question1(){
    document.getElementById('button1').addEventListener("click", function() { // ques 1 
        disease[0]=true;
     });
}
function question2(){
     document.getElementById('button1').addEventListener("click", function() { // ques 2
        disease[1]=true;
     });
}

function question3(){
     document.getElementById('button1').addEventListener("click", function() { // ques 3
        disease[2]=true;
     });
}
function question4(){
     document.getElementById('button1').addEventListener("click", function() { // ques 4
        disease[3]=true;
     });
}
function question5(){
     document.getElementById('button1').addEventListener("click", function() { // ques 5 for gcd and panic
        disease[4]=true;
     });
}


// on clicking submit button
function submit() { 
    document.getElementById('button6').addEventListener("click", function() { // seperation
    var flag=0;
    for (index = 0; index < disease.length; index++) {
        const element = disease[index];
        if(element==true){
            // on click
            var string = "./" +"p"+toString(index+2)+".html"; // /page(no.).html
            index++;
            window.location.href=string; 
            flag=1;
            break;
        }
    }
    if(flag==1){
        check();
    }
});
}

// for next web pages

function page1buttons(){
    document.getElementById('button1').addEventListener("click", function() { // for ocd
        d1++;
     });
}

function page2buttons(){
    document.getElementById('button1').addEventListener("click", function() { // for PTSD
        d2++;
     });
}

function page3buttons(){
    document.getElementById('button1').addEventListener("click", function() { // for social anxiety
        d3++;
     });
}

function page4buttons(){
    document.getElementById('button1').addEventListener("click", function() { // seperation
        d4++;
     });
}

function page5buttons(){
    document.getElementById('button1').addEventListener("click", function() { // for gad 
        d5++;
     });
    // do not have the function name "next" in the submit button
}

function page6buttons(){
    document.getElementById('button1').addEventListener("click", function() { // for panic 
        d6++;
     });
    check();
}

// on clicking next in the web page

function forPage5(){
    window.location.href="./page6.html" ;
}

function next(){
    var flag=0;
    for(let i=index ;i < disease.length ; i++){
        const element = disease[i];
        if(element==true){
            // on click
            var string = "./" +"p"+toString(i+2)+".html"; // /page(no.).html
            i++;
            index=i;
            window.location.href=string;
            flag=1; 
            break;
        }
     }
    if(flag==0){
        check();
    }
}

function check(){
    if((d1/d1total)*100 >= 75){
        have_disease[0]=true;
        ans.push("You have Obsessive-Compulsive Disorder(OCD).")
    }
    if((d2/d2total)*100 >= 75){
        have_disease[1]=true;
        ans.push("You have Post-traumatic stress disorder(PTSD).")
    }
    if((d3/d3total)*100 >= 75){
        have_disease[2]=true;
        ans.push("You have Social anxiety diorder.");
    }
    if((d4/d4total)*100 >= 75){
        have_disease[3]=true;
        ans.push("You have seperation disorder.");
    }
    if((d5/d5total)*100 >= 75){
        have_disease[4]=true;
        ans.push("You have Generalized Anxiety Disorder.")
    }
    if((d6/d6total)*100 >= 75){
        have_disease[5]=true;
        ans.push("Panic Disorder.")
    }
}

// printing the output on new webpage



// <ul id="myList"></ul>
// <script>
//   let data = ["Ram", "Shyam", "Sita", "Gita"];

//   let list = document.getElementById("myList");

//   data.forEach((item) => {
//     let li = document.createElement("li");
//     li.innerText = item;
//     list.appendChild(li);
//   });
// </script>