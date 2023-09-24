import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

// Function to import data into the database
const importData = async () => {
  try {
    // Delete existing data from the collections
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Insert users into the User collection and get the created user objects
    const createdUsers = await User.insertMany(users);

    // Get the ID of the first user (assumed to be an employee user)
    const employeeUser = createdUsers[0]._id;

    // Map the product data, associating each product with the employee user
    const sampleProducts = products.map((product) => {
      return { ...product, user: employeeUser };
    });

    // Insert the sample products into the Product collection
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.green.inverse); // this .green.inverse is just the extension of the colors package
    process.exit(); // Exit the script
  } catch (error) {
    console.error(`${error}`.red.inverse); // this .red.inverse is just the extension of the colors package
    process.exit(1); // Exit the script with an error code
  }
};

// Function to destroy all data in the database
const destroyData = async () => {
  try {
    // Delete all data from the collections
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse); // this .red.inverse is just the extension of the colors package
    process.exit(); // Exit the script
  } catch (error) {
    console.error(`${error}`.red.inverse); // this .red.inverse is just the extension of the colors package
    process.exit(1); // Exit the script with an error code
  }
};

// Check the command line argument to determine whether to import or destroy data
if (process.argv[2] === '-d') {
  destroyData(); // If the argument is '-d', destroy data
} else {
  importData();  // Otherwise, import data
}