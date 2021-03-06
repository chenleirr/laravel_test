define(function (require) {
    var util = require('../common/util');
    var config = JSON.parse($('#input_config').val());
    var type_str = util.getURLParameter('type');
    var type_config = config[type_str] || {};
    var type_code = type_config.code || 0;
    var obj = {
        url : '/api/article/get_list',
        type : 'GET',
        params : {}
    };
    if (type_code) {
        obj.params.group = type_code;
    }

    function init() {
        util.ajax(obj, function (data) {
            var info = data.info || {};
            var list = info.list || {};

            list.forEach(function (item, index) {
                if (index < 10) {
                    var url= '/article/detail?id=' + item.id;
                    var html = '<div class="block_container">' +
                        '<a href="' + url + '">'+
                        '<img src="' + (item.title_pic || '/web/custom/img/icon/Doggy.jpg') +'" class="block_img">'+
                        '</a>'+
                        '<div class="block_text">'+
                        '<a href="' + url + '" class="block_text_a"><p>' + item.title +'</p></a>'+
                        '</div>'+
                        '</div>';

                    $('#content_container').append(html);
                }
            });
        });
    }

    init();
});
