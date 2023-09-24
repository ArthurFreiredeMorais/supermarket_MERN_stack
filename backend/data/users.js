// Import bcryptjs for password hashs
import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Employee User',
    email: 'employee@email.com',
    password: bcrypt.hashSync('123456', 10), // hash password and 10 is the security factor, may cause some delay but it's more secure
    isEmployee: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10), // hash password and 10 is the security factor, may cause some delay but it's more secure
    isEmployee: false,
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10), // hash password and 10 is the security factor, may cause some delay but it's more secure
    isEmployee: false,
  },
];

export default users;