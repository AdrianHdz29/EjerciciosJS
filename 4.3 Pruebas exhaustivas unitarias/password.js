function tienePatronesInseguros(pass) {
    const palabrasProhibidas = [
        'password', 'pass', 'contraseña', 'clave', 
        'secret', 'qwerty', 'abc123', 'admin', 
        'welcome', 'login', 'letmein', 'user', 
        'usuario', 'nombre', 'test', 'demo'
    ];
    const secuenciasComunes = [
        '123', '234', '345', '456', '567', '678', '789',
        '012', '987', '876', '765', '654', '543', '432', '321',
        'abc', 'bcd', 'cde', 'def', 'efg', 'fgh', 'ghi', 'hij', 'jkl',
        'qwe', 'wer', 'ert', 'rty', 'tyu', 'yui', 'uio', 'iop',
        'asd', 'sdf', 'dfg', 'fgh', 'ghj', 'hjk', 'jkl',
        'zxc', 'xcv', 'cvb', 'vbn', 'bnm'
    ];
    const passLower = pass.toLowerCase();
    const tienePalabraProhibida = palabrasProhibidas.some(palabra => 
        passLower.includes(palabra)
    );
    const tieneSecuencia = secuenciasComunes.some(secuencia =>
        passLower.includes(secuencia)
    );
    const tieneRepeticion = /(.)\1{3,}/.test(pass);

    return tienePalabraProhibida || tieneSecuencia || tieneRepeticion;
}

function validarPasswordDos(pass) {
    if (typeof pass !== 'string' || pass.length < 8 || pass.includes(' ')) return false;

    return true;
}

function validarPassword(pass) {
    
    const tieneMayusculas = /[A-Z]/.test(pass);
    const tieneMinusculas = /[a-z]/.test(pass);
    const tieneNumeros = /[0-9]/.test(pass);
    const tieneEspeciales = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

    if(typeof pass !== 'string' || pass.length < 8 || pass.includes(' ')
        || tieneMayusculas == false || tieneMinusculas == false || tieneNumeros == false || tieneEspeciales == false
        || tienePatronesInseguros(pass) == true) {
        return false;
    }

    return true;
}

module.exports = {validarPassword};

console.group('Pruebas manuales para validar la contraseña');

    // Caso normal
    console.log('Caso normal válido:', validarPassword('Segura185!Mascota'));

    // Casos extremos/frontera
    console.log('Caso frontera (8 caracteres, debería fallar):', validarPassword('A1b!cD2e'));
    console.log('Caso frontera (máxima longitud práctica):', validarPassword('Zapato'.repeat(250) + '1!Mascota'));

    // Casos vacíos
    console.log('Caso vacío:', validarPassword(''));
    console.log('Caso null:', validarPassword(null));
    console.log('Caso undefined:', validarPassword(undefined));

    // Casos erróneos
    console.log('Caso con espacios:', validarPassword('Contra segura 123!'));
    console.log('Caso Falta mayúscula:', validarPassword('password123!mascota'));
    console.log('Caso Falta minúscula:', validarPassword('PASSWORD123!MASCOTA'));
    console.log('Caso Falta número:', validarPassword('Password!!Mascota'));
    console.log('Caso Falta carácter especial:', validarPassword('Password123Mascota'));
    console.log('Caso Falta palabra significativa:', validarPassword('Password123!'));
    console.log('Caso Tipo de dato incorrecto (número):', validarPassword(12345678));
    console.log('Caso Tipo de dato incorrecto (array):', validarPassword(['P','a','s','s','w','o','r','d']));

    // Casos con argumentos faltantes
    console.log('Caso sin argumentos:', validarPassword());

console.groupEnd();