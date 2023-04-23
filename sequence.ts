import "./stylesheet.css"

import cubicSequence from "./cubicSequence";


function calc(str?: string, elementOutput?: HTMLElement){
    if(!elementOutput) return;

    let s = JSON.parse(`[${str}]`);

    if(!s[0]){
        alert("参数错误");
        return;
    }

    let d1 = [s[1] - s[0], s[2] - s[1], s[3] - s[2]];
    let d2 = [d1[1] - d1[0], d1[2] - d1[1]];
    let d3 = [d2[1] - d2[0]];

    elementOutput.innerHTML = cubicSequence.fromDiff(s[0], d1[0], d2[0], d3[0]).getHTMLCode();
}

document.getElementById("calc-button")?.addEventListener("click", () => {
    calc((document.getElementById("sequence-data") as HTMLInputElement).value, document.getElementById("nth-term-data") as HTMLElement);
})