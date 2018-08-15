var btn = document.getElementById("btn");
//anaonysmous function inside
// przenosimy wszystko na klika
btn.addEventListener("click",function())
{
    var ourRequest = new XMLHttpRequest();
    ourRequest.open(
        "GET",
        "https://learnwebcode.github.io/json-example/animals-1.json"
    );
    ourRequest.onload= function(){
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
    }; ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
    };
    //sending request
    ourRequest.send();
};







//argumenty to co przekazujemy
//paramtery to co w def feunkcja przyjumuje