//your code here
let tableBody = document.getElementsByTagName("tbody")[0];
let addBtn = document.getElementsByTagName("button")[0];
let totalmoney = 0;
let money = document.getElementById("total");


function updateItem(){

    let item = document.getElementById("item-name-input").value;
    let price = Number(document.getElementById("item-price-input").value);
    totalmoney +=price;
    money.innerText = "Grand Money:" + totalmoney;

    let createRow = document.createElement("tr");
    let createitem = document.createElement("td");
    let createrprice = document.createElement("td");
    createitem.innerText = item;
    createrprice.innerText = price;

    createRow.append(createitem);
    createRow.append(createrprice);
    

    tableBody.append(createRow);

    document.getElementById("item-name-input").value = "";
    document.getElementById("item-price-input").value = "";


}    

addBtn.onclick = updateItem;