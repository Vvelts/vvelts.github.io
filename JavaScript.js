  
function st(){
    var k=document.getElementById("k").value;
    var s=document.getElementById("s").value;
    var r=document.getElementById("res");
    r.innerHTML=k*s;
    }
    window.document.addEventListener("DOMContentLoaded", function (st) {
        console.log("DOM fully loaded and parsed");
        var b = document.getElementById("knopka");
        b.addEventListener("click", st);
    });