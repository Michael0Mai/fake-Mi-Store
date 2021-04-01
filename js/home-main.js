////////////秒杀//////////


function show_flash_sale_countdowm() { //反复刷新倒计时
    setInterval("flash_sale_countdowm()", 1000);
};

function flash_sale_countdowm() {
    var Today = new Date();
    var Hour = 23 - Today.getHours(); 
    var Minute = 59 - Today.getMinutes(); 
    var Second = 59 - Today.getSeconds();
    if(Hour < 10) {Hour = "0" + Hour};
    if(Minute < 10) {Minute = "0" + Minute};
    if(Second < 10) {Second = "0" + Second};
    document.getElementsByClassName("countdown-num")[0].innerHTML = Hour;
    document.getElementsByClassName("countdown-num")[1].innerHTML = Minute;
    document.getElementsByClassName("countdown-num")[2].innerHTML = Second;
};

//////////下面的滑动///////////
var flashsale_list_position = 0;

function show_flashsale_list() {
    build_flashsale_list();
    set_flashsale_box_border();
    flashsale_button(); //按钮的样式
    setInterval(function(){
        if(flashsale_list_position <= 3){
            slide_flashsale_list(flashsale_list_position);
            flashsale_button(); //按钮的样式
            flashsale_list_position++;
        }
        else{
            flashsale_list_position = 0;
        };
        },5000);
};

function flashsale_list_left(){
    switch(flashsale_list_position){
        case 0:
            break;
        default:
            flashsale_list_position--;
            slide_flashsale_list(flashsale_list_position);
            flashsale_button(); //按钮的样式
    };
};

function flashsale_list_right(){
    switch(flashsale_list_position){
        case 3:
            break;
        default:
            flashsale_list_position++;
            slide_flashsale_list(flashsale_list_position);
            flashsale_button(); //按钮的样式
    };
};

function slide_flashsale_list(position){
    let obj = document.getElementsByClassName("flashsale-list-swiper")[0];
    if(position < 3){
        obj.style.left = -992 * position -15 + "px";
    }
    else{
        obj.style.left = -2482-15 + "px";
    };
};

function build_flashsale_list(){
    var data = store_flashsale_data();
    var text = '';
    for(let i=0; i<data.length; i++){
        text += '<div class="flashsale_box">' +
            '<img src="' + data[i].img_name + '" alt = "'+ data[i].tittle +'">' +
            '<h3 class="title">' + data[i].tittle + '</h3>' +
            '<p class="desc">' + data[i].desribe + '</p>' +
            '<p class="price"> <span> '+ data[i].price + '元</span>&nbsp;&nbsp;' + '<del>'+ data[i].price_del +'元</del>' + '</p>' +
            '</div>';
    };
    document.getElementsByClassName("flashsale-list-swiper")[0].innerHTML = text;
};


function set_flashsale_box_border(){
    colors = ["Magenta", "DarkSlateBlue", "Chartreuse", "Gold"];
    boxes = document.getElementsByClassName("flashsale_box");
    for(let i=0;i<boxes.length; i++){
        boxes[i].style["border-top"] = "1px solid " + colors[i%4];
    };
};



function store_flashsale_data(){
    var data = '[' +
        '{"tittle":"小米全面屏电视 55英寸E55X 灰色 55英寸", "img_name":"img/flashsale-list-swiper/4df2c1e3062afb594ff0daaa603dc24b.png", "desribe":"潮流全面屏设计", "price":"2199", "price_del":"2599"},'+
        '{"tittle":"小米净水器400G增强版 白色", "img_name":"img/flashsale-list-swiper/de0ab08764eaad66e700f8aa4071ef35.png", "desribe":"RO反渗透，大流量直出纯净水", "price":"1098", "price_del":"1499"},'+
        '{"tittle":"小米手表 标准版 典雅黑", "img_name":"img/flashsale-list-swiper/6cc07289d1a7d050d24e3fedf1f73086.png", "desribe":"能打电话、能下载APP，才是真正的智能手表", "price":"799", "price_del":"1299"},'+
        '{"tittle":"全面屏电视Pro 43英寸 E43S", "img_name":"img/flashsale-list-swiper/b4e466aa01025459b086e98f3c4d8eb3.png", "desribe":"全金属机身，2G+32G大存储，支持8K视频解码", "price":"1799", "price_del":"1999"},'+
        '{"tittle":"米家护颈记忆绵枕 灰色", "img_name":"img/flashsale-list-swiper/ef7b6af7926b7b44da1343e144a8f801.png", "desribe":"高低曲线承托，睡眠更自在", "price":"79", "price_del":"99"},'+
        '{"tittle":"米家声波电动牙刷T500C 蓝色", "img_name":"img/flashsale-list-swiper/b81ea9623738be4a58c3ed41321718cc.png", "desribe":"智能护齿，个性定制洁齿方案", "price":"249", "price_del":"269"},'+
        '{"tittle":"巨省电 | 米家空调 睡眠版 大1匹", "img_name":"img/flashsale-list-swiper/7bfb4267424929404a85838a05b4db76.png", "desribe":"智能控风，静入佳梦", "price":"2099", "price_del":"2299"},'+
        '{"tittle":"日常元素抽纸 青春版 24包/箱", "img_name":"img/flashsale-list-swiper/730055892c1afa7b6d8128c0938b5277.png", "desribe":"精选原生竹浆，健康环保", "price":"27.9", "price_del":"32.9"},'+
        '{"tittle":"米兔智能故事机 白色", "img_name":"img/flashsale-list-swiper/8e6408cf86fbcc9f222c24035fe6a667.png", "desribe":"能说会道，好玩伴", "price":"169", "price_del":"199"},'+
        '{"tittle":"米家防蓝光眼镜钛轻盈 黑色", "img_name":"img/flashsale-list-swiper/61d7ca143f6f524808421d85fb9e6f19.png", "desribe":"超轻超透，防蓝光护眼", "price":"179", "price_del":"199"},'+
        '{"tittle":"智能积木&nbsp;公路赛车 白色", "img_name":"img/flashsale-list-swiper/0b5665bc7612ccaea133d1e8311bf422.png", "desribe":"烧脑搭建，尽兴狂奔", "price":"269", "price_del":"299"},'+
        '{"tittle":"千年榫营造积木 祈年殿 白色", "img_name":"img/flashsale-list-swiper/ba485f3f5e5e5e7ff2670afae1c648a7.png", "desribe":"千年榫营造积木 祈年殿", "price":"799", "price_del":"999"},'+
        '{"tittle":"脊安适 颈部按摩器 护颈仪G2", "img_name":"img/flashsale-list-swiper/b7f3ac0cb8b15834692b1d10af134c33.png", "desribe":"恒温热敷 米家APP操控 3大按摩手法", "price":"279", "price_del":"399"},'+
        '{"tittle":"纯麦无线K歌麦克风 U7PRO", "img_name":"img/flashsale-list-swiper/3b76c32a6b8beb73d00e22d7199bcba8.png", "desribe":"小米电视专属定制，全场景麦克风", "price":"359", "price_del":"399"}]';
    var obj = JSON.parse(data);   
    return obj; 
};


