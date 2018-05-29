(function () {
    var usernameFld, passwordFld;
    var $loginBtn;
    var userService = new UserServiceClient();
    $(main);


    function main() {

        var usernameFld = $('#wbdv-username');
        var passwordFld = $('#wbdv-password');
        $('.wbdv-login').click(login);
    }

    function login() {
        var username = $('#wbdv-username').val();
        var password = $('#wbdv-password').val();


        userService.loginUser(username,password).then(function(user){
            if(user.length === 0) {
                alert ("Credentials invalid, enter valid username and password");
            }else{
                console.log("successFully logged in "+ user);
                var username = user[0].username;
                console.log(username);
                window.location.href = 'http://localhost:8080/jquery/components/profile/profile.template.client.html';
            }
        });
        return false;
    }
})();