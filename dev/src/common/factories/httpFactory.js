/**
 * Created by дима
 */
/*
(function (angular) {
    angular.module("app").factory('httpFactory', ['$cacheFactory', '$http',
    function ($cacheFactory, $http) {
        var cache = $cacheFactory.get('$http'),
            httpFactory = {};

        httpFactory.getUsers = function (url) {
            return [
                {
                "id": 34567890,
                "name": "Петров Иван",
                "country": "Россия",
                "phone": "+79212223344"
                },{
                    "id": 1234567890,
                    "name": "Иванов Иван",
                    "country": "Россия",
                    "phone": "+79219993344"
                },{
                    "id": 567890,
                    "name": "Иванов Иван",
                    "country": "Россия",
                    "phone": "+79777773344"
                },{
                    "id": 3434567890,
                    "name": "Аванов Иван",
                    "country": "италия",
                    "phone": "+79442223344"
                },{
                    "id": 8904567890,
                    "name": "Банов Иван",
                    "country": "греция",
                    "phone": "+79111111111"
                },{
                    "id": 6784567890,
                    "name": "Ванов Иван",
                    "country": "греция",
                    "phone": "+78003334455"
                },{
                    "id": 34567890,
                    "name": "Петров Иван",
                    "country": "Россия",
                    "phone": "+79212223344"
                },{
                    "id": 1234567890,
                    "name": "Иванов Иван",
                    "country": "италия",
                    "phone": "+79219993344"
                },{
                    "id": 567890,
                    "name": "Иванов Иван",
                    "country": "сербия",
                    "phone": "+79777773344"
                },{
                    "id": 3434567890,
                    "name": "Иванов Иван",
                    "country": "сербия",
                    "phone": "+79442223344"
                },{
                    "id": 8904567890,
                    "name": "Иванов Иван",
                    "country": "сербия",
                    "phone": "+79111111111"
                },{
                    "id": 6784567890,
                    "name": "Иванов Иван",
                    "country": "сербия",
                    "phone": "+78003334455"
                },{
                    "id": 34567890,
                    "name": "Петров Иван",
                    "country": "Россия",
                    "phone": "+79212223344"
                },{
                    "id": 1234567890,
                    "name": "Иванов Иван",
                    "country": "казахстан",
                    "phone": "+79219993344"
                },{
                    "id": 567890,
                    "name": "Иванов Иван",
                    "country": "казахстан",
                    "phone": "+79777773344"
                },{
                    "id": 3434567890,
                    "name": "Иванов Иван",
                    "country": "казахстан",
                    "phone": "+79442223344"
                },{
                    "id": 8904567890,
                    "name": "Иванов Иван",
                    "country": "казахстан",
                    "phone": "+79111111111"
                },{
                    "id": 6784567890,
                    "name": "Иванов Иван",
                    "country": "белорусь",
                    "phone": "+78003334455"
                },{
                    "id": 34567890,
                    "name": "Петров Иван",
                    "country": "белорусь",
                    "phone": "+79212223344"
                },{
                    "id": 1234567890,
                    "name": "Иванов Иван",
                    "country": "белорусь",
                    "phone": "+79219993344"
                },{
                    "id": 567890,
                    "name": "Иванов Иван",
                    "country": "белорусь",
                    "phone": "+79777773344"
                },{
                    "id": 3434567890,
                    "name": "Иванов Иван",
                    "country": "казахстан",
                    "phone": "+79442223344"
                },{
                    "id": 8904567890,
                    "name": "Иванов Иван",
                    "country": "белорусь",
                    "phone": "+79111111111"
                },{
                    "id": 6784567890,
                    "name": "Иванов Иван",
                    "country": "казахстан",
                    "phone": "+78003334455"
                }
            ]
        };

        httpFactory.getCountries = function (url) {
            return ["Россия","казахстан","белорусь","италия","греция","сербия","" ]
        };

        httpFactory.getWithCache = function (url,cache) {
            return $http.get(url,cache)
        };

        httpFactory.post = function (url) {
            return $http.post(url)
        };

        httpFactory.put = function (url, content) {
            return $http.put(url, content)
        };

        httpFactory.delete = function (url) {
            var r = confirm("Вы уверены что хотите удалить?");
            if (r == true) {
                $http.delete(url).success(function () {
                    location.reload()
                });
            }
        };

        httpFactory.getCache = function (url) {
            return cache.get(url);
        };

        return httpFactory
    }]);
}(window.angular));*/
