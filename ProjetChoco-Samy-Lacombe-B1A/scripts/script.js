var moon = document.querySelector(".lune");
moon.addEventListener("click", modenuit);


var img = [
  "lune.svg",
  "soleil.svg"
];


function modenuit() {
  var link = document.getElementsByTagName("a");
  if (document.body.style.backgroundColor == "rgb(222, 184, 135)") {
    document.body.style.backgroundColor = "rgb(94, 58, 32)";
    document.body.style.color = "#FFFFFF";
    for (let i of link) {
      i.style.color = "#FFFFFF";
    }

  } else {
    document.body.style.backgroundColor = "rgb(222, 184, 135)";
    document.body.style.color = "#000000";
    for (let i of link) {
      i.style.color = "#000000";
    }

  }
  if (moon.src.match(/lune\.svg/g)) {
    moon.src = "/assets/soleil.svg";
  } else if (moon.src.match(/soleil\.svg/g)) {
    moon.src = "/assets/lune.svg";
  }
}