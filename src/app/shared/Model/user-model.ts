export class UserModel {
   
    private fullName : string;
    private email : string;
    private mobile : string;
    private password : string;
    private confirmPassword : string;

    constructor(fullName:string, email:string, mobile:string, password:string, confirmPassword:string) {
        this.fullName = fullName;
        this.email=email;
        this.mobile=mobile;
        this.password=password;
        this.confirmPassword = confirmPassword;
    }

}
