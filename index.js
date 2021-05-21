// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
        //event should change the text on the page to 'This is really cool!'
        document.querySelector('p').textContent = 'This is really cool!'
      });
      

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);     