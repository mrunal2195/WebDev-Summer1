function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.deleteUser = deleteUser;
    this.findUserById = findUserById;
    this.updateUser = updateUser;
    this.registerUser = registerUser;
    this.profilePage = profilePage;
    this.findUserByUsername = findUserByUsername;
    this.updateProfile = updateProfile;
    this.loginUser = loginUser;
    this.url = 'http://localhost:8080/api/user';
    this.register = 'http://localhost:8080/api/register';
    this.profile = 'http://localhost:8080/api/profile';
    this.login = 'http://localhost:8080/api/login';
    var self = this;

    function loginUser(username, password) {
        return fetch(self.login, {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
                return response.json();
        });
    }

    function findAllUsers() {
        return fetch(self.url)
            .then(function (response) {
                return response.json();
            });
    }
    function updateUser(userId, user) {
        return fetch(self.url + '/' + userId,{
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function(response){
                if(response.bodyUsed){
                    return response.json();
                }
            });
    }
    function updateProfile(user){
        return fetch(self.profile + '/updateProfile',{
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function(response){
                if(response.bodyUsed){
                    return response.json();
                }
            });
    }

    function profilePage(){
        return fetch(this.profile, {
            credentials: 'same-origin'
        }).then(function (response) {
            return response.json();
        });
    }
    function logOut(){
        return fetch(self.login); /////doubts .....
    }
    function findUserById(userId){
    	 return fetch(self.url + '/' + userId)
    	 .then(function(response){
    		 return response.json();
    	 });
    }
    function findUserByUsername(username) {
        return fetch(self.url+ '/findUserByUsername/' +username)
            .then(function (response) {
                return response.text();
            }).then(function (textResponse){
                if(textResponse === ''){
                    return '';
                }
                return JSON.parse(textResponse);
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
    function deleteUser(userId) {
        return fetch(self.url + '/' + userId, {
            method: 'delete'
        })
    }
    
    function registerUser(user){
    	 return fetch(self.register, {
             method: 'post',
             credentials: 'same-origin',
             body: JSON.stringify(user),
             headers: {
                 'content-type': 'application/json'
             }
         });
    }
}