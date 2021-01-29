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
        url:     url, //url �������� (action_ajax_form.php)
        type:     "POST", //����� ��������
        dataType: "html", //������ ������
        data: $("#"+ajax_form).serialize(),  // ����������� ������
        success: function(response) { //������ ���������� �������
            result = $.parseJSON(response);
            if(result.sum_key === true && result.time_key === true && result.bid_key === true){
                $('#result_form').val('');
                $('#sum').val(result.sum);
                $('#bid').val(result.bid);
                $('#date').val(result.date);
            } else if(result.sum_key === true && result.bid_key === true && result.time_key === false){
                  alert('���� ������� �� ������!');
            } else if(result.sum_key === true && result.bid_key === false && result.time_key === true){
                  alert('���������� ������ �� �������!');
            } else if(result.sum_key === false && result.bid_key === true && result.time_key === true){
                  alert('����� ������� �� �������!');
            } else if(result.sum_key === false && result.bid_key === false && result.time_key === true){
                  alert('����� ������� � ������ �� �������!');
            } else if(result.sum_key === false && result.bid_key === true && result.time_key === false){
                  alert('����� ������� � ���� �� �������!');
            } else if(result.sum_key === true && result.bid_key === false && result.time_key === false){
                  alert('���� ������� � ������ �� �������!');
            }
            else alert('�� �� ������� �� ������ ��������� ��� �������� �������');
             
    	},
    	error: function(response) { // ������ �� ����������
            alert('������. ������ �� ����������.');
    	}
 	});
}

function sendAjaxForm2(ajax_form, url) {
    $.ajax({
        url:     url, //url �������� (action_ajax_form.php)
        type:     "POST", //����� ��������
        dataType: "html", //������ ������
        data: $("#"+ajax_form).serialize(),  // ����������� ������
        success: function(response) { //������ ���������� �������
        	result = $.parseJSON(response);
                if(result.sum > 0){
                    $('#table').html(result.table);
                }else alert('������ �� ���������. ��������� ������ �� �������');
    	},
    	error: function(response) { // ������ �� ����������
            alert('������. ������ �� ����������.');
    	}
 	});
}

function sendAjaxForm3(url) {
   if(result.name_key === true){
       var fio = result.name;
   }
   else{
       alert("����� �� ����������. �� ������� ���");
    }
    if(result.tel_key === true)
       var tel = result.tel;
   else{
       alert("����� �� ����������. �� ������ ����� ��������");
       
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
            alert("�������! ���� ������ ������� �������"); 
        },
        error: function(){
            alert("���� ������ �� ����������");
        }
        });
    });
}}

