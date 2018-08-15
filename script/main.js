// // Error codes
// define('REQUEST_METHOD_NOT_VALID', 100);
// define('REQUEST_CONTENT_TYPE_NOT_VALID', 101);
// define('REQUEST_NOT_VALID', 102);
// define('VALIDATE_PARAMETER_REQUIRED', 103);
// define('VALIDATE_PARAMETER_DATATYPE', 104);
// define('API_METHOD_REQUIRED', 105);
// define('API_PARAMS_REQUIRED', 106);
// define('API_DOES_NOT_EXIST', 107);

// // User errors
// define('INVALID_LOGIN_OR_PASSWORD', 108);
// define('USER_NOT_ACTIVATED', 109);
// define('USER_BANNED', 110);
// define('USER_EXIST', 111);
// define('USER_ERROR', 112);
// define('PASSWORD_ERROR', 113);
// define('WAIT_FIVE_MIN', 114);


// define('SUCCESS_RESPONSE', 200);

// define('AUTHORIZATION_HEADER_NOT_FOUND', 300);
// define('ACCESS_TOKEN_ERRORS', 301);
// define('UNEXPECTED_ERROR', 302);

var api = 'https://api.account.otau.org/v1/';
var phone;
var code_tries = 0;

function error_rus(code, id) {
    var errorServ = document.getElementById('error' + id);

    switch (code) {
        case 100:
            errorServ.innerHTML = "Метод запроса не действительно";
            break;
        case 101:
            errorServ.innerHTML = "ТРЕБОВАНИЕ СОДЕРЖАНИЯ ЗАПРОСА НЕ ДЕЙСТВИТЕЛЬНО";
            break;
        case 102:
            errorServ.innerHTML = "недействительный запрос";
            break;
        case 103:
            errorServ.innerHTML = "Требуется номер телефона!";
            break;
        case 104:
            errorServ.innerHTML = "Не правильный логин или пароль!";
            break;
        case 105:
            errorServ.innerHTML = "ТРЕБУЕТСЯ МЕТОД API";
            break;
        case 106:
            errorServ.innerHTML = "ТРЕБУЕМЫЕ ПАРАМЕТРЫ API";
            break;
        case 107:
            errorServ.innerHTML = "API НЕ СУЩЕСТВУЕТ";
            break;
        case 108:
            errorServ.innerHTML = "НЕПРАВИЛЬНЫЙ ЛОГИН ИЛИ ПАРОЛЬ";
            break;
        case 109:
            errorServ.innerHTML = "ПОЛЬЗОВАТЕЛЬ НЕ АКТИВИРУЕТ";
            break;
        case 110:
            errorServ.innerHTML = "ПОЛЬЗОВАТЕЛЬ ЗАБЛОКИРОВАН";
            break;
        case 111:
            errorServ.innerHTML = "ПОЛЬЗОВАТЕЛЬ СУЩЕСТВУЕТ";
            break;
        case 112:
            errorServ.innerHTML = "ОШИБКА ПОЛЬЗОВАТЕЛЯ";
            break;
        case 113:
            errorServ.innerHTML = "ОШИБКА ПАРОЛЯ";
            break;
        case 114:
            errorServ.innerHTML = "ПОДОЖДИТЕ ПЯТЬ МИН";
            break;
        case 200:
            errorServ.innerHTML = "УСПЕШНЫЙ ОТВЕТ";
            break;
        case 300:
            errorServ.innerHTML = "АВТОРИЗАЦИЯ НЕ НАЙДЕНО";
            break;
        case 301:
            errorServ.innerHTML = "ДОСТУПНЫЕ ОШИБКИ";
            break;
        case 302:
            errorServ.innerHTML = "НЕОЖИДАННАЯ ОШИБКА";
            break;
        default:
            errorServ.innerHTML = "НЕОЖИДАННАЯ ОШИБКА";
    }
}