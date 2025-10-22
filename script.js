// @ts-check
const SVG_NS = "http://www.w3.org/2000/svg";
const rootSelector = document.getElementById('root-selector');

/**
 * @param {(number|null)[]} encoding length 6
 * @param {HTMLElement} mount where to append the diagram
 */

// chord shapes:
const cMajor = [null, 3, 2, 0, 1, 0];
const aMajor = [null, 0, 2, 2, 2, 0];
const gMajor = [3, 2, 0, 0, 3, 3];
const eMajor = [0, 2, 2, 1, 0, 0];
const dMajor = [null, null, 0, 2, 3, 2];
const cMinor = [null, 3, 1, 0, 1, 0];
const aMinor = [null, 0, 2, 2, 1, 0];
const gMinor = [3, 1, 0, 0, 1, 3];
const eMinor = [0, 2, 2, 0, 0, 0];
const dMinor = [null, null, 0, 2, 3, 1];

function render(encoding, mount) {
    mount.innerHTML = "";

  // create an SVG per diagram
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", "50");
    svg.setAttribute("height", "50");
    svg.setAttribute("viewBox", "0 0 50 50");
    mount.appendChild(svg);

    // strings
    for (let i = 0; i < 6; i++) {
    const x = 10 + 5 * i;
    const line = document.createElementNS(SVG_NS, "line");
    line.setAttribute("stroke-width", "1");
    line.setAttribute("stroke", "black");
    line.setAttribute("x1", String(x));
    line.setAttribute("y1", "10");
    line.setAttribute("x2", String(x));
    line.setAttribute("y2", "38");
    svg.appendChild(line);
    }

    // frets
    for (let i = 0; i < 5; i++) {
    const y = 10 + 7 * i;
    const line = document.createElementNS(SVG_NS, "line");
    line.setAttribute("stroke-width", "1");
    line.setAttribute("stroke", "black");
    line.setAttribute("x1", "10");
    line.setAttribute("y1", String(y));
    line.setAttribute("x2", "35");
    line.setAttribute("y2", String(y));
    svg.appendChild(line);
    }

    // markers
    for (let i = 0; i < 6; i++) {
    const xVal = encoding[i];
    const cx = 10 + 5 * i;

    if (xVal === 0) continue;

    if (xVal === null) {
        const startX = cx - 2, endX = cx + 2, topY = 3, botY = 7;
        const l1 = document.createElementNS(SVG_NS, "line");
        l1.setAttribute("stroke", "black");
        l1.setAttribute("x1", String(startX));
        l1.setAttribute("y1", String(topY));
        l1.setAttribute("x2", String(endX));
        l1.setAttribute("y2", String(botY));
        svg.appendChild(l1);

        const l2 = document.createElementNS(SVG_NS, "line");
        l2.setAttribute("stroke", "black");
        l2.setAttribute("x1", String(startX));
        l2.setAttribute("y1", String(botY));
        l2.setAttribute("x2", String(endX));
        l2.setAttribute("y2", String(topY));
        svg.appendChild(l2);
    } else {
        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttribute("r", "2");
        circle.setAttribute("fill", "black");
        circle.setAttribute("cx", String(cx));
        circle.setAttribute("cy", String(10 + 7 * (xVal - 1) + 3.5));
        svg.appendChild(circle);
        }
    }
}

rootSelector.addEventListener("change", (event) => {
    const chordMode = event.target.value
    if (chordMode === "major") {
        render(cMajor, document.getElementById("c-shape"));
        render(aMajor, document.getElementById("a-shape"));
        render(gMajor, document.getElementById("g-shape"));
        render(eMajor, document.getElementById("e-shape"));
        render(dMajor, document.getElementById("d-shape"));
 // C major
    } else if (chordMode === "minor") {
        render(cMinor, document.getElementById("c-shape"));
        render(aMinor, document.getElementById("a-shape"));
        render(gMinor, document.getElementById("g-shape"));
        render(eMinor, document.getElementById("e-shape"));
        render(dMinor, document.getElementById("d-shape"));
    } else if (chordMode === "reset") {
        ["c-shape", "a-shape", "g-shape", "e-shape", "d-shape"].forEach(id => {
        document.getElementById(id).innerHTML = "";
        });
    }
});
