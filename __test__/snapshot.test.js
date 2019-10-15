import { getCharacter } from '../snapshot';
import Rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(Rick)).toMatchSnapshot();
    });
});