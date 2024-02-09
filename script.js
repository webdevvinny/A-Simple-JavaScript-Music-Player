// let num = 0;

// while (num <= 100) {
//   if (num % 2 == 0) {
//     console.log(num + " Fizz");
//   } else if (num % 3 == 0) {
//     console.log(num + " FizzBuzz");
//   } else {
//     console.log(num + " Buzz");
//   }
//   num++;
// }

let volumePercentage = 1;

document.getElementById("volumeUp").onclick = () => {
  volumePercentage += 0.1;
  document.querySelector("audio").volume = volumePercentage;
  document.querySelector(".percentage").textContent = volumePercentage
    .toString()
    .slice(0, 3);
  document.querySelector("#volumeDown").style.display = "block";
};

document.getElementById("volumeDown").onclick = () => {
  volumePercentage -= 0.1;

  if (volumePercentage <= 0.01) {
    document.querySelector("#volumeDown").style.display = "none";
    volumePercentage = 0;
  } else {
    document.querySelector("#volumeDown").style.display = "block";
  }
  document.querySelector("audio").volume = volumePercentage;
  document.querySelector(".percentage").textContent = volumePercentage
    .toString()
    .slice(0, 3);
};

document.querySelector("#play").onclick = () => {
  document.querySelector("audio").play();
};

document.querySelector("#pause").onclick = () => {
  document.querySelector("audio").pause();
};
