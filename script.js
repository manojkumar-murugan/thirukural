function displayKural(){
    let container = document.querySelector(".container");
    let kuralNumber = container.querySelector("#kuralNumber").value;
    let kuralData = getKuralData(kuralNumber);
    let kuralDOM = container.querySelector(".kuralDOM");
    kuralDOM.innerHTML = "";
    kuralDOM.innerHTML = ("<div><div>"+kuralData.Line1+"<div>"+kuralData.Line2+"</div></div>");
}