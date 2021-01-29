$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
    $("#btn2").click(
		function(){
			sendAjaxForm2('ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
    $('#btn3').click(
	        function(){
			sendAjaxForm3('addSQL.php');
			return false; 
		}
        );
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            if(result.sum_key === true && result.time_key === true && result.bid_key === true){
                $('#result_form').val('');
                $('#sum').val(result.sum);
                $('#bid').val(result.bid);
                $('#date').val(result.date);
            } else if(result.sum_key === true && result.bid_key === true && result.time_key === false){
                  alert('Срок кредита не указан!');
            } else if(result.sum_key === true && result.bid_key === false && result.time_key === true){
                  alert('Процентная ставка не указана!');
            } else if(result.sum_key === false && result.bid_key === true && result.time_key === true){
                  alert('Сумма кредита не указана!');
            } else if(result.sum_key === false && result.bid_key === false && result.time_key === true){
                  alert('Сумма кредита и ставка не указаны!');
            } else if(result.sum_key === false && result.bid_key === true && result.time_key === false){
                  alert('Сумма кредита и срок не указаны!');
            } else if(result.sum_key === true && result.bid_key === false && result.time_key === false){
                  alert('Срок кредита и ставка не указаны!');
            }
            else alert('Вы не указали ни одного параметра для рассчета кредита');
             
    	},
    	error: function(response) { // Данные не отправлены
            alert('Ошибка. Данные не отправлены.');
    	}
 	});
}

function sendAjaxForm2(ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
                if(result.sum > 0){
                    $('#table').html(result.table);
                }else alert('Кредит не рассчитан. Заполните данные по кредиту');
    	},
    	error: function(response) { // Данные не отправлены
            alert('Ошибка. Данные не отправлены.');
    	}
 	});
}

function sendAjaxForm3(url) {
   if(result.name_key === true){
       var fio = result.name;
   }
   else{
       alert("Заяка не отправлена. Не указаны ФИО");
    }
    if(result.tel_key === true)
       var tel = result.tel;
   else{
       alert("Заяка не отправлена. Не указан номер телефона");
       
    }
   var sum = result.credit;
   var last_date = result.date;
   var bid = result.bid;
   var loan_term = result.loan_term;
   var bid_month = result.bid_month;
   
if (result.name_key === true && result.tel_key === true){   
    $(document).ready(function(){
        $.ajax({
            url: url,
            type: "POST",
            data: {fio: fio,
                   sum: sum,
                   last_date: last_date,
                   tel: tel,
                   bid: bid,
                   loan_term: loan_term,
                   bid_month: bid_month
            },
        success: function(){
            alert("Спасибо! Ваша заявка успешно принята"); 
        },
        error: function(){
            alert("Ваша заявка не доставлена");
        }
        });
    });
}}

