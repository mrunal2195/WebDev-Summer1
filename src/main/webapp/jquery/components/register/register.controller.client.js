(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    $(main);
    var userService = new UserServiceClient();

    function main() {

        $('.btn-success').click(register);

        function register() {
            var usernameFld = $('#wbdv-username').val();
            var passwordFld = $('#wbdv-password').val();
            var verifyPasswordFld = $('#wbdv-verify-password').val();
            var email = $('#wbdv-email').val();
            var phone = $('#wbdv-phone-no').val();
            var dateOfBirth = $('#wbdv-date-of-birth').val();
            var firstName = $('#wbdv-first-name').val();
            var lastName = $('#wbdv-last-name').val();

            if(!(passwordFld === verifyPasswordFld)){
                alert("Please confirm password again, Password should match");
                return;
            }

            var user = {
                username : usernameFld,
                password : passwordFld,
                firstName : firstName,
                lastName : lastName,
                email : email,
                phone : phone,
                dateOfBirth : dateOfBirth
            };



            userService.findUserByUsername(usernameFld).then(function(dbuser) {
                if(dbuser !== ''){
                    alert("username already exists, try another username ");
                    return;
                }else{
                    userService.registerUser(user);
                    window.location.href = 'http://localhost:8080/jquery/components/profile/profile.template.client.html';
                    console.log(user);
                }
            });

        }
    }

})();
