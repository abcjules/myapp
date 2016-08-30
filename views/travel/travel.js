/**
 * Created by Administrator on 2016-08-04.
 */
angular.module("myapp").controller("travelCtrl",function($scope,$http,$ionicScrollDelegate){
    $scope.products=[
        {headline:"台湾亲子行 | 再文艺的台湾，也有孩子的天空",content:"宝宝的诞生改变了我们的生活， 不管他/她带来的是快乐、劳苦、幸福还是泪水， 宝宝是我们人生旅途中的一部分， 不要因为...",img:"images/6.jpeg"},
        {headline:"越南。越风情",content:" 越南越美，这是我在网络上对越南的基本印象。有些人很反感摄影师把照片拍的修的那么唯美，因为充满期待的到了越南，却往往多了点失望。去过越南才敢有自己的判断，越南的建筑风格跟国内乡镇...",img:"images/1.jpeg"},
        {headline:"一觉醒来，已是关西，站在屋檐下大口呼吸——京都 奈良 大阪 ...",content:"4月底准备去 东京 ，谁有 东京 及周边的攻略呢？伸手党就是我... 冰岛 游记正在缓慢的撰写中 http://www.mafengwo.cn/i/5366104.html 另外过几天会写 北疆 （ 乌鲁木齐 ， 喀纳斯 ， 禾木 ，...",img:"images/2.jpeg"},
        {headline:"探寻帝国历史与文艺复兴 圣诞季意大利14日",content:"再次蜂首，谢谢大家对我的支持和鼓励，下次会努力做更好，谢谢！ 入选目的地的两张... 在 威尼斯 遭遇连续多天的阴天+大雾 各种外景都没法拍 非常不甘心，回家自己画了一张 做到这个份上，算...",img:"images/3.jpeg"},
        {headline:"吹啊，吹啊，妖风吹向不列颠大农村",content:" 从 英国 回来已经有几周了，慢慢调整着有些疲惫的身体。回看这次的照片，总难以找出令人十分满意的一些，大体和 英国 的天气有关。记得上学时候英文课中，总是说 英国 人打招呼十有八九是在...",img:"images/4.jpeg"},
        {headline:"知悉森林的话语、城堡的法术｜德国捷克奥地利之旅",content:"初秋，从 慕尼黑 入境，走过 福森 、 贝希特斯加登 、 萨尔茨堡 、 哈尔施塔特 、 克鲁姆洛夫 、 布拉格 ，乘过飞机、DB、OBB、ck shuttle、student agency、渡轮、地铁。国内的秋天才刚刚开...",img:"images/5.jpeg"},
    ];

    //下拉刷新
    $scope.refresh=function(){
        //向服务器端请求新的数据，替换掉现有的数据
        $http.get("views/travel/data.json").success(function(data){
            $scope.products=data;
        }).finally(function(){
            //通知框架，刷新结束了，停止显示图标
            $scope.$broadcast("scroll.refreshComplete");
        });
    };

    //无限滚动
    $scope.loadMore=function(){
        //向服务器端请求一页新的数据，追加到现有数据之后
        $http.get("views/travel/data.json").success(function(data){
            //使用Array的原型方法push，等价于 $scope.products.push(data);
            Array.prototype.push.apply($scope.products,data);
        }).finally(function(){
            //通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    $scope.slideChanged=function(index){
        console.log("index:"+index);
    };

    $scope.data={page:0};
    $scope.pagerClick=function(index){
        $scope.data.page=index;
    };

});
