function user(username,password,firstName,lastName) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.setFirstName = setFirstName;
    this.getFirstName = getFirstName;
    this.setLastName = setLastname;
    this.getLastName = getLastname;

    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }
    function setPassword(Password) {
        this.password = password;
    }
    function getPassword() {
        return this.password;
    }
    function setFirstName(firstName) {
        this.firstName = firstName;
    }
    function  getFirstName() {
        return this.firstName;
    }
    function setLastname(lastName) {
        this.lastName = lastName;
    }
    function  getLastname() {
        return this.lastName;
    }
}