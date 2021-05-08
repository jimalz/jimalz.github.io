jQuery(document).ready(function($){blogPosts();function blogPosts(){function slick_on_mobile(slider,settings){activateSlick(slider,settings);win.on('resize',function(){activateSlick(slider,settings)})}
function activateSlick(slider,settings){if(win.width()>767){if(slider.hasClass('slick-initialized')){slider.slick('unslick')}
return}
if(!slider.hasClass('slick-initialized')){if(rtl){list.attr('dir','rtl')}
return slider.slick(settings)}}
var win=$(window),self=$('.section-blog-posts'),list=$('.section-blog-posts__list',self),rtl=$('body').hasClass('rtl');slick_on_mobile(list,{mobileFirst:!0,arrows:!1,dots:!0,variableWidth:!0,rtl:rtl,slidesToShow:1,customPaging:function(slider,i){return'<span class="dot"/>'}})}})