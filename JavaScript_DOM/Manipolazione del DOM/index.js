const addProduct = () => {
  
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  const input = document.querySelector("input");
  li.innerText = input.value;
  ul.appendChild(li);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  li.appendChild(checkbox);
};
