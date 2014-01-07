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
                case 'points':
                    //On the Screen
//                    $('.mainScreen').fadeIn();
//                    $('.notification').fadeOut();
//                    $('.notification.pointsEditor').fadeIn();
                    $('.sectionLeft').find('.tab').removeClass('hover');
                    $('.sectionLeft').find('[data-tab_type="settings"]').addClass('hover');

                    $('.sectionMiddle').find('.slide').fadeOut();
                    $('.sectionMiddle').find('.slide.settings').fadeIn();
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
        var counter;
        var counter1;
        $('.slider').each(function(key, item){
            counter1 = $(item).data("slideno");
            $(this).slider({
                range:"min",
                min:0,
                max:10,
                value:$(item).data("slide_value"),
                start:function(event, ui){
                    counter = $(this).data("slideno");
                    $(this).find('a').html(ui.value);
                    $('.wayPoints').find(".titleValue"+counter).html(ui.value*10+"%");
                },
                slide:function(event, ui){
                    $(this).find('a').html(ui.value);
                    $(item).data("slide_value",ui.value);
                    $('.wayPoints').find(".titleValue"+counter).html(ui.value*10+"%");
                }
            });
            $(item).find('a').html($(item).data("slide_value"));
            $('.wayPoints').find(".titleValue"+counter1).html($(item).data("slide_value")*10+"%");
        });

    },
    addSlider:function(){
        var counter = 5;
        $('.addNewSlider').click(function(){
            counter++;
            var newSlideHolder = $("<div></div>");
            var newSlideHolder2 = $("<div></div>");
            var pointsHolder = $("<div></div>");

            newSlideHolder.addClass("slideHolder");
            newSlideHolder.attr("data-slideid","slide"+counter);

            newSlideHolder2.addClass("slideHolder");
            newSlideHolder2.attr("data-slideid","slide"+counter);

            pointsHolder.addClass("pnts");
            pointsHolder.attr("data-slideid","slide"+counter);

            var newSlider = $("<div></div>");
            newSlider.addClass("slider");

            var newSlider2 = $("<div></div>");
            newSlider2.addClass("slider");

            pointsHolder.append('<span class = "titleName">New Item'+counter+'</span> : <span class = "titleValue'+counter+'">0%</span>')

            var sliderName = '<div class = "sliderName">New Item '+counter+'<span class = "removeSlider" data-slideid="slide'+counter+'">Remove</span></div>';
            var sliderName2 = '<div class = "sliderName">New Item '+counter+'</div>';
            var titleHolder1 = '<div class = "titleValue">0</div>';
            var titleHolder2 = '<div class = "titleValue">10</div>';

            //Main Append
            newSlideHolder.append(sliderName);
            newSlideHolder.append(titleHolder1);
            newSlideHolder.append(newSlider);
            newSlideHolder.append(titleHolder2);

            //Editor Append
            newSlideHolder2.append(sliderName2);
            newSlideHolder2.append(titleHolder1);
            newSlideHolder2.append(newSlider2);
            newSlideHolder2.append(titleHolder2);

            //Adding Main Slider
            newSlider.slider({
                range:"min",
                min:0,
                max:10,
                start:function(event, ui){
                    $(this).find('a').html(ui.value);
                    $('.wayPoints').find(".titleValue"+counter).html(ui.value*10+"%");
                },
                slide:function(event, ui){
                    $(this).find('a').html(ui.value);
                    $('.wayPoints').find(".titleValue"+counter).html(ui.value*10+"%");
                }
            });

            //Adding Editor Slider
            newSlider2.slider({
                range:"min",
                min:0,
                max:10,
                start:function(event, ui){
                    $(this).find('a').html(ui.value);
                    $('.wayPoints').find(".titleValue"+counter).html(ui.value*10+"%");
                },
                slide:function(event, ui){
                    $(this).find('a').html(ui.value);
                    $('.wayPoints').find(".titleValue"+counter).html(ui.value*10+"%");
                }
            });

            //Appending Main Slider
            $(newSlideHolder).insertBefore(".slide.settings .slideHolder:eq(0)").animate({"background":"#ff0"});

            //Appending Editor Slider
            $(newSlideHolder2).insertBefore(".notification.pointsEditor .slideHolder:eq(0)").animate({"background":"#ff0"});
            $(newSlideHolder).css({background:"#fff"}).addClass("animated flipInX");

            //Appending Points Holder
            $(pointsHolder).insertBefore('.wayPoints .pnts:eq(0)');
        });
    },
    removeSlide:function(){
        $(document).on('click','.removeSlider', function(){
            var slideId = $(this).data("slideid");
            $('.slide.settings .sliderHolder').find('[data-slideid="'+slideId+'"]').remove();
            $('.wayPoints').find('[data-slideid="'+slideId+'"]').remove();
        })
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
        fn.removeSlide();
    }
}

fn.execute();