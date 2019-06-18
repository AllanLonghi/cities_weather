import $ from 'jquery'

var appid = 'cb5ee795dd586d31a90c93f8fcfd8f56';

export function GetWeatherDelegateResult(city,callBackSuccess,callBackFail){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast",
        method: 'GET',
        dataType: 'json',
        data: {q:city.Name + ',' + city.CountryCode,units:'metric',appid:appid},
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
        url: "https://api.openweathermap.org/data/2.5/forecast",
        method: 'GET',
        dataType: 'json',
        data: {q:city.Name + ',' + city.CountryCode,cnt:5,units:'metric',appid:appid},
        success: function(result){   
            return result;
        }
    });
}