//Question 1
const button1 = document.getElementById('button1');
console.log(button1);

const button1Text = document.getElementById('text');

button1.onclick = function(){
    button1Text.innerText = "I'm right";
}

const button2 = document.getElementById('button2');
console.log(button2);

button2.onclick = function(){
    button1Text.innerText = "No, I'm right!";
}

//Question 2
const select = document.querySelector('#stop');
select.onmouseover = function() {
    alert("Hey, I told you not to hover over me!");
}

//Question4
document.getElementById("subButton").addEventListener("click", function(event){
    event.preventDefault();
    const value  = document.getElementById("pw").value;
    const h1Tag = document.getElementById("loginHeader");
    if(value === "12345678")
    {
        h1Tag.innerText = "Login Sucess"
    }
    else{
     alert("Password is incorrect!")
     h1Tag.innerText = "Login Failed";
    }
});

//Bonus
const volButton = document.getElementById('volume');
volButton.onclick = function() {
    const answer = document.getElementById('answer');
    const radius = document.getElementById('radius').value;
    const pi = 3.14159265359;
    const updateRadius = Math.pow(radius, 3);
    answer.innerText = "Volume = " + 4/3 * pi * updateRadius;
}