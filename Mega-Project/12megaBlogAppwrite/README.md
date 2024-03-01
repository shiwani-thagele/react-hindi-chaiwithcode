# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# step-1 so basically i create a react app using vite as we create in this whole series 
# step-2 we have only 2 dependencies in package.json file so need more packages for making our project.
# step-3 packages - 
 ** npm i @reduxjs/toolkit  react-redux 
 react-router-dom 
 appwrite 
 @tinymce/tinymce-react   html-react-parser react-hook-form **

 # env is short for "environment variables". Environment variables are values that are set outside of the code and can be used to configure the behavior of an application at runtime. In React development, environment variables are often used to configure the application based on the environment it's running in, such as development, staging, or production. For example, you might use environment variables to specify the URL of an API endpoint that the application needs to communicate with.
 # if we use creat-react-app appname then we have to use env like this : process.env.REACT_APP_API_ENDPOINT;
  # if we use vite for creating react application we use :import.meta.env.VITE_API_ENDPOINT;  