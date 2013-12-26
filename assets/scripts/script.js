// Script for Insurance DashBoard
//Author Munsif Mulla
//Date Started 18/12/2013

var fn = {
    dropDown : function(){
        $('.dropDown').click(function(e){
            var list = $(this).find('ul');
            (list.css("display") == "none") ? fn.allClose(list) : list.slideUp();
        });

        $(document).mouseup(function(e){
            if(e.target != $('.selected')[0]){
                $('.dropDown').find('ul').slideUp();
            }
            else{
                return false;
            }
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
            //Check Cases
            switch(item){
                case 'claims':
                    //On the Screen
                    $('.mainScreen').fadeIn();
                    $('.notification').fadeOut();
                    $('.notification.claims').fadeIn();
                    break;
                case 'benefits':
                    //On the Screen
                    $('.mainScreen').fadeIn();
                    $('.notification').fadeOut();
                    $('.notification.benefits').fadeIn();
                    break;
                case 'notif':
                    //On the Screen
                    $('.mainScreen').fadeIn();
                    $('.notification').fadeOut();
                    $('.notification.notif').fadeIn();
                    break;
                case 'auto':
                    //On the Screen
                    $('.mainScreen').fadeIn();
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
                case 'allsign':
                    $('.sectionMiddle').find('.slide').fadeOut();
                    $('.sectionMiddle').find('.slide.appsign').fadeIn();
                    break;
                case 'archived':
                    $('.sectionMiddle').find('.slide').fadeOut();
                    $('.sectionMiddle').find('.slide.archived').fadeIn();
                    break;
                case 'settings':
                    $('.sectionMiddle').find('.slide').fadeOut();
                    $('.sectionMiddle').find('.slide.settings').fadeIn();
                    break;
            }
        });
    },
    addItem:function(){
        $('.addNew').find('.addButton').click(function(){
            var textItem = $(this).parent().find('input[type="text"]');
            var newList = $('<li></li>');
            newList.addClass("claimed");
            newList.html(textItem.val());
            newList.append('<span class = "removeItem">x</span>');
            if(textItem.val() == ""){
                textItem.focus();
                return;
            }
            else{
                newList.insertAfter($(this).parent());
                textItem.val("");
                textItem.focus();
            }
        });
    },

    removeItem:function(){
        $(document).on("click",".removeItem",function(){
            $(this).parent().remove();
        });
    },
    createSlider:function(){
        $('.slider').slider({
            range:"min",
            min:0,
            max:10,
            slide:function(event, ui){
                $(this).find('a').html(ui.value)
//                console.log(ui.value);
            }
        });
    },
    addSlider:function(){
        $('.addNewSlider').click(function(){
            var newSlideHolder = $("<div></div>");
            newSlideHolder.addClass("slideHolder");
            var newSlider = $("<div></div>");
            newSlider.addClass("slider");
            newSlideHolder.append(newSlider);

            newSlider.slider({
                range:"min",
                min:0,
                max:10,
                slide:function(event, ui){
                    $(this).find('a').html(ui.value)
                    console.log(ui.value);
                }
            });

            $(newSlideHolder).insertBefore(".slideHolder:eq(0)");
        });
    },

    execute: function(){
        fn.dropDown();
        fn.showPops();
        fn.closePops();
        fn.singleSelect();
        fn.selectAll();
        fn.switchTab();
        fn.addItem();
        fn.removeItem();
        fn.createSlider();
        fn.addSlider();
    }
}

fn.execute();