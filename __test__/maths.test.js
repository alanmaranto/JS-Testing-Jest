import { sumar, multiplicar, restar, dividir } from '../maths';

describe('Calculos matematicos', ()=> {
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(2);
    });
    test('Prueba de multiplicar', ()=> {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('Prueba de resta', ()=> {
        expect(restar(7,4)).toBe(3);
    });
    test('Prueba de division', ()=> {
        expect(dividir(10,2)).toBe(5);
    });
});