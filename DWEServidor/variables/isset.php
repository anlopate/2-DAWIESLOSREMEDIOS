<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Funciones isset y empty</title>
</head>
<body>
	<?php 
		/* 
		ISSET(): Devuelve FALSE cuando:
					- Variable No Definida
					- Variabel Definida con valor NULL
				 Devuelve TRUE:
				 	- Resto de casos 
		*/

		// Variable No Definida
		echo "Valor isset con Variable No Definida:";
		echo (int) isset($nombre);
		echo "<br>";

		// Variable Definida con valor null
		$nombre=null;
		echo "Valor isset con Variable Definida con Null:";
		echo (int) isset($nombre);
		echo "<br>";

		// Cualquier otro caso
		$nombre="Juan";
		echo "Valor isset con Variable Definida con un valor:";
		echo isset($nombre);
		echo "<br>";

 	?>
	
</body>
</html>