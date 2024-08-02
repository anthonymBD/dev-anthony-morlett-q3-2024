function currentUserUtmParameter() {


    // Create a URLSearchParams object from the current page's query string
    const searchParams = new URLSearchParams(window.location.search);


    return sessionStorage.get('utm_medium') || searchParams.get('utm_medium');
}

function showDefaultMsg() {
    const $fallback = document.querySelector('.message.fallback');

    if ($fallback) $fallback.style.display = 'block'
}


function showMsgByParameter(parameterValue) {
    const $msg = document.querySelector(`.message[data-utm="${parameterValue}"]`)

    if ($msg) $msg.style.display = 'block';
    else showDefaultMsg();
}

function determineMsgToShow() {
    const utmSessionValue = currentUserUtmParameter();

    showMsgByParameter(utmSessionValue)
}

determineMsgToShow();