// Step 1 : We have take all the instances of every node that we want to change
let body = document.getElementsByTagName("body");
let again = document.querySelector(".again");
let numbers = document.querySelector(".number");
let guessValue = document.querySelector(".guess");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");

// Step 2 : Generate a Random Number
let RandomNumber = Math.trunc(Math.random() * 20) + 1;
let Scores = 20;
console.log(RandomNumber);

// Step 3: Check button Functionality
const checkNo = () => {
  const guess = Number(guessValue.value);
  if (!guess) {
    message.textContent = "No Value written";
  } else if (guess === RandomNumber) {
    // Step 3.1:User entered number is equal to random number
    numbers.textContent = RandomNumber;
    // 3.1.1 Change color to green
    document.querySelector("body").style.backgroundColor = "green";
    // 3.1.2 Change Message to "correct Number"
    message.textContent = "Correct Number";
    // 3.1.3 Check score is greate than hisghscore or not if yes then put that valuer inside highscore

    highscore.textContent = Scores;
  } else if (guess < RandomNumber) {
    // Step 3.2:User entered number is less than  random number

    // 3.2.1 reduce the score by 1
    Scores = Scores - 1;
    score.textContent = Scores;
    // 3.2.2 Chnage message text Too low
    message.textContent = "Too Low ...";
  } else if (guess > RandomNumber) {
    // Step 3.2:User entered number is greater than  random number
    Scores -= 1;
    score.textContent = Scores;
    // 3.2.1 reduce the score by 1
    // 3.2.2 Chnage message text Too high
    message.textContent = "Too High ...";
  }
};
check.addEventListener("click", checkNo);

// step 4 user click on Again button
again.addEventListener("click", function () {
  RandomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "black";
  Scores = 20;
  score.textContent = 20;
  message.textContent = "Start Guessing ...";
  numbers.textContent = "?";
});
// Change backgroud color
// Generate a new random Number
// Score will be 20 again
