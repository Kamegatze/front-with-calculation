import { Component } from '@angular/core';
import { FunctionService } from '../services/function.service';
import { Response } from '../interface/response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    protected valueInCalc : string = ''; 

    private operand : string = '';

    private removeSubscribe! : Subscription;

    constructor(private service: FunctionService) {}

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
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.multiple(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '-' :
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.subtraction(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '+' :
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.addition(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '÷' :
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.division(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '^':
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.pow(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '%':
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.remainderFromDivision(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '&&':
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.and(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '||':
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.or(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '>':
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.more(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case '<':
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.less(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            case 'xor':
                this.removeSubscribe?.unsubscribe();

                this.removeSubscribe = this.service.xor(Number(valueOne), Number(valueTwo)).subscribe(value => {
                    const response : Response = <Response>value;
                    this.valueInCalc = String(response?.response);
                });
                break;
            }

        this.operand = '';
    }

    cos() {

        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.cos(Number(this.valueInCalc)).subscribe(value => {
            const response : Response = <Response>value;
            this.valueInCalc = String(response?.response);
        });
    }

    tan() {
        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.tan(Number(this.valueInCalc)).subscribe(value => {
            const response : Response = <Response>value;
            this.valueInCalc = String(response?.response);
        });
    }

    cot() {
        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.cot(Number(this.valueInCalc)).subscribe(value => {
            const response : Response = <Response>value;
            this.valueInCalc = String(response?.response);
        });
    }

    sin() {
        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.sin(Number(this.valueInCalc)).subscribe(value => {
            const response : Response = <Response>value;
            this.valueInCalc = String(response?.response);
        });
    }

    log() {
        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.log(Number(this.valueInCalc)).subscribe(value => {
            const response : Response = <Response>value;
            this.valueInCalc = String(response?.response);
        });
    }

    radios() {
        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.radios(Number(this.valueInCalc)).subscribe(value => {
            const response : Record<string, any> = value;
            this.valueInCalc = String(response?.['Response']);
        });
    }

    doublePlus() {
        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.doublePlus(Number(this.valueInCalc)).subscribe(value => {
            const response : Response = <Response>value;
            this.valueInCalc = String(response?.response);
        });
    }

    doubleMinus() {
        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.doubleMinus(Number(this.valueInCalc)).subscribe(value => {
            const response : Response = <Response>value;
            this.valueInCalc = String(response?.response);
        });
        
    }

    factorial() {
        this.removeSubscribe?.unsubscribe();

        this.removeSubscribe = this.service.factorial(Number(this.valueInCalc)).subscribe(value => {
            const response : Response = <Response>value;
            this.valueInCalc = String(response?.response);
        });
    }
}
