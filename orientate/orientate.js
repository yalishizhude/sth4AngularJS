/**
 * 屏蔽横屏指令
 * @param  {[type]} window  [description]
 * @param  {[type]} angular [description]
 * @return {[type]}         [description]
 */
(function(window, angular){
  'use strict';
  angular.module('app.libraries').directive('body', [
    function () {
      return {
        link: function (scope, ele, attrs) {
          angular.element(window).on( 'orientationchange', function(e){
            if (90===window.orientation || -90===window.orientation){
              ele.css('display','none');
              setTimeout(function(){
                alert('竖屏下使用才是最佳体验哦~');
              }, 0);
            } else if(0===window.orientation){
              ele.css('display','');
            }
          });
        }
      };
    }
  ]);
})(window, window.angular);