function flashsale_button(){
    function initial(left, right){
        if(flashsale_list_position == 0) {
            left.style.color = "rgb(207, 207, 207)";
        }
        else{
            left.style.color = "rgb(100, 100, 100)";
        };
        if(flashsale_list_position == 3) {
            right.style.color = "rgb(207, 207, 207)";
        }
        else{
            right.style.color = "rgb(100, 100, 100)";
        };
    };  
    var left = document.getElementById("flashsale-swiper-left");
    var right = document.getElementById("flashsale-swiper-right");
    initial(left, right);
    left.onmouseover = function(){
        if(flashsale_list_position > 0){
            left.style.color = "orangered";
        };   
    };
    right.onmouseover = function(){
        if(flashsale_list_position < 3){
            right.style.color = "orangered";
        };    
    };
    left.onmouseout = function(){
        initial(left, right);
    };
    right.onmouseout = function(){
        initial(left, right)
    };   
};

//////////////中间的brick////////


function show_brick_box(){
    build_phone_box();
    build_jiadian_left_box();
    build_jiadian_right_box(1);
    build_smart_left_box();
    build_smart_right_box(1);
    build_dapei_left_box();
    build_dapei_right_box(1);
    build_peijian_left_box();
    build_peijian_right_box(1);
    build_zhoubian_left_box();
    build_zhoubian_right_box(1);
    build_video_brick()
};

function build_phone_box(){
    var data = store_phone_data();
    var text = load_box_data(data);
    document.getElementById("phone-right").innerHTML = text;
};

function build_jiadian_left_box(){
    var data = store_jiadian_data();
    var text = load_left_box_data(data);
    document.getElementById("jiadian-left").innerHTML = text;
};

function build_smart_left_box(){
    var data = store_smart_data();
    var text = load_left_box_data(data);
    document.getElementById("smart-left").innerHTML = text;
};

function build_dapei_left_box(){
    var data = store_dapei_data();
    var text = load_left_box_data(data);
    document.getElementById("dapei-left").innerHTML = text;
};

function build_peijian_left_box(){
    var data = store_peijian_data();
    var text = load_left_box_data(data);
    document.getElementById("peijian-left").innerHTML = text;
};

function build_zhoubian_left_box(){
    var data = store_zhoubian_data();
    var text = load_left_box_data(data);
    document.getElementById("zhoubian-left").innerHTML = text;
};

function build_jiadian_right_box(index){
    var obj = store_jiadian_data();
    if(index==1){
        var data = obj.slice(2, 9);
        var text = load_box_data(data);
        var data = obj.slice(9, 11);
    }
    else{
        var data = obj.slice(11, 18);
        var text = load_box_data(data);
        var data = obj.slice(18, 20);
    };
    text += load_samll_box_data(data);
    document.getElementById("jiadian-right").innerHTML = text;
};

function build_smart_right_box(index){
    var obj = store_smart_data();
    if(index==1){
        var data = obj.slice(2, 9);
        var text = load_box_data(data);
        var data = obj.slice(9, 11);
    }
    else if(index==2){
        var data = obj.slice(11, 17);
        var text = load_box_data(data);
        var data = obj.slice(17, 18);
    }
    else{
        var data = obj.slice(18, 25);
        var text = load_box_data(data);
        var data = obj.slice(25, 27);
    };
    text += load_samll_box_data(data);
    document.getElementById("smart-right").innerHTML = text;
};

function build_dapei_right_box(index){
    var obj = store_dapei_data();
    if(index==1){
        var data = obj.slice(2, 9);
        var text = load_box_data(data);
        var data = obj.slice(9, 11);
    }
    else{
        var data = obj.slice(11, 18);
        var text = load_box_data(data);
        var data = obj.slice(18, 20);
    };
    text += load_samll_box_data(data);
    document.getElementById("dapei-right").innerHTML = text;
};

function build_peijian_right_box(index){
    var obj = store_peijian_data();
    if(index==1){
        var data = obj.slice(2, 9);
        var text = load_box_data(data);
        var data = obj.slice(9, 11);
    }
    else{
        var data = obj.slice(11, 18);
        var text = load_box_data(data);
        var data = obj.slice(18, 20);
    };
    text += load_samll_box_data(data);
    document.getElementById("peijian-right").innerHTML = text;
};



function chang_brick_head_span_style(e){
    let  parent = e.parentNode;
    let  brothers =  parent.children;
    for(let i=0; i<brothers.length; i++){
        brothers[i].style.color = "black";
        brothers[i].style["border-bottom"] = "none";
    };
    e.style.color = "tomato";
    e.style["border-bottom"] = "tomato 2px solid";
};

function build_zhoubian_right_box(index){
    var obj = store_zhoubian_data();
    if(index==1){
        var data = obj.slice(2, 9);
        var text = load_box_data(data);
        var data = obj.slice(9, 11);
    }
    else{
        var data = obj.slice(11, 18);
        var text = load_box_data(data);
        var data = obj.slice(18, 20);
    };
    text += load_samll_box_data(data);
    document.getElementById("zhoubian-right").innerHTML = text;
};


