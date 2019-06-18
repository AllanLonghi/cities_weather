import $ from 'jquery'

export function SaveCityDelegateResult(city,callBackSuccess,callBackFail){
    $.ajax({
        url: "http://localhost:49985/api/Cities",
        contentType: 'application/json',
        method: 'POST',
        dataType: 'json',
        data:JSON.stringify({Name:city.Name,CountryCode:city.CountryCode}),
        success: function(result){
            callBackSuccess(result);
        },
        error: function(err){
            callBackFail(err);
        }
    });
}

export function GetCitiesDelegateResult(callBackSuccess,callBackFail){
    $.ajax({
        url: "http://localhost:49985/api/Cities",
        contentType: 'application/json',
        method: 'GET',
        dataType: 'json',
        success: function(result){
            callBackSuccess(result);
        },
        error: function(err){
            callBackFail(err);
        }
    });
}
