# [Reed Barger] MERN Stack - The Complete Guide [ENG, 2020]

<br/>
<br/>

## 2. Working with React + Next.js

<br/>

### 2. Intro to Next.js, Project Structure

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

### 3. Create App Layout, Build Header

https://react.semantic-ui.com/

<br/>

![Application](./img/pic-02-02.png?raw=true)

<br/>

### 4. Get Route Data from useRouter Hook, Create Active Links

<br/>

![Application](./img/pic-02-03.png?raw=true)

<br/>

### 5. Visualize Route Changes with Progress Bar

<br/>

## 3. Creating API with Node + Express

<br/>

### 1. Intro to Node + Express with API Routes

<br/>

![Application](./img/pic-03-01.png?raw=true)

<br/>

### 2. Fetching Data on the Server with getInitialProps

<br/>

## 4. Using MongoDB with Atlas

<br/>

### 1. Configure Mongo Atlas, Connect to Database

<br/>

### 2. Create Products Collection, Model Product Data

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

### 3. Build Product Cards, Make Components Responsive

<br/>

![Application](./img/pic-04-01.png?raw=true)

<br/>

## 5. Fetching App Data from API

<br/>

### 1. Get Product By Id

<br/>

![Application](./img/pic-05-01.png?raw=true)

<br/>

### 2. Style Product Detail Page

<br/>

![Application](./img/pic-05-02.png?raw=true)

<br/>

### 3. Base Url Helper

<br/>

## 6. Adding CRUD Functionality, Uploading Image Files

<br/>

### 1. Delete Product

<br/>

![Application](./img/pic-06-01.png?raw=true)

<br/>

### 2. Create Product Form

<br/>

![Application](./img/pic-06-02.png?raw=true)

<br/>

### 3. Upload Product Image, Post Product

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

## 7. Handling Errors on the Client + Server

<br/>

### 1. Prevent, Catch Errors on Client, Server

<br/>

![Application](./img/pic-07-01.png?raw=true)

<br/>

### 2. Structure Cart Page

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

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