function load_box_data(data){
    var text = '';
    for(let i=0; i<data.length; i++){
        text += '<div class="brick-item">' +
		    '<a href="' + data[i].href+ '" target="_blank">' +
			'<img src="'+ data[i].img_name+ '" >' + 
			'<h3 class="title">' + data[i].tittle + '</h3>' +
            '<p class="desc">' + data[i].desribe + '</p>' +
			'<p class="price"> <span> '+ data[i].price + '元</span>&nbsp;&nbsp;' ;
        if(data[i].price_del != ""){
            text +='<del>'+ data[i].price_del +'元</del>';
        };
        text += '</p>' +'</a>' + '</div>';
	};
    return text;
};

function load_samll_box_data(data){
    var text = '<div class=" brick-item-s" style="transform:none">';
    if(data.length == 1){
        text += '<div class="brick-item-small">' +
            '<a href="' + data[0].href + '" target="_blank">' +
            '<div class="in-small-iterm"> <h3 class="title">' + data[0].tittle + '</h3>' +
            '<p class="desc" style="transform:none">' + data[0].desribe + '</p> </div>' +
            '<img src="'+ data[0].img_name+ '" style="transform:none">'  +
            '</a>' + '</div>';
    }
    else{
        text += '<div class="brick-item-small">' +
		    '<a href="' + data[0].href + '" target="_blank" style="transform:none">' +
            '<div class="in-small-iterm"> <h3 class="title" style="transform:none">' + data[0].tittle + '</h3>' +
            '<p class="price" style="transform:none"> <span style="transform:none">'+ data[0].price + '元</span></p> </div>' +
            '<img src="'+ data[0].img_name+ '" >' +
            '</a>' + '</div>';
        text += '<div class="brick-item-small">' +
            '<a href="' + data[1].href+ '" target="_blank" style="transform:none">' +
            '<div class="in-small-iterm"> <h3 class="title" style="transform:none">' + data[1].tittle + '</h3>' +
            '<p class="desc" style="transform:none">' + data[1].desribe + '</p> </div>' +
            '<img src="'+ data[1].img_name+ '" style="transform:none">' +
            '</a>' + '</div>';
    };
    text +='</div>';
    return text;
};


function load_left_box_data(data){
    var text = "";
    for(let i=0; i<2; i++){
        text += '<div class="brick-left-item">' +
            '<a href="' + data[i].href+ '" target="_blank">' +
            '<img src="'+ data[i].img_name+ '" >' + 
            '</a> </div>';
    };
    return text;
};

function store_phone_data(){
    var data = '[' +
        '{"tittle":"黑鲨4 Pro", "img_name":"img/phone/d47f7ecaa04d92bf2790d4a5d53d9099.png", "desribe":"黑鲨4 Pro", "href":"https://www.mi.com/buy?product_id=13812", "price":"3999", "price_del":""},'+
        '{"tittle":"黑鲨4", "img_name":"img/phone/c21247abf4bc610cd86fe00601b0f766.png", "desribe":"黑鲨4 磁动力升降肩键", "href":"https://www.mi.com/buy?product_id=13810", "price":"2499", "price_del":""},'+  
        '{"tittle":"小米10S", "img_name":"img/phone/b3553083a4975325eab6470d94465548.jpg", "desribe":"骁龙870 | 对称式双扬立体声", "href":"https://www.mi.com/mi10s", "price":"3299", "price_del":""},'+
        '{"tittle":"Redmi  K40 Pro 系列", "img_name":"img/phone/68217751d12b1bfd2f9766e458b5e2dd.jpg", "desribe":"骁龙888 / E4 旗舰直屏", "href":"https://www.mi.com/redmik40ultra-k40pro", "price":"2799", "price_del":""},'+
        '{"tittle":"Redmi K40", "img_name":"img/phone/73617424da6ff6b64f9c630387bca874.jpg", "desribe":"骁龙870，新一代 E4 AMOLED旗舰直屏", "href":"https://www.mi.com/redmik40", "price":"1999", "price_del":""},'+
        '{"tittle":"小米11", "img_name":"img/phone/5a260090e0e08770b0bd865845a4b4ab.jpg", "desribe":"骁龙888 | 2K四曲面屏", "href":"https://www.mi.com/mi11", "price":"3999", "price_del":""},'+
        '{"tittle":"小米10", "img_name":"img/phone/0099822e42b4428cb25c4cdebc6ca53d.jpg", "desribe":"骁龙865/1亿像素相机", "href":"https://www.mi.com/buy?product_id=10000214", "price":"3399", "price_del":"3999"},'+
        '{"tittle":"Note 9 Pro ", "img_name":"img/phone/4e75e528fb468aee107f551179aa0799.jpg", "desribe":"一亿像素夜景相机，120Hz六档变速高刷屏", "href":"https://www.mi.com/redminote9pro", "price":"1599", "price_del":""}]';
    var obj = JSON.parse(data);   
    return obj; 
};

