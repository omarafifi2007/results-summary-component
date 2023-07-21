let Current = 0;
let Card1 = document.querySelector(".Card1");
let Card2 = document.querySelector(".Card2");
let Card3 = document.querySelector(".Card3");
let Card4 = document.querySelector(".Card4");
function GetResult()
{
    let MyReq = new XMLHttpRequest();

    MyReq.onreadystatechange = function ()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            
            let Results = JSON.parse(this.responseText);
            QData(Results[0]);
            QDate(Results[1]);
            QDa(Results[2]);
            QD(Results[3]);
        }
    }

    MyReq.open("GET", "data.json", true);
    MyReq.send();
}

GetResult();

function QData(obj)
{
    let qTitle = document.createElement("p");
    let score = document.createElement("p");

    let qText = document.createTextNode(obj["category"]);
    let qTex = document.createTextNode(obj["score"]);

    score.appendChild(qTex);
    qTitle.appendChild(qText);

    Card1.appendChild(qTitle);
    Card1.appendChild(score);
}

function QDate(obj)
{
    let qTitle = document.createElement("p");
    let score = document.createElement("p");

    let qText = document.createTextNode(obj["category"]);
    let qTex = document.createTextNode(obj["score"]);

    score.appendChild(qTex);
    qTitle.appendChild(qText);

    Card2.appendChild(qTitle);
    Card2.appendChild(score);
}

function QDa(obj)
{
    let qTitle = document.createElement("p");
    let score = document.createElement("p");

    let qText = document.createTextNode(obj["category"]);
    let qTex = document.createTextNode(obj["score"]);

    score.appendChild(qTex);
    qTitle.appendChild(qText);

    Card3.appendChild(qTitle);
    Card3.appendChild(score);
}
function QD(obj)
{
    let qTitle = document.createElement("p");
    let score = document.createElement("p");

    let qText = document.createTextNode(obj["category"]);
    let qTex = document.createTextNode(obj["score"]);

    score.appendChild(qTex);
    qTitle.appendChild(qText);

    Card4.appendChild(qTitle);
    Card4.appendChild(score);
}

document.querySelector("button").onclick = function ()
{
    document.querySelector("button").style.backgroundColor = 'hsl(224, 30%, 27%)';
};
