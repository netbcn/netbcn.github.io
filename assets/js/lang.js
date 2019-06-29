// https://coderwall.com/p/6uxw7w/simple-multilanguage-with-jquery
var langs = ['en', 'cat', 'esp'];


var translate = function (jsdata)
{	
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var langCode = getParameterByName('lang');

if (langs.includes(langCode))
	$.getJSON('lang/'+langCode+'.json', translate);
else
	$.getJSON('lang/cat.json', translate);
