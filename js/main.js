$('div.posts > div > div.text').each(function(){
    var obj = $(this);
    var h = obj.find('p').height();
    var w = obj.find('p').width();
    var r = w/2.1 + h*1.15;
    obj.css('height',r + 'px');
    obj.css('width',r + 'px');
    if(h<50){
        obj.find('p').css('top','35%');
    }
});