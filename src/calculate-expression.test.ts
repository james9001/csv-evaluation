import {describe, expect, it} from '@jest/globals';
import { calculateExpression } from "./calculate-expression";

//                 A  B  C  D  E  F  G  H  I   J   K
const constants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

describe('Calculate Expression Tests', () => {
    it('test', async () => {
        const expression = "A + B";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(3);
    })
    it('test', async () => {
        const expression = "B - A";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(1);
    })
    it('test', async () => {
        const expression = "D / B";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(2);
    })
    it('test', async () => {
        const expression = "K * (F * G)";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(462);
    })
    it('test', async () => {
        const expression = "(A + B) * C";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(9);
    })
    it('test', async () => {
        const expression = "D";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(4);
    })
    it('test', async () => {
        const expression = "C - C";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(0);
    })
    it('test', async () => {
        const expression = "F * F * D";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(144);
    })
    it('test', async () => {
        const expression = "G / J";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(0.7);
    })
    it('test', async () => {
        const expression = "B + E + D / E";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(7.8);
    })
    it('test', async () => {
        const expression = "G * (E - D)";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(7);
    })
    it('test', async () => {
        const expression = "(A + B) * C";
        const result = calculateExpression(constants, expression);
        expect(result).toEqual(9);
    })

})