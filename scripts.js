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
        const response = await fetch('https://kanczicgtylccoudssnr.supabase.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbmN6aWNndHlsY2NvdWRzc25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NTY2MzQsImV4cCI6MjAzMjQzMjYzNH0.9o1Nmp3_t6HQDyJ6gACqZiqmBZ24GgaGdVYYem1Jx4I',
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
