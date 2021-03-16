export class Contact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  gender: string = "Male";
  dateOfBirth?: string;
  picture?: string = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
  city?: string;
  state?: string;
  country?: string
}
