<?php
	$servername = "172.19.0.1:3306";
	$username = "root";
	$password = "root";

	try {
		$conn = new PDO("mysql:host=$servername;dbname=db", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		echo "Conexão bem Sucedida";
	}
		catch(PDOException $e){
		echo "Erro na conexão: " . $e->getMessage();
	}
?> 

