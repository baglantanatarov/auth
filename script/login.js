$(document).on('click', '#enter', function(e) {
    e.preventDefault();
    var data = {
        'phone': $('#login').val(),
        'password': $('#password').val()
    };
    $.ajax({
        url: api + 'auth',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(html) {
            if (html.error) {
                console.log(html.error);
                error_rus(html.error.code, 5);
            } else if (html.success) {
                console.log(html);
                document.cookie = "token=" + html.success.result.token + "; path=/; expires= 01 Jan 2030 00:00:00 UTC";
                $('#error5').html('');
                alert('Вы успешно вошли');
            }
        }
    });
});