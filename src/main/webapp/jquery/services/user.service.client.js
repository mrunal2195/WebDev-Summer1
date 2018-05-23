function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.deleteUser = deleteUser;
    //this.findUserById = findUserById;
   // this.updateUser = updateUser;
   // this.login = login();
    this.url =
        'http://localhost:8080/api/user';
    this.login =
        'http://localhost:8080/api/login';
    var self = this;   

    function findAllUsers() {
        return fetch(self.url)
            .then(function (response) {
                return response.json();
            });
    }

    function createUser(user) {
        return fetch(self.url, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    
    function deleteUser(userId){
    	return fetch(self.url+'/'+userId, {
    		method : 'delete'
    	})
    }
}