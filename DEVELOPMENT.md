# [Reed Barger] MERN Stack - The Complete Guide [ENG, 2020]

<br/>
<br/>

## 2. Working with React + Next.js

<br/>

### 2. Intro to Next.js, Project Structure

<br/>

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

<br/>

### 3. Build Product Cards, Make Components Responsive

<br/>

![Application](./img/pic-04-01.png?raw=true)

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>

Any questions on eng: <a href="https://jsdev.org/chat/">Telegram or Slack</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Telegram or Slack</a>