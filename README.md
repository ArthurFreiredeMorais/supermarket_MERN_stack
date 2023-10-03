# supermarket_MERN_stack
Application of a supermarket using the MERN stack for University Project

# Features
-  Important to mention that the code is organized in folders with some comments in function on backend
-  CRUD Users user/employee with Authentication and Middleware 
-  CRUD Products to employees
-  Password Encriptation in database for security
-  Full featured shopping cart
-  Product reviews and ratings
-  Top products carousel
-  Product pagination
-  Product search feature
-  User profile with orders
-  Employee user management
-  Employee Order details page
-  Mark orders as delivered option
-  Checkout process (shipping, payment method, etc)
-  PayPal / credit card integration
-  Database seeder (products & users)

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

# Create frontend production build
cd frontend
npm run build

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

employee@email.com (employee)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

---

# What technologies i used?
- Express 
- React
- Redux Toolkit
- concurrently
- bcryptjs
- jsonwebtoken
- helmet
- cookie-parser

- dotenv(not necessarily a technology but it's used)