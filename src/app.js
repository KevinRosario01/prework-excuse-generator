/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoRDM = Math.floor(Math.random() * who.length);
  let actionRDM = Math.floor(Math.random() * action.length);
  let whatRDM = Math.floor(Math.random() * what.length);
  let whenRDM = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoRDM] +
    " " +
    action[actionRDM] +
    " " +
    what[whatRDM] +
    " " +
    when[whenRDM];
  document.querySelector("#excuse").innerHTML = excuse;
};
