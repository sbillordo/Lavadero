async function cargarDatos() {
    const nombre = document.getElementById('nombre').value;
    const patente = document.getElementById('patente').value;
    const telefono = document.getElementById('telefono').value;
    const modelo = document.getElementById('modelo').value;
    const opcion = document.querySelector('input[name="opcion"]:checked').value;

    const fecha = new Date().toISOString();  // Fecha en formato ISO

    const data = {
        fecha: fecha,
        nombre_cliente: nombre,
        patente: patente,
        telefono: telefono,
        modelo: modelo,
        opcion: opcion
    };

    try {
        const response = await fetch('https://YOUR_SUPABASE_URL/rest/v1/YOUR_TABLE_NAME', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'a3525751-cef1-404c-a3c6-1462d72d6d40',
                'Authorization': 'sba_1f4c3c41bb25cb6f595c4dff598046b477bd79d9'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error al cargar datos');
        }

        const result = await response.json();
        alert('Datos cargados correctamente');
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar los datos');
    }
}
