const textFirst = document.querySelector(".textFirst");
const textSecond = document.querySelector(".textSecond");
const textThird = document.querySelector(".textThird");
const imageSecond = document.querySelector(".imageSecond");
window.addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    textFirst.style.fontSize = "60px";
  } else {
    textFirst.style.fontSize = "40px";
  }
  if (window.scrollY > 200) {
    textSecond.style.width = "400px";
    textSecond.style.marginLeft = "100px";
    imageSecond.style.marginRight = "200px";
  } else {
    document.querySelector(".textSecond").style.width = "300px";
    document.querySelector(".textSecond").style.marginLeft = "50px";
  }
  if (window.scrollY > 400) {
    imageSecond.style.marginRight = "200px";
  } else {
    imageSecond.style.marginRight = "50px";
  }
  if (window.scrollY > 1000) {
    textThird.style.fontSize = "60px";

    // window.scrollTo(xpos, ypos);
  } else {
    textThird.style.fontSize = "40px";
  }
});

function gototop() {
  if (window.scrollY > 0) {
    window.scrollTo(0, window.scrollY - 20);
    setTimeout("gototop()", 15);
  }
}

textThird.addEventListener("click", gototop);

textThird.addEventListener("mouseover", () => {
  textThird.style.color = "red";
});
textThird.addEventListener("mouseleave", () => {
  textThird.style.color = "black";
});

textFirst.addEventListener("click", () => {
  textSecond.scrollIntoView({ behavior: "smooth" });
});

textFirst.addEventListener("mouseover", () => {
  textFirst.style.color = "red";
});
textFirst.addEventListener("mouseleave", () => {
  textFirst.style.color = "black";
});
