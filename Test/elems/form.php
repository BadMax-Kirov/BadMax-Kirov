<label class = "label_menu">Данные по кредиту</label>
    <form class = "input" method="POST" id="ajax_form" action="" >
        <label class = "label">Сумма кредита: </label>
        <input class = "input_form" type="text" name="sum" placeholder="руб." /><br>
        <label class = "label">Срок кредита: </label>
        <input class = "input_form" type="text" name="time" placeholder="мес." /><br>
        <label class = "label">Ставка кредита:</label>
        <input class = "input_form" type="text" name="bid" placeholder="%" /><br>
        <label class = "label">Фамилия Имя Отчество: </label>
        <input class = "input_form" type="text" name="fio" placeholder="ФИО" /><br>
        <label class = "label">Телефон: </label>
        <input class = "input_form" type="text" name="phonenumber" placeholder="Тел." /><br><br>
        <input type="button" id="btn" value="Рассчитать кредит >>" />
    </form><br>
        
<label class = "label_menu">Расчетная информация по платежам</label>
    <form class = "input" method="POST" id="" action="">
        <label class = "label">Ежемесмячный платеж: </label>
        <input class = "input_form" type ="text" id="sum" name="sum2" disabled="true"><br>
        <label class = "label">Сумма выплаченных процентов: </label>
        <input class = "input_form" type ="text" id="bid" name="bid2" disabled="true"><br>
        <label class = "label">Дата последнего платежа: </label>
        <input class = "input_form" type ="text" id="date" name="date2" disabled="true"><br><br>
        <input type="button" id="btn2" value="Вывести график платежей >>" />
        <input style=" float:left" type="button" id="btn3" value="Отправить заявку в банк >>" /><br>
    </form>
<div id="table"></div>
