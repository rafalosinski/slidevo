jQuery(function($){var t=window.console=window.console||{};$.fn.slidevo=function(){$(this).css("background","#333");var t=$("#slidevo").width(),i=[];$(this).find("img").each(function(){var t=$(this).attr("src"),e=$(this).attr("alt");i.push({src:t,alt:e})});var e=function(){$("#slidevo .content").html(function(){for(var e=[],a,n=0;n<i.length;n++)a=0===n?0:t,e+="<div class='image' style='background: url("+i[n].src+")' data-image-id='"+n+"'></div>";return e}),$("#slidevo .image").css("width",t+"px");var e=0;$("#slidevo").find(".image").each(function(){e+=parseInt($(this).width())}),$("#slidevo .content").css("width",e+"px")},a=function(){this.active=$(".active");var t=$(this.active).attr("data-image-id"),i=Number($(this.active).innerWidth());t++;var e=document.getElementById("slider"),a=window.getComputedStyle(e),n=a.getPropertyValue("margin-left"),s=-1*e.clientWidth,c=t+1;n=t*i*-1,n>s&&($(".slider").css("margin-left",n+"px"),$(".image").removeClass("active"),$(".image:nth-child("+c+")").addClass("active"))},n=function(){this.active=$(".active");var t=$(this.active).attr("data-image-id"),i=Number($(this.active).innerWidth());t--;var e=t+1,a=document.getElementById("slider"),n=window.getComputedStyle(a),s=n.getPropertyValue("margin-left");s=t*i*-1,0>=s&&($(".slider").css("margin-left",s+"px"),$(".image").removeClass("active"),$(".image:nth-child("+e+")").addClass("active"))};e(),$(".nextSlide").click(function(){a()}),$(".prevSlide").click(function(){n()})}});