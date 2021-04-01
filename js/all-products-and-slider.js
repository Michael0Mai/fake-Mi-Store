var slide_pic_index_now = 1;
var sliding_pic;
var hidden_products_sub_list;

function read_slide_pic_name(){
    var img_name = ["06c24de89eaf84fd17426b36107d7f4a.jpg", 
                    "7ba16ae1893689b362837c1143e3bd3b.webp", 
                    "85fe83512254832000635fb15f048df5.webp", 
                    "1062b1dc546c7695f846ed9602571f65.webp", 
                    "e023dd94c146d0f27f7ae8e98213abff.webp"];
    return img_name;
};

function initail_slide_pic(){
    document.getElementById('slide-pic').innerHTML =  "<img src='img/all-products-and-slider/06c24de89eaf84fd17426b36107d7f4a.jpg' style='width:1226px'>" ;
    slide_pic();
};

function slide_pic(){
    img_name = read_slide_pic_name();
    sliding_pic = setInterval(function(){
        document.getElementById('slide-pic').firstChild.setAttribute("src", 'img/all-products-and-slider/' + img_name[slide_pic_index_now]);
        slide_pic_index_now++;
        if(slide_pic_index_now == img_name.length){slide_pic_index_now=0};
        }, 3000);      
};

function stop_slide_pic(){
    clearInterval(sliding_pic);
};

function manual_slide_before(){
    if(slide_pic_index_now > 0){
        img_name = read_slide_pic_name();
        slide_pic_index_now--;
        document.getElementById('slide-pic').firstChild.setAttribute("src", 'img/all-products-and-slider/' + img_name[slide_pic_index_now]);};
};

function manual_slide_next(){
    if(slide_pic_index_now < img_name.length-1){
        img_name = read_slide_pic_name();
        slide_pic_index_now++;
        document.getElementById('slide-pic').firstChild.setAttribute("src", 'img/all-products-and-slider/' + img_name[slide_pic_index_now]);};
};

function show_products_class(){
    var data = '{' +
        '"phones":"手机 电话卡",' + 
        '"TVs":"电视 盒子",' +
        '"notebooks":"笔记本 显示器",' +
        '"jiadians":"家电 插线板",' +
        '"wears":"出行 穿戴",' +
        '"routers":"智能 路由器",' +
        '"powers":"电源 配件",' +
        '"chirlden":"健康 儿童",' +
        '"ear":"耳机 音箱",' +
        '"lives":"生活 箱包"}';
    
    var obj = JSON.parse(data);
    var text = "";
    var action ="";
    for(key in obj){
        action = 'onmouseover="show_products_sub_list('+ '\''+ key+ '\'' + ')" onmouseout="hide_products_sub_list()"';
        text += '<p class="products_class" id="products_class_' + key + '"' + action + '>' + 
            obj[key] + 
            '<span> > </span>' +
            '</p>';
    };
    document.getElementsByClassName("all-products-list")[0].innerHTML = text;
};

function show_products_sub_list(productclass){
    stop_hidding_products_sub_list();
    var text = "";
    var product_list = store_products_sub_list(productclass);
    for(let i=0; i < product_list.length; i++) {
        text += '<p herf="' + product_list[i].href +'" target="_blank" onmouseover="stop_hidding_products_sub_list()"  onmouseout="hide_products_sub_list()">' +
            '<img src=' + product_list[i].img_name + '>' +
            '<span>' + product_list[i].name + '</span>' +       
            '</p>';
    };
    var iterm = document.getElementsByClassName("sub-all-product-list")[0]
    iterm.innerHTML = text;
    iterm.style.display="grid";
    iterm.style["grid-template-columns"] = "repeat("+Math.ceil(product_list.length/6) +", 247px)";
};

function hide_products_sub_list(){
    var iterm = document.getElementsByClassName("sub-all-product-list")[0];
    hidden_products_sub_list = setTimeout(function(){iterm.style.display="none";},300);
};

function stop_hidding_products_sub_list() {
    clearTimeout(hidden_products_sub_list);
};

function store_products_sub_list(productclass){
    var sub_product_list ='{'+
        '"phones":[' +
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"TVs":[' +
        '{"name":"小米 电视", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"notebooks":[' +
        '{"name":"小米 笔记本", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"jiadians":[' +
        '{"name":"小米 家电", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"wears":[' +
        '{"name":"小米 穿戴", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"routers":[' +
        '{"name":"小米 路由器", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"powers":[' +
        '{"name":"小米 电源", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"chirlden":[' +
        '{"name":"小米 儿童", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"ear":[' +
        '{"name":"小米 耳机", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}],'+
        
        '"lives":[' +
        '{"name":"小米 生活", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10 青春版 5G", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 10S", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米10至尊纪念版", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米 11", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"},'+
        '{"name":"小米MIX Alpha", "img_name":"img/mini/c89e7b3a3495acaa0a4df271d9da59ea.webp", "href":"https://www.mi.com/mi10s"}]'+
        '}';
    var obj = JSON.parse(sub_product_list);   
    return obj[productclass];  
};    
