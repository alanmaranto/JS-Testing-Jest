describe('Comparadores comunes', ()=> {
    const user = {
        name: "alan",
        lastname: "maranto",
    }

    const user2 = {
        name:"alan",
        lastname:"maranto",
    }

    test('igualdad de elementos', ()=> {
        expect(user).toEqual(user2);
    });

    test('no son exactamente iguales', ()=> {
        expect(user).not.toEqual(user2);
    });
})