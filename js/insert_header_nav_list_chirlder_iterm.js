var hidden_header_nav_list_chirlder_iterm;

function cart_mini_img_change_color_in() {
    document.getElementById("cart-mini-img").setAttribute("src", "img/icon/692a6c3b0a93a24f74a29c0f9d68ec71.png");
};

function cart_mini_img_change_color_out() {
    document.getElementById("cart-mini-img").setAttribute("src", "img/icon/d7db56d1d850113f016c95e289e36efa.png");
};

function insert_header_nav_list_chirlder_iterm(products){
    var data ='{'+
            '"mi_phones":[' +
            '{"name":"小米 10S", "img_name":"img/nav-list/f9149ef3ba2c9025a4a21c98ae793808.webp", "price":"3299"},'+
            '{"name":"小米 11", "img_name":"img/nav-list/963679eaf3937351e154600ab3448460.webp", "price":"3999"},'+
            '{"name":"小米10至尊纪念版", "img_name":"img/nav-list/b11742a0be47f9d97bb6a13ea580018d.webp", "price":"5299"},'+
            '{"name":"小米 10", "img_name":"img/nav-list/a4a76ee684e51f0ee531ef3dc7f0aeaf.webp", "price":"3399"},'+
            '{"name":"小米10 青春版 5G", "img_name":"img/nav-list/3bf20f1df3f2e22c5b29ff07634f3c59.webp", "price":"2099"},'+
            '{"name":"小米MIX Alpha", "img_name":"img/nav-list/5d19da60f9f62eb2aa5dcdbd7df19f0f.webp", "price":"19999"}],'+
            '"redmi_phones":[' +
            '{"name":"K40 Pro 系列", "img_name":"img/nav-list/d07671f25a2b3a6c3d4fac189f28fbe9.webp", "price":"2799"},'+
            '{"name":"Redmi K40", "img_name":"img/nav-list/963679eaf3937351e154600ab3448460.webp", "price":"1999"},'+
            '{"name":"Redmi Note 9 系列", "img_name":"img/nav-list/584add2c9cfdb9eefe7b642bf191773a.webp", "price":"999"},'+
            '{"name":"Redmi K30S 至尊纪念版", "img_name":"img/nav-list/81808cd191332114f44d8d0cb0d0813a.webp", "price":"2599"},'+
            '{"name":"Redmi K30 至尊纪念版", "img_name":"img/nav-list/31d0dc82068abcaa46464b4baa9fbbdf.webp", "price":"1999"},'+
            '{"name":"Redmi 9A", "img_name":"img/nav-list/7bd1b02e0329bd5c41d193f01349f991.webp", "price":"499"}],'+
            '"TVs":[' +
            '{"name":"Redmi MAX 86” 超大屏电视", "img_name":"img/nav-list/8c87fdc4bcfd081ac240f7af1417ce60.webp", "price":"7999"},'+
            '{"name":"小米电视大师 82英寸至尊纪念版", "img_name":"img/nav-list/ea3390a20547c7298a258528e4aa69ad.webp", "price":"49999"},'+
            '{"name":"小米电视大师 82英寸", "img_name":"img/nav-list/e513ac03d0ebb594bf42f7d6b1b44944.webp", "price":"9999"},'+
            '{"name":"小米透明电视", "img_name":"img/nav-list/932b583c6eccd8aabfa0771f8a854940.webp", "price":"49999"},'+
            '{"name":"小米电视 大师 65英寸OLED", "img_name":"img/nav-list/ea3390a20547c7298a258528e4aa69ad.webp", "price":"9999"},'+
            '{"name":"Redmi 智能电视 MAX 98", "img_name":"img/nav-list/0112cb7e2ea8489fbd36ce3a781d5232.webp", "price":"1999"}],'+
            '"notebooks":[' +
            '{"name":"RedmiBook Pro 14", "img_name":"img/nav-list/7872a4195d666f08bef0877562dd7fe7.webp", "price":"4699"},'+
            '{"name":"RedmiBook Pro 15", "img_name":"img/nav-list/72efefb3f76c2ec1ef749f860ff232b9.webp", "price":"4999"},'+
            '{"name":"Redmi G 游戏本", "img_name":"img/nav-list/0bfdd3b985b4a9da58a1f5a861c5895f.webp", "price":""},'+
            '{"name":"RedmiBook 16", "img_name":"img/nav-list/3e6c9a677acbb3b0c75d4d0d83e8a695.webp", "price":"4699"},'+
            '{"name":"RedmiBook Air 13", "img_name":"img/nav-list/682027c81244d5244d72990cc8b5341f.webp", "price":"4999"},'+
            '{"name":"显示器", "img_name":"img/nav-list/0f0f2175b9a6d4fdb0f0eeb843398044.webp", "price":"2399"}],'+
            '"jiadian":[' +
            '{"name":"米家风冷对开门冰箱 483L", "img_name":"img/nav-list/b7a4e3ff7919ca2407ad970b78abd09a.webp", "price":"2449"},'+
            '{"name":"米家扫拖机器人1T", "img_name":"img/nav-list/65df9e92c06dcd148de5f0eb13e16ea2.webp", "price":"1999"},'+
            '{"name":"米家互联网洗烘一体机10kg", "img_name":"img/nav-list/11b8bca444aba2994fe852993eac9203.webp", "price":"1899"},'+
            '{"name":"小米净水器S1 800G", "img_name":"img/nav-list/c82798dbbc793c8bd52929dbe86b316f.webp", "price":"2498"},'+
            '{"name":"米家空气净化器3", "img_name":"img/nav-list/48d69ed4cc41d5c9d33bdeefd7f1da69.png", "price":"899"},'+
            '{"name":"米家两门冰箱 160L", "img_name":"img/nav-list/40ad6e8398095e97309a5538b516a2de.webp", "price":"949"}],'+
            '"routers":[' +
            '{"name":"小米路由器AX6000", "img_name":"img/nav-list/2a759fa795d749f0538cfd2a15890027.webp", "price":"599"},'+
            '{"name":"Redmi路由器 AX6", "img_name":"img/nav-list/54de949334c3d794a6ca55b76e4bb379.webp", "price":"349"},'+
            '{"name":"Redmi路由器 AX5", "img_name":"img/nav-list/681a92d3e5f03a109558396c99f6a4df.webp", "price":"249"},'+
            '{"name":"小米路由器 AX1800", "img_name":"img/nav-list/27da43294889d049a111e5ff2cdfafe7.webp", "price":"329"},'+
            '{"name":"小米路由器AX3600", "img_name":"img/nav-list/359d3c63cc159949d8fe147a11b4bc40.webp", "price":"499"},'+
            '{"name":"Redmi路由器AC2100", "img_name":"img/nav-list/aa1e0a4860cf40d34e1192d86691c82c.webp", "price":"169"}],'+
            '"hardwares":[' +
            '{"name":"小米全自动智能门锁", "img_name":"img/nav-list/2b87ae4a36beef69bb2018eb1f8bce9b.webp", "price":"1799"},'+
            '{"name":"Redmi小爱触屏音箱Pro8", "img_name":"img/nav-list/9c6a5f44fd12afa182367ed8d1716421.webp", "price":"499"},'+
            '{"name":"小米小爱触屏音箱", "img_name":"img/nav-list/f6e585a4bf5c0f744ca60f19ecd6fadf.webp", "price":"219"},'+
            '{"name":"Redmi小爱音箱 Play", "img_name":"img/nav-list/17c0c91317ec0def3ecc072fa9480192.webp", "price":"89"},'+
            '{"name":"<p>查看全部</p><p>智能硬件</p>", "img_name":"img/nav-list/12cdacc6e4f343861d31345036cc3b46.webp", "price":""}]'+
            '}';
    
    stop_hidding_header_nav_list_chirlder_iterm();        
    var obj = JSON.parse(data);
    var text = '<div class="item-children" onmouseover="stop_hidding_header_nav_list_chirlder_iterm()" onmouseout="hide_iterms()">';

    for(let i=0; i < obj[products].length; i++) {
        text += '<div class="list_iterm">' +
            '<img class="home-slade" src=' + obj[products][i].img_name + '><br>' +
            '<p>' + obj[products][i].name +'</p>';
        if(obj[products][i].price != ""){
            text += '<p class="price">' + obj[products][i].price + ' 起</p>';
        };          
        text += '</div>';
    };
    text +='</div>';

    var iterms = document.getElementsByClassName('iterm-children-container')[0];
    iterms.innerHTML = text;
    iterms.style.display="block";
}

function hide_iterms(){
    var iterms = document.getElementsByClassName('iterm-children-container')[0];
    hidden_header_nav_list_chirlder_iterm = setTimeout(function(){iterms.style.display="none"},300);
}

function stop_hidding_header_nav_list_chirlder_iterm() {
    clearTimeout(hidden_header_nav_list_chirlder_iterm);
}