function store_jiadian_data(){
    var data = '[' +
        '{"tittle":"Redmi MAX 98\\" ", "img_name":"img/jiadian/116fc43816b87192be4e67cf762e8da5.webp", "desribe":"", "href":"https://www.mi.com/redmitv/98", "price":"", "price_del":""},'+
        '{"tittle":"小米电视4A 60英寸", "img_name":"img/jiadian/1e82177bd8c8cd140e0e582ecaa886dc.webp", "desribe":"", "href":"https://www.mi.com/buy/detail?product_id=11843", "price":"", "price_del":""},'+
        '{"tittle":"小米全面屏电视65英寸 E65X", "img_name":"img/jiadian/03a9e7e96a09d256ca1badeec186c859.jpg", "desribe":"全面屏设计", "href":"https://www.mi.com/buy?product_id=12849", "price":"3099", "price_del":"3399"},'+
        '{"tittle":"全面屏电视E43K", "img_name":"img/jiadian/20d36fbaa18625e4fe507af31e4e9f83.jpg", "desribe":"全面屏设计，海量内容", "href":"https://www.mi.com/buy?product_id=12045", "price":"1399", "price_del":"1599"},'+
        '{"tittle":"小米电视4A 70英寸", "img_name":"img/jiadian/9d8674cd21c486feff5328772ab9cf01.jpg", "desribe":"大屏更享受", "href":"https://www.mi.com/buy?product_id=10764", "price":"3999", "price_del":"3999"},'+
        '{"tittle":"米家互联网对开门冰箱 540L", "img_name":"img/jiadian/6bed167fc905bab57dee478bcf1e5e0d.jpg", "desribe":"重磅新品福利特惠", "href":"https://www.mi.com/buy?product_id=13168", "price":"2899", "price_del":"3699"},'+
        '{"tittle":"Redmi全自动波轮洗衣机1A 8kg", "img_name":"img/jiadian/b8c63a2024528fe5410ebe669b7d2407.jpg", "desribe":"一键操作，父母都爱用", "href":"https://www.mi.com/buy?product_id=9509", "price":"777", "price_del":"899"},'+
        '{"tittle":"Air&nbsp;13.3\\"&nbsp;2019款 ", "img_name":"img/jiadian/74e573c4c0d89048392d14831cc507d5.jpg", "desribe":"新一代独立显卡", "href":"http://www.mi.com/mibook/air13-2019", "price":"5399", "price_del":""},'+
        '{"tittle":"米家互联网烟灶套装（天然气）", "img_name":"img/jiadian/7e5f89adf98ab3fccb34012b5209cd58.jpg", "desribe":"点火排烟，风随火动", "href":"https://www.mi.com/buy?product_id=9861", "price":"1999", "price_del":"2298"},'+
        '{"tittle":"米家电烤箱", "img_name":"img/jiadian/1612c93ad4756215774a0dbec7a81bb2.jpg", "desribe":"&nbsp;", "href":"https://www.mi.com/buy?product_id=9866", "price":"399", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"热门", "href":"https://www.mi.com/p/3469.html", "price":"", "price_del":""},' +
        '{"tittle":"全面屏电视E43K", "img_name":"img/jiadian/20d36fbaa18625e4fe507af31e4e9f83.jpg", "desribe":"全面屏设计，海量内容", "href":"https://www.mi.com/buy?product_id=12045", "price":"1399", "price_del":"1599"},'+
        '{"tittle":"小米全面屏电视 55英寸E55X&nbsp;灰色&nbsp;55英寸", "img_name":"img/flashsale-list-swiper/4df2c1e3062afb594ff0daaa603dc24b.png", "desribe":"潮流全面屏设计", "href":"https://www.mi.com/buy/detail?product_id=10909", "price":"2399", "price_del":"2599"},'+
        '{"tittle":"小米电视4A 60英寸", "img_name":"img/jiadian/ecbe6a6c0d4950b78b086d7ada654e3b.jpg", "desribe":"人工智能语音系统,超高清画质", "href":"https://www.mi.com/buy?product_id=11843", "price":"2799", "price_del":""},'+
        '{"tittle":"小米电视4S 75英寸", "img_name":"img/jiadian/7e2127506fd2209f3115828404269d45.jpg", "desribe":"4K HDR，人工智能语音", "href":"https://www.mi.com/mitv4s/75/", "price":"4699", "price_del":"5999"},'+
        '{"tittle":"小米全面屏电视65英寸 E65X", "img_name":"img/jiadian/03a9e7e96a09d256ca1badeec186c859.jpg", "desribe":"全面屏设计", "href":"https://www.mi.com/buy?product_id=12849", "price":"3099", "price_del":"3299"},'+
        '{"tittle":"小米全面屏电视E32C", "img_name":"img/jiadian/8b3fe3a07ef69fb4c959e39c768c7525.jpg", "desribe":"全面屏设计，人工智能系统", "href":"https://www.mi.com/mitvall-screen/e32c", "price":"949", "price_del":"1099"},'+
        '{"tittle":"Redmi智能电视A55", "img_name":"img/jiadian/f674ced205c2e81125dfd2d6659aabfc.jpg", "desribe":"澎湃音效影院级体验", "href":"https://www.mi.com/buy?product_id=12809", "price":"2099", "price_del":"2199"},'+
        '{"tittle":"智能电视 MAX&nbsp;98\\"", "img_name":"img/jiadian/8861fafd390bf76f7446d4db2053560f.jpg", "desribe":"", "href":"https://www.mi.com/redmitv/98/", "price":"19999", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"电视影音", "href":"https://www.mi.com/a/h/15707.html", "price":"", "price_del":""}]' 
    
    var obj = JSON.parse(data);   
    return obj; 
};

