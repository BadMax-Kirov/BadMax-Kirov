<?php
    include 'elems/init.php';
    
    if(isset($_POST['fio']) AND isset($_POST['last_date']) AND isset($_POST['sum'])
            AND isset($_POST['tel'])AND isset($_POST['bid'])AND isset($_POST['loan_term'])
            AND isset($_POST['bid_month'])){
    $name = $_POST['fio'];
    $name_sql = strtr($name,' ','_');
    $last_date = $_POST['last_date'];
    $sum = $_POST['sum'];
    $tel = $_POST['tel'];
    $bid = $_POST['bid'];
    $loan_term = $_POST['loan_term'];
    $bid_month = $_POST['bid_month'];
    
    $query = "create table $name_sql
        (
         id integer not null auto_increment primary key,
         name varchar(50),
         phonenumber varchar(30),
         sum_credit integer(4),
         loan_term integer(4),
         bid_month integer(4),
         bid integer (12),
         deadline varchar(10)
        )";
          
    mysqli_query($link, $query); 
    $query2 = "INSERT INTO $name_sql (name, phonenumber, sum_credit, loan_term, bid_month,"
            . " bid, deadline) VALUES ('$name', '$tel', '$sum', $loan_term, '$bid_month', '$bid', '$last_date')";
    mysqli_query($link, $query2);
    }
                   
                