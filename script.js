function cargarDatos() {
    const nombre = document.getElementById('nombre').value;
    const patente = document.getElementById('patente').value;
    const telefono = document.getElementById('telefono').value;
    const modelo = document.getElementById('modelo').value;
    const opcion = document.querySelector('input[name="opcion"]:checked').value;

    fetch('https://script.google.com/d/1UYArKflSNv3eLhuou6Tq8l6IJ9brdwSg7qv4rm_EFtv4jYNqAomXrKqd/edit?usp=sharing', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, patente, telefono, modelo, opcion })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Datos cargados correctamente');
        } else {
            alert('Error al cargar datos: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar los datos');
    });
}
