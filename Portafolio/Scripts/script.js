let inicio = document.getElementById('seccion-inicio');
let sobremi = document.getElementById('sobremi');
let proyectos = document.getElementById('proyectos');
const nav = document.getElementById('navegacion-principal')

//sección contenido sobre mi, proyectos y otros

const contenido_sobremi = `<div style="display: grid; grid-template-columns: 1fr 1fr; justify-items:center;margin: 5%; border: groove black 5px">
    <section>
        <h3>MI EDUCACION</h3>
        <h4> <strong>Universidad Mariano Galvez</strong></h4>
        <img src="https://umg.edu.gt/miumg/sesion_files/logo_white.png" width="250px" height="150px" alt="Imagen Unversidad Mariano Galvez de Guatemala">
        <p>2023-2028 (en progreso)</p>
    </section>
    <section>
        <h3> <strong>Experiencia Laboral</strong></h3>
        <p>EMPRESA: Printhouse <br>
           CARGO: Encargado de Tienda de tecnologia y libreria <br>
           TIEMPO: 1 AÑO <br>
        </p>
    </section>
</div>`

const proyectos_contenido = `<iframe src="https://chat-d51db.web.app/" title="chat" style="display: grid; grid-template-columns: 1fr 1fr; justify-items:center;margin: 5%; border: groove black 5px"</iframe>`

sobremi.addEventListener("click", function (event){
    event.preventDefault()
    inicio.innerHTML = contenido_sobremi


});

proyectos.addEventListener("click", function(event){
   event.preventDefault()
    inicio.innerHTML = "<h1> Proyectos </h1>";
    inicio.innerHTML += proyectos_contenido;
} );


