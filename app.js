window.addEventListener("load", function() {
  console.log("facebook hi!");
GET /v2.3/me HTTP/1.1
Host: graph.facebook.com
});
window.addEventListener("load", function(){
window.fbAsyncInit = function() {
        FB.init({
          status     : true,
          appId      : '1432144570413455',
          xfbml      : true,
          version    : 'v2.3'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));}


