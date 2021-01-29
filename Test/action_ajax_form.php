<?php
if (isset($_POST["sum"]) AND isset($_POST["time"]) AND isset($_POST["bid"]) AND isset($_POST["fio"]) AND isset($_POST["phonenumber"])) { 
    if(!empty($_POST["sum"])){
        $sum_key = true;
        $S = $_POST['sum'];
    } else $sum_key = false;
    //*************************************************************************
    if(!empty($_POST["time"])){
        $time_key = true;
        $n = $_POST['time'];
    } else {
         $n = 1;
         $time_key = false;
     }
    //*************************************************************************
    if(!empty($_POST["bid"])){
        $I = $_POST['bid'];
        $bid_key = true;
    } else {
         $I = 1;
         $bid_key = false;
     }
    //*************************************************************************
    if(!empty($_POST["fio"])){
        $name = $_POST['fio'];
        $name_key = true;
    } else
        $name_key = false;
    //*************************************************************************
    if(!empty($_POST["phonenumber"])){
        $tel = $_POST['phonenumber'];
        $tel_key = true;
    } else
        $tel_key = false;
    //*************************************************************************
    $key_sum = true;
    $ii = $I/(100*12);
    $P = $S *($ii+$ii/(pow($ii+1,$n)-1));
    $percent = ($P*$n)-$S;
    $date = strtotime("+$n month - 1 month", strtotime(date('Y-m-d')));
    $full_amount = $S+round($percent,2);
     
    if(!empty($P)){
        $convert_date = mb_convert_encoding('Дата<br> платежа<br><br>', "utf-8","windows-1251");
        $convert_payment = mb_convert_encoding('Ежемесячный платёж,<br> руб.', "utf-8","windows-1251");
        $convert_persent = mb_convert_encoding('Погашение процентов,<br> руб.', "utf-8","windows-1251");
        $convert_credit = mb_convert_encoding('Погашение кредита,<br> руб.', "utf-8","windows-1251");
        $convert_remains = mb_convert_encoding('Остаток долга,<br> руб.', "utf-8","windows-1251");
        $convert_end = mb_convert_encoding('Итого: ', "utf-8","windows-1251");
        $table = '<table class = "ras">
            <tr>
              <th>'.$convert_date.'</th>
              <th>'.$convert_payment.'</th>
              <th>'.$convert_persent.'</th>
              <th>'.$convert_credit.'</th>
              <th>'.$convert_remains.'</th>   
            </tr>';
               
    for ($i = 0; $i < $n; $i++){
        if($key_sum == true){
            $Sum = $_POST["sum"];
            $key_sum = false;
        }
        else
            $Sum = $ostatok;
        
        $pogrocent = $Sum * $ii;
        $pogkredit = $P - $pogrocent;
        $ostatok = $Sum - $pogkredit;
        $table .= "<tr>
            <td>".dateSetup($i)."</td>
            <td>".round($P,2)."</td>
            <td>".round($pogrocent,2)."</td>
            <td>".round($pogkredit,2)."</td>
            <td>".round($ostatok,2)."</td>
            </tr>";
    }
    $table .="<tr>"
           ."<td style ='font-weight: bold'>$convert_end</td>"
           ."<td  style ='font-weight: bold'>$full_amount</td>"
           ."<td  style ='font-weight: bold'>".round($percent,2)."</td>"
           ."<td style ='font-weight: bold'>$S</td>"
           ."<td></td>"
           ."</tr>";
    $table ."</table>";
    }
    
// Формируем массив для JSON ответа
    $result = array(
        'credit' => $S,
    	'sum' => round($P,2),
    	'date' => date("d-m-Y", $date),
        'bid' => round($percent,2),
        'bid_month' => $I,
        'sum_key' => $sum_key,
        'time_key' => $time_key,
        'bid_key' => $bid_key,
        'name_key' => $name_key,
        'tel_key' => $tel_key,
        'table' => $table,
        'name' => $name,
        'tel' => $tel,
        'loan_term' => $n
    ); 
    
// Переводим массив в JSON
    echo json_encode($result); 
}

//Получаем даты платежей
function dateSetup($count)
{
   $dates = date_create(strtotime(date('Y.m.d')));
   $new_date = date_modify($dates, "$count month");
   
   return date_format($new_date, 'd.m.Y');   
}

