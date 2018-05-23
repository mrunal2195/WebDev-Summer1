//IIFE
(function () {

    jQuery(main);

    var tbody;
    var template;
    this.url =
        'http://localhost:8080/api/user';
    var userService = new UserServiceClient();
    
    

    function main() {
        tbody = $('tbody');
        template = $('.template');
        $('#createUser').click(createUser);
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

        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
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
            clone.find('.delete').click(deleteUser);
            //clone.find('.edit').click(editUser);
            
            clone.find('.username')
                .html(user.username);
            clone.find('.password')
            .html(user.password);
            clone.find('.firstname')
            .html(user.firstName);
            clone.find('.lastname')
            .html(user.lastName);
            tbody.append(clone);
        }
    }
    
    function deleteUser(event){
    	console.log("deleteUser");
    	console.log(event);
    	var deleteBtn = $(event.currentTarget);
    	var userId = deleteBtn
    						.parent()
    						.parent().attr('id');
    	 userService
         .deleteUser(userId)
         .then(findAllUsers);
    	
    }

})();