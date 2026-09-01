const container = document.createElement("div");
container.classList.add("div_container");

const list_of_boxes = []
const colors = ["#FF007F", "#00F0FF", "#FFD700", "#7000FF", "#39FF14"];
for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.addEventListener("mousemove", (event) => {
        const dot = document.createElement("div");
        dot.className = "trail";

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        dot.style.backgroundColor = randomColor;

        dot.style.left = `${event.clientX}px`;
        dot.style.top = `${event.clientY}px`;

        document.body.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 800);
    });
    list_of_boxes.push(div);
    container.appendChild(div);
}
list_of_boxes.forEach(element => element.classList.add("box", "active-hover-effect"));

document.body.appendChild(container);