function store_smart_data(){
    var data = '[' +
        '{"tittle":"米家显示器挂灯", "img_name":"img/smart/ffe114f73fac3a45e5622c3eff56106b.webp", "desribe":"", "href":"https://www.mi.com/buy/detail?product_id=12212", "price":"", "price_del":""},'+
        '{"tittle":"小米米家电动滑板车Pro", "img_name":"img/smart/a660ce095e8f553a9ed1515265f4e9fc.webp", "desribe":"", "href":"https://www.mi.com/buy/detail?product_id=9285", "price":"", "price_del":""},'+
        '{"tittle":"小米小爱音箱 Play", "img_name":"img/smart/e7c6e79433c883e1a022ec21402c1679.jpg", "desribe":"听音乐、语音遥控家电", "href":"https://www.mi.com/aispeaker-play", "price":"99", "price_del":"169"},'+
        '{"tittle":"米家智能窗帘", "img_name":"img/smart/3accd497afc0047cfbd40f442e3b17df.jpg", "desribe":"窗帘开合随心控", "href":"https://mi.com/buy?product_id=12274", "price":"799", "price_del":""},'+
        '{"tittle":"小小米体脂秤2", "img_name":"img/smart/550177d2e54387521bce9e78cb2949dd.jpg", "desribe":"轻松掌握身体脂肪率", "href":"https://www.mi.com/buy?product_id=9686", "price":"99", "price_del":""},'+
        '{"tittle":"九号平衡车", "img_name":"img/smart/T1r_x_BgLT1RXrhCrK.jpg", "desribe":"年轻人的酷玩具", "href":"https://www.mi.com/scooter", "price":"1999", "price_del":""},'+
        '{"tittle":"小米智能门锁 推拉式", "img_name":"img/smart/5a312d69c1a5447c9e3d14d42d01a8fb.jpg", "desribe":"一步推拉，高端智能门锁", "href":"https://www.mi.com/buy?product_id=10025", "price":"1599", "price_del":"1699"},'+
        '{"tittle":"Redmi小爱触屏音箱 8英寸", "img_name":"img/smart/49f30069c778b494257320d9da5a1a60.jpg", "desribe":"超大屏，让智能更多可能", "href":"https://www.mi.com/redmi-xai", "price":"349", "price_del":""},'+
        '{"tittle":"小米手环5", "img_name":"img/smart/ec0ec7692ba005710d1887262559609c.jpg", "desribe":"11种运动模式 磁吸式充电", "href":"https://www.mi.com/shouhuan5/all", "price":"169", "price_del":"189"},'+
        '{"tittle":"米家空气净化器Pro", "img_name":"img/smart/f10b003b4ff46c59f5736e8f324af034.jpg", "desribe":"&nbsp;", "href":"https://www.mi.com/airpro", "price":"1099", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"热门", "href":"https://www.mi.com/p/3469.html", "price":"", "price_del":""},' +
        '{"tittle":"米家智能门锁 标准锁体&nbsp;碳素黑", "img_name":"img/smart/2f33baec53cc73e2942277640ba6e710.jpg", "desribe":"一体化活体指纹识别，多种开锁方式", "href":"https://www.mi.com/buy?product_id=9120", "price":"1299", "price_del":""},'+
        '{"tittle":"米家智能门锁 标准锁体&nbsp;磨砂金", "img_name":"img/smart/1840f64ea310ca8013385885baaf16a8.jpg", "desribe":"全新磨砂金配色，精湛工艺升级", "href":"https://www.mi.com/buy?product_id=10303", "price":"1099", "price_del":"1499"},'+
        '{"tittle":"米家智能门锁 推拉式&nbsp;通用版", "img_name":"img/smart/0baacf6e54cbf89cab2c543cc02344e9.jpg", "desribe":"一步推拉，高端智能门锁", "href":"https://www.mi.com/buy?product_id=10025", "price":"1599", "price_del":"1699"},'+
        '{"tittle":"米家智能门锁 青春版", "img_name":"img/smart/0245498a0e08b87ba8c323871c5d48bc.jpg", "desribe":"隐形指纹识别设计 简单一步快进家门", "href":"https://www.mi.com/buy?product_id=10345", "price":"999", "price_del":""},'+
        '{"tittle":"米家智能门锁 霸王锁体&nbsp;碳素黑", "img_name":"img/smart/e83e1ab5947337d7b631e056b3e0f23d.jpg", "desribe":"一体化活体指纹识别，多种开锁方式", "href":"https://www.mi.com/mj-smartlock-bawang", "price":"1399", "price_del":"1599"},'+
        '{"tittle":"米家智能门锁 霸王锁体&nbsp;磨砂金", "img_name":"img/smart/fa7cdb455f106da904e8c3f6156abc06.jpg", "desribe":"适配霸王锁体，多种开锁方式", "href":"https://www.mi.com/mj-smartlock-bawang", "price":"1399", "price_del":"1799"},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"安防", "href":"https://www.mi.com/p/3469.html", "price":"", "price_del":""},'+
        '{"tittle":"米兔折叠婴儿推车", "img_name":"img/smart/18a82e7cda6ecbc22ecee7ac927d6ff9!400x400.jpg", "desribe":"出发去向往的地方", "href":"https://www.mi.com/babyfoldingcar", "price":"699", "price_del":""},'+
        '{"tittle":"九号平衡车 Plus", "img_name":"img/smart/877d3ce8-68ab-7506-2a78-55a8c0fba946!400x400.png", "desribe":"一个形影不离的新伙伴", "href":"https://www.mi.com/scooterplus", "price":"3499", "price_del":""},'+
        '{"tittle":"米家充气宝", "img_name":"img/smart/0294e2f3997bf0cffb7bf48361d03588.jpg", "desribe":"便携电动打气筒", "href":"https://www.mi.com/buy?product_id=9613", "price":"199", "price_del":""},'+
        '{"tittle":"小米小背包", "img_name":"img/smart/12fe0ea5e8dafecce5ffa65108796683.jpg", "desribe":"城市休闲，简约设计", "href":"https://www.mi.com/buy?product_id=11674", "price":"29", "price_del":""},'+
        '{"tittle":"骑记电动助力自行车 新国标版 黑色", "img_name":"img/smart/3520b7c57449585bc3185d31b9d9bd08.jpg", "desribe":"更多助力选择，更多城市风景", "href":"https://www.mi.com/buy?product_id=11368", "price":"2999", "price_del":""},'+
        '{"tittle":"小米米家对讲机2", "img_name":"img/smart/d86c1eb8f5525bc4c76c8e0e98db7446.jpg", "desribe":"向更远出发", "href":"https://www.mi.com/buy?product_id=9550", "price":"499", "price_del":""},'+
        '{"tittle":"九号平衡车", "img_name":"img/smart/T1r_x_BgLT1RXrhCrK.jpg", "desribe":"年轻人的酷玩具", "href":"https://www.mi.com/scooter", "price":"1999", "price_del":""},'+
        '{"tittle":"米家电动滑板车1S", "img_name":"img/smart/3622a82de99a8a3ee1aeb2b2b7586209.jpg", "desribe":"&nbsp;", "href":"https://www.mi.com/buy?product_id=11916", "price":"1999", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"出行", "href":"https://www.mi.com/p/3469.html", "price":"", "price_del":""}]' 
        
    var obj = JSON.parse(data);   
    return obj; 
};

