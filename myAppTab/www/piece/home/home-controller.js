angular.module('home.controller', [])

.controller('HomeCtrl', function($scope,$window) {
    //获取轮播图数据
    rotationData();
    spikeData();
    headerColor();
    qualityData();


    $scope.$on('$ionicView.afterEnter',function(e){
        rotation();
        headlines();
        spikeCentral1();
        quality();
    })

    
    //轮播图数据
    function rotationData() {
        $scope.headerSlideData = [{
        alt: "双十一预热主场会",
        src: "img/home/home-headerSlide-1.jpg"
        }, {
        alt: "11月11天家电低价不停歇",
        src: "img/home/home-headerSlide-2.jpg"
        }, {
        alt: "家具盛典 好货提前抢",
        src: "img/home/home-headerSlide-3.jpg"
        }, {
        alt: "IT抢券节",
        src: "img/home/home-headerSlide-4.jpg"
        }, {
        alt: "潮流数码 双11爽购攻略",
        src: "img/home/home-headerSlide-5.jpg"
        }];
    }
    
    function qualityData() {
        $scope.qualitySlideData = [{
        alt: "双十一预热主场会",
        src: "img/home/home-aad-1.jpg"
        }, {
        alt: "11月11天家电低价不停歇",
        src: "img/home/home-aad-2.jpg"
        }];
    }





    //京东秒杀数据
    function spikeData() {
        $scope.spikeCentralData = [{
        id: 1,
        src: "img/home/spike-1.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 2,
        src: "img/home/spike-2.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 3,
        src: "img/home/spike-3.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 4,
        src: "img/home/spike-4.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 5,
        src: "img/home/spike-5.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 6,
        src: "img/home/spike-6.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 7,
        src: "img/home/spike-7.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 8,
        src: "img/home/spike-8.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 9,
        src: "img/home/spike-9.jpg",
        xj: 102,
        yj: 120
        }, {
        id: 10,
        src: "img/home/spike-10.jpg",
        xj: 102,
        yj: 120
        },];
    }



    //轮播函数
    function rotation(){
        var headerSwiper = new Swiper('#headerSlider', {
            slidesPerView: 1,
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination',
            observer: true,
            observeParents: true
        });
    }

    function quality(){
        var headerSwiper = new Swiper('#qualitySlider', {
            slidesPerView: 1,
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination',
            observer: true,
            observeParents: true
        });
    }



    //京东头条函数
    function headlines(){
        var headlinesSlider = new Swiper('#headlinesSlider', {
            direction: 'vertical',
            autoplay: 2000,
            loop: true
        })
    }

    //京东秒杀函数
    function spikeCentral1(){
        var swiper = new Swiper('#spikeCentral', {
            // pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true
        });
    }

    //改变头部颜色和返回顶部
    function headerColor(){
        var oBg = $window.document.getElementById('home-content');
        var oTop = $window.document.getElementById('top');
        var nowOpacity = 0;
        oBg.onscroll = (event)=>{
            // console.log(oBg.scrollTop / 250);
            if(oBg.scrollTop / 250 < 0.85){
                nowOpacity = oBg.scrollTop / 250;
            }
            if(oBg.scrollTop > 300){
                oTop.style.opacity = 1;
            }else if(oBg.scrollTop < 300){
                oTop.style.opacity = 0;
            }
            document.getElementById('headerBar-bg').style.opacity = nowOpacity;
            oTop.onclick = function(){
                oBg.scrollTop = 0;
            }
        }
        
    }

    //返回顶部
    // function top(){
    //     var oTop = $window.document.getElementById('top');
    //     var oCont = $window.document.getElementById('home-content');
    //     oCont.onscroll = function(){
    //         if(oCont.scrollTop > 300){
    //             oTop.style.opacity = 1;
    //         }else if(oCont.scrollTop < 300){
    //             oTop.style.opacity = 0;
    //         }
    //     }
    //     oTop.onclick = function(){
    //         oCont.scrollTop = 0;
    //     }
    // } 

    
});