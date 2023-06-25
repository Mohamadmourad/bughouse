document.getElementById('newsNav').addEventListener("click",function fun1(){
    window.location.href="#news";
});

document.getElementById('whatIsNav').addEventListener("click",function fun1(){
    window.location.href="#whatIs";
});

document.getElementById('latestwinnerNav').addEventListener("click",function fun1(){
    window.location.href="#winner";
});

document.getElementById('contactNav').addEventListener("click",function fun1(){
    window.location.href="#contactInfo";
});

document.getElementById('instagram').addEventListener("click",function fun1(){
    window.location.href="https://www.instagram.com/thebughousehub/";
});

document.getElementById('facebook').addEventListener("click",function fun1(){
    window.location.href="https://www.instagram.com/thebughousehub/";
});



document.getElementById('enter').addEventListener("click",function fun1(){
    document.getElementById('hamburgerList').style.display="flex";
    document.getElementById('exit').style.display="flex";  
    document.getElementById('enter').style.display="none";      
});

document.getElementById('exit').addEventListener("click",function fun1(){
    document.getElementById('hamburgerList').style.display="none";
    document.getElementById('exit').style.display="none";  
    document.getElementById('enter').style.display="flex"; 
});

