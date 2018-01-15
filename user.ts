class MyUser{
    name:string;
    constructor(name:string){
       this.name=name;
    }
    printUserName(){
        return this.name;
    }
}

export {MyUser}