function store_dapei_data(){
    var data = '[' +
        '{"tittle":"九号平衡车", "img_name":"img/dapei/6874615b3c50e837ffe532eb6ea4ef1a.webp", "desribe":"", "href":"https://www.mi.com/scooter", "price":"", "price_del":""},'+
        '{"tittle":"米家电动剃须刀 S700", "img_name":"img/dapei/9f6c89cf21efc23799f6130224cef007.webp", "desribe":"", "href":"https://www.mi.com/buy/detail?product_id=13414", "price":"", "price_del":""},'+
        '{"tittle":"小米真无线蓝牙耳机Air 2 Pro", "img_name":"img/dapei/5fc35cf0af915a9e60f5d4ea220521ab.jpg", "desribe":"主动降噪/持久续航/无线充", "href":"https://www.mi.com/buy?product_id=12899", "price":"649", "price_del":"699"},'+
        '{"tittle":"高速无线充套装", "img_name":"img/dapei/9eb0178e3bfeb7d170edd641fb4be4bc.jpg", "desribe":"快速无线闪充，Qi充电标准", "href":"https://www.mi.com/buy?product_id=9311", "price":"149", "price_del":""},'+
        '{"tittle":"Redmi AirDots 2真无线蓝牙耳机", "img_name":"img/dapei/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg", "desribe":"支持蓝牙5.0，自动秒连，拿起就能用", "href":"https://www.mi.com/buy?product_id=12479", "price":"99", "price_del":""},'+
        '{"tittle":"小米真无线蓝牙耳机Air 2s", "img_name":"img/dapei/c6306bf6d8aede9f6f48d8e4d9256db2.jpg", "desribe":"全面升级，智慧真无线", "href":"https://www.mi.com/buy?product_id=11821", "price":"369", "price_del":"399"},'+
        '{"tittle":"Redmi充电宝 10000mAh 标准版 白色", "img_name":"img/dapei/ea8e42faebf7d76a4cb42b8930cf9e46.jpg", "desribe":"10000mAh大电量", "href":"https://www.mi.com/buy?product_id=10317", "price":"59", "price_del":""},'+
        '{"tittle":"Redmi充电宝 20000mAh 快充版", "img_name":"img/dapei/eaf70e0e9905de6452f07b1f48fcc386.jpg", "desribe":"大容量，可上飞机", "href":"https://www.mi.com/buy?product_id=10318", "price":"99", "price_del":""},'+
        '{"tittle":"小米插线板 5孔位", "img_name":"img/dapei/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!400x400.jpg", "desribe":"多重安全保护", "href":"https://www.mi.com/buy?product_id=5857", "price":"39", "price_del":""},'+
        '{"tittle":"小米小爱触屏音箱", "img_name":"img/dapei/9946e252a7c49662376c056ced004a20.jpg", "desribe":"&nbsp;", "href":"https://www.mi.com/aispeaker-touch", "price":"219", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"热门", "href":"https://www.mi.com/p/3469.html", "price":"", "price_del":""},' +
        '{"tittle":"Redmi AirDots 2真无线蓝牙耳机", "img_name":"img/dapei/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg", "desribe":"支持蓝牙5.0，自动秒连，拿起就能用", "href":"https://www.mi.com/buy?product_id=12479", "price":"99", "price_del":""},'+
        '{"tittle":"小米真无线蓝牙耳机Air 2s", "img_name":"img/dapei/c6306bf6d8aede9f6f48d8e4d9256db2.jpg", "desribe":"全面升级，智慧真无线", "href":"https://www.mi.com/buy?product_id=11821", "price":"369", "price_del":"399"},'+
        '{"tittle":"小米降噪项圈蓝牙耳机", "img_name":"img/dapei/faf8668acb2fd80c0afad4d4c4e837ad.jpg", "desribe":"无线降噪，静无止境", "href":"https://www.mi.com/buy?product_id=10316", "price":"399", "price_del":"499"},'+
        '{"tittle":"小米小爱音箱 Pro", "img_name":"img/dapei/8b619d27877bbc497468c673a317a847.jpg", "desribe":"语音遥控5000+品牌主流家电", "href":"https://www.mi.com/buy?product_id=10745", "price":"299", "price_del":""},'+
        '{"tittle":"小米真无线蓝牙耳机Air2 SE", "img_name":"img/dapei/8a8de2281327e612f3f83fd1a4db6aea.jpg", "desribe":"放肆用，畅快听", "href":"https://www.mi.com/buy?product_id=12036", "price":"169", "price_del":""},'+
        '{"tittle":"小米小爱音箱 Art 电池版", "img_name":"img/dapei/1ab7943ae5215e0faacb04f7270d9cfb.jpg", "desribe":"不插电，让音乐更自由", "href":"https://www.mi.com/buy?product_id=13032", "price":"399", "price_del":""},'+
        '{"tittle":"小米小爱音箱 Art", "img_name":"img/dapei/1c278ccaa2a2b7e0ab9b294a3a0ec32b.jpg", "desribe":"极光下的声音艺术", "href":"http://www.mi.com/aispeaker-art", "price":"349", "price_del":""},'+
        '{"tittle":"小米小爱音箱", "img_name":"img/dapei/e13900c094ae4ac4eb53b35f2d0c95b00.jpg", "desribe":"", "href":"https://www.mi.com/buy?product_id=10744", "price":"249", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"耳机音箱", "href":"https://www.mi.com/a/h/15707.html", "price":"", "price_del":""}]' 
    
    var obj = JSON.parse(data);   
    return obj; 
};

