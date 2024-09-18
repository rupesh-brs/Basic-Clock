function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate the rotation degrees
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

  // Select clock hands
  const secondHand = document.getElementById('secondHand');
  const minuteHand = document.getElementById('minuteHand');
  const hourHand = document.getElementById('hourHand');
  const timeDisplay = document.getElementById('timeDisplay');

  // Rotate the hands based on the time
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeDisplay.textContent = formattedTime;
}
setInterval(setClock, 1000);



// button1
let btn1 = document.getElementById("btn1");
btn1.style.backgroundColor="yellow";
function changeColor(){
  const clk = document.getElementById("clk")
  clk.style.backgroundColor="yellow";
  console.log("Click");
}
btn1.addEventListener("click",changeColor);


// button2
let btn2 = document.getElementById("btn2");
btn2.style.backgroundColor="green";
function changeGreen(){
  const clk1 = document.getElementById("clk")
  clk1.style.backgroundColor="green";
  console.log("Click");
}
btn2.addEventListener("click",changeGreen);


// button3
let btn3 = document.getElementById("btn3");
btn3.style.backgroundColor="orange";
function changeOrange(){
  const clk2 = document.getElementById("clk");
  clk2.style.backgroundColor="orange";
}
btn3.addEventListener("click",changeOrange);

