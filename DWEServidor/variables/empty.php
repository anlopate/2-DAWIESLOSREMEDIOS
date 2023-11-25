<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Funciones isset y empty</title>
</head>
<body>
	<?php 
		/* 
		EMPTY(): Determina si una variable tiene el valor vacío. No admite variables no definidas.
				 Devuelve FALSE cuando:
					- Variabel Definida con valor NO NULL
				 Devuelve TRUE:
				 	- Cadena vacía 
				 	- Valor null
				 	- Valor cero
				 	- Valor false
				 	- Variable No Definida
		*/

		// Variable Cadena Vacía
		$nombre="";
		echo "Valor empty con Variable Cadena Vacía:";
		echo empty($nombre);
		echo "<br>";

		// Variable con Null
		$nombre=null;
		echo "Valor empty con Variable Definida con Null:";
		echo empty($nombre);
		echo "<br>";

		// Variable con cero
		$nombre=0;
		echo "Valor empty con Variable Definida con un valor cero:";
		echo empty($nombre);
		echo "<br>";

		// Variable con cero
		$nombre=FALSE;
		echo "Valor empty con Variable Definida con FALSE:";
		echo empty($nombre);
		echo "<br>";

		// Variable con valor
		$nombre=1;
		echo "Valor empty con Variable Definida con un valor:";
		echo (int) empty($nombre);
		echo "<br>";

		// Variable NO DEFINIDA
		
		echo "Valor empty con Variable NO DEFINIDA:";
		echo (int) empty($Nom);
		echo "<br>";
		if (empty($Nomb)) echo 'Variable No Definida';

 	?>
	
</body>
</html>