function store_peijian_data(){
    var data = '[' +
        '{"tittle":"米兔儿童电话手表4C", "img_name":"img/peijian/9f64bbd58c3f5001bdf0688894f22cb6.webp", "desribe":"", "href":"https://www.mi.com/buy/detail?product_id=12404", "price":"", "price_del":""},'+
        '{"tittle":"米家自动洗手机套装", "img_name":"img/peijian/ffe4182f1d9a5befdf2380ec90ae1620.webp", "desribe":"", "href":"https://www.mi.com/dispenser", "price":"", "price_del":""},'+
        '{"tittle":"小米氮化镓GaN充电器 Type-C 65W ", "img_name":"img/peijian/f8fde8a877fd4b12ad88119d9b6bc061.jpg", "desribe":"氮化镓黑科技 65W MAX 大功率快充", "href":"https://www.mi.com/buy?product_id=11543", "price":"129", "price_del":"149"},'+
        '{"tittle":"高速无线充套装", "img_name":"img/peijian/9eb0178e3bfeb7d170edd641fb4be4bc.jpg", "desribe":"快速无线闪充，Qi充电标准", "href":"https://www.mi.com/buy?product_id=9311", "price":"149", "price_del":""},'+
        '{"tittle":"小米无线充电宝青春版10000mAh", "img_name":"img/peijian/1f32af53d1ad60f4980146f6a2b81019.jpg", "desribe":"能量满满，无线有线都能充", "href":"https://www.mi.com/buy?product_id=10721", "price":"129", "price_del":""},'+
        '{"tittle":"小米车载充电器快充版", "img_name":"img/peijian/01dba858b327eeeadf34ce8a1d794ed4.jpg", "desribe":"双口快充，安全稳定", "href":"https://www.mi.com/buy?product_id=12282", "price":"69", "price_del":""},'+
        '{"tittle":"小米氮化镓GaN充电器 Type-C 65W ", "img_name":"img/peijian/f8fde8a877fd4b12ad88119d9b6bc061.jpg", "desribe":"氮化镓黑科技 65W MAX 大功率快充", "href":"https://www.mi.com/buy?product_id=11543", "price":"129", "price_del":"149"},'+
        '{"tittle":"小米车载充电器快充版1A1C 100W", "img_name":"img/peijian/fffc0a962387dff2f70aeb009ddf69ff.jpg", "desribe":"小米车载充电器快充版1A1C 100W", "href":"https://www.mi.com/buy?product_id=12541", "price":"99", "price_del":""},'+
        '{"tittle":"小米Type-C转Lightning数据线 1m", "img_name":"img/peijian/573e9cb39b0d8c7f2cd063621142fe44.jpg", "desribe":"苹果MFi官方认证，支持快充", "href":"https://www.mi.com/buy?product_id=11859", "price":"59", "price_del":""},'+
        '{"tittle":"小米USB充电器65W 快充版（2A1C）", "img_name":"img/peijian/e4b3bff030170ad1a07dfb50311352c9.jpg", "desribe":"&nbsp;", "href":"https://www.mi.com/buy?product_id=11540", "price":"129", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"热门", "href":"https://www.mi.com/search?keyword=%E4%BF%9D%E6%8A%A4%E5%A3%B3", "price":"", "price_del":""},' +
        '{"tittle":"小米氮化镓GaN充电器 Type-C 65W ", "img_name":"img/peijian/f8fde8a877fd4b12ad88119d9b6bc061.jpg", "desribe":"氮化镓黑科技 65W MAX 大功率快充", "href":"https://www.mi.com/buy?product_id=11543", "price":"129", "price_del":"149"},'+
        '{"tittle":"小米立式风冷无线充 30W", "img_name":"img/peijian/15ac53312f850bfcc73bdc5a185fda8a.jpg", "desribe":"解锁充电新姿势", "href":"https://www.mi.com/buy?product_id=10860", "price":"199", "price_del":""},'+
        '{"tittle":"小米立式无线充电器 通用快充20W", "img_name":"img/peijian/bb115b0d5e6cc24c39c1ae818b63bf1a.jpg", "desribe":"横竖可充，迅速感应边充边玩", "href":"https://www.mi.com/buy?product_id=11226", "price":"99", "price_del":""},'+
        '{"tittle":"米家插线板6位基础版（含3口USB 2A快充）", "img_name":"img/peijian/554198af-55ec-8400-7a04-66a8f3e0dd66.jpg", "desribe":"小巧设计，便捷不占地儿", "href":"https://www.mi.com/powerstrip6", "price":"79", "price_del":""},'+
        '{"tittle":"小米插线板（含3口USB 2A快充）", "img_name":"img/peijian/d6484113b03acde1672d50c395c09763.jpg", "desribe":"3个USB充电口，支持快充", "href":"https://www.mi.com/buy?product_id=7805", "price":"49", "price_del":""},'+
        '{"tittle":"小米USB充电器65W 快充版（2A1C）", "img_name":"img/peijian/e4b3bff030170ad1a07dfb50311352c9.jpg", "desribe":"超级快充，三台设备同时充", "href":"https://www.mi.com/buy?product_id=11540", "price":"129", "price_del":"149"},'+
        '{"tittle":"小米Type-C充电器快充版 20W", "img_name":"img/peijian/028d84b7e54574047e6bafe52f781ee7.jpg", "desribe":"智能兼容/小巧易携带", "href":"http://www.mi.com/aispeaker-art", "price":"39", "price_del":""},'+
        '{"tittle":"小米氮化镓GaN充电器 Type-C 65W ", "img_name":"img/peijian/f8fde8a877fd4b12ad88119d9b6bc061.jpg", "desribe":"", "href":"https://www.mi.com/buy?product_id=11543", "price":"129", "price_del":"149"},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"充电器", "href":"https://www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%99%A8", "price":"", "price_del":""}]' 
    
    var obj = JSON.parse(data);   
    return obj; 
};

