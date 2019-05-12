// No modifiques estas funciones a menos que sepas MUY BIEN lo que estas haciendo!


// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png
function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

// Carga a un superheroe predefinido
function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}

var batmanPic = document.getElementById('batman');
var wonderPic = document.getElementById('wonder');
var flashPic = document.getElementById('flash');
var invisiblePic = document.getElementById('invisible');


batmanPic.addEventListener('click',cargarBatman);

function cargarBatman(){
cargarSuperheroe(batman)

}

wonderPic.addEventListener('click',cargarWonder);

function cargarWonder(){
cargarSuperheroe(wonder)

}

flashPic.addEventListener('click',cargarFlash);

function cargarFlash(){
cargarSuperheroe(flash)

}

invisiblePic.addEventListener('click',cargarInvisible);

function cargarInvisible(){
cargarSuperheroe(invisible)

}


guardar.addEventListener('click',guardarPixelArt);