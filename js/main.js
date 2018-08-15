var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
//anaonysmous function inside
// przenosimy wszystko na klika
btn.addEventListener("click",function()
{
    var ourRequest = new XMLHttpRequest();

    ourRequest.open(
        "GET",
        "https://learnwebcode.github.io/json-example/animals-" + pageCounter +".json"
    );
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderujHTML(ourData);
        console.log(ourData[0]);
    };
    //sending request
    ourRequest.send();
    pageCounter++; 
    if (pageCounter>3)
    {
        btn.classList.add("hide-me"); //ading css class hide-me
    }
});
//argumenty to co przekazujemy
//paramtery to co w def feunkcja przyjumuje

function renderujHTML(dane_input)
{
    var html_str = "";

    for (i = 0;i<dane_input.length;i++)
    {
        html_str += "<p>" + dane_input[i].name + " is " +dane_input[i].species +". He likes to eat: ";
        for (j = 0; j<dane_input[i].foods.likes.length;j++)
        {
            html_str+=dane_input[i].foods.likes[j]+" ";
        }
        html_str += '</p >';
    }
    animalContainer.insertAdjacentHTML('beforeend',html_str);
}
