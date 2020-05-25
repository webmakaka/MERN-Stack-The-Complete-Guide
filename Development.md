# [Reed Barger] MERN Stack - The Complete Guide [ENG, 2020]

<br/>
<br/>

## 02. Working with React + Next.js

<br/>

### 02. Intro to Next.js, Project Structure

<br/>

    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash
    $ nvm install v10.19.0
    $ nvm use  v10.19.0

<br/>

    $ npm install
    $ npm run dev

<br/>

http://localhost:3000/

http://localhost:3000/account

<br/>

![Application](./img/pic-02-01.png?raw=true)

<br/>

### 03. Create App Layout, Build Header

https://react.semantic-ui.com/

<br/>

![Application](./img/pic-02-02.png?raw=true)

<br/>

### 04. Get Route Data from useRouter Hook, Create Active Links

<br/>

![Application](./img/pic-02-03.png?raw=true)

<br/>

### 05. Visualize Route Changes with Progress Bar

<br/>

## 03. Creating API with Node + Express

<br/>

### 01. Intro to Node + Express with API Routes

<br/>

![Application](./img/pic-03-01.png?raw=true)

<br/>

### 02. Fetching Data on the Server with getInitialProps

<br/>

## 04. Using MongoDB with Atlas

<br/>

### 01. Configure Mongo Atlas, Connect to Database

<br/>

### 02. Create Products Collection, Model Product Data

cloud.mongodb.com --> Clusters --> "YOUR_CLUSTER_NAME" --> Command Line Tools --> Data Import and Export Tools

<br/>

**Ubuntu 18.04 (Bionic)**

https://docs.mongodb.com/v4.2/tutorial/install-mongodb-on-ubuntu/

    $ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

    $ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

    $ sudo apt-get update

    $ sudo apt-get install -y mongodb-org-tools

    $ mongoimport --version
    mongoimport version: r4.2.3

<br/>

    $ cd ${PROJECT_ROOT}

    $ mongoimport --host MERN-Stack-The-Complete-Guide-shard-0/mern-stack-the-complete-guide-shard-00-00-vksgu.mongodb.net:27017,mern-stack-the-complete-guide-shard-00-01-vksgu.mongodb.net:27017,mern-stack-the-complete-guide-shard-00-02-vksgu.mongodb.net:27017 --ssl --username admin --password admin --authenticationDatabase admin --collection products --type json --file ./app/static/products.json --jsonArray

20 document(s) imported successfully.

<br/>

### 03. Build Product Cards, Make Components Responsive

<br/>

![Application](./img/pic-04-01.png?raw=true)

<br/>

## 05. Fetching App Data from API

<br/>

### 01. Get Product By Id

<br/>

![Application](./img/pic-05-01.png?raw=true)

<br/>

### 02. Style Product Detail Page

<br/>

![Application](./img/pic-05-02.png?raw=true)

<br/>

### 03. Base Url Helper

<br/>

## 06. Adding CRUD Functionality, Uploading Image Files

<br/>

### 01. Delete Product

<br/>

![Application](./img/pic-06-01.png?raw=true)

<br/>

### 02. Create Product Form

<br/>

![Application](./img/pic-06-02.png?raw=true)

<br/>

### 03. Upload Product Image, Post Product

https://cloudinary.com/

Settings --> Upload --> Add upload preset

Upload preset name --> reactreserve

Signing Mode --> Unsighed

Upload Manipulations --> Incoming Transformation

900 900 Scale

<br/>

![Application](./img/pic-06-03.png?raw=true)

Bed has been added!

<br/>

## 07. Handling Errors on the Client + Server

<br/>

### 01. Prevent, Catch Errors on Client, Server

<br/>

![Application](./img/pic-07-01.png?raw=true)

<br/>

### 02. Structure Cart Page

<br/>

![Application](./img/pic-07-02.png?raw=true)

<br/>

## 08. Authenticating Users with JWT + Cookies

<br/>

### 01. Build Login, Signup Forms

<br/>

![Application](./img/pic-08-01.png?raw=true)

<br/>

![Application](./img/pic-08-02.png?raw=true)

<br/>

### 02. Model User, Signup User with JWT + Cookies

<br/>

![Application](./img/pic-08-03.png?raw=true)

<br/>

### 03. Validate Post Content on Server

<br/>

![Application](./img/pic-08-04.png?raw=true)

<br/>

### 04. Add Login Functionality

<br/>

### 05. Create User Cart Upon Signup

<br/>

![Application](./img/pic-08-05.png?raw=true)

<br/>

## 09. Authorization and Protecting Content

<br/>

### 01. Get Current User from Token, Protect Auth Routes

<br/>

### 02. Handle Invalid Auth Tokens

<br/>

### 03. Logout User, Protect Admin Routes, Hide Protected Content

<br/>

### 04. Universal Logout using LocalStorage

<br/>

## 10. Cart Management and Checkout

<br/>

### 01. Fetch User Cart

<br/>

### 02. Add Products to Cart

<br/>

![Application](./img/pic-10-01.png?raw=true)

<br/>

![Application](./img/pic-10-02.png?raw=true)

<br/>

### 03. Style Cart Products. Calculate Total

<br/>

![Application](./img/pic-10-03.png?raw=true)

<br/>

### 04. Removing Cart Products

<br/>

![Application](./img/pic-10-04.png?raw=true)

<br/>

### 05. Checkout Customer Carts

```
card: 4242 4242 4242 4242
04/24 4242
```

<br/>

stripe.com/

copy "Publishable key" to CartSummary.js

and

"Secret key" to netc.config.js

<br/>

![Application](./img/pic-10-05.png?raw=true)

<br/>

![Application](./img/pic-10-06.png?raw=true)

<br/>

![Application](./img/pic-10-07.png?raw=true)

<br/>

## 11. Pagination + Managing User Roles

<br/>

### 01. Add Pagination for Product List

<br/>

![Application](./img/pic-11-01.png?raw=true)

<br/>

### 02. Create Account Header, Order History

<br/>

![Application](./img/pic-11-02.png?raw=true)

<br/>

### 03. Create Root User, Add User Permissions

Set manually rote "root" for user in www.mongodb.com.

<br/>

![Application](./img/pic-11-03.png?raw=true)

<br/>

### 04. Change User Roles, Permissions

<br/>

![Application](./img/pic-11-04.png?raw=true)

<br/>

## 12. Polishing our App

<br/>

### 01. Sorting in Mongoose, MongoDB

<br/>

### 02. Formatting Dates

<br/>

![Application](./img/pic-11-05.png?raw=true)

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