function store_zhoubian_data(){
    var data = '[' +
        '{"tittle":"米家保温杯弹盖版", "img_name":"img/zhoubian/ca0940f052227d235e7de5678d106c89.webp", "desribe":"", "href":"https://www.mi.com/buy/detail?product_id=12876", "price":"", "price_del":""},'+
        '{"tittle":"小米小背包", "img_name":"img/zhoubian/0497ba8520dc4aca9d55e6b841d42331.webp", "desribe":"", "href":"https://www.mi.com/buy/detail?product_id=11674", "price":"", "price_del":""},'+
        '{"tittle":"米家飞行员太阳镜 Pro", "img_name":"img/zhoubian/cccac948e1b8ffb47f1fecde67692e60.jpg", "desribe":"尼龙偏光，轻巧佩戴", "href":"https://www.mi.com/buy?product_id=9732", "price":"179", "price_del":"199"},'+
        '{"tittle":"小米巨能写中性笔10支装", "img_name":"img/zhoubian/57433a4b991b2a2ddc889f2d8d434655.jpg", "desribe":"一支顶4支，超长顺滑书写", "href":"https://www.mi.com/buy?product_id=9836", "price":"9.99", "price_del":""},'+
        '{"tittle":"米家迷你保温杯", "img_name":"img/zhoubian/03d94ee6059481a6adcb6c4c5c572fb4.jpg", "desribe":"可以随身携带的温度", "href":"https://www.mi.com/buy?product_id=10480", "price":"49", "price_del":""},'+
        '{"tittle":"贝医生巴氏牙刷 四色装", "img_name":"img/zhoubian/413f5e2f-53e7-0879-119c-8b4466feea53!400x400.jpg", "desribe":"进口刷毛，好品质", "href":"https://www.mi.com/toothbrush-set", "price":"39.9", "price_del":""},'+
        '{"tittle":"米家运动鞋4 ", "img_name":"img/zhoubian/d0b1119165c481376399aab53330e015.jpg", "desribe":"轻盈若絮,弹若脱兔", "href":"https://www.mi.com/buy?product_id=11874", "price":"199", "price_del":""},'+
        '{"tittle":"米家指甲刀五件套", "img_name":"img/zhoubian/18ebd0837a5f265deaee9231aa3e1245.jpg", "desribe":"轻巧多用，优雅随行", "href":"https://www.mi.com/buy?product_id=11805", "price":"39.9", "price_del":""},'+
        '{"tittle":"8H乳胶床垫2", "img_name":"img/zhoubian/f9017bebb14740ea46673aaa81a616cb.jpg", "desribe":"软硬双面可睡", "href":"https://www.mi.com/buy?product_id=11863", "price":"599", "price_del":""},'+
        '{"tittle":"MIJOY 唱片机车载香薰", "img_name":"img/zhoubian/c1062daf42a1a5b2a9108510ecf83d0b.jpg", "desribe":"&nbsp;", "href":"https://www.mi.com/buy?product_id=11909", "price":"49", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"热门", "href":"https://www.mi.com/search?keyword=MIJOY", "price":"", "price_del":""},' +
        '{"tittle":"九号卡丁车Pro兰博基尼汽车定制版", "img_name":"img/zhoubian/609d0a457c7f8ac27d76f953c8acb7fc.jpg", "desribe":"九号卡丁车Pro兰博基尼汽车定制版", "href":"https://www.mi.com/buy?product_id=12633", "price":"999", "price_del":""},'+
        '{"tittle":"米家飞行员太阳镜 Pro", "img_name":"img/zhoubian/cccac948e1b8ffb47f1fecde67692e60.jpg", "desribe":"尼龙偏光，轻巧佩戴", "href":"https://www.mi.com/buy?product_id=9732", "price":"179", "price_del":"199"},'+
        '{"tittle":"九号平衡车", "img_name":"img/dapei/6874615b3c50e837ffe532eb6ea4ef1a.webp", "desribe":"年轻人的酷玩具", "href":"https://www.mi.com/scooter", "price":"1999", "price_del":""},'+
        '{"tittle":"小米米家电动滑板车Pro", "img_name":"img/zhoubian/aabf1a475043266cf4759ec58d0f679c.jpg", "desribe":"性能提升，动力更强劲", "href":"https://www.mi.com/buy?product_id=9729", "price":"2799", "price_del":""},'+
        '{"tittle":"米家经典方框太阳镜", "img_name":"img/zhoubian/c9871569c0b49b769bd74f5cce81e45a.jpg", "desribe":"复古设计，偏光自修复", "href":"https://www.mi.com/buy?product_id=12541", "price":"89", "price_del":"99"},'+
        '{"tittle":"小米车载充电器快充版1A1C 100W", "img_name":"img/peijian/fffc0a962387dff2f70aeb009ddf69ff.jpg", "desribe":"小米车载充电器快充版1A1C 100W", "href":"https://www.mi.com/buy?product_id=12741", "price":"99", "price_del":""},'+
        '{"tittle":"小米对讲机Lite", "img_name":"img/zhoubian/3f182e898b25285bd8279cbc72c9686e.jpg", "desribe":"小米对讲机Lite", "href":"https://www.mi.com/buy?product_id=12741", "price":"129", "price_del":""},'+
        '{"tittle":"小米无线充电宝30W 10000mAh", "img_name":"img/zhoubian/e2589bc96718b0db697b23ff765c01c3.jpg", "desribe":"", "href":"https://www.mi.com/buy?product_id=12769", "price":"199", "price_del":""},'+
        '{"tittle":"浏览更多", "img_name":"img/icon/right-arrow.jpg", "desribe":"充电器", "href":"https://www.mi.com/search?keyword=%E7%AE%B1%E5%8C%85", "price":"", "price_del":""}]' 
    
    var obj = JSON.parse(data);   
    return obj; 
};

///////////////////视频////////////////////

function build_video_brick(){
    var text = "";
    data = store_video()
    for(let i = 0; i<4; i++){
        text += '<div class="video-item">' +
        '<a href="javascript: void(0);" title="点击播放视频" onclick="show_video('+ i+')">' +
        '<img alt="'+ data[i].tittle + '" src="'+ data[i].img_name +'"></img>'+
        '<h3 class="title">' + data[i].tittle + '</h3>' + 
        '<p class="desc">' + data[i].desribe + '</p>' +
        ' </a> </div>'
    };
    document.getElementsByClassName("video-brick-body")[0].innerHTML = text;
};

function show_video(i){
    data = store_video();
    document.getElementsByTagName("video")[0].setAttribute("src", data[i].video_name);
    document.getElementsByClassName("video")[0].style.display = "block";
    document.getElementById("video-name-here").innerHTML = data[i].tittle;
    document.getElementsByTagName("video")[0].play();
    document.getElementById("cover").style.display = "block";
};

function stop_and_close(){
    document.getElementsByClassName("video")[0].style.display = "none";
    document.getElementsByTagName("video")[0].pause();
    document.getElementById("cover").style.display = "none";
};

function store_video(){
    var data = '[' +
        '{"tittle":"Redmi 10X系列发布会", "img_name":"img/video/101b19aca4bb489bcef0f503e44ec866.webp", "desribe":"Redmi 10X系列发布会", "video_name":"img/video/JimmyShow.mp4"},'+
        '{"tittle":"小米10 青春版 发布会", "img_name":"img/video/96563e75833ba4563bd469dd28203b09.webp", "desribe":"", "video_name":"img/video/jc.mp4"},'+
        '{"tittle":"小米10 8K手机拍大片", "img_name":"img/video/2fd26bb99b723337a2f8eaba84f7d5bb.webp", "desribe":"", "video_name":"img/video/和小师妹一起练功啦.mp4"},'+
        '{"tittle":"小米10发布会", "img_name":"img/video/a8dd25cab48c60fc6387b9001eddc3f9.webp", "desribe":"",  "video_name":"img/video/cq.mp4"}]';
    var obj = JSON.parse(data);   
    return obj; 
};


