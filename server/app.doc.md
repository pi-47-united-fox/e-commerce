# E-COMMERCE

e-commerce App is an application for customer add products to cart. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

- `POST /product`

- `GET /product`

- `PUT /product/:id`

- `DELETE /product/:id`

- `POST /login`

- `POST /register`

- `GET /cart`

- `POST /cart/:productId`

- `PUT /cart/:id`

- `DELETE /cart/:id`

---

---

#### POST /product

> Create New Asset

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "name": "arabica",
  "image_url": "https://imgur.com/AU2NT88",
  "price": 10000,
  "stock": 20
}
```

_Response (201)_

```json

  {
    "id" : 1,
    "name" : "arabica",
    "image_url" : "https://imgur.com/AU2NT88",
    "price" : 10000,
    "stock" : 20 ,
  },


```

_Response (400 - Invalid Input)_

```
{
  "message": "Invalid validation errors"
}
```

_Response (500 - Bad Request)_

```
{
  "message": "Server Errors"
}
```

### GET /product

> Get all Asset

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Response (200)_

```json
[
  {
    "id": 1,
    "name": "arabica",
    "image_url": "https://imgur.com/5XHKQuL",
    "price": 10000,
    "stock": 20
  },
  {
    "id": 2,
    "name": "blackcoffe",
    "image_url": "https://imgur.com/8pdn5dH",
    "price": 12000,
    "stock": 20
  },
  {
    "id": 3,
    "name": "espresso",
    "image_url": "https://imgur.com/zGarX1Z",
    "price": 15000,
    "stock": 20
  },
  {
    "id": 4,
    "name": "machiato",
    "image_url": "https://imgur.com/HFmsZMT",
    "price": 18000,
    "stock": 20
  },
  {
    "id": 5,
    "name": "icelate",
    "image_url": "https://imgur.com/AU2NT88",
    "price": 18000,
    "stock": 20
  }
]
```

_Response (500 - Bad Request)_

```json
{
  "message": "Server Errors"
}
```

#### PUT /product/:id

> Edit Asset by Id

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Params_

```
{
  "id": "<id Product>"
}
```

_Request Body_

```json

{

    "name" : "arabica",
    "image_url" : "https://imgur.com/5XHKQuL",
    "price" : 12000,
    "stock" : 20 ,
},

```

_Response (200)_

```json

  {
    "id" : "1",
    "name" : "arabica",
    "image_url" : "https://imgur.com/5XHKQuL",
    "price" : 12000,
    "stock" : 20 ,
  },


```

_Response (400 - Invalid Input)_

```json
{
  "message": "Invalid validation errors"
}
```

_Response (404 - not found)_

```json
{
  "message": "error not found"
}
```

_Response (500 - Bad Request)_

```json
{
  "message": "Server Error"
}
```

#### DELETE /product/:id

> Delete Asset by Id
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Params_

```
{
  "id": "<id Product>"
}
```

_Response (200)_

```json

  {
    "message" : "delete success"
  },


```

_Response (400 - Invalid Input)_

```json
{
  "message": "Invalid validation errors"
}
```

_Response (404 - not found)_

```json
{
  "message": "error not found"
}
```

_Response (500 - Bad Request)_

```json
{
  "message": "Server Error"
}
```

--

---

#### POST /login

> Login to App

_Request Body_

```json
{
  "email": "<your_email>",
  "password": "<your_password>"
}
```

_Response (200)_

```json

{
    "accesToken" : "<your access token>"
},


```

_Response (400 )_

```json
{
  "message": "error"
}
```

#### POST /register

> Login to App

_Request Body_

```json
{
  "name": "<your_name>",
  "email": "<your_email>",
  "password": "<your_password>"
}
```

_Response (201)_

```json

{
  "id": 1,
  "name": "aldam",
  "email": "aldam@mail.com",
},


```

_Response (400 )_

```json
{
  "message": "error"
}
```

#### POST /cart/:productId

> Create New Asset

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Params_

```
{
  "productId": "<id : productId>"
}
```

_Request Body_

```json
{
  "UserId": "<integer>",
  "ProductId": "<integer>",
  "stock": 10
}
```

_Response (201)_

```json

  {
    "id" : 1,
    "UserId": 1,
    "ProductId": 1,
    "stock": 10
  },


```

_Response (400 - Invalid Input)_

```
{
  "message": "Invalid validation errors"
}
```

_Response (500 - Bad Request)_

```
{
  "message": "Server Errors"
}
```

### GET /product

> Get all Asset

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Response (200)_

```json
[
  {
    "id": 1,
    "UserId": 2,
    "ProductId": 2,
    "qty": 100,
    "status": "undone",
    "createdAt": "2020-10-20T04:58:30.662Z",
    "updatedAt": "2020-10-20T04:58:30.662Z",
    "Product": {
      "id": 2,
      "name": "Hot Latte",
      "image_url": "https://i.imgur.com/rUnCV9V.jpg",
      "price": 18000,
      "stock": 20,
      "createdAt": "2020-10-20T06:32:01.978Z",
      "updatedAt": "2020-10-20T06:32:01.978Z"
    }
  },
  {
    "id": 2,
    "UserId": 2,
    "ProductId": 2,
    "qty": 100,
    "status": "undone",
    "createdAt": "2020-10-20T04:59:08.109Z",
    "updatedAt": "2020-10-20T04:59:08.109Z",
    "Product": {
      "id": 2,
      "name": "Hot Latte",
      "image_url": "https://i.imgur.com/rUnCV9V.jpg",
      "price": 18000,
      "stock": 20,
      "createdAt": "2020-10-20T06:32:01.978Z",
      "updatedAt": "2020-10-20T06:32:01.978Z"
    }
  },
  {
    "id": 3,
    "UserId": 2,
    "ProductId": 1,
    "qty": 10,
    "status": "undone",
    "createdAt": "2020-10-20T05:08:38.146Z",
    "updatedAt": "2020-10-20T05:08:38.146Z",
    "Product": {
      "id": 1,
      "name": "kopi hitam",
      "image_url": "https://i.imgur.com/P7UeOR0.jpg",
      "price": 15000,
      "stock": 8,
      "createdAt": "2020-10-20T04:23:43.311Z",
      "updatedAt": "2020-10-20T06:29:07.026Z"
    }
  }
]
```

_Response (500 - Bad Request)_

```json
{
  "message": "Server Errors"
}
```

#### PUT /product/:id

> Edit Asset by Id

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Params_

```json
{
  "id": "<id : CartId>"
}
```

_Request Body_

```json
{
  "productId": "<integer>",
  "qty": "<integer>"
}
```

_Response (200)_

```json

  {
   "message" : "update success"
  },


```

_Response (400 - Invalid Input)_

```json
{
  "message": "Invalid validation errors"
}
```

_Response (404 - not found)_

```json
{
  "message": "error not found"
}
```

_Response (500 - Bad Request)_

```json
{
  "message": "Server Error"
}
```

#### DELETE /product/:id

> Delete Asset by Id

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Params_

```json
{
  "id": "<Cart Id>"
}
```

_Request Body_

```json
{
  "productId": "<Product id>"
}
```

_Response (200)_

```json

  {
    "message" : "delete success"
  },


```

_Response (400 - Invalid Input)_

```json
{
  "message": "Invalid validation errors"
}
```

_Response (404 - not found)_

```json
{
  "message": "error not found"
}
```

_Response (500 - Bad Request)_

```json
{
  "message": "Server Error"
}
```
