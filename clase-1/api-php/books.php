<?php

    require 'conexion.php';

    header('HTTP/1.1 500');
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $datos = json_decode(file_get_contents('php://input'));
        if($datos != null) {
            $codigo = $datos->codigo;
            $titulo = $datos->titulo;
            $isbn = $datos->isbn;
            $editorial = $datos->editorial;
            $paginas = $datos->paginas;
            $codigo_autor = $datos->codigo_autor;

            $sql_add = "INSERT INTO libro (codigo, titulo, isbn, editorial, paginas, codigo_autor) 
            VALUES ('$codigo','$titulo','$isbn','$editorial','$paginas','$codigo_autor')";
            $result = mysqli_query($conexion, $sql_add);
            if(!$result) {
                header('HTTP/1.1 500');
                $json[] =  array(
                    "error" => "500",
                    "message" => "No se pudo cargar este libro",
                );
            }
            else {
                header('HTTP/1.1 200');
                $json[] =  array(
                    "error" => "200",
                    "message" => "Dato cargado correctamente",
                );
            }
        }
        else {
            header('HTTP/1.1 400');
        }
    }

    if($_SERVER['REQUEST_METHOD'] == 'GET') {

      $sql_get = "SELECT * FROM libro";
      $resultado = mysqli_query($conexion,$sql_get);
      $json = array();
      while($filas = mysqli_fetch_array($resultado)) {
        header('HTTP/1.1 200');
        $json[] = array(
          'codigo' => $filas['codigo'],
          'titulo' => $filas['titulo'],
          'isbn' => $filas['isbn'],
          'editorial' => $filas['editorial'],
          'paginas' => $filas['paginas'],
          'codigo_autor' => $filas['codigo_autor'],
        );
      }
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>
