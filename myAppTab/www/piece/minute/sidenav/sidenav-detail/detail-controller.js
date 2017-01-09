angular.module('detail.controller', [])

.controller('detailCtrl', function($scope,$window,$ionicHistory) {
    detailData();

    $scope.$on('$ionicView.afterEnter',function(e){
       detail();
    })


    //轮播图数据
    function detailData(){
        $scope.detailSlideData = [{
        alt: "1",
        src: "img/minute/detail/detail-1.jpg"
        }, {
        alt: "2",
        src: "img/minute/detail/detail-2.jpg"
        }, {
        alt: "3",
        src: "img/minute/detail/detail-3.jpg"
        }, {
        alt: "4",
        src: "img/minute/detail/detail-4.jpg"
        }, {
        alt: "5",
        src: "img/minute/detail/detail-5.jpg"
        }];
    }






    function detail(){
        var detailSwiper = new Swiper('#detailSlider', {
            // slidesPerView: 1,
            // paginationClickable: true,
            // centeredSlides: true,
            // autoplay: 2000,
            // autoplayDisableOnInteraction: false,
            // autoplayDisableOnInteraction: true,
            // loop: true,
            pagination: '.swiper-pagination',
            // observer: true,
            // observeParents: true
            paginationType: 'fraction'
            // paginationClickable: true,
            // paginationBulletRender: function(swiper, index, className){
            //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            // }



        });

        // var $detailName = $('.detailName');
        // console.log($detailName.length);

        // // for(var i=0; i<$detailName.length; i++){
        // //     if($detailName.hasClass('swiper-slide-active')){
        // //         console.log(i+1);
        // //     }
        // // }
        // console.log($detailName.css('display'));

    }



    // 返回前一个页面
    $scope.goBack=function(){
      $ionicHistory.goBack();
    }


});