<?php
$destino= "garnicadidier33@gmail.com";
$nombre= $_POST["nombre"];
$correo= $_POST["correo"];
$telefono= $_POST["telefono"];
$mensaje= $_POST["mensaje"];
$contenido= "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensajes: " . $mensaje;
if (mail($destino,"Contacto",$contenido)) {
  echo "Su mensaje fue enviado";
}
else {
  echo "Su mensaje No fue enviado";
}
 ?>
