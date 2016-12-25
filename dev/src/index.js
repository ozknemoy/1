(function (angular) {
    angular.module("app", ['ui.bootstrap'])////'ui.router''yaMap','ngAnimate', 'ngSanitize',

        .controller('main', function () {
            var _this = this;
            var map;
            _this.afterMapInit = function(m){
                map = m;
                console.log(map);

            };
            _this.$onInit = function () {

                _this.center = [37.64,55.76];
                _this.zoom = 10;
                _this.geoObjects = {
                    geometry: {
                        type: 'Circle',
                        coordinates: [37.60, 55.76],
                        radius: 10000
                    },
                    properties: {
                        balloonContent: "Радиус круга - 10 км",
                        hintContent: "Подвинь меня"
                    }
                };
                _this.oneObjects = [
                    {
                        geometry: {
                            type: 'Point',
                            coordinates: [37.75, 55.73]
                        }
                    },
                    {
                        geometry: {
                            type: 'Point',
                            coordinates: [37.75, 55.81]
                        }
                    }
                ];
            }


            _this.getMyLoc = function () {
                //var map = yaMap.getMap();

                _this.zoom = 16;
                $timeout(function () {
                    _this.center = [ymaps.geolocation.latitude,ymaps.geolocation.longitude];
                })

            };

            _this.low = function(){
                ymaps.geocode('Нижний Новгород', { results: 1 }).then(function (res) {
                    // Выбираем первый результат геокодирования.
                    var firstGeoObject = res.geoObjects.get(0);
                    // Задаем центр карты.

                    $timeout(function () {
                        _this.center = firstGeoObject.geometry.getCoordinates();
                        console.log(_this.center);

                    })


                }, function (err) {
                    // Если геокодирование не удалось, сообщаем об ошибке.
                    console.log(err.message);
                });
            };

            _this.click = function (ev,e) {
                console.log(ev,e);

            };

            _this.mapClick=function(e){
                var coords = e.get('coords');

                // Отправим запрос на геокодирование.
                ymaps.geocode(coords).then(function (res) {
                    var names = [];
                    // Переберём все найденные результаты и
                    // запишем имена найденный объектов в массив names.
                    res.geoObjects.each(function (obj) {
                        names.push(obj.properties.get('name'));
                    });
                    // Добавим на карту метку в точку, по координатам
                    // которой запрашивали обратное геокодирование.
                    var geoObj = {
                        geometry:{
                            type:'Point',
                            coordinates:coords
                        },
                        properties:{
                            // В качестве контента иконки выведем
                            // первый найденный объект.
                            iconContent:names[0],
                            // А в качестве контента балуна - подробности:
                            // имена всех остальных найденных объектов.
                            balloonContent:names.reverse().join(', ')
                        }
                    };
                    $timeout(function () {
                        _this.oneObjects.push(geoObj);
                        console.log(_this.oneObjects);
                    });
                });
            };

            _this.centr = function(e){
                var item = e.get('target');

                var myMap = item.getMap();
                myMap.setCenter(
                    item.data.get('center'),
                    item.data.get('zoom')
                );

            };



        })

    ;
})(window.angular);