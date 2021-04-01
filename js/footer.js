function show_footer_info(){
    build_footer_server();
    build_footer_links();
    build_info_text();
    build_info_links();
};

function build_footer_server(){
    var data = store_footer_server();
    var text = "";
    for(let i=0; i<data.length; i++){
        text += '<div class="server-iterm">' +
        '<a href="' + data[i].href+ '" target="_blank">' + 
        '<span >' + data[i].name + '</span>' +
        '</a>' +'</div>';
        if(i<data.length-1){
            text += '<div class="server-iterm server-iterm-sep"> | </div>'
        };         
    };
    document.getElementsByClassName("footer-server")[0].innerHTML = text;
}

function store_footer_server(){
    var data = '['+
        '{"name":"预约维修服务", "href":"https://www.mi.com/service/quick-repair"},' +
        '{"name":"7天无理由退货", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"15天免费换货", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"满99元包邮", "href":"https://www.mi.com/service/buy/Postal%20policy"},' +
        '{"name":"520余家售后网点", "href":"https://www.mi.com/service/sitelist"}]';
    var obj = JSON.parse(data);   
    return obj; 
};

function build_footer_links(){
    var data = store_footer_links();
    var text = "";
    for(let key in data){
        text += '<div class="footer-link-s">' +
            '<p class="link-head">' + key + '</p>';
        for(let i=0; i<data[key].length; i++){
            text += '<a class="footer-link" href="' + data[key][i].href +'" target="_blank">' + data[key][i].name + '</a>';
        };
        text += '</div>';
    };
    document.getElementsByClassName("col-links")[0].innerHTML = text;
};

function store_footer_links(){
    var data = '{'+
        '"帮助中心":[' +
        '{"name":"账户管理", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"购物指南", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"订单操作", "href":"https://www.mi.com/service/buy/Postal%20policy"}],' +
        '"服务支持":[' +
        '{"name":"售后政策", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"自助服务", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"相关下载", "href":"https://www.mi.com/service/buy/Postal%20policy"}],' +
        '"线下门店":[' +
        '{"name":"小米之家", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"服务网点", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"授权体验店", "href":"https://www.mi.com/service/buy/Postal%20policy"}],' +
        '"关于小米":[' +
        '{"name":"了解小米", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"加入小米", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"投资者关系", "href":"https://www.mi.com/service/buy/Postal%20policy"},' +
        '{"name":"企业社会责任", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"廉洁举报", "href":"https://www.mi.com/service/buy/Postal%20policy"}],' +
        '"关注我们":[' +
        '{"name":"新浪微博", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"官方微信", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"联系我们", "href":"https://www.mi.com/service/buy/Postal%20policy"},' +
        '{"name":"", "href":"https://www.mi.com/service/buy/Postal%20policy"}],' +
        '"特色服务":[' +
        '{"name":"F 码通道", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"礼物码", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"防伪查询", "href":"https://www.mi.com/service/buy/Postal%20policy"}]}';
    var obj = JSON.parse(data);   
    return obj; 
};


function build_info_text(){
    var data = store_info_text();
    text = "";
    for(key in data){
        if(key=="p1" || key=="p2"){
            text += '<p>';
        }
        else{
            text += '<p class="text-last-p">';
        }
        
        for(let i=0; i<data[key].length; i++){
            text += '<a class="info-link" href="' + data[key][i].href +'" target="_blank">' + data[key][i].name + '</a>'
            if(key=="p1" || key=="p2"){
                if(i<data[key].length-1){
                    text += '<span class="sep"> | </span>';
                };
            };
        };
        text += "</p>";
    };
    document.getElementsByClassName("info-text")[0].innerHTML = text;

};


function store_info_text(){
    var data = '{'+
        '"p1":[' +
        '{"name":"小米商城", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"MIUI", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"米家", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"米聊 ", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"多看", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"游戏", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"政企服务", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"小米天猫店", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"小米集团隐私政策", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"小米公司儿童信息保护规则", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"小米商城隐私政策", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"小米商城用户协议", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"问题反馈", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"Select Location", "href":"https://www.mi.com/service/buy/Postal%20policy"}],' +
        '"p2":[' +
        '{"name":"北京互联网法院法律服务工作站", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"中国消费者协会", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"北京市消费者协会", "href":"https://www.mi.com/service/buy/Postal%20policy"}],' +
        '"p3":[' +
        '{"name":"© mi.com", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"京ICP证110507号", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"京ICP备10046444号", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"京公网安备11010802020134号", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"京网文[2020]0276-042号 <br />", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"（京）网械平台备字（2018）第00005号", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"互联网药品信息服务资格证 (京)-非经营性-2014-0090", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"营业执照", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"医疗器械质量公告 <br />", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"增值电信业务许可证", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"网络食品经营备案", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"京食药网食备202010048", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"食品经营许可证 <br />", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"违法和不良信息举报电话：171-5104-4404", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"知识产权侵权投诉", "href":"https://www.mi.com/service/exchange#back"},' +
        '{"name":"本网站所列数据，除特殊说明，所有数据均出自我司实验室测试", "href":"https://www.mi.com/service/buy/Postal%20policy"}]}';
    var obj = JSON.parse(data);   
    return obj; 
};


function build_info_links(){
    var data = store_info_links();
    var text = "";
    for(let i=0; i<data.length; i++){
        text += '<a href="' + data[i].href + '" target="_blank">' +
        '<img src="' + data[i].img_name + '">' +
        '</a>';
    };
    document.getElementsByClassName("info-links")[0].innerHTML = text;
};
function store_info_links(){
    var data = '['+
        '{"img_name":"img/icon/truste.png", "href":"https://privacy.truste.com/privacy-seal/validation"},' +
        '{"img_name":"img/icon/v-logo-2.png", "href":"https://credit.cecdc.com/CX20120926001783002010.html"},' +
        '{"img_name":"img/icon/icon3.png", "href":"https://xyt.xinchacha.com/pcinfo?sn=523009637759455232&certType=6"},' +
        '{"img_name":"img/icon/ba10428a4f9495ac310fd0b5e0cf8370.png", "href":"https://https://www.mi.com/service/buy/commitment"},' +
        '{"img_name":"img/icon/ed612c861422facd65fa0e2c4ce7e73c.png", "href":"https://webcert.cnmstl.net/cert/grade?sn=3af21034e35011eab3ea00163e068ceb"}]';
    var obj = JSON.parse(data);   
    return obj; 
};
     
  










