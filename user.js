class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;

        let Closet = new Closet(this);
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
