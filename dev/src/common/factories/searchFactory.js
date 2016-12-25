/**
 * Created by ozknemoy on 23.12.2016.
 */
(function (angular) {
    angular.module("app")
        .factory('searchFactory', function ($http,diffdateFactory) {
            //&key=AIzaSyCl_WJiupcodC3kxZ-fR2g-DEpgpYx23Q0
            //006238157094868494689:xwaxko0z1y0
            //006238157094868494689:4p-tpkktq1e
            //014169764547731080872:l6vdhbguyw8
            var baseUrl = 'https://www.googleapis.com/customsearch/v1?cx=014169764547731080872:l6vdhbguyw8&key=AIzaSyCl_WJiupcodC3kxZ-fR2g-DEpgpYx23Q0&searchType=image&num=9';
            return function (Q,date,size,start) {
                var num = 9;
                Q = '&q=' + Q;
                size = size? '&imgSize=' + size : '';
                date = date? '&dateRestrict=d' + diffdateFactory(date) : '';
                start = start?('&start=' + (start*num-num)) : '';
                return $http.get(baseUrl + Q + date + size + start)
            }
        });
    /*.factory('searchFactory', function ($http) {
     var num = 9;
     var baseUrl = 'http://beta.constart.ru:81/user/list?limit=' + num + '&offset=';
     return function (start) {
     start = start*num-num || '';
     return $http.get(baseUrl+start)

     }
     })*/
})(window.angular);