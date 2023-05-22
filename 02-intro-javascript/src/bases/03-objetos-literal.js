const persona = {
    nombre:'jose',
    apellido:'maldonado',
    edad: 45,
    direccion:{
        ciudad: 'rio grande',
        zip: 9420,
        lat: 32.345,
        lng: 23.12
    }
};
    console.log(persona);

    // ... hace un clon del objeto solamente la estructura, no los datos
    const persona2 = {...persona};
    persona2.nombre = 'ariel';
    console.log(persona2);

