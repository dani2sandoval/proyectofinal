let fondo = document.getElementById('fondo');
let texto = document.getElementsByClassName('texto')
let estilo1 = document.getElementById('estilo1');
let estilo2= document.getElementById('estilo2');
let estilo3= document.getElementById('estilo3');
let titulo = document.getElementById('titulo');
let botones = document.getElementById('estilos')
let contenedor = document.getElementById('contenedor')
/* class devuelve una colección*/

estilo1.addEventListener('click', function(event){
    fondo.style.backgroundImage= "url('Resouces/computer.jpg')";
    fondo.style.fontFamily ='Gloria Hallelujah', 'Cursive';
    for (i =0; i < texto.length; i++){
        texto[i].style.color = 'black';
        
    }
    titulo.style.color = "black"
    estilo1.style.border = "dotted blue 3px";
    estilo1.style.color = ""
    estilo2.style.border = "none";
    estilo3.style.border = "none";

});
  

estilo2.addEventListener('click', function(event){
    fondo.style.backgroundImage = "url('https://th.bing.com/th/id/R.b0223a39ba5994082bcd3963c9e0d445?rik=ADxYakpgFoS4Zg&pid=ImgRaw&r=0')";
    fondo.style.fontFamily = 'Gemunu Libre', 'sans-serif';
    for (i =0; i < texto.length; i++){
        texto[i].style.color = 'white';
    }
    titulo.style.color = 'white'
    estilo2.style.border = "groove gray 2px"
    estilo1.style.border = "none";
    estilo3.style.border = "none";
});


estilo3.addEventListener('click', function(event){
    fondo.style.backgroundImage = "url('https://th.bing.com/th/id/R.42e2ff74b43d9401893372769a62931e?rik=VnSvpnzIFvvyzw&pid=ImgRaw&r=0')";
    fondo.style.fontFamily = 'Mulish', 'sans-serif;';
    estilo3.style.border = "solid 5px brown";
    estilo2.style.border = "none";
    estilo1.style.border = "none";


});




