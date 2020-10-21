# My Assets App Server

My Assets App is an application to manage your assets. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

zzzzzzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwww2

### POST /products

> Create new asset

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

name: " Specialized-S-Works Turbo Levo SL",
image_url: "https://cdn.idntimes.com/content-images/post/20200629/specialized-95d89e7bfbd0d1ca8b56fa5da04abfc3.jpg",
price: "190000000",
stock: 10,
category: 'All Mountain',

_Request Body_

```json
{
  "id": <given id by system>,
  "name": "<name to get insert into>",
  "image_url": "<description to get insert into>",
  "price": "<status to get insert into>",
  "stock": "<date given by system>",
  "category": "<date given by system>",
  "UserId": <given id from User id>,
}
```

_Response (201 - Created)_

```json
{
  "id": <given id by system>,
  "name": "<name to get insert into>",
  "image_url": "<description to get insert into>",
  "price": "<status to get insert into>",
  "stock": "<date given by system>",
  "category": "<date given by system>",
  "UserId": <given id from User id>,
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation errors"
}
```

_Response (500 - INTERNAL SERVER ERROR)_

```json
{
  "message": "errors status code 500"
}
```

### GET /

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
    not needed
```

_Response (200)_

```json
[
  {
  "id": <given id by system>,
  "name": "<name to get insert into>",
  "image_url": "<description to get insert into>",
  "price": "<status to get insert into>",
  "stock": "<date given by system>",
  "category": "<date given by system>",
  "UserId": <given id from User id>,
  }
]
```

_Response (500 - Internal Server Errors)_

```json
{
  "message": "errors status code 500"
}
```

---

### GET /products/:id

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
  not needed
```

_Response (200)_

```json
[
{
  "id": <given id by system>,
  "name": "<name to get insert into>",
  "image_url": "<description to get insert into>",
  "price": "<status to get insert into>",
  "stock": "<date given by system>",
  "category": "<date given by system>",
  "UserId": <given id from User id>,
}
]
```

_Response (404 - Not Found)_

```json
{
  "message": "errors not found"
}
```

---

### PUT /products/:id

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "name": "<name to get insert into>",
  "image_url": "<description to get insert into>",
  "price": "<status to get insert into>",
  "stock": "<date given by system>",
  "category": "<date given by system>"
}
```

_Response (200)_

```json
[
{
  [1]
}
]
```

_Response (400 - Not Found)_

````json
{
  "message": "validation errors"
}

_Response (404 - Not Found)_
```json
{
  "message": "errors not found"
}
````

_Response (500 - Internal Server Errors)_

```json
{
  "message": "errors status code 500"
}
```

---

### PATCH /products/:id

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "status": "<status to get insert into>"
}
```

_Response (200)_

```json
[
  {
    [1]
  }
]
```

_Response (400 - Not Found)_

````json
{
  "message": "validation errors"
}

_Response (404 - Not Found)_
```json
{
  "message": "errors not found"
}
````

### DELETE /products/:id

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
    not needed
```

_Response (200)_

```json
[
  {
    "message": "todo success to delete"
  }
]
```

_Response (404 - Not Found)_

```json
{
  "message": "errors not found"
}
```

_Response (500 - Internal Server Errors)_

```json
{
  "message": "errors status code 500"
}
```

---

### POST /login

> Create new asset

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201 - Created)_

```json
{
  "acess_token": "<jwt acess token user>"
}
```

_Response (401 - Bad Request)_

```json
{
  "message": "Unauthorized"
}
```

_Response (500 - INTERNAL SERVER ERROR)_

```json
{
  "message": "errors status code 500"
}
```

### POST /register

> Create new asset

_Request Header_

```
{
  _not nedded_
}
```

_Request Body_

```json
{
  "username": "<username to get insert into>",
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201 - Created)_

```json
{
  "acess_token": "<jwt acess token user>"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation errors"
}
```

_Response (500 - INTERNAL SERVER ERROR)_

```json
{
  "message": "errors status code 500"
}
```

### GET /carts

> Get all Cart

_Request Header_

```json
{
  "access_token": "<access token>"
}
```

_Request Body_

```
    not needed
```

_Response (200)_

```json
[
  {
    "id": "<given id by system>",
    "quantity": "<quantity of product>",
    "ProductId": "< user id >",
    "UserId": "<given id from User id>",
    "Products": "< object relation models Product >"
  }
]
```

_Response (500 - Internal Server Errors)_

```json
{
  "message": "errors status code 500"
}
```

### POST /carts/:id

> Create new asset

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "ProductId": "< user id >",
  "UserId": "<given id from User id>"
}
```

_Response (201 - Created)_

```json
{
  [1]
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation errors"
}
```

_Response (500 - INTERNAL SERVER ERROR)_

```json
{
  "message": "errors status code 500"
}
```

---

### PATCH /carts/:id

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "quantity": "<quantity of product buy insert into>"
}
```

_Response (200)_

```json
[
  {
  [1]
  }
]
```

_Response (400 - Not Found)_

````json
{
  "message": "validation errors"
}

_Response (404 - Not Found)_
```json
{
  "message": "errors not found"
}
````

### DELETE /carts/:id/:ProductId

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Params_

```json
{
  "ProductId": "<your access token>"
}
```

_Request Body_

```
    not needed
```

_Response (200)_

```json
[
  {
   [1]
  }
]
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

_Response (500 - Internal Server Errors)_

```json
{
  "message": "internal server error"
}
```

---
