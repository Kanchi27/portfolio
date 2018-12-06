/*app.controller('IndexController', function($scope, $http, $location) {
    console.log("in controller");
})*/
var app=angular.module('myApp',[]);
app
		.controller(
				'IndexController',function($scope) {
                    console.log("inside index  controller");
                    
                    /*login form start*/
                   
                    $scope.login=function(){
                      $scope.message="Welcome"  +$scope.user.email;
                    }
                   
                    /*login form end*/
                    
                   $scope.articleList=[{
                       name:"article1",
                       date:"date1",
                       thumbnail:"dark-knight.jpg"
                   },
                                      {
                       name:"article2",
                       date:"date1",
                       thumbnail:"hip01.jpg"
                   },
                                      {
                       name:"article3",
                       date:"date1",
                       thumbnail:"neue_erik.jpg"
                   },
                                      {
                       name:"article4",
                       date:"date1",
                       thumbnail:"steve-cover.jpg"
                   },
                                      {
                       name:"article5",
                       date:"date1",
                       thumbnail:"hero-lincoln.jpg"
                   },
                                      {
                       name:"article6",
                       date:"date1",
                       thumbnail:"default-switch-cover.jpg"
                   },
                                      {
                       name:"article7",
                       date:"date1",
                       thumbnail:"las-to-oak-thumb.jpg"
                   },
                                      {
                       name:"article8",
                       date:"date1",
                       thumbnail:"spheres-cover.jpg"
                   }, {
                       name:"article9",
                       date:"date1",
                       thumbnail:"instagram-brand.jpg"
                   },
                                        {
                       name:"article10",
                       date:"date1",
                       thumbnail:"birdy.jpg"
                   },
                                        {
                       name:"article11",
                       date:"date1",
                       thumbnail:"bg.jpg"
                   },
                                        {
                       name:"article12",
                       date:"date1",
                       thumbnail:"digital-dystopia-cover.jpg"
                   }
                                                         

                                      ]
                   $(function() {
                       setInterval(function(){articleTada()}, 2000);
                       if(jQuery(window).width()<640){
                      jQuery('.face:nth-child(1)').addClass('has-bubble-open');
                       }
                   });
                    $scope.showBubble=function(){
                        console.log("showBubble clicked");
                        jQuery('.face').on('click',function(){
                           
                            var faceTop = jQuery(this).position().top;
                            var vertMath= -1 *(faceTop-115);
                           var faceLeft= jQuery(this).position().left;
                            var horzMath=0-faceLeft;
                            
                          
                             if(jQuery(window).width()>640){
                        console.log("indide bubble click");
                                jQuery('.bubblePosition').css('position','relative');
                            jQuery('.bubblePosition').css('top',+vertMath+'px');
                             }
                             
                            else if(jQuery(window).width()<640){
                                jQuery('.bubblePosition').css('left',+horzMath+'px');
                                
                            }
                                 
                            jQuery(this).addClass('has-bubble-open').
                            siblings().removeClass('has-bubble-open');
                              
                            });
                    }
                     
                    function articleTada(){
                        var randNum = Math.floor(Math.random() * jQuery('.article-thumb').length) +1
                        jQuery('.article-thumb').eq(randNum).addClass('is-emph')
                            .siblings().removeClass('is-emph');
                    }
                    function startArticles(){
                        var wScroll = $(window).scrollTop();

                        if($('section.articles').offset().top - $(window).height()/1.2 < wScroll) {
                        $('.article-thumb').each(function(i){
                            setTimeout(function(){
                                $('.article-thumb').eq(i).addClass('is-visible');
                            }, 100 * i);
                        });
                        }
                    }
                  /*function mentoringBubbleClick(){
                        jQuery('.face').on('click',function(){
                           
                            var faceTop = jQuery(this).position().top;
                            var vertMath= -1 *(faceTop-115);
                            var faceLeft= jQuery(this).position().left;
                            var horzMath=0-faceLeft;
                            
                            console.log(vertMath);
                            
                            if(jQuery(window).width()>640){
                                jQuery('.bubblePosition').css('position','relative');
                            jQuery('.bubblePosition').css('top',+vertMath+'px');
                            
                            }
                            else{
                                if(jQuery(this).hasClass('back-btn')){
                                    mentoringNarrowStart();
                                }
                           
                            else {
                                jQuery('.bubblePosition').css('left',+horzMath+'px');}
                                 }
                            jQuery(this).addClass('has-bubble-open').
                            siblings().removeClass('has-bubble-open');
                                jQuery('.face:nth-child(5)').on('click',function(){
                                     jQuery('.face').first().addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
                                    jQuery('.faces').css({
                            'top':'230px',
                            'left':'0px'
                        });
                                });
                            });
                  };*/
                                        
                        
                  
                    jQuery(window).resize(function(){
                        if(jQuery(window).width()>640){
                            mentoringWideStart();
                        }else{
                            mentoringNarrowStart();
                        }
                    });
                    function mentoringNarrowStart(){
                        jQuery('.faces').css({
                            'top':'200px',
                            'left':'0px'
                        });
                         jQuery('.bubble').css({
                            'left':'40px'
                        });
                        jQuery('.face').first().addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
                    }
                    function mentoringWideStart(){
                        jQuery('.faces').css({
                            'top':'0px',
                            'left':'0px'
                        });
                        jQuery('.face:nth-child(1)').first().addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
                    }
                    jQuery(window).scroll(function(){
                        youtubeVidScroll();
                        startArticles();
                    });
                    function youtubeVidScroll() {
                        var wScroll =jQuery(window).scrollTop();
                        jQuery('.video-strip').css('background-position','center -'+ wScroll +'px');
                      if(jQuery('.mentoring').offset().top -jQuery(window).height()/2 < wScroll) {  
                            if(jQuery(window).width()>640 ){
                             jQuery('.faces').css('position','static');
                            jQuery('.faces').addClass('launched')
                       
                            
                        if( !jQuery('.face').hasClass('has-bubble-open') ){
                        setTimeout(function(){
                            jQuery('.face:nth-child(1)').addClass('has-bubble-open');
                        },1)
                        }
                        }
                    }
                        /*else{
                        mentoringNarrowStart();
                    }*/
                       /* jQuery('.faces').css('background-position','center -'+ wScroll +'px')*/
                    }
                  

                });

app.directive('headerSection',function(){
    
     return{
 
	templateUrl: 'header.html'
	 }
});
app.directive('homeSection',function(){
    
     return{
 
	templateUrl: 'homeSec.html'
	 }
});
app.directive('sideNav',function(){
    
     return{
 
	template: '<div class="site-nav"> <ul >'
       +' <li><a href="#about">About</a></li><li><a' +'href="#youtube">Youtube</a></li> <li><a' +'href="#articles">Articles</a></li> <li><a' +'href="#design">Design</a></li> <li><a' +'href="#notes">Notes</a></li> <li><a' +'href="#contact">Contact</a></li> </ul> </div>'
	 }
});