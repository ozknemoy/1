/**
 * Created by ozknemoy on 23.12.2016.
 */

(function (angular) {
    angular.module("app")
.component('yComponent',{
    templateUrl: 'src/common/component/y-component.html',
    controllerAs: 'y',
    controller: function ($timeout,searchFactory) {
        var _this = this,
            q = 'достопримечательности+Краснодара';

        _this.$onInit = function () {
            _this.currentPage = 1;
            _this.totalItems = 10000;// искуственно ограничил
            _this.sizes = [
                {name:'выберите размер'},
                {id:"icon", name:'иконки'},
                {id:"medium", name:'средние'},
                {id:"large", name:'большие'},
                {id:"small", name:'маленькие'},
                {id:"xlarge", name:'очень большие'},
                {id:"xxlarge", name:'очень очень большие'},
                {id:"huge", name:'огромные'}
            ];
            _this.get(q)
        };

        _this.get = function (Q,rest,size,start) {
            //_this.f = [{"kind":"customsearch#result","title":"Достопримечательности Краснодара, интересные места, что посмотреть ...","htmlTitle":"<b>Достопримечательности Краснодара</b>, интересные места, что посмотреть ...","link":"http://krasnodar.igid.ru/img/panorams/bdb51bb5bbc8b8219432fe3b1e4ffdea.jpg","displayLink":"krasnodar.igid.ru","snippet":"Краснодар, Памятник Казакам ...","htmlSnippet":"<b>Краснодар</b>, Памятник Казакам ...","mime":"image/jpeg","image":{"contextLink":"http://krasnodar.igid.ru/dostoprimechatelnosti","height":900,"width":1200,"byteSize":261567,"thumbnailLink":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE1kNRauVo8JIcJKQCx9O3vM42x9WIyAI6ja4JmLcUanRMmvM9mM9agTCj","thumbnailHeight":113,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Город Краснодар: климат, экология, районы, экономика, криминал и ...","htmlTitle":"Город <b>Краснодар</b>: климат, экология, районы, экономика, криминал и ...","link":"http://nesiditsa.ru/wp-content/uploads/2012/07/Triumfalnaya-arka-i-pamyatnik-Ekaterine.jpg","displayLink":"nesiditsa.ru","snippet":"Триумфальная арка и памятник ...","htmlSnippet":"Триумфальная арка и памятник ...","mime":"image/jpeg","image":{"contextLink":"http://nesiditsa.ru/city/krasnodar","height":600,"width":800,"byteSize":214117,"thumbnailLink":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHIvMdT6xgghW3rCfJpfYLoZv2y_P2dR-fzTYtUGVL0vEcnY8Sn-lHXAI","thumbnailHeight":107,"thumbnailWidth":143}},{"kind":"customsearch#result","title":"Достопримечательности Краснодара, интересные места, что посмотреть ...","htmlTitle":"<b>Достопримечательности Краснодара</b>, интересные места, что посмотреть ...","link":"http://krasnodar.igid.ru/img/upload/photos/19811226e127.jpg","displayLink":"krasnodar.igid.ru","snippet":"г. Краснодар","htmlSnippet":"г. <b>Краснодар</b>","mime":"image/jpeg","image":{"contextLink":"http://krasnodar.igid.ru/dostoprimechatelnosti","height":768,"width":1152,"byteSize":222264,"thumbnailLink":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJgWlySOIYkSmFLbRLLDFvdok7JHL7FzXOthoEO0DgiQcYlcf3nxYxZqw","thumbnailHeight":100,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Достопримечательности Краснодара","htmlTitle":"<b>Достопримечательности Краснодара</b>","link":"http://krasnodar.go2all.ru/imgs/21/23/51492.jpg","displayLink":"krasnodar.go2all.ru","snippet":"... Триумфальная арка ...","htmlSnippet":"... Триумфальная арка ...","mime":"image/jpeg","image":{"contextLink":"http://krasnodar.go2all.ru/sights/","height":1024,"width":999,"byteSize":293108,"thumbnailLink":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtjxsBUID6U7I-QwjltHn1Yb-u-qVtKg3oDMEe5mUue2mAF5S-4Aq_rVo0Pg","thumbnailHeight":150,"thumbnailWidth":146}},{"kind":"customsearch#result","title":"Достопримечательности Краснодара, интересные места, что посмотреть ...","htmlTitle":"<b>Достопримечательности Краснодара</b>, интересные места, что посмотреть ...","link":"http://krasnodar.igid.ru/img/upload/photos/0_63370_c6ca987f_XL.jpg","displayLink":"krasnodar.igid.ru","snippet":"Краснодар; г.","htmlSnippet":"<b>Краснодар</b>; г.","mime":"image/jpeg","image":{"contextLink":"http://krasnodar.igid.ru/dostoprimechatelnosti","height":466,"width":699,"byteSize":94616,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnyumeYL6Z1pge85lMvRRIsLW7-RBFnhahvscorMN4aWmzHwcojK2Hdw","thumbnailHeight":93,"thumbnailWidth":139}},{"kind":"customsearch#result","title":"достопримечательности краснодара фото - этот... / Путешествия ...","htmlTitle":"<b>достопримечательности краснодара</b> фото - этот... / Путешествия ...","link":"http://cdn-nus-1.pinme.ru/tumb/600/photo/ca/8b/ca8b04b83a4ecbdb51a20f401db4884d.jpg","displayLink":"pinme.ru","snippet":"достопримечательности ...","htmlSnippet":"<b>достопримечательности</b> ...","mime":"image/jpeg","image":{"contextLink":"http://pinme.ru/pin/54fc6ab4dd62fc212f42284d/","height":374,"width":533,"byteSize":47857,"thumbnailLink":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlPgJ7WfdLMOLFc5IvANJRYTWNYIX2E56shhyUPhcWRLfK1eliczWcnfpb","thumbnailHeight":93,"thumbnailWidth":132}},{"kind":"customsearch#result","title":"Достопримечательности Краснодара (10 фото) | Достопримечательности ...","htmlTitle":"<b>Достопримечательности Краснодара</b> (10 фото) | <b>Достопримечательности</b> ...","link":"http://www.vostoktrevel.ru/fsmf/wp-content/gallery/krasnodar/0.jpg","displayLink":"www.vostoktrevel.ru","snippet":"Кафедральный собор Св. ...","htmlSnippet":"Кафедральный собор Св. ...","mime":"image/jpeg","image":{"contextLink":"http://www.vostoktrevel.ru/fsmf/dostoprimechatelnosti-krasnodara-10-foto.html","height":478,"width":700,"byteSize":73960,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rbr04xGQoiDGsT9As3wAa7IoegO5rUrdfpxY2ziGSoB16aDWL6bxn5hw","thumbnailHeight":96,"thumbnailWidth":140}},{"kind":"customsearch#result","title":"Достопримечательности Краснодара","htmlTitle":"<b>Достопримечательности Краснодара</b>","link":"http://inn-kuban.ru/wp-content/uploads/2014/07/dogs.jpg","displayLink":"inn-kuban.ru","snippet":"влюбленные собачки","htmlSnippet":"влюбленные собачки","mime":"image/jpeg","image":{"contextLink":"http://inn-kuban.ru/chto-posmotret-v-krasnodare-dostoprimechatel-nosti-i-pamyatniki/","height":460,"width":815,"byteSize":142675,"thumbnailLink":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRU-IgKzPnrzM7fKJ1yGImXdDtrmF9rc5WviGctJMipJUSB5m-SZ_a98WGz","thumbnailHeight":81,"thumbnailWidth":144}},{"kind":"customsearch#result","title":"Улица Красная — главная достопримечательность Краснодара - Туризм ...","htmlTitle":"Улица Красная — главная достопримечательность <b>Краснодара</b> - Туризм ...","link":"http://www.velotut.ru/wp-content/uploads/2012/03/sobaka.jpg","displayLink":"www.velotut.ru","snippet":"памятник собачкам в Краснодаре","htmlSnippet":"памятник собачкам в <b>Краснодаре</b>","mime":"image/jpeg","image":{"contextLink":"http://www.velotut.ru/2012/03/23/krasnodar/","height":481,"width":700,"byteSize":108953,"thumbnailLink":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR33j2zeZdG2krQojO7VkCpo5WD8bSVSur9PhY7Bjc6Jvcu7ubLBiyuSGg","thumbnailHeight":96,"thumbnailWidth":140}}];

            searchFactory(Q,rest,size,start)
                .then(function (d) {
                    _this.f = d.data;
                    window.scrollTo(0,0)
                })
        };

        _this.search = function () {
            _this.get(_this.q ||q,_this.date,_this.size,_this.currentPage)
        };

    }
})
})(window.angular);