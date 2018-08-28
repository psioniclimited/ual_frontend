export class User {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;

  constructor( name: string, email: string, password: string, password_confirmation: string) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.password_confirmation = password_confirmation;
  }
}
