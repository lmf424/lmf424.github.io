<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         <!--$('[rel="icon"]').attr('href', "/img/TEP.ico");-->
		<!--这个会改图标的-->
         document.title = '╭(°A°`)╮ 不许摸鱼啊 ~';
         clearTimeout(titleTime);
     }
     else {
         <!--$('[rel="icon"]').attr('href', "/favicon.ico");-->
         document.title = '(ฅ>ω<*ฅ) 这才对嘛~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });