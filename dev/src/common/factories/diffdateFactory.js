/**
 * Created by ozknemoy on 23.12.2016.
 */
(function (angular) {
    angular.module("app")
        .factory('diffdateFactory', function () {
            return function (start) {
                if (!start) return undefined;
                var now = +new Date();
                start = +new Date(start);
                return Math.floor((now - start ) / (24 * 60 * 60000))
            };
        })
})(window.angular);