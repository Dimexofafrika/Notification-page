const num = document.getElementById("count");
const bc = document.querySelectorAll(".post1, .post2, .post3");
const dot = document.querySelectorAll("#notice");


function clearNum(){
    num.innerText = 0
    bc[0].style.backgroundColor = '#fff'
    bc[1].style.backgroundColor = '#fff'
    bc[2].style.backgroundColor = '#fff'
    dot[0].style.backgroundColor = '#fff'
    dot[1].style.backgroundColor = '#fff'
    dot[2].style.backgroundColor = '#fff'

}