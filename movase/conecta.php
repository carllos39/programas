<?php
//Dados para a conexão local (SEU COMPUTADOR)

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "contato_movase";

//conectando com o banco
$conexao = new mysqli($servidor, $usuario, $senha, $banco);

//definindo padrão do caracteres
mysqli_set_charset($conexao, "UTF8");

//definição de fuso horário
date_default_timezone_set("America/Sao_Paulo");

//verificando o erro de conexão
if(mysqli_connect_error() ){
    die( "Erro ao conectar! " . mysqli_connect_error() );
}

?>