const p = document.createElement("p");
p.textContent = "How many squares per side do you want, e.g., 16x16? 50 is the max"
const inputForm = document.createElement("input");
const btn = document.createElement("button");
btn.textContent = "Submit";
const inputContainer = document.createElement("div");
inputContainer.classList.add("userInput");

const container = document.createElement("div");
container.classList.add("div_container");

function createGrid(squarePerSide) {
    const list_of_boxes = []
    const colors = ["#FF007F", "#00F0FF", "#FFD700", "#7000FF", "#39FF14"];
    for (i = 0; i < (squarePerSide*squarePerSide); i++) {
        const div = document.createElement("div");

        let lightness = 100;
        div.addEventListener("mouseenter", () => {
            const currentOpacity = window.getComputedStyle(div).opacity;

            let opacityNum = parseFloat(currentOpacity);

            if (opacityNum < 1) {
                opacityNum += 0.1;
            }

            div.style.opacity = Math.min(opacityNum, 1).toFixed(1);

            if (lightness > 0) {
                lightness -= 10;
                div.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
            }
        });

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
    list_of_boxes.forEach(element => { 
        element.classList.add("box", "active-hover-effect");
        element.style.flexBasis = `calc((100% / ${squarePerSide}) - 2px)`;
    });
}

createGrid(16);

function isStrictInteger(str) {
  return /^[+-]?\d+$/.test(str);
}

btn.addEventListener('click', function() {
    if (!isStrictInteger(inputForm.value) || Number(inputForm.value) < 1 || Number(inputForm.value) > 50) {
        p.textContent = "Invalid input. It must be a valid integer from 1 to 50";
        inputForm.value = "";
    } else {
        p.textContent = "How many squares per side do you want, e.g., 16x16? 50 is the max";
        container.replaceChildren();
        createGrid(parseInt(inputForm.value, 10));

        inputForm.value = "";
    }
});

inputContainer.append(p, inputForm, btn);
document.body.appendChild(inputContainer);
document.body.appendChild(container);