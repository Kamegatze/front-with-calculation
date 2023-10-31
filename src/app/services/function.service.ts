import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FunctionService {


    private url: string = 'http://localhost'; 

    private path: string = '/api/pmi-120'

    constructor(private http: HttpClient) { }

    cos(param: number) : Observable<object> {
        return of({response: Math.cos(param)})
        // return this.http.get<object>(`${this.url}:8080${this.path}/cos?param=${param}`);
    }

    tan(param : number) : Observable<object> {
        
        return of({response: Math.tan(param)});
        // return this.http.get<object>(`${this.url}:8080${this.path}/tan?param=${param}`);
    }

    cot(param : number) : Observable<object> {
        return of({response: 1 / (Math.tan(param))});
        // return this.http.get<object>(`${this.url}:8080${this.path}/cot?param=${param}`);
    }

    sin(param: number) : Observable<object> {
        return of({response: Math.sin(param)});
        // return this.http.get<object>(`${this.url}:8080${this.path}/sin?param=${param}`);
    }

    log(param: number) : Observable<object> {
        return of({response: Math.log(param)})
        // return this.http.get<object>(`${this.url}:8080${this.path}/log?param=${param}`);
    }

    radios(param: number) : Observable<object> {
        return of({response: Math.pow(param, 2) * Math.PI});
        // return this.http.get<object>(`${this.url}:8080${this.path}/radios?param=${param}`);
    }

    doublePlus(param: number) : Observable<object> {
        return of({response: ++param});
        // return this.http.get<object>(`${this.url}:8080${this.path}/double-plus?param=${param}`);
    }

    doubleMinus(param: number) : Observable<object> {
        return of({response: --param});
        // return this.http.get<object>(`${this.url}:8080${this.path}/double-minus?param=${param}`);
        
    }

    factorial(param: number) : Observable<object> {

        let result = 1;
        for(let i = 1; i <= param; i++) {
            result *= i;
        }

        return of({response: result});
    }
    // return this.http.get<object>(`${this.url}:8080${this.path}/factorial?param=${param}`);
}
