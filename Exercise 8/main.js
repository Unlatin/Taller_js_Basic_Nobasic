const day = prompt(' Escribe un día de la semana en minúscula')
switch (day) {
    case 'lunes':
        alert('Es el primer día de la semana, tus actividades son trabajar, estudiar, dormir temprano')
        break;
    case 'martes':
        alert('Es el segundo día de la semana, tus actividades son trabajar, estudiar, dormir temprano')
        break;
    case 'miercoles':
        alert('Hace parte de los días entre semana, tus actividades son trabajar, estudiar, salir de compras, dormir temprano')
        break;
    case 'jueves':
        alert('Hace parte de los días entre semana, tus actividades son trabajar, estudiar, hacer desayuno, almuerzo y comida')
        break;
    case 'viernes':
        alert('Ultimo día entre semana, tus actividades son trabajar, estudiar, hacer desayuno, almuerzo,comida y farra')
        break;
    case 'sabado':
        alert('Hace parte del fin de semana, tus actividades son salir de fiesta, estar con tu familia y pareja')
        break;
    case 'domingo':
        alert('Hace parte del fin de semana y ultimo día de la semana, tus actividades son hacer trabajos pendientes, salir a restaurantes, dormir temprano')
        break;
    default:
        alert('Por favor ingresa un día de la semana válido')
        break;
}