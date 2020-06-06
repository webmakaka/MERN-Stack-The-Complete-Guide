# [Reed Barger] MERN Stack - The Complete Guide [ENG, 2020]

<hr/>

<br/>

## How to run the final app2

I am working in ubuntu linux 18.04.

Minikube, Docker, Skaffold should be installed.

<br/>

### Skaffold installation

    $ curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64

    $ chmod +x skaffold
    $ sudo mv skaffold /usr/local/bin

<br/>

### Run app in minikube

```
$ {
minikube --profile my-profile config set memory 8192
minikube --profile my-profile config set cpus 4

// minikube --profile my-profile config set vm-driver virtualbox
minikube --profile my-profile config set vm-driver docker

minikube --profile my-profile config set kubernetes-version v1.18.2
minikube start --profile my-profile
}
```

<br/>

    // Enable ingress
    $ minikube addons --profile my-profile enable ingress

<br/>

    $ minikube --profile my-profile ip
    172.17.0.2

<br/>

    $ sudo vi /etc/hosts

```
#---------------------------------------------------------------------
# Minikube
#---------------------------------------------------------------------
172.17.0.2 mern-stack-app.dev
```

<br/>

    $ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

    // <STRIPE_SECRET_KEY> from stripe.com
    $ kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<STRIPE_SECRET_KEY>

<br/>

    $ cd skaffold

    $ docker login

Need update webmakaka/mern-stack-the-complite-guide on your data in the scripts

    $ skaffold dev

<br/>

    $ kubectl get pods
    NAME                                         READY   STATUS    RESTARTS   AGE
    mern-stack-app-deployment-7b74fccb78-sbvx9   1/1     Running   0          24m
    mongo-db-deployment-c6bdbcf4-j9knq           1/1     Running   0          24m

<br/>

    $ kubectl exec -it mongo-db-deployment-c6bdbcf4-j9knq bash

<br/>

    # cd ~
    # apt update -y
    # apt install -y git
    # git clone https://github.com/webmakaka/MERN-Stack-The-Complete-Guide
    # cd MERN-Stack-The-Complete-Guide/app/static/

<br/>

    $ mongoimport --db mongo-db --collection products --type json --file ./products.json --jsonArray

<br/>

    $ mongo

    > use mongo-db
    > db.products.find().pretty()

<br/>

chrome browser --> https://mern-stack-app.dev/login

<br/>

type: **thisisunsafe** in window with security warning.

<br/>

Expected result:

![Application](/img/pic-final-01.png?raw=true)

<br/>

**should return data:**

https://mern-stack-app.dev/api/products

<br/>

**From containers should works**:

    $ curl --header "Host: mern-stack-app.dev" http://172-17-0-2.kubernetes.default.svc.cluster.local/api/products

<br/>

### Delete minikube with project

    $ minikube --profile my-profile stop && minikube --profile my-profile delete

<br/>

<hr/>

<br/>

## [Development step by step](./Development.md)

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
