!function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.className="engine";a.innerHTML='<a href="https://mobirise.ws">Mobirise Website Builder</a> v4.8.7';document.body.insertBefore(a,document.body.childNodes[0])}}();

(function(a){a.extend(a.easing,{easeInOutCubic:function(a,b,d,g,e){return 1>(b/=e/2)?g/2*b*b*b+d:g/2*((b-=2)*b*b+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};(function(a,b){var d=function(a,b,c){var f;return function(){var l=this,h=arguments;f?clearTimeout(f):c&&a.apply(l,h);f=setTimeout(function(){c||a.apply(l,h);f=null},b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",d(a)):this.trigger(b)}})(jQuery,"smartresize");a.isMobile=function(c){var b=[],d={blackberry:"BlackBerry",
android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};c="undefined"==a.type(c)?"*":c.toLowerCase();"*"==c?b=a.map(d,function(a){return a}):c in d&&b.push(d[c]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),"i")))};var n=function(){var c=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),b=c[0],d=parseInt(window.innerHeight/2,10),b=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,
10);c.remove();return b==d}();a(function(){function c(){a(this).css("height",9*a(this).parent().width()/16)}a("html").addClass(a.isMobile()?"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=10<a(window).scrollTop()?"addClass":"removeClass";a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,c){var h=[b,b];h[c>b?0:1]=c;a(window).smartresize(function(){var b=a(window).height();
0>a.inArray(b,h)&&(b=h[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):n||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",a(window).height()+"px")}),a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(c)});a(document).on("add.cards change.cards",
function(b){var l=a(b.target).outerFind(".mbr-section--16by9");l.length?l.attr("data-16by9","true").each(c):a(b.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});if(a.fn.jarallax&&!a.isMobile()){a(document).on("destroy.parallax",function(b){a(b.target).outerFind(".mbr-parallax-background").jarallax("destroy").css("position","")});a(document).on("add.cards change.cards",function(b){a(b.target).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")});
if(a("html").hasClass("is-builder"))a(document).on("add.cards",function(b){setTimeout(function(){a(window).trigger("update.parallax")},0)});a(window).on("update.parallax",function(b){b=a(".mbr-parallax-background");b.jarallax("coverImage");b.jarallax("clipContainer");b.jarallax("onScroll")})}if(a.fn.socialLikes)a(document).on("add.cards",function(b){a(b.target).outerFind(".mbr-social-likes:not(.mbr-added)").on("counter.social-likes",function(b,c,f){999<f&&a(".social-likes__counter",b.target).html(Math.floor(f/
1E3)+"k")}).socialLikes({initHtml:!1})});var b,d,g=0,e=null,k=!a.isMobile();a(window).scroll(function(){d&&clearTimeout(d);var b=a(window).scrollTop(),c=b<=g||k;g=b;if(e){var h=b>e.breakPoint;c?h!=e.fixed&&(k?(e.fixed=h,a(e.elm).toggleClass("is-fixed")):d=setTimeout(function(){e.fixed=h;a(e.elm).toggleClass("is-fixed")},40)):(e.fixed=!1,a(e.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(c){b&&clearTimeout(b);b=setTimeout(function(){e&&(e.fixed=!1,a(e.elm).removeClass("is-fixed"));
a(".mbr-fixed-top:first").each(function(){e={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind("iframe").length&&a(window).resize()});a(document).on("add.cards",function(b){a(b.target).outerFind("[data-bg-video]").each(function(){for(var b,
c=a(this).data("bg-video"),d=[/\?v=([^&]+)/,/(?:embed|\.be)\/([-a-z0-9_]+)/i,/^([-a-z0-9_]+)$/i],e=0;e<d.length;e++)if(b=d[e].exec(c)){var c="http"+("https:"==location.protocol?"s":"")+":",c=c+("//img.youtube.com/vi/"+b[1]+"/maxresdefault.jpg"),f=a('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});a("> *:eq(0)",this).before(f);a("<img>").on("load",function(){if(120==(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=
this.src.replace(a,"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg")}}else f.css("background-image",'url("'+this.src+'")').show()}).attr("src",c);a.fn.YTPlayer&&!a.isMobile()&&(c=eval("("+(a(this).data("bg-video-params")||"{}")+")"),a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer(a.extend({videoURL:b[1],containment:"self",showControls:!1,mute:!0},c)));break}})});a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");
a(window).resize().scroll();a("html").hasClass("is-builder")||a(document).click(function(b){try{var c=b.target;if(!a(c).parents().hasClass("extTestimonials1")){do if(c.hash){var d=/#bottom|#top/g.test(c.hash);a(d?"body":c.hash).each(function(){b.preventDefault();var d=a(".mbr-navbar--sticky").length?64:0,d="#bottom"==c.hash?a(this).height()-a(window).height():a(this).offset().top-d;a(this).hasClass("panel-collapse")||a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:d},800,"easeInOutCubic")});
break}while(c=c.parentNode)}}catch(e){}});a(".cols-same-height .mbr-figure").each(function(){function b(){d.css({width:"",maxWidth:"",marginLeft:""});if(k&&g){var a=k/g;c.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var f=e.height()/e.width();f>a&&(a=100*(f-a)/a,d.css({width:a+100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var c=a(this),d=c.children("img"),e=c.parent(),g=d[0].width,k=d[0].height;d.one("load",function(){g=d[0].width;k=d[0].height;b()});a(window).on("resize",b);
b()})});a("html").hasClass("is-builder")||(a(document).ready(function(){if(!a.isMobile()&&a("input[name=animation]").length){var c=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};a("input[name=animation]").remove();var b=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is(".navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, .extFooter1, #scrollToTop")}).addClass("hidden animated"),
d=a(window);d.on("scroll resize",function(){var d=document.documentElement.scrollTop||document.body.scrollTop,e=d+window.innerHeight-50;a.each(b,function(){var b=a(this),f=b[0],l=f.offsetHeight,f=c(f);if(f+l>=d&&f<=e&&b.hasClass("hidden"))b.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){b.removeClass("animated fadeInUp")})})});d.trigger("scroll")}}),a(".navbar").length&&a(".nav-dropdown").swipe({swipeLeft:function(c,
b,d,g,e){a(".navbar-close").click()}}));a(document).ready(function(){a(".counters").length&&a(".counters").viewportChecker({offset:200,callbackFunction:function(c,b){a("#"+c.attr("id")+" .count").each(function(){a(this).prop("Counter",0).animate({Counter:a(this).text()},{duration:3E3,easing:"swing",step:function(b){a(this).text(Math.ceil(b))}})})}})});a(document).ready(function(){if(a(".mbr-arrow-up").length){var c=a("#scrollToTop"),b=a("body,html"),d=a(window);c.css("display","none");d.scroll(function(){0<
a(this).scrollTop()?c.fadeIn():c.fadeOut()});c.click(function(){b.animate({scrollTop:0},400);return!1})}});a(document).find(".panel-group").find(".panel-heading").each(function(c){a(this).click(function(){var b=a(this).children("span");a(b).hasClass("pseudoMinus")?(a(b).closest(".panel").removeClass("colorBG"),a(b).removeClass("pseudoMinus").addClass("pseudoPlus").parent().css("border","")):(a(".panel-group").find(".signSpan").each(function(){a(this).removeClass("pseudoMinus").addClass("pseudoPlus").parent().css("border",
"");a(this).closest(".panel").removeClass("colorBG")}),a(b).removeClass("pseudoPlus").addClass("pseudoMinus"),a(b).closest(".panel").addClass("colorBG"))})});a(document).find(".toggleStyles").find(".toggle-heading").each(function(c){a(this).click(function(){var b=a(this).children(".toggle-heading span");a(b).hasClass("pseudoMinus")?(a(b).closest(".toggle-panel").removeClass("colorBG"),a(b).removeClass("pseudoMinus").addClass("pseudoPlus").parent().css("border","")):(a(b).closest(".toggle-panel").addClass("colorBG"),
a(b).removeClass("pseudoPlus").addClass("pseudoMinus").parent().css("border",""))})});var m=a(document).find(".form2");m.find(".checkbox").css("display")&&m.find(".checkbox input").prop("checked",!1)&&m.find('button[type="submit"]').prop("disabled",!0);m.find(".checkbox").on("click",function(){a(this).children("input").is(":checked")?(m.find('button[type="submit"]').prop("disabled",!1),m.find(".checkbox label").addClass("checked")):(m.find('button[type="submit"]').prop("disabled",!0),m.find(".checkbox label").removeClass("checked"))});
a("nav.navbar").length&&a(".mbr-after-navbar.mbr-section-full").css("padding-top","90px");if(!a("html").hasClass("is-builder"))a(document).on("add.cards change.cards",function(c){c=a(c.target);if(c.hasClass("table1")){var b=c.find(".table-wrapper"),d="true"===b.attr("data-search");if(d)var g=b.attr("search-text"),e=b.attr("info1-text"),k=b.attr("info2-text"),f=b.attr("info3-text"),l=b.attr("info4-text");c.find(".table").DataTable({retrieve:!0,paging:!1,aaSorting:[],scrollX:!0,searching:d,info:d,language:{search:g,
info:e+" _END_ "+k,infoEmpty:e+" _END_ "+k,infoFiltered:f+" _MAX_ "+l}})}});if(navigator.userAgent.match(/(Opera Mini)|(534\.30)|(534\.13)|(530\.17)|(533\.1)/i)&&a("nav.navbar").length){var p=a("nav.navbar .nav-link").css("color")||"#c8c8c8";a(".navbar-toggler .hamburger-icon").remove();a(".navbar-toggler:eq(0)").addClass("collapsed").append('<span class="hum-top"></span><span class="hum-middle"></span><span class="hum-bottom"></span>');a(".navbar-toggler span").not(".close-icon").css("background-color",
p)}})(jQuery);
