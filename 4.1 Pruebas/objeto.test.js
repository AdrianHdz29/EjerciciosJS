test('comprobar el usuario', () => {
    const usuario = {
        'nombre': 'Adrian',
        'edad': 22
    };
    usuario.correo = 'adrian@correo.com';
    usuario.puesto = 'admin';
    expect(usuario).toEqual({'nombre':'Adrian', 'edad':22, 'correo':'adrian@correo.com', 'puesto':"admin"});
});