jQuery(function($) {

    var console = (window.console = window.console || {});

    $.fn.slidevo = function() {

        $(this).css("background", "#333");
        var slidevoWidth = $("#slidevo").width();

        var images = [];

        $(this).find("img").each(function(){
            var src = $(this).attr('src');
            var alt = $(this).attr('alt');
            images.push({ src: src, alt: alt });
        });

        var createSlider = function() {
            $("#slidevo .content").html(function() {
                var div = [];
                var slidevoLeft;
                var active = " active";
                for (var i = 0; i < images.length; i++) {
                    if (i === 0) {
                        slidevoLeft = 0;
                    } else {
                        slidevoLeft = slidevoWidth;
                    }
                    div += "<div class='image' style='background: url(" + images[i].src + ")' data-image-id='" + i + "'></div>";
                }
                return div;
            });

            $("#slidevo .image").css("width", slidevoWidth + "px");
            $(".image:first-child").addClass('active');

            var contentWidth = 0;
            $("#slidevo").find(".image").each(function() {
                contentWidth += parseInt($(this).width());
            });



            $("#slidevo .content").css("width", contentWidth + "px");
        };



        var nextSlide = function() {

            this.active = $('.active');
            var id      = $(this.active).attr('data-image-id'),
                width   = Number( $(this.active).innerWidth() );
            id++;

            var element     = document.getElementById('slider'),
                style       = window.getComputedStyle(element),
                margin      = style.getPropertyValue('margin-left'),
                negative    = element.clientWidth * -1,
                child       = id + 1;
                margin      = id * width * -1;

            if ( negative < margin ) {
                $(".slider").css("margin-left", margin + "px");
                $(".image").removeClass('active');
                $(".image:nth-child(" + child + ")").addClass('active');
            }
            console.log( id );
        };

        var prevSlide = function() {
            this.active = $('.active');
            var id      = $(this.active).attr('data-image-id'),
                width   = Number( $(this.active).innerWidth() );
            id--;

            var child   = id + 1,
                element = document.getElementById('slider'),
                style   = window.getComputedStyle(element),
                margin  = style.getPropertyValue('margin-left');
                margin = id * width * -1;

             if ( margin <= 0 ) {
                $(".slider").css("margin-left", margin + "px");
                $(".image").removeClass('active');
                $(".image:nth-child(" + child + ")").addClass('active');
             }
        };

        createSlider();

        $(".nextSlide").click(function() {
            nextSlide();
        });

        $(".prevSlide").click(function() {
            prevSlide();
        });

    };

});