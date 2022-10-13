let answer = 0;


function mathWiz(opp) {
    
    console.log("Hi");
    
    const url = "https://x-math.herokuapp.com/api/" + opp;
    const item = document.getElementById("practice-expression")
    
    fetch(url) 
    .then ((function(r) {
        return r.json();
    })) .then (function(e) {
        answer = e.answer;
        console.log(answer);
    
        let expression = document.createTextNode(e.expression);
        // item.removeChild();
        item.appendChild(expression);
        console.log("success");
    });
    
}

window.onload = function() {
      mathWiz("random");
};