// import { boldText, cursiveText } from "./modules/mymodul";

const buttonBold = document.querySelector(".buttonBold");
const buttonCursive = document.querySelector(".buttonCursive");
const buttonUnderline = document.querySelector(".buttonUnderline");
const buttonlinethrough = document.querySelector(".buttonline-through");
const buttonAlignL = document.querySelector(".buttonAlignLeft");
const buttonAlignC = document.querySelector(".buttonAlignCenter");
const buttonAlignR = document.querySelector(".buttonAlignRight");
//
const content = document.querySelector(".content");
//

// block,cursive, throught, underline
function boldText() {
  let btext = ["bold", "normal"];
  let i = 0;
  i < btext.length;
  content.style.fontWeight = btext[i++];
  if (i == 2) {
    i = 0;
  }
}

function cursiveText() {
  let cText = ["cursive", "serif"];
  let j = 0;
  j < cText.length;
  content.style.fontFamily = cText[j++];
  if (j == 2) {
    j = 0;
  }
}
buttonBold.addEventListener("click", boldText);

//

buttonCursive.addEventListener("click", cursiveText);
//

//

let underlineText = ["underline", "none"];
let u = 0;

function underLine() {
  u < underlineText.length;
  content.style.textDecoration = underlineText[u++];
  if (u == 2) {
    u = 0;
  }
}
buttonUnderline.addEventListener("click", underLine, false);

let throughlineText = ["line-through", "none"];
let t = 0;
function throughLine() {
  t < throughlineText.length;
  content.style.textDecoration = throughlineText[t++];
  if (t == 2) {
    t = 0;
  }
}
buttonlinethrough.addEventListener("click", throughLine, false);
//
//text align
function alignContent(elem, align) {
  elem.addEventListener("click", () => {
    content.style.textAlign = align;
  });
}
alignContent(buttonAlignL, "left");
alignContent(buttonAlignC, "center");
alignContent(buttonAlignR, "right");
//
function changeFamily() {
  const buttonFamily = document.querySelector(".buttonFamily").value;
  content.style.fontFamily = buttonFamily;
}
function changeSize() {
  const buttonFSize = document.querySelector(".buttonFSize").value;
  content.style.fontSize = buttonFSize;
}
// TEXTCOLOR
const buttonTextColor = document.querySelector(".buttonTextColor");
const blockColorText = document.querySelector(".blockColorText");
const colors = document.querySelectorAll(".color");
const closeColorText = document.querySelector(".close");
//
for (let color of colors) {
  color.style.backgroundColor = color.textContent;
  color.addEventListener("click", () => {
    content.style.color = color.textContent;
  });
}
//open /close elem
function closeElement(elem, elem2) {
  elem.addEventListener("click", () => {
    elem2.style.display = "none";
  });
}
//
function openElement(elem, elem2) {
  elem.addEventListener("click", () => {
    elem2.style.display = "block";
  });
}
//
openElement(buttonTextColor, blockColorText);
closeElement(closeColorText, blockColorText);

// background
//
// COLOR
const colorsBackground = document.querySelectorAll(".colorBackground");
const buttonBackGround = document.querySelector(".buttonBackGround");
const closeBackground = document.querySelector(".closeBackgroundBlock");
const blockColorBackGround = document.querySelector(".blockColorBackGround");
const hiddenColorText = document.querySelector(".hiddenColorText");
for (let color of colorsBackground) {
  color.style.backgroundColor = color.textContent;
  color.addEventListener("click", () => {
    content.style.background = color.textContent;
  });
}
//
openElement(buttonBackGround, blockColorBackGround);
closeElement(closeBackground, blockColorBackGround);

// IMAGES
const chooseImages = document.querySelector(".images");
const chooseColor = document.querySelector(".colors");
const chooseFile = document.querySelector(".files");
const hiddenColor = document.querySelector(".colorsBackground");
const ImageBlock = document.querySelector(".imagesBackground");
const hiddenblockImages = document.querySelector(".hiddenblockImages");
const hiddenColorBackground = document.querySelector(".hiddenColorBackground");
const hiddenForms = document.querySelector(".hiddenForms");
//
//
function chooseSomething(elem, dnone, none, dblock) {
  elem.addEventListener("click", () => {
    dnone.style.display = "none";
    none.style.display = "none";
    dblock.style.display = "block";
  });
}
chooseSomething(
  chooseFile,
  hiddenColorBackground,
  hiddenblockImages,
  hiddenForms
);
chooseSomething(
  chooseImages,
  hiddenForms,
  hiddenColorBackground,
  hiddenblockImages
);
chooseSomething(
  chooseColor,
  hiddenForms,
  hiddenblockImages,
  hiddenColorBackground
);

const image = document.querySelectorAll(".image");
const img = document.querySelectorAll(".img");

for (let im of img) {
  im.addEventListener("click", () => {
    content.style.background = "url(" + im.src + ")";
    content.style.backgroundSize = "cover";
  });
}

// Files
let loadFile = function (event) {
  let image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);

  content.style.background = "url(" + image.src + ")";
  content.style.backgroundSize = "cover";
};

//
//
//
//
// TEXTAREA CONTENT
const myTextArea = document.querySelector(".myTextContent");
const buttonSave = document.querySelector(".buttonSave");
const blockTable = document.querySelector(".tableBlock");
const blockTextArea = document.querySelector(".contentTextArea");
const myContent = document.querySelector(".firstBlockHiden");
const lockedButton = document.querySelector(".lockedButton");
content.innerHTML = myTextArea.textContent;
function changeblock(elemnonef, elemnones, elemblockf, elemblocks) {
  elemnonef.style.display = "none";
  elemnones.style.display = "none";
  elemblockf.style.display = "block";
  elemblocks.style.display = "block";
}
//
//
buttonSave.addEventListener("click", () => {
  content.innerHTML = myTextArea.value;
  changeblock(blockTable, blockTextArea, content, myContent);
});
lockedButton.addEventListener("click", () => {
  changeblock(content, myContent, blockTable, blockTextArea);
});

