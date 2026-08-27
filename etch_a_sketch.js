const container = document.createElement("div");
container.classList.add("div_container");

const list_of_boxes = []
for (i = 0; i < 16; i++) {
    const div = document.createElement("div");
    list_of_boxes.push(div);
    container.appendChild(div);
}
list_of_boxes.forEach(element => element.classList.add("box"));

document.body.appendChild(container);
