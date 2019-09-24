import { isFalse, isNull, isTrue, isUndefined } from '../true';

describe('Probar resultados nulos', () => {
    test('nulos', () => {
        expect(isNull()).toBeNull();
    });
});
describe('Probar resultados falsos', () => {
    test('falsos', () => {
        expect(isFalse()).toBeFalsy();
    });
});
describe('Probar resultados verdaderos', () => {
    test('verdadero', () => {
        expect(isTrue()).toBeTruthy();
    });
});
describe('Probar resultados indefinidos', () => {
    test('indefinidos', () => {
        expect(isUndefined()).toBeUndefined();
    });
});
describe('Probar resultados no verdaderos', () => {
    test('falso o verdadero', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});