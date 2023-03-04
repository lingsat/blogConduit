export interface SingUpOutDTO {
  user: User;  
}

interface User {
  username: string;
  email: string;
  password: string;
}