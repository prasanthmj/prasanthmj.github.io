require('../style/styles.scss');

function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function()
{
    var em = 'mail'+'to'+':'+'prasan'+'thmj'+'@'+'g'+'mail'+'.com';
    
	document.getElementById('contactlink').setAttribute('href',em);

    document.getElementById('contact2').setAttribute('href',em);
});


