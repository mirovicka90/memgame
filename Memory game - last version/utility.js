function getQueryStringValue(parameterName){
    var href = window.location.href;
    var queryString = href.slice(href.indexOf('?') + 1);
    var paramatersWithValues = queryString.split('&');

    var result = {};

    for(i = 0; i < paramatersWithValues.length; i++)
    {
        var paramAndValueArr = paramatersWithValues[i].split('=');
        result[paramAndValueArr[0]] = paramAndValueArr[1];
    }

    return result[parameterName]; 
}