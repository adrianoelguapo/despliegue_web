let proyectos = [
    {
        titulo: "Taller",
        descripcion: "Taller de reparación de vehículos",
        repositorio: "https://github.com/adrianoelguapo/taller"
    },
    {
        titulo: "Lista de tareas",
        descripcion: "Lista para gestionar tareas pendientes y completadas",
        repositorio: "https://github.com/adrianoelguapo/lista_de_tareas"
    },
    {
        titulo: "Lista de Clientes",
        descripcion: "Búsqueda de clientes",
        repositorio: "https://github.com/adrianoelguapo/lista_de_clientes"
    },
    {
        titulo: "Lista de Clientes 2",
        descripcion: "Búsqueda, creación y eliminación de clientes",
        repositorio: "https://github.com/adrianoelguapo/lista_de_clientes_2"
    },
    {
        titulo: "Biblioteca",
        descripcion: "Gestión de pedidos y devoluciones de libros",
        repositorio: "https://github.com/adrianoelguapo/biblioteca"
    },
    {
        titulo: "Tres en Raya",
        descripcion: "Recreación del juego Tres en Raya",
        repositorio: "https://github.com/adrianoelguapo/3-en-raya"
    }
];

$(function () {
    for (let cadaProyecto of proyectos){
        $(".proyectos").append(`<div class = "tarjeta"> <p class = "titulo"> ${cadaProyecto.titulo} </p> <p class = "descripcion"> ${cadaProyecto.descripcion} </p> <a href = "${cadaProyecto.repositorio}"> Pulsa aquí para visitar el proyecto </a> </div>`);
    }
});