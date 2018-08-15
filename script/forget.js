$(document).on('click', '#forget1', function(e) {
    e.preventDefault();
    // showPanel(2);
    var data = {
        'phone': $('#phone').val()
    };
    $.ajax({
        url: api + 'forgot-password',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(html) {
            if (html.error) {
                error_rus(html.error.code, 6);
            } else if (html.success) {
                phone = data.phone;
                showPanel(2);
            }
        }
    });
});
$(document).on('click', '#forget2', function(e) {
    if (code_tries > 4)
        location.reload(true);
    code_tries++;
    e.preventDefault();
    var data = {
        'phone': phone,
        'code': $('#code').val()
    };
    $.ajax({
        url: api + 'verify-code',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(html) {
            if (html.error) {
                error_rus(html.error.code, 7);
            } else if (html.success) {
                document.cookie = "token=" + html.success.result.token + "; path=/; expires= 01 Jan 2030 00:00:00 UTC";
                showPanel(3);
                console.log(html);
            }
        }
    });
});
$(document).on('click', '#forget3', function(e) {
    e.preventDefault();
    var data = {
        'password': $('#password').val(),
        'confirm_password': $('#confirm_password').val()
    };
    $.ajax({
        url: api + 'set-password',
        type: 'POST',
        headers: {
            "Authorization": "Bearer " + getCookie('token'),
        },
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(html) {
            if (html.error) {
                error_rus(html.error.code, 8);
            } else if (html.success) {
                alert('Пароль успешно изменен');
            }
        }
    });
});

function showPanel(id) {
    for (var i = 1; i < 5; i++) {
        if (id == i)
            $('#panel' + i).css('display', 'block');
        else
            $('#panel' + i).css('display', 'none');
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}