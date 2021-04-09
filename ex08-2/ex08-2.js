const body = document.body;

const title = document.createElement("h1");
title.textContent = "DOM";
body.appendChild(title);

const paragraph = document.createElement("p");
paragraph.textContent = "JavaScriptからHTMLを扱うための仕組み";
body.appendChild(paragraph);

const subject = document.createElement("h2");
subject.textContent = "印象に残っているトピック";
body.appendChild(subject);

const list = document.createElement("ul");
body.appendChild(list);


const item_1 = document.createElement("li");
item_1.textContent = "documentオブジェクト";
list.appendChild(item_1);

const item_2 = document.createElement("li");
item_2.textContent = "getElementById";
list.appendChild(item_2);

const item_3 = document.createElement("li");
item_3.textContent = "イベントリスナ";
list.appendChild(item_3);