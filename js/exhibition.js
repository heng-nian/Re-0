let list_img = document.querySelector(".list-img");
let button = document.createElement("div");
let ul = document.createElement("ul");
list_img.appendChild(button); list_img.appendChild(ul);
let img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.webp"]
img.forEach(data => {
  let i = document.createElement("li");
  i.setAttribute("src", './img/like/' + data);
  i.innerHTML = `
  <img src='./img/like/${data}'/>
  <div><div></div></div>
  `
  i.addEventListener("click", clickImg)
  ul.appendChild(i);
})

function clickImg() {
  let cover = document.createElement("div");
  cover.className = "cover";
  let img = document.createElement("img");
  img.addEventListener("click", e => e.stopPropagation())
  img.src = this.getAttribute("src");
  cover.appendChild(img);
  document.body.appendChild(cover)
  cover.addEventListener("click", function () {this.parentNode.removeChild(this)})
}
console.log(list_img);