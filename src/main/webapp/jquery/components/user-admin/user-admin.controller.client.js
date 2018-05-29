//IIFE
(function () {
	 var $usernameFld, $passwordFld;
	 var $removeBtn, $editBtn, $createBtn;
	 var $firstNameFld, $lastNameFld;
	 var $userRowTemplate, $tbody;
	 var userService = new UserServiceClient();
    var tbody;
    var template;
    var userService = new UserServiceClient();
    $(main);

    function main() {
        tbody = $('.wbdv-tbody');
        template = $('.wbdv-user');
        $('.wbdv-create').click(createUser);
        findAllUsers();
    }
    
    function findAllUsers() {
        userService
            .findAllUsers()
            .then(renderUsers);
    }
    
    function createUser() {
        console.log('createUser');
        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();
        var role = $('#roleFld').find(":selected").text();
        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            role : role
        };
        userService
            .createUser(user)
            .then(findAllUsers);
    }
    function renderUsers(users) {
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = template.clone();

           clone.attr('id', user.id);
           clone.find('.wbdv-remove').click(deleteUser);
           clone.find('.wbdv-edit').click(editUser);
            
            clone.find('.wbdv-username').html(user.username);
            clone.find('.password').html(user.password);
            clone.find('.wbdv-first-name').html(user.firstName);
            clone.find('.wbdv-last-name').html(user.lastName);
            clone.find('.wbdv-role').html(user.role);
            tbody.append(clone);
        }
    }  
    function deleteUser(event){
    	console.log("deleteUser");
    	console.log(event);
    	var deleteBtn = $(event.currentTarget);
    	var userId = deleteBtn.parent().parent().parent().attr('id'); 
    	userService.deleteUser(userId).then(findAllUsers);
    	
    }
    
    function editUser(event) {
        console.log('editUser');
        var editBtn = $(event.currentTarget);
        var userId = editBtn.parent().parent().parent().attr('id');
        var currentRow = editBtn.parent().parent().parent();
        //fetch the data from given table row
        var username = currentRow.find('.wbdv-username').html();
        var password = currentRow.find('.wbdv-password').html();
        var firstName = currentRow.find('.wbdv-first-name').html();
        var lastName = currentRow.find('.wbdv-last-name').html();
        var role = currentRow.find('.wbdv-role').html();
        //populate the form with the data // renderuser() function as per assignment
        $('#usernameFld').attr('value',username);
        $('#firstNameFld').attr('value',firstName);
        $('#lastNameFld').attr('value',lastName);
       // userService.updateUser(userId,user).then(findAllUsers);
        console.log(event);
        console.log(userId);
        $('.wbdv-update').click(function() {
            var username = $('#usernameFld').val();
            var password = $('#passwordFld').val();
            var firstName = $('#firstNameFld').val();
            var lastName = $('#lastNameFld').val();
            var role = $('#roleFld').find(":selected").text();

            var user = {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                role : role
            };
            console.log(userId);
            userService
                .updateUser(userId, user)
                .then(findAllUsers);
        });
    }

   /* function updateUser(){
        var updatedRow = ("#"+userId);
        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();
        var role = $('#roleFld').find(":selected").text();

        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            role : role
        };
        userService
            .updateUser(userId, user)
            .then(findAllUsers);

    }*/
   //  3 things undone !!
   //findUserById as per assignment is remaining.
    //findUserbyusername as per assignemnt remaining.
    //clear input fields everytime after update is performed.
    // also ask vidhu about writing updateuser function
    // it's not accepting userId if called outside edituser function.
})();