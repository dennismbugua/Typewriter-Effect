const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.innerText = "Cool Stuff";

h1.onanimationend = function() {
  h1.classList.add("anim-end");
  h1.classList.remove("anim-restart");
  btn.innerText = "Run Again!"; 
};

btn.onclick = function() {
  h1.classList.add("anim-restart");
  btn.innerText = "Cool Stuff!";
}