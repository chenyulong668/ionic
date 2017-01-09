angular.module('sidenav.services', [])
.factory('sidenavFty', function ($http, $q) {
    return {
        refreshGoodsList:function(message){
            var obj_sidenavData = [{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-1.jpg',
                    name:'鸭鸭韩版中长款轻薄羽绒服',
                    price:'398',
                    comment:'1645',
                    praise:'94',
                    id:'1'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-2.jpg',
                    name:'高梵冬季中长款韩版羽绒服',
                    price:'399',
                    comment:'232',
                    praise:'91',
                    id:'2'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-3.jpg',
                    name:'阿什兰秋冬季立领女羽绒服',
                    price:'149',
                    comment:'2169',
                    praise:'95',
                    id:'3'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-4.jpg',
                    name:'闺园女中长款修身加厚冬装',
                    price:'398',
                    comment:'2738',
                    praise:'98',
                    id:'4'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-5.jpg',
                    name:'胜雨诗韩版中长款女羽绒服',
                    price:'549',
                    comment:'2684',
                    praise:'100',
                    id:'5'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-6.jpg',
                    name:'加肥加大码5X羽绒服长款',
                    price:'798',
                    comment:'174',
                    praise:'99',
                    id:'6'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-7.jpg',
                    name:'千仞岗女中长款冬季羽绒服',
                    price:'499',
                    comment:'1081',
                    praise:'99',
                    id:'7'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-8.jpg',
                    name:'鸭鸭加厚时尚韩版轻薄冬装',
                    price:'459',
                    comment:'1500',
                    praise:'98',
                    id:'8'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-9.jpg',
                    name:'茵丝曼女中长款秋冬羽绒服',
                    price:'288',
                    comment:'4110',
                    praise:'98',
                    id:'9'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-10.jpg',
                    name:'依语幽香中长款韩版羽绒服',
                    price:'298',
                    comment:'2011',
                    praise:'95',
                    id:'10'
                }];


            var deferred = $q.defer();
            deferred.resolve(obj_sidenavData);
            return deferred.promise;
            // return obj_sidenavData;
        },
        loadMoreGoodsList: function (message) {
            var obj_sidenavData = [{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-1.jpg',
                    name:'鸭鸭韩版中长款轻薄羽绒服',
                    price:'398',
                    comment:'1645',
                    praise:'94',
                    id:'1'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-2.jpg',
                    name:'高梵冬季中长款韩版羽绒服',
                    price:'399',
                    comment:'232',
                    praise:'91',
                    id:'2'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-3.jpg',
                    name:'阿什兰秋冬季立领女羽绒服',
                    price:'149',
                    comment:'2169',
                    praise:'95',
                    id:'3'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-4.jpg',
                    name:'闺园女中长款修身加厚冬装',
                    price:'398',
                    comment:'2738',
                    praise:'98',
                    id:'4'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-5.jpg',
                    name:'胜雨诗韩版中长款女羽绒服',
                    price:'549',
                    comment:'2684',
                    praise:'100',
                    id:'5'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-6.jpg',
                    name:'加肥加大码5X羽绒服长款',
                    price:'798',
                    comment:'174',
                    praise:'99',
                    id:'6'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-7.jpg',
                    name:'千仞岗女中长款冬季羽绒服',
                    price:'499',
                    comment:'1081',
                    praise:'99',
                    id:'7'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-8.jpg',
                    name:'鸭鸭加厚时尚韩版轻薄冬装',
                    price:'459',
                    comment:'1500',
                    praise:'98',
                    id:'8'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-9.jpg',
                    name:'茵丝曼女中长款秋冬羽绒服',
                    price:'288',
                    comment:'4110',
                    praise:'98',
                    id:'9'
                },{
                    href:'',
                    src:'./img/minute/sidenav/sidenav-10.jpg',
                    name:'依语幽香中长款韩版羽绒服',
                    price:'298',
                    comment:'2011',
                    praise:'95',
                    id:'10'
                }];
                // 定义延迟对象
                var deferred = $q.defer();
                // 设置延迟对象 成功状态 中的数据。
                deferred.resolve(obj_sidenavData);
                return deferred.promise;
        }

    };
});