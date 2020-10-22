# e-commerce
Membuat Online Market place.

This app has:

* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
`- POST /users/login`
`- POST /users/register`
`- GET /products`
`- POST /products`
`- PUT /products/:id`
`- DELETE /products/:id`
`- GET /carts`
`- POST /carts/:id`
`- DELETE /carts/:id`
`- PATCH /carts/:id`

### POST /users/login

> Create new asset


_Request Body_
```json
{
  "email": "admin@mail.com",
  "password": "1234",
}
```

_Response (200 - AccessToken)_
```json
{
  "access_token": "<your token from jwt>"
}
```

_Response (401 - Bad Request)_
```json
{
  "message": "Invalid email / password"
}
```

### POST /users/register

> Create new asset


_Request Body_
```json
{
  "email": "admin@mail.com",
  "password": "1234",
}
```

_Response (200 - AccessToken)_
```json
{
  "access_token": "<your token from jwt>",
  "UserId": "<id>"
}
```

_Response (401 - Bad Request)_
```json
{
  "message": "Invalid email / password"
}
```

### GET /product

> Get all assets

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Response (200)_
```json
[
  {
    "id": 1,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
  },
  {
    "id": 2,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
  }
]
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Unauthorized
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```

### POST /product

> Create new asset

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
}
```

_Response (201 - Created)_
```json
[
    {
    "id": 1,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
    "createdAt": "new Date()",
    "updatedAt": "new Date()",
    }
]
```

_Response (400 - Bad Request)_
```json
{
  "message": "Invalid Input"
}
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Unauthorized"
}
```

### PUT /product/:id

> Patch asset by Id

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
    "id": 1,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
    "role": "string"
}
```

_Response (200 - OK)_
```json
{
    "id": 1,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
    "createdAt": "new Date()",
    "updatedAt": "new Date()",
    "role": "string"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Invalid Request"
}
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Unauthorized"
}
```
_Response (404 - Not Found)_
```json
{
  "message": "Data Not Found"
}
```
_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```

### DELETE /product/:id

> Delete asset by Id

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Params_
```json
{
  "id": 1
}
```

_Response (200 - OK)_
```json
{
  "message": "Product Deleted"
}
```

_Response (401 - Unauthorized)_
```json
{
  "message": "Unauthorized"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```

### GET /carts

> Get all assets

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Response (200)_
```json
[
  {
    "id": 1,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
  },
  {
    "id": 2,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
  }
]
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Unauthorized
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```

### POST /carts/:id

> Create new asset

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer"
}
```

_Response (201 - Created)_
```json
[
    {
    "id": 1,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
    "createdAt": "new Date()",
    "updatedAt": "new Date()"
    }
]
```

_Response (400 - Bad Request)_
```json
{
  "message": "Invalid Input"
}
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Unauthorized"
}
```

### PUT /carts/:id

> Patch asset by Id

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
    "id": 1,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer"
}
```

_Response (200 - OK)_
```json
{
    "id": 1,
    "name": "string",
    "image_url": "string",
    "price": "integer",
    "stock" : "integer",
    "createdAt": "new Date()",
    "updatedAt": "new Date()"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Invalid Request"
}
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Unauthorized"
}
```
_Response (404 - Not Found)_
```json
{
  "message": "Data Not Found"
}
```
_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```

### DELETE /carts/:id

> Delete asset by Id

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Params_
```json
{
  "id": 1
}
```

_Response (200 - OK)_
```json
{
  "message": "Cart Deleted"
}
```

_Response (401 - Unauthorized)_
```json
{
  "message": "Unauthorized"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```
