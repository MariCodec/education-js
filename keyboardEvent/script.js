const button = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");
//

document.addEventListener("keydown", (event) => {
  for (let item of button) {
    console.log(item.innerHTML);
    let i = 0;
    let num = [item.innerHTML];
    if (num == event.key) {
      item.style.background = "lightgrey";
      document.addEventListener("keyup", (event) => {
        item.style.background = "white";
      });
    }
    if (event.key === "Tab") {
      event.preventDefault();
      screen.value += "\t";
    }
    // console.log(num);
  }

  // console.log(`нажата клавіша${event.code}( ${event.key})`);
  // console.dir(event);
});
