 function login() {
     $.ajax(
         {
             url: "http://127.0.0.1:5000/login/",
             contentType: 'application/json; charset=utf-8',
             data: JSON.stringify({
                 'username': $("#username").val(),
                 'password': $("#password").val()
             }),
             type: "POST",
             dataType: "json",

             error: function (resp) {
                 //window.location.replace('404.html');
             },

             success: function (resp) {
                 if (resp.status === 'ok') {
                     window.location.replace('reservationJD.html?username=' + resp.message + '/')
                     alert.message("Error Handling Request\n" + "Message: " + resp.message);
                 }
                 else {
                     window.location.replace('ui/404.html?username=' + resp.message + '/')
                 }
             }
         }
     );

 }

 /* function reserve() {
     // var loc_id = $('#id').val();
     // var loc_name = $('#name').val();
     // var loc_email = $('#email').val();
     // var loc_origin = $('#origin').val();
     // var loc_destination = $('#destination').val();
     // var loc_time = $('#time').val();
     // var loc_seatno = $('#seatno').val();

     $.ajax({
         url: 'http://127.0.0.1:5000/reserve/',
         data: $('form').serialize(),
         type: "POST",
         dataType: "json",
         success: function (resp) {
             if (resp.status === 'ok') {
                 // window.location.replace('reservationDETAILS.html?username=' + resp.message + '/')
                 alert("SAVED!")
             }
         },
         error: function (resp) {
             alert("Something went wrong!");
         }

     });
 }

 */