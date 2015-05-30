window.addEventListener("load", function() {
  console.log("facebook hi!");
//GET /v2.3/me HTTP/1.1
//Host: graph.facebook.com
});

    /**
     * Callback from FB.getLoginStatus().
     */
    function statusChangeCallback(response) {
      console.log("statusChangeCallback: " + response);


     
      switch (response.status) {
        case "connected":
          // Logged into your app and Facebook.
          console.log("statusChangeCallback: Logged in!.");
          break;
     
        case "not_authorized":
          // The person is logged into Facebook, but not your app.
          console.log("statusChangeCallback: Please log into this App.");
          break;
     
        default:
          // We're not sure if they are logged into this app or not.
          console.log("statusChangeCallback: Please log into Facebook.");
      }
    }
     
    /**
     * Load the facebook sdk .. resolve (make globally available) |FB|.
     */
      var js = document.createElement("script");
      js.type = "text/javascript";
      js.src = "//connect.facebook.net/en_US/sdk.js";
      document.body.appendChild(js);
     
    // Call the facebook init.
    window.addEventListener("load", function() {
      FB.init({
        appId      : '1432144570413455',
        status     : true,
        xfbml      : true,
        version    : 'v2.3'
      });

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
      //statusChangeCallback(response)
         
      // Try to login, trigger callback with results.
      FB.login(response => {
        statusChangeCallback(response);
     
        // Check the login status, trigger callback with results.
        FB.getLoginStatus(response => {
          statusChangeCallback(response);
        });
      });
    });
    
