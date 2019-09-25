describe('Comparadores comunes', ()=> {
    const user = {
        name: "alan",
        lastname: "maranto",
    }

    const user2 = {
        name:"alan",
        lastname:"maranto2",
    }

    const user3 = {
        name:"alan",
        lastname:"maranto",
    }

    test('igualdad de elementos', ()=> {
        expect(user).toEqual(user3);
    });

    test('no son exactamente iguales', ()=> {
        expect(user).not.toEqual(user2);
    });
})