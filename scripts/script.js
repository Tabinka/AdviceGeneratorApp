document.addEventListener("DOMContentLoaded", function (event) {

    const div = document.getElementById("new-advice");
    div.onclick = getAdvice;
    window.onload = getAdvice;
    
    function getAdvice(){
    let fetchRes = fetch(
        "https://api.adviceslip.com/advice");
    fetchRes.then(res =>
        res.json()).then(d => {

            let adviceNumber = document.getElementById("number");
            let adviceText = document.getElementById("advice-text");

            adviceNumber.innerHTML = "advice #" + d.slip.id;
            adviceText.innerHTML = d.slip.advice;
        });
    }
});