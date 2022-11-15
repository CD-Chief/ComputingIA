class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
        this.closet;
    }

    addCloset(){
        this.closet = new Closet(this);
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
    //change user,pass and email functions impending
}
