import Fraction from "fraction.js"
//10,26,58,112
export class cubicSequence{
    a: Fraction;
    b: Fraction;
    c: Fraction;
    d: Fraction;

    constructor(a: Fraction, b: Fraction, c: Fraction, d: Fraction){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    getHTMLCode(){
        let term1 = "";
        let term2 = "";
        let term3 = "";
        let term4 = "";

        if(this.a.valueOf() !== 0) term1 = `${cubicSequence.fractiontoHTMLCode(this.a)}`;
        if(this.b.valueOf() !== 0) term2 = `${cubicSequence.fractiontoHTMLCode(this.b)}`;
        if(this.c.valueOf() !== 0) term3 = `${cubicSequence.fractiontoHTMLCode(this.c)}`;
        if(this.d.valueOf() !== 0) term4 = `${cubicSequence.fractiontoHTMLCode(this.d)}`;

        let exp = `${term1 ? (term1 + "n<sup>3</sup>") : ""} ${term2 ? (term2 + "n<sup>2</sup>") : ""} ${term3 ? (term3 + "n") : ""} ${term4}`.trim();

        if(exp[0] === "+") {
            let tmpExp = exp.split("");
            tmpExp.shift();
            exp = tmpExp.join("");
        }

        return `n<sup>th</sup>&ensp;term = ${exp}`;
    }
}

export namespace cubicSequence{
    export function fromDiff(d1: number, d2: number, d3: number, d4: number): cubicSequence{
        const a = new Fraction(d4 / 6);
        const b = new Fraction(d3).sub(a.mul(12)).div(2);
        const c = new Fraction(d2).sub((a.mul(7)).add(b.mul(3)));
        const d = new Fraction(d1).sub(a.add(b).add(c))

        return (new cubicSequence(a, b, c, d));
    }

    export function toFraction(num: number): Fraction {
        return new Fraction(num);
    }

    export function fractiontoHTMLCode(fra: Fraction): string {
        let code = `
        <span class="fraction">
            ${Math.abs(fra.d) !== 1
            ? `<span class="numerator">${fra.n}</span>
                    <span class="denominator">${fra.d}</span>
                    `
            : `<span class="number">${fra.n}</span>`
            }
        </span>`;

        if(fra.s < 0) code = "-" + code;
        else code = "+" + code;
        
        return code;
    }
}



export default cubicSequence;
