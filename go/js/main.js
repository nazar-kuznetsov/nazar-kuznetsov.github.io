$(function () {

 var countryInner = $('#country');
 var ipText = $('#ip');
 var massage = $('.translate');
 var langFrom = massage.attr('data-language');

  $.getJSON("http://api.ipstack.com/78.137.51.186?access_key=341e22115d12b9a19bdcf77333ea1453", function (data) {
    console.log(data);
    var ip = data.ip;
    var country = data.country_name;
    var langCode = data.location.languages[0].name;
    countryInner.text('Ваша страна ' + country);

    $('<img class="img-flag" src='+ data.location.country_flag + '>').appendTo(countryInner);
    
    ipText.text('Ваш IP ' + ip);

    $.translate(massage.text(), langFrom, langCode, function (i, data) {
      massage.text(data.result);
      massage.removeClass('hide');
    });


  });


});