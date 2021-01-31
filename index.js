/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let hour = parseInt(string.split(':')[0]);
  let minute = parseInt(string.split(':')[1]);

  if (hour < 12) {
    return "Good Morning"
  } else if (hour < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

  // const hour = parseInt(timeStr, 10);
  // if ( hour < 12) return "Good Morning"
  // if ( hour > 17) return "Good Evening"
  // return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let findNode = document.getElementById("greeting");
  findNode.innerText = string;
}