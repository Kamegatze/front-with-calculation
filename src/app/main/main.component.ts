import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    protected valueInCalc : string = ''; 

    private operand : string = '';

    setValue(value: string) : void {
        this.valueInCalc = `${this.valueInCalc}${value}`;
    }

    deleteSignLast() : void {
        this.valueInCalc = this.valueInCalc.substring(0, this.valueInCalc.length - 1);
    }

    setOperand(operand:string) : void {
        this.valueInCalc = `${this.valueInCalc}${operand}`;
        this.operand = operand;
    }

    result() : void {
        const values = this.valueInCalc.split(this.operand);

        const valueOne : number = Number(values[0]);
        const valueTwo : number = Number(values[1]);

        console.log(values);

        switch (this.operand) {
            case '*' : 
                this.valueInCalc = String(valueOne * valueTwo);
                break;
            case '-' :
                this.valueInCalc = String(valueOne - valueTwo);
                break;
            case '+' :
                this.valueInCalc = String(valueOne + valueTwo);
                break;
            case '÷' :
                this.valueInCalc = String(valueOne / valueTwo);
                break;
            case '^':
                this.valueInCalc = String(Math.pow(valueOne, valueTwo));
                break;
            case '%':
                this.valueInCalc = String(valueOne % valueTwo);
                break;
            case '&&':
                this.valueInCalc = String(valueOne && valueTwo);
                break;
            case '||':
                this.valueInCalc = String(valueOne || valueTwo);
                break;
            case '>':
                this.valueInCalc = String(valueOne > valueTwo);
                break;
            case '<':
                this.valueInCalc = String(valueOne < valueTwo);
                break;
            case 'xor':
                this.valueInCalc = String(valueOne ^ valueTwo);
                break;
            }

        this.operand = '';
    }

    cos() {
        this.valueInCalc = String(Math.cos(Number(this.valueInCalc)));
    }

    tan() {
        this.valueInCalc = String(Math.tan(Number(this.valueInCalc)));
    }

    cot() {
        this.valueInCalc = String(1 / Math.tan(Number(this.valueInCalc)));
    }

    sin() {
        this.valueInCalc = String(Math.sin(Number(this.valueInCalc)));
    }

    log() {
        this.valueInCalc = String(Math.log(Number(this.valueInCalc)));
    }

    radios() {
        this.valueInCalc = String(Math.pow(Number(this.valueInCalc), 2) * Math.PI);
    }

    doublePlus() {
        let value = Number(this.valueInCalc);
        this.valueInCalc = String(++value);
        console.log(value);
    }

    doubleMinus() {
        let value = Number(this.valueInCalc);
        this.valueInCalc = String(--value);
        
    }

    factorial() {
        const value = Number(this.valueInCalc);

        let result = 1;
        for(let i = 1; i <= value; i++) {
            result *= i;
        }

        this.valueInCalc = String(result);
    }
}
