let answer = 0;

function mathWiz(opp) {
  const url = "https://x-math.herokuapp.com/api/" + opp;
  const item = document.getElementById("practice-expression");

  fetch(url)
    .then(function(r) {
      return r.json();
    })
    .then(function(e) {
      answer = e.answer;
      console.log(answer);

      let expression = document.createTextNode(e.expression);
      // item.removeChild();
      item.appendChild(expression);
    });
}

// function() {

// }

window.onload = function() {
  mathWiz("random");
};

document.getElementById("another").onclick = function() {
  document.getElementById("practice-expression").textContent = "";
  mathWiz("random");
};

document.getElementById("check-button").onclick = function() {
  const userResponse = document.getElementById("user-answer");
  const userValue = userResponse.value;
  userResponse.value =
    userValue + (userValue === answer + "" ? " Correct" : " Wrong");
};
