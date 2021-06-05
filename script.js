function displayKural(){
    let container = document.querySelector(".container");
    let kuralNumber = Number(container.querySelector("#kuralNumber").value),isValid=true;
    if(kuralNumber===""){
        alert("ஏதேனும் குறள் எண்ணை உள்ளீடவும்");
        isValid=false;
    } else if(kuralNumber<1 || kuralNumber>1330){
        alert("குறள் எண்ணை சரி பார்க்கவும்");
        container.querySelector("#kuralNumber").value="";
        isValid=false;
    }
    if(!isValid) return false;
    let kuralData = getKuralData(kuralNumber-1);
    let kuralDOM = container.querySelector(".kuralDOM");
    kuralDOM.innerHTML = "";
    kuralDOM.innerHTML = ("<div><div>குறள் எண்:"+kuralData.Number+"</div><div>"+kuralData.Line1+"<div>"+kuralData.Line2+"</div><div><ul>கலைஞர் உரை</ul><br>"+kuralData.mk+"</div></div>");
}