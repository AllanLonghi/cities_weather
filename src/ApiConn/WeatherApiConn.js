import $ from 'jquery'

var appid = 'b6907d289e10d714a6e88b30761fae22';

export function GetWeatherDelegateResult(city,callBackSuccess,callBackFail){
    $.ajax({
        url: "https://openweathermap.org/data/2.5/forecast",
        method: 'GET',
        dataType: 'json',
        data: {q:city.Name + ',' + city.CountryCode,appid:appid},
        success: function(result){
            callBackSuccess(result);
        },
        error: function(err){
            callBackFail(err);
        }
    });
}

export function GetWeather(city){
    $.ajax({
        url: "https://openweathermap.org/data/2.5/forecast",
        method: 'GET',
        dataType: 'json',
        data: {q:city.Name + ',' + city.CountryCode,appid:appid},
        success: function(result){   
            return result;
        }
    });
}