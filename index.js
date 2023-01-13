console.log('hii');
function myFunction(){
    var x=document.getElementById('myLinks');
    var y=document.getElementsByClassName('icon');
    var z=document.getElementsByClassName('close');
   
    if(x.style.display == "block"){
        x.style.display="none";
        y.style.display="block";
        z.style.display="none";

    }
    else{
        x.style.display="block";
        y.style.display="none";
        z.style.display="block";
    }
    
}
//typing animation script
var typed=new Typed(".typing",{
strings: ["Front-End Developer","problem-Solver"],
typeSpeed:100,
backSpeed: 100,
loop:true
});
// var typed=new Typed(".typing1",{
//     strings: ["Hello i am Nandini Shrivastav","Welcome To My Website"],
//     typeSpeed:100,
//     backSpeed: 100,
//     loop:true
//     });