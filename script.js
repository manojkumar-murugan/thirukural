function getKuralNumber() {
  let container = document.querySelector(".container");
  let kuralNumber = Number(container.querySelector("#kuralNumber").value);
  return kuralNumber;
}

function setKuralNumber(kuralNumber) {
  if (kuralNumber < 0 || kuralNumber > 1330) return false;
  let container = document.querySelector(".container");
  container.querySelector("#kuralNumber").value = kuralNumber;
}

function displayKural(kuralNum) {
  let container = document.querySelector(".container");
  let kuralNumber = !kuralNum ? getKuralNumber() : kuralNum,
    isValid = true;
  if (kuralNumber === "") {
    alert("ஏதேனும் குறள் எண்ணை உள்ளீடவும்");
    isValid = false;
  } else if (kuralNumber < 1 || kuralNumber > 1330) {
    alert("குறள் எண்ணை சரி பார்க்கவும்");
    container.querySelector("#kuralNumber").value = "";
    isValid = false;
  }
  if (!isValid) return false;
  let kuralData = getKuralData(kuralNumber - 1);
  let kuralDOM = container.querySelector(".kuralDOM");
  kuralDOM.innerHTML = "";
  kuralDOM.innerHTML =
    "<div><div>குறள் எண்:" +
    kuralData.Number +
    "</div><div>" +
    kuralData.Line1 +
    "<div>" +
    kuralData.Line2 +
    "</div><hr><div><ul>கலைஞர் உரை</ul>" +
    kuralData.mk +
    "</div><hr><div><ul>டாக்டர் மு.வ உரை</ul>" +
    kuralData.mv +
    "</div><hr><div><ul>பாப்பையா ஐயாவின் உரை</ul>" +
    kuralData.sp +
    "</div></div>";
}

function getPrevKural() {
  let kuralNumber = getKuralNumber();
  if (kuralNumber === 1) {
    return true;
  } else if (kuralNumber === 0) {
    displayKural(1);
    setKuralNumber(1);
    return true;
  }
  if (kuralNumber < 0) {
    alert("முதல் குறளை எட்டி விட்டீர்கள்");
    return false;
  }
  displayKural(kuralNumber - 1);
  setKuralNumber(kuralNumber - 1);
}

function getNextKural() {
  let kuralNumber = getKuralNumber();
  if (kuralNumber === 1330) {
    return true;
  } else if (kuralNumber === 0) {
    displayKural(1);
    setKuralNumber(1);
    return true;
  }
  if (kuralNumber > 1330) {
    alert("வள்ளுவன் எழுதியது அவ்வளவு தான்");
    return false;
  }
  displayKural(kuralNumber + 1);
  setKuralNumber(kuralNumber + 1);
}