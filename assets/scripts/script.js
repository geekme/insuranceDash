// Script for Insurance DashBoard
//Author Munsif Mulla
//Date Started 18/12/2013

var fn = {
    dropDown : function(){
        $('.dropDown').click(function(){
            var list = $(this).find('ul');
            (list.css("display") == "none") ? fn.allClose(list) : list.slideUp();
        });

        $('.dropDown').find('ul li').click(function(){
            $(this).parent().parent().find('.item').text($(this).text());
        });
    },

    allClose:function(item){
        $('.dropDown').find('ul').slideUp();
        $(item).slideDown();
    },

    showPops:function(){
        $('[data-type="button"]').click(function(){
            var item = $(this).data("button_type");
            //On the Screen
            $('.mainScreen').fadeIn();
            //Check Cases
            switch(item){
                case 'claims':
                    $('.notification').fadeOut();
                    $('.notification.claims').fadeIn();
                    break;
                case 'benefits':
                    $('.notification').fadeOut();
                    $('.notification.benefits').fadeIn();
                    break;
                case 'notif':
                    $('.notification').fadeOut();
                    $('.notification.notif').fadeIn();
                    break;
                case 'auto':
                    $('.notification').fadeOut();
                    $('.notification.auto').fadeIn();
                    break;
            }
        });
    },
    closePops:function(){
        $('[data-type="close"]').click(function(){
            var item = $(this).data("close_type");
            //On the Screen
            $('.mainScreen').fadeOut();
            $('.notification').fadeOut();
        });
    },

    singleSelect:function(){
        $('.profileCheck').click(function(){
            var stat = $(this);
            (stat.data("status") == "unchecked")? statusCheck() : statusUncheck();

            function statusCheck(){stat.css("background","url('./assets/images/checkImage_09.png') no-repeat center #fff"); stat.data("status","checked")}
            function statusUncheck(){stat.css("background","#fff"); stat.data("status","unchecked")}
        });
    },
    selectAll:function(){
        $('.selectAll').click(function(){
            var stat = $(this);
            (stat.data("status") == "unchecked")? statusCheck() : statusUncheck();
            function statusCheck(){
                stat.css("background","url('./assets/images/checkImage_09.png') no-repeat center #fff");
                stat.data("status","checked");

                $('.profileList').find('.profileCheck').each(function(key,item){
                    $(item).css("background","url('./assets/images/checkImage_09.png') no-repeat center #fff");
                    $(item).data("status","checked")
                });
            }
            function statusUncheck(){
                stat.css("background","#fff");
                stat.data("status","unchecked");

                $('.profileList').find('.profileCheck').each(function(key,item){
                    $(item).css("background","#fff");
                    $(item).data("status","unchecked")
                });
            }


        });
    },

    switchTab:function(){
        $('[data-type="tab"]').click(function(){
            var item = $(this);
            var type = item.data("tab_type");

            $('.sectionLeft').find('.tab').removeClass('hover');
            $('.sectionLeft').find(item).addClass('hover');
            switch(type){
                case 'notif':
                    $('.sectionMiddle').find('.slide').fadeOut();
                    $('.sectionMiddle').find('.slide.notifiTab').fadeIn();
                    break;
                case 'allinsurance':
                    $('.sectionMiddle').find('.slide').fadeOut();
                    $('.sectionMiddle').find('.slide.allInsuranceHolders').fadeIn();
                    break;
                case 'insuranceexpiry':
                    $('.sectionMiddle').find('.slide').fadeOut();
                    $('.sectionMiddle').find('.slide.insuranceExpiry').fadeIn();
                    break;
                case 'accidents':
                    $('.sectionMiddle').find('.slide').fadeOut();
                    $('.sectionMiddle').find('.slide.accidents').fadeIn();
                    break;
            }
        });
    },

    execute: function(){
        fn.dropDown();
        fn.showPops();
        fn.closePops();
        fn.singleSelect();
        fn.selectAll();
        fn.switchTab();
    }
}

fn.execute();