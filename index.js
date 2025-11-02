const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const uList = document.querySelector("ul");

  uList.innerHTML = "";

  for (let i = 0; i < cosasQueAprendimos.length; i++) {
    const newElement = document.createElement("li");
    newElement.textContent = cosasQueAprendimos[i].tema;
    newElement.className = cosasQueAprendimos[i].class;
    uList.appendChild(newElement);
  }
}

main();
