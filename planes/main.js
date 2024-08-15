
const button = document.getElementById("addtask")
// CREACION DE LISTA
let planes = [{
    nombre: "Hacer pepinillos",
    completado: true
},{
    nombre: "Curso de porros",
    completado: false
}];

button.onclick = () => agregarPlan();

function agregarPlan() {

    let nombre = document.getElementById("newtask").value

    planes.push({nombre, completado: false});

    localStorage.setItem("lista", JSON.stringify(planes));
    let lista = localStorage.getItem("lista");
    console.log(lista);


}




