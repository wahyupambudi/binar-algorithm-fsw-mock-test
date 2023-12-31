# BINAR ALGORITHM BACKEND MOCK TEST

## Algorithm Test 
Algorithm Mock tes on Folder `algorithm-test`

## Project Todolist API

This is my project Backend API Todolist with tech stack `nodeJs, ExpressJs, Postgres`

The module nodejs used are in `package.json` file.

`index.js` used to run the service

## ERD

![App Screenshot](erd-backend-todolist.png)


## Install module nodejs

    npm install

## Migrate Database with prisma

    npx prisma migrate dev

## Run the app

    npm run start

# REST API

The REST API to the todolist app is described below.

## Auth - Registration

### Request

``` 
POST /api/v1/auth/register HTTP/1.1
Content-Type: application/json
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
Content-Length: 69

{
	"name": "user",
	"email": "user@mail.com",
	"password": "123123"
}
```

![App Screenshot](screenshot/Screenshot_1.png)

## Auth - Login

### Request

``` 
POST /api/v1/auth/login HTTP/1.1
Content-Type: application/json
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
Content-Length: 52

{
	"email": "user@mail.com",
	"password": "123123"
}
```

You will get a token that will be used to get authorization to perform CRUD todolist

![App Screenshot](screenshot/Screenshot_2.png)

## Auth - Whoami

### Request

``` 
GET /api/v1/auth/whoami HTTP/1.1
Authorization: yourAuthorization (token from jwt)
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
```

![App Screenshot](screenshot/Screenshot_3.png)

## Auth - Logout

### Request

``` 
POST /api/v1/auth/logout HTTP/1.1
Authorization: yourAuthorization (token from jwt)
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
```

![App Screenshot](screenshot/logout.png)

## Todolist - Get

### Request

``` 
GET /api/v1/todo HTTP/1.1
Content-Type: application/json
Authorization: yourAuthorization (token from jwt)
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
```

![App Screenshot](screenshot/Screenshot_4.png)

## Todolist - Insert

### Request

``` 
POST /api/v1/todo HTTP/1.1
Content-Type: application/json
Authorization: yourAuthorization (token from jwt)
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
Content-Length: 176

{
	"task": "binar user",
	"description": "pembahasan tentang media handling",
	"start": "2023-11-22T08:09:59.908Z",
	"finish": "2023-11-22T08:09:59.908Z",
	"status": "proses"
}
```

![App Screenshot](screenshot/Screenshot_5.png)

## Todolist - Update

### Request

``` 
PUT /api/v1/todo/3 HTTP/1.1
Content-Type: application/json
Authorization: yourAuthorization (token from jwt)
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
Content-Length: 177

{
	"task": "belajar binar update",
	"description": "pembahasan tentang media",
	"start": "2023-11-22T08:10:48.451Z",
	"finish": "2023-11-22T08:10:48.452Z",
	"status": "proses"
}
```

![App Screenshot](screenshot/Screenshot_6.png)

## Todolist - Delete

### Request

``` 
DELETE /api/v1/todo/3 HTTP/1.1
Content-Type: application/json
Authorization: yourAuthorization (token from jwt)
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
```

![App Screenshot](screenshot/Screenshot_7.png)

## Todolist - Get (another user)

### Request

``` 
GET /api/v1/todo HTTP/1.1
Content-Type: application/json
Authorization: yourAuthorization (token from jwt when login)
Host: binar-algorithm-fsw-mock-test-production.up.railway.app
```
![App Screenshot](screenshot/Screenshot_8.png)

## Todolist - Delete (todolist on another user)

![App Screenshot](screenshot/Screenshot_9.png)

## Todolist - Update (todolist on another user)

![App Screenshot](screenshot/Screenshot_10.png)

## Auth - Whoami (after logout with same token)

![App Screenshot](screenshot/after-logout.png)

### SOAL
Apakah Kegunaan JSON pada REST API?
```
JSON digunakan sebagai format pertukaran data standar di REST API. Ketika klien mengirimkan permintaan HTTP kepada server atau ketika server mengirimkan respons, data seringkali diwakili dalam format JSON. Ini membuat proses pertukaran data antara klien dan server lebih efisien dan konsisten.
```

Jelaskan bagaimana REST API bekerja
```
RESTful API bekerja dengan cara memanipulasi resource dan representasi. Representasi ini saling dipertukarkan di antara pengguna dan server melalui antarmuka terstandar dan protokol komunikasi tertentu, biasanya HTTP.

    REST API menggunakan metode HTTP (GET, POST, PUT, DELETE) untuk berinteraksi dengan sumber daya.
    Metode HTTP memberikan operasi umum yang dapat diaplikasikan pada sumber daya:
        GET: Mendapatkan data dari sumber daya.
        POST: Membuat sumber daya baru.
        PUT atau PATCH: Memperbarui sumber daya yang sudah ada.
        DELETE: Menghapus sumber daya.
```
