let plus1 = document.getElementById('plus1');
let plus2 = document.getElementById('plus2');
let plus3 = document.getElementById('plus3');
let plus4 = document.getElementById('plus4');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

plus1.addEventListener("click", function() {
    if(plus1.className=="closed"){
        plus1.className="opened";
        p1.style.display = "block";
    } else {
        plus1.className="closed";
        p1.style.display = "none";
    }
  });

  plus2.addEventListener("click", function() {
    if(plus2.className=="closed"){
        plus2.className="opened";
        p2.style.display = "block";
    } else {
        plus2.className="closed";
        p2.style.display = "none";
    }
  });

  plus3.addEventListener("click", function() {
    if(plus3.className=="closed"){
        plus3.className="opened";
        p3.style.display = "block";
    } else {
        plus3.className="closed";
        p3.style.display = "none";
    }
  });

  plus4.addEventListener("click", function() {
    if(plus4.className=="closed"){
        plus4.className="opened";
        p4.style.display = "block";
    } else {
        plus4.className="closed";
        p4.style.display = "none";
    }
  });