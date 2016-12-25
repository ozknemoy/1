/**
 * Created by ozknemoy on 23.12.2016.
 */
(function (angular) {
    angular.module("app")
        .factory('searchFactory', function ($http,diffdateFactory) {
            // вставить cx and key api
            var baseUrl = 'https://www.googleapis.com/customsearch/v1?searchType=image&num=9';
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