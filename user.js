class User{
    constructor(username, password, email){
        var username = this.username;
        var password = this.password;
        var email = this.email
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    getEmail(){
        return this.email;
    }

    //change user,pass and email function
}

function newUser(username, password, email){
    return new User(username, password, email);
}



