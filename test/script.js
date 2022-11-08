const buttonEdit = document.querySelector(".buttonEdit");
const buttonStyle = document.querySelector(".buttonStyle");
const buttonLast = document.querySelector(".buttonlast");
const hiddenEdit = document.querySelector(".hiddenEdit");
const hiddenStyle = document.querySelector(".hiddenStyle");
const content = document.querySelector(".content");
const screen = document.querySelector(".screen");
const save = document.querySelector(".buttonSave");
const add = document.querySelector(".buttonAdd");
//
const hiddenButton = document.querySelector(".hiddenButton");
const screenSecond = document.querySelector(".screenSecond");
const screenThird = document.querySelector(".screenThird");

// Розмір шрифту
const radioButtons = document.querySelectorAll("input");
const fontSize = document.querySelector(".fontSize");
//
// fontFamily

// видимість
buttonEdit.addEventListener("click", () => {
  hiddenEdit.style.display = "block";
  hiddenStyle.style.display = "none";
});
buttonStyle.addEventListener("click", () => {
  hiddenEdit.style.display = "none";
  hiddenStyle.style.display = "block";
});
// list
const listRadio = document.querySelector(".listRadio");
const chooseList = document.querySelector(".chooseList");
const listButton = document.querySelector(".listButton");
//
listButton.addEventListener("click", () => {
  const selectedMarks = document.querySelector(".marksList").value;
  const CountLI = document.querySelector(".CountLI").value;
  const myList = document.createElement("ul");
  for (let i = 0; i < CountLI; i++) {
    const myLI = document.createElement("li");
    myLI.style.listStyleType = selectedMarks;
    myLI.textContent = "list";
    myList.append(myLI);
  }

  save.addEventListener("click", () => {
    content.append(myList);
  });
  screenFirst.style.display = "block";
  screenThird.style.display = "none";
  hiddenButton.style.display = "block";
  screenSecond.style.display = "block";
});

// table
listRadio.addEventListener("click", () => {
  hiddenTable.style.display = "none";
  chooseList.style.display = "block";
});

// TABLE
add.addEventListener("click", () => {
  hiddenButton.style.display = "none";
  screenFirst.style.display = "none";
  screenSecond.style.display = "none";
  screenThird.style.display = "block";
  hiddenTable.style.display = "none";
});
const chooseTable = document.querySelector(".tableRadio");
const hiddenTable = document.querySelector(".table");

chooseTable.addEventListener("click", () => {
  hiddenTable.style.display = "block";
  chooseList.style.display = "none";
});
// create table
const CountTR = document.querySelector(".CountTR");
const CountTD = document.querySelector(".CountTD");
const tableButton = document.querySelector(".tableButton");
const borderColor = document.querySelectorAll(".borderColor");

//
//
//
tableButton.addEventListener("click", () => {
  const tbl = document.createElement("table");

  const widthTD = document.querySelector(".widthTD").value;
  const heightTD = document.querySelector(".heightTD").value;
  const borderWidth = document.querySelector(".borderWidth").value;
  const selectedColorBorder = document.querySelector(".ColorBorder").value;
  const selectedTypeBorder = document.querySelector(".TypeBorder").value;
  for (let i = 0; i < CountTR.value; i++) {
    const tbRow = document.createElement("tr");
    tbl.prepend(tbRow);

    for (let j = 0; j < CountTD.value; j++) {
      const tbData = document.createElement("td");
      tbRow.prepend(tbData);
      tbData.setAttribute("width", widthTD);
      tbData.setAttribute("height", heightTD);
      tbData.style.borderColor = selectedColorBorder;
      tbData.style.borderStyle = selectedTypeBorder;
    }
  }
  tbl.setAttribute("border", borderWidth);
  screen.append(tbl.innerHTML);
  save.addEventListener("click", () => {
    content.append(tbl);
  });
  // content.append(tbl);
  screenFirst.style.display = "block";
  screenThird.style.display = "none";
  hiddenButton.style.display = "block";
  screenSecond.style.display = "block";
});

//  перша сторінка зміна тексту
console.log(content.innerHTML);
content.innerHTML = screen.textContent;
save.addEventListener("click", () => {
  content.innerHTML = screen.value;
  hiddenEdit.style.display = "none";
});
//

// Розмір шрифту

for (const radioButton of radioButtons) {
  radioButton.addEventListener("click", () => {
    content.style.fontSize = radioButton.value;
    content.style.fontWeight = radioButton.value;
  });
}
//

// fontFamily

function getSelectType(params) {
  const selectedlistType = document.querySelector(".listType").value;

  content.style.fontFamily = selectedlistType;
}

//

//

// color
const buttonColorText = document.querySelector(".buttonColorText");
const buttonBackground = document.querySelector(".buttonBackground");
const visibleblockcolor = document.querySelector(".hiddenBlockWithColorsOne");
const visibleblockBackground = document.querySelector(
  ".hiddenBlockWithColorsTwo"
);
const choiceColor = document.querySelectorAll(".color");
const allColor = document.querySelector(".blockColors");
const screenFirst = document.querySelector(".screenFirst");
const blockColorsBackgraund = document.querySelector(".blockColorsBackgraund");
const colorBackground = document.querySelectorAll(".colorBackground");
let changeColorText = function () {
  visibleblockcolor.style.display = "block";
  for (let item of choiceColor) {
    item.style.backgroundColor = item.innerHTML;
    item.addEventListener("click", () => {
      screenFirst.style.color = item.textContent;
      visibleblockcolor.style.display = "none";
    });
  }
};
let changeBackgroundColor = function () {
  visibleblockcolor.style.display = "none";
  visibleblockBackground.style.display = "block";
  for (let item of colorBackground) {
    item.style.backgroundColor = item.textContent;
    item.addEventListener("click", () => {
      screenFirst.style.backgroundColor = item.innerText;
      visibleblockBackground.style.display = "none";
    });
  }
};
buttonBackground.addEventListener("click", changeBackgroundColor);
buttonColorText.addEventListener("click", changeColorText);

// console.log(allColor.textContent);
// console.log(allColor.innerHTML);
// console.log(allColor.innerText);
// console.log(choiceColor);
