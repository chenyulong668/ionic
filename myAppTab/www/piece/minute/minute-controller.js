angular.module('minute.controller', [])

.controller('DashCtrl', function($scope,$window) {
    navminData();
    


    $scope.$on('$ionicView.afterEnter',function(e){
        var oUl = $window.document.getElementById('ul1');
        var aLi = oUl.getElementsByTagName('li');
        for(var i=0; i<aLi.length; i++){
            aLi[i].className = '';
        }

        $scope.specialClick(1);
        navminheight();
    })


    function navminData(){
        $scope.navminSlideData = [
            {Id:'1',name:'热门推荐'},
            {Id:'2',name:'潮流女装'},
            {Id:'3',name:'品牌男装'},
            {Id:'4',name:'个护化妆'},
            {Id:'5',name:'家用电器'},
            {Id:'6',name:'电脑办公'},
            {Id:'7',name:'手机数码'},
            {Id:'8',name:'母婴童装'},
            {Id:'9',name:'图书'},
            {Id:'10',name:'家居家纺'},
            {Id:'11',name:'居家生活'},
            {Id:'12',name:'家具建材'},
            {Id:'13',name:'食品生鲜'},
            {Id:'14',name:'酒水饮料'},
            {Id:'15',name:'运动户外'},
            {Id:'16',name:'鞋靴箱包'},
            {Id:'17',name:'奢品礼品'},
            {Id:'18',name:'钟表珠宝'},
            {Id:'19',name:'玩具乐器'},
            {Id:'20',name:'内衣配饰'},
            {Id:'21',name:'汽车用品'},
            {Id:'22',name:'音像制品'},
            {Id:'23',name:'医药保健'},
            {Id:'24',name:'计生情趣'},
            {Id:'25',name:'全球购'},
            {Id:'26',name:'京东金融'},
            {Id:'27',name:'生活旅行'},
            {Id:'28',name:'宠物农资'}]
    }


    function navminheight(){
        var minCon = $window.document.getElementById('min-content');
        var oBg = $window.document.getElementById('navmin');
        var oUl = $window.document.getElementById('ul1');
        var aLi = oUl.getElementsByTagName('li');
        var aAside = $window.document.getElementsByTagName('aside');
        var index = 0;
         
        //加字体颜色
        aLi[0].className = 'mincolor';
        // console.log(aLi.length);
        for(var i=0; i<aLi.length; i++){
            aLi[i].onclick = function(){
                for(var j=0; j<aLi.length; j++){
                    aLi[j].className = '';
                }
                this.className = 'mincolor';
                // this.scrollTop = this.offsetTop;
                // console.log(this.offsetTop);      
            }
        }
    }

     $scope.specialClick = function(id){
        if(id == 1){
            $scope.headSrcData = './img/minute/recommend-dt.jpg';
            $scope.headnameData = '专场推荐';
            $scope.headnameData1 = '热门分类';

            // alert(1);
            $scope.specialSlideData = [{
                src:'./img/minute/special-1.jpg',
                id:'101',
                name:'1.9酒水超品日'
            },{
                src:'./img/minute/special-2.jpg',
                id:'102',
                name:'一加3T限量抢'
            },{
                src:'./img/minute/special-3.jpg',
                id:'103',
                name:'京东超市'
            }];
            $scope.popularSlideData = [{
                src:'./img/minute/popular-1.png',
                id:'104',
                name:'手机'
            },{
                src:'./img/minute/popular-2.png',
                id:'105',
                name:'笔记本'
            },{
                src:'./img/minute/popular-3.jpg',
                id:'106',
                name:'空调'
            },{
                src:'./img/minute/popular-4.jpg',
                id:'107',
                name:'收纳用品'
            },{
                src:'./img/minute/popular-5.jpg',
                id:'108',
                name:'炒锅'
            },{
                src:'./img/minute/popular-6.jpg',
                id:'109',
                name:'啤酒'
            },{
                src:'./img/minute/popular-7.jpg',
                id:'110',
                name:'火车票'
            }];
            // console.log($scope.specialSlideData);
            
        }else if(id == 2){
            $scope.headSrcData = './img/minute/Women-dt.jpg';
            $scope.headnameData = '热卖品类';
            $scope.headnameData1 = '裙装';

            // alert(2);
            $scope.specialSlideData = [{
                src:'./img/minute/Women-1.png',
                id:'111',
                name:'时尚羽绒'
            },{
                src:'./img/minute/Women-2.jpg',
                id:'112',
                name:'轻薄羽绒'
            },{
                src:'./img/minute/Women-3.jpg',
                id:'113',
                name:'中长款羽绒'
            },{
                src:'./img/minute/Women-4.png',
                id:'114',
                name:'针织裙'
            },{
                src:'./img/minute/Women-5.jpg',
                id:'115',
                name:'针织裙'
            },{
                src:'./img/minute/Women-6.jpg',
                id:'116',
                name:'温暖棉服'
            },{
                src:'./img/minute/Women-7.png',
                id:'117',
                name:'针织衫'
            },{
                src:'./img/minute/Women-8.jpg',
                id:'118',
                name:'加绒卫衣'
            },{
                src:'./img/minute/Women-9.jpg',
                id:'119',
                name:'牛仔裤'
            }];
            $scope.popularSlideData = [{
                src:'./img/minute/Skirt-1.jpg',
                id:'120',
                name:'秋冬连衣裙'
            },{
                src:'./img/minute/Skirt-2.jpg',
                id:'121',
                name:'长袖连衣裙'
            },{
                src:'./img/minute/Skirt-3.jpg',
                id:'122',
                name:'针织连衣裙'
            },{
                src:'./img/minute/Skirt-4.png',
                id:'123',
                name:'毛呢连衣裙'
            },{
                src:'./img/minute/Skirt-5.jpg',
                id:'124',
                name:'套装裙'
            },{
                src:'./img/minute/Skirt-6.jpg',
                id:'125',
                name:'性感连衣裙'
            },{
                src:'./img/minute/Skirt-7.jpg',
                id:'126',
                name:'蕾丝连衣裙'
            },{
                src:'./img/minute/Skirt-8.jpg',
                id:'127',
                name:'牛仔裙'
            },{
                src:'./img/minute/Skirt-9.jpg',
                id:'128',
                name:'半身裙'
            }];
            // console.log($scope.specialSlideData);
        }
    }


});