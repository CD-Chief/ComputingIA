class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
        this.closet;
        this.outfits;
    }

    addCloset(){
        this.closet = new Closet(this);
    }

    // In case I manage to make these variables private
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
