import Fraction from "fraction.js"

export class geometricSequence{
    fstItem: number;
    ratio: Fraction;

    constructor(fstItem: number, ratio: Fraction){
        this.fstItem = fstItem;
        this.ratio = ratio;
    }

    getHTMLCode(){
        let exp = "";
        exp = `
            ${this.fstItem !== 1 && this.ratio.valueOf() !== this.fstItem ? `${this.fstItem} · ` : ``}
            ${geometricSequence.fractiontoHTMLCode(this.ratio)}
            <sup>n${this.ratio.valueOf() !== this.fstItem ? "-1" : ""}</sup>`
        return `n<sup>th</sup>&ensp;term = ${exp}`;
    }
}

export namespace geometricSequence{
    export function isGeometric(seq: number[]){
        let commonRatio = 0;
        for(let i = 0; i < seq.length-1; i++){
            if(commonRatio === 0) commonRatio = seq[i+1] / seq[i];
            else {
                if(commonRatio !== seq[i+1] / seq[i]) return false;
            }
        }
        return true;
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

        // if(fra.s < 0) code = "-" + code;
        // else code = "+" + code;
        
        return code;
    }

    export function fromSequence(seq: number[]){
        return new geometricSequence(seq[0], new Fraction(seq[1] / seq[0]))
    }
}

export default geometricSequence;