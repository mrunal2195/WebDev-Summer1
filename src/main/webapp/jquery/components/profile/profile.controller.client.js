(function() {
    $(init);

    var $username,$email,$phone,$dateofbirth,$role;
    var $firstname;
    var $lastname;
    var $updateBtn;
    
    var userService = new UserServiceClient();

    function init() {
        $username = $("#username");
        $firstname = $("#inputfirstname");
        $lastname = $("#inputlastname");
        $email = $('#inputEmail');
        $phone = $('#inputphone');
        $dateofbirth = $('#inputDateOfBirth');
        $role = $('#inputrole');
        $(".wbdv-updateProfile").click(updateProfile);
        profile();


    }
    function profile() {
        userService.profilePage().then(function(user) {
            findUserByUserName(user.username);
            $('#inputfirstname').attr('value',user.firstName);
            $('#inputlastname').attr('value',user.lastName);
            $('#inputEmail').attr('value',user.email);
            $('#inputphone').attr('value',user.phone);
            $('#inputDateOfBirth').attr('value',user.dateOfBirth);
            $('#inputrole').attr('value',user.role);
        });
    }
    
    function updateProfile() {
        var user = {
            username : $username.val(),
            email : $email.val(),
            firstName:$firstname.val(),
            lastName : $lastname.val(),
            phone : $phone.val(),
            role : $role.val(),
            dateOfBirth: $dateofbirth.val()
        };
        userService.updateProfile(user);
    }
    function logout(){

    }

    function findUserByUserName(username) {
        userService.findUserByUsername(username).then(function(){
            $('#username').attr('value',username);
        });
    }

    function  renderUsers(user) {
        console.log("success");
    }
})();