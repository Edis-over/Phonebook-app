export class Contact {
  id!: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  gender: string = "Male";
  dateOfBirth?: string;
  picture?: string;
  city?: string;
  state?: string;
  country?: string
}