// CREATE TABLE
const createTableBlock = document.querySelector(".createTableBlock");
const buttonCreateTable = document.querySelector(".buttonCreateTable");
const resetTable = document.querySelector(".ResetTableButton");
const closeTable = document.querySelector(".myTable-close");
const tableButton = document.querySelector(".tableButton");

// open/close table

closeElement(closeTable, createTableBlock);

buttonCreateTable.addEventListener("click", () => {
  createTableBlock.style.display = "block";
  content.style.display = "none";
});
// CREATE TABLE function
const CountTR = document.querySelector(".CountTR");
const CountTD = document.querySelector(".CountTD");
const widthTD = document.querySelector(".widthTD");
const heightTD = document.querySelector(".heightTD");
// style border:
const borderWidth = document.querySelector(".borderWidth");
const selectedColorBorder = document.querySelector(".ColorBorder");
const selectedStyleBorder = document.querySelector(".styleBorder");
function createTable() {
  let TR = CountTR.value;
  let TD = CountTD.value;
  let widthT = widthTD.value;
  let heightT = heightTD.value;
  //
  const borderW = borderWidth.value;
  const borderColor = selectedColorBorder.value;
  const borderStyle = selectedStyleBorder.value;
  //
  const tbl = document.createElement("Table");
  for (let i = 0; i < TR; i++) {
    const tbRow = document.createElement("tr");
    tbl.prepend(tbRow);
    for (let j = 0; j < TD; j++) {
      const tbData = document.createElement("td");
      tbData.style.width = widthT + "px";
      tbData.style.height = heightT + "px";
      tbData.style.borderColor = borderColor;
      tbData.style.borderStyle = borderStyle;
      tbData.style.borderWidth = borderW;
      tbRow.prepend(tbData);
    }
  }
  myTextArea.append("<table>" + tbl.innerHTML + "</table>");
}

//
function resetTableDate() {
  CountTR.value = " type here...";
  CountTD.value = " type here...";
  widthTD.value = "type here... ";
  heightTD.value = "type here... ";
  selectedColorBorder.value = "defolt";
  selectedStyleBorder.value = "defolt";
}
//
tableButton.addEventListener("click", createTable);
resetTable.addEventListener("click", resetTableDate);

//  List
const buttonOList = document.querySelector(".buttonOList");
const myListClose = document.querySelector(".myListClose");
const createListBlockO = document.querySelector(".createListBlockO");
openElement(buttonOList, createListBlockO);
closeElement(myListClose, createListBlockO);
//
// create Olist
const countOl = document.querySelector(".countOlist");
const createOlbutton = document.querySelector(".createOlbutton");
//
function createOderedList() {
  const markOl = document.querySelector(".listOmark").value;
  const listcount = countOl.value;

  const ol = document.createElement("ol");

  for (let i = 0; i < listcount; i++) {
    const liO = document.createElement("li");
    liO.textContent = "list";
    liO.style.listStyleType = markOl;
    ol.append(liO);
  }
  myTextArea.append("<ol>" + ol.innerHTML + "</ol>");
}
createOlbutton.addEventListener("click", createOderedList);
//
// create unodered list
const buttonUList = document.querySelector(".buttonUList");
const myListCloseU = document.querySelector(".myListCloseU");
const createListBlockU = document.querySelector(".createListBlockU");
const createUlbutton = document.querySelector(".createUlbutton");
openElement(buttonUList, createListBlockU);
closeElement(myListCloseU, createListBlockU);
//
function createUnoderedList() {
  const markUl = document.querySelector(".listUmark").value;
  const listcount = countOl.value;

  const ul = document.createElement("ul");

  for (let i = 0; i < listcount; i++) {
    const liO = document.createElement("li");
    liO.textContent = "list";
    liO.style.listStyleType = markUl;
    ul.append(liO);
  }
  myTextArea.append("<ul>" + ul.innerHTML + "</ul>");
}
createUlbutton.addEventListener("click", createUnoderedList);
//
//
// LOGIN FORM
const ButtonLogin = document.querySelector(".ButtonLogin");
const loginFormBlock = document.querySelector(".loginFormBlock");
const myFormclose = document.querySelector(".myForm-close");
const formButton = document.querySelector(".formButton");
const login = document.querySelector(".login");
const password = document.querySelector(".password");
const invalidText = document.querySelector(".invalidText");
const blockSignOut = document.querySelector(".blockSignOut");
openElement(ButtonLogin, loginFormBlock);
closeElement(myFormclose, loginFormBlock);

// validate
lockedButton.disabled = true;

function validate() {
  const Lvalue = login.value;
  const pvalue = password.value;
  if (Lvalue == "admin" && pvalue == "12345") {
    lockedButton.disabled = false;
    lockedButton.style.backgroundColor = "white";
    loginFormBlock.style.display = "none";
  } else {
    invalidText.style.display = "block";
    password.style.boxShadow = " 0px 0px 5px 1px rgb(225, 92, 92)";
    password.style.border = "1px rgb(225, 92, 92) solid";
    login.style.border = "1px rgb(225, 92, 92) solid";
    login.style.boxShadow = " 0px 0px 5px 1px rgb(225, 92, 92)";
  }
}
formButton.addEventListener("click", validate);
