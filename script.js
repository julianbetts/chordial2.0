// @ts-check

/**
 * @param {[number | null, number | null, number | null, number | null, number | null, number | null]} encoding
 */
function render(encoding) {
/** @type {SVGSVGElement} */
    let svg = document.getElementById("brett");


    if (svg === null) return;

    svg.innerHTML = '';

    // Render the strings
    for (let i = 0; i < 6; i++) {
        const x = 10 + 5 * i;
        const startY = 10;
        const endY = 38;

        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("stroke-width", "1");
        line.setAttribute("stroke", "black");
        line.setAttribute("x1", x.toString());
        line.setAttribute("y1", startY.toString());
        line.setAttribute("x2", x.toString());
        line.setAttribute("y2", endY.toString());

        svg.appendChild(line);
    }

    // Render the frets
    for (let i = 0; i < 5; i++) {
        const startX = 10;
        const endX = 35;
        const y = 10 + 7 * i;

        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("stroke-width", "1");
        line.setAttribute("stroke", "black");
        line.setAttribute("x1", startX.toString());
        line.setAttribute("y1", y.toString());
        line.setAttribute("x2", endX.toString());
        line.setAttribute("y2", y.toString());

        svg.appendChild(line);
    }

    for (let i = 0; i < 6; i++) {
        let x = encoding[i];

        if (x === 0) {
            continue;
        } else if (x === null) {
            const startX = 10 + 5 * i - 2;
            const endX = 10 + 5 * i + 2;
            const topY = 10 - 5 - 2;
            const bottomY = 10 - 5 + 2;

            let line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line1.setAttribute("stroke-width", "1");
            line1.setAttribute("stroke", "black");
            line1.setAttribute("x1", startX.toString());
            line1.setAttribute("y1", topY.toString());
            line1.setAttribute("x2", endX.toString());
            line1.setAttribute("y2", bottomY.toString());
            svg.appendChild(line1);

            let line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line2.setAttribute("stroke-width", "1");
            line2.setAttribute("stroke", "black");
            line2.setAttribute("x1", startX.toString());
            line2.setAttribute("y1", bottomY.toString());
            line2.setAttribute("x2", endX.toString());
            line2.setAttribute("y2", topY.toString());
            svg.appendChild(line2);
        } else {
            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("r", "2");
            circle.setAttribute("fill", "black");
            circle.setAttribute("cx", (10 + 5 * i).toString());
            circle.setAttribute("cy", (10 + (7 * (x - 1)) + 3.5).toString());
            svg.appendChild(circle);
        }
    }
}

let dMajor = [null, null, 0, 2, 3, 2];
render([null, null, 0, 2, 3, 2])