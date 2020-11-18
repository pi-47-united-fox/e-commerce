###### Restful Endpoints ######
` - POST /login `
` - POST /register `

## Admin related
` - GET /products `
` - POST /products `
` - DELETE /products/:id `
` - PUT /products/:id `

## Customer related
` - GET /mycart`
` - POST /carts/:productId `
` - DELETE /carts/:productId`
` - PUT /checkout`
` - GET /transactions`
` - GET /wishlists`
` - POST /wishlists/:productId `
` - PUT /wishlists/:cartId `

###### Details ######
## POST /login
- Request header:
{
    "Content-type": "application/json"
}

- Request body
    {
        "email": "admin@mail.com",
        "password": "1234"
    }

- Response(200)
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMjYyNTQzNX0.CqsFNEn60Xn8ivYRslhxdbjEBeRUyU2KLccTS9Mh8h0"
    }

- Response (400 - Bad Request)
{
  "message": "Wrong email/password"
}
{
  "message": "Please fill the form carefully"
}

## POST /register
- Request header:
{
    "Content-type": "application/json"
}

- Request body
{
    "email": "admin@mail.com",
    "password": "1234"
}

- Response(201)
{
    "id": 6,
    "email": "customer3@mail.com",
    "role": "customer"
}

- Response (400 - Bad Request)
{
  "message": "Validation error: Must be a valid email"
}
{
  "message": "Validation error: Email cannot be empty"
}
{
  "message": "Validation error: Password must be at least 4 characters"
}
{
  "message": "Validation error: Password cannot be empty
}

## GET /products
- Request header:
{
    "access_token": "<your access token>"
}

- Request body:
not needed

- Response(200)
[
    {
        "id": 1,
        "name": "Vintage Table Lamp Set, Kakanuo Traditional Bedside Lamp",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71T7QixaIjL._AC_SL1500_.jpg",
        "price": 2300000,
        "stock": 5,
        "createdAt": "2020-03-20T07:15:12.149Z",
        "updatedAt": "2020-03-20T07:15:12.149Z"
    },
    {
        "id": 2,
        "name": "Traditional Table Lamps Set of 2 Classic Design Nightstand Table Lamps Set",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71T7QixaIjL._AC_SL1500_.jpg",
        "price": 3300000,
        "stock": 7,
        "createdAt": "2020-03-20T07:15:12.149Z",
        "updatedAt": "2020-03-20T07:15:12.149Z"
    }
]
- Response (401)
{
    "message" : "Token is expired. Please relogin."
}


## POST /products
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
    {
        "name": "Traditional Table Lamps Set of 2 Classic Design Nightstand Table Lamps Set",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71T7QixaIjL._AC_SL1500_.jpg",
        "price": 3700000,
        "stock": 9
    }

- Response(201)
    {
        "message": "A new product has been successfully added."
    }
- Response (400 - Bad Request)
{
  "message": ""Validation error: Product name cannot be empty""
}
{
  "message": "Validation error: Image URL cannot be empty"
}
{
  "message": "Validation error: Price must be number"
}
{
  "message": "Validation error: Stock must be number"
}
{
  "message": "Validation error: Price must be positive"
}
{
  "message": "Validation error: Stock must be positive"
}
{
  "message": "Validation error: Price must be number"
}
{
  "message": "Validation error: Price must be positive"
}

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}
- Response (500 - Internal Server Error)
{
  "message": "Something wrong with the server"
}


## DELETE /products/:id
- Request header:
{
    "access_token": "<your access token>"
}

- Request body:
id = +req.params.id

- Response(200)
{ 
    "message": "Product has been successfully deleted."
}

- Response (404 - Not Authorized)
{
  "message": "You do not have an access"
}



## PUT /products/:id
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
    {
        "name": "Traditional Table Lamps Set of 2 Classic Design Nightstand Table Lamps Set",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71T7QixaIjL._AC_SL1500_.jpg",
        "price": 3700000,
        "stock": 9
    }

- Response(200)
    {
        "message": "Product has been successfully updated."
    }
- Response (400 - Bad Request)
{
  "message": ""Validation error: Product name cannot be empty""
}
{
  "message": "Validation error: Image URL cannot be empty"
}
{
  "message": "Validation error: Price must be number"
}
{
  "message": "Validation error: Stock must be number"
}
{
  "message": "Validation error: Price must be positive"
}
{
  "message": "Validation error: Stock must be positive"
}
{
  "message": "Validation error: Price must be number"
}
{
  "message": "Validation error: Price must be positive"
}

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}



## Customer related
` - GET /mycart`
` - POST /carts/:productId `
` - DELETE /carts/:productId`
` - PUT /checkout`
` - GET /transactions`
` - GET /wishlists`
` - POST /wishlists/:productId `
` - PUT /wishlists/:cartId `

## GET /products
- Request header:
{
    "access_token": "<your access token>"
}

- Request body:
not needed

- Response(200)
[
    {
        "id": 53,
        "ProductId": 6,
        "UserId": 3,
        "quantity": 2,
        "status": "unpaid",
        "createdAt": "2020-10-21T22:24:12.543Z",
        "updatedAt": "2020-10-21T22:30:50.855Z",
        "Product": {
            "id": 6,
            "name": "Bamboo  Traditional Bedside Lamp",
            "image_url": "https://m.media-amazon.com/images/I/81Mty84-ttL._AC_UL320_.jpg",
            "price": 3000000,
            "stock": 4,
            "createdAt": "2020-10-20T16:27:08.541Z",
            "updatedAt": "2020-10-20T16:27:08.541Z"
        }
    },
    {
        "id": 54,
        "ProductId": 6,
        "UserId": 3,
        "quantity": 2,
        "status": "unpaid",
        "createdAt": "2020-10-21T22:24:12.543Z",
        "updatedAt": "2020-10-21T22:30:50.855Z",
        "Product": {
            "id": 6,
            "name": "New Bamboo  Traditional Bedside Lamp",
            "image_url": "https://m.media-amazon.com/images/I/81Mty84-ttL._AC_UL320_.jpg",
            "price": 3000000,
            "stock": 4,
            "createdAt": "2020-10-20T16:27:08.541Z",
            "updatedAt": "2020-10-20T16:27:08.541Z"
        }
    }
]
- Response (401)
{
    "message" : "Token is expired. Please relogin."
}

## POST /carts/:productId
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
  Not needed

- Response(201)
    {
      "id": 24,
      "UserId": 3,
      "ProductId": 7,
      "updatedAt": "2020-10-21T07:09:01.521Z",
      "createdAt": "2020-10-21T07:09:01.521Z",
      "status": "unpaid",
      "quantity": 1
    }

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}

## DELETE /carts/:productId
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
  Not needed

- Response(200)
{ 
  message: "Product has been successfully removed from cart." 
}

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}

## PUT /checkout
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
  Not needed

- Response(200)
{ 
  message: "Checkout success." 
}

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}

## GET /transactions
- Request header:
{
    "access_token": "<your access token>"
}

- Request body:
not needed

- Response(200)
[
    {
        "id": 9,
        "ProductId": 1,
        "UserId": 3,
        "quantity": 1,
        "status": "paid",
        "createdAt": "2020-10-20T16:29:15.738Z",
        "updatedAt": "2020-10-21T04:42:35.081Z",
        "Product": {
            "id": 1,
            "name": "Modway Dimple Bulb-Shaped Rose Gold Side End Table Lamp with Bell Shade",
            "image_url": "https://images-na.ssl-images-amazon.com/images/I/717fNjIwP5L._AC_SL1500_.jpg",
            "price": 400000,
            "stock": 7,
            "createdAt": "2020-10-17T05:32:35.000Z",
            "updatedAt": "2020-10-17T05:32:35.000Z"
        }
    }
]

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}


## GET /wishlists
- Request header:
{
    "access_token": "<your access token>"
}

- Request body:
not needed

- Response(200)
[
    {
        "id": 52,
        "ProductId": 6,
        "UserId": 3,
        "quantity": 1,
        "status": "wishlist",
        "createdAt": "2020-10-21T22:22:57.522Z",
        "updatedAt": "2020-10-21T22:22:57.536Z",
        "Product": {
            "id": 6,
            "name": "Bamboo  Traditional Bedside Lamp",
            "image_url": "https://m.media-amazon.com/images/I/81Mty84-ttL._AC_UL320_.jpg",
            "price": 3000000,
            "stock": 4,
            "createdAt": "2020-10-20T16:27:08.541Z",
            "updatedAt": "2020-10-20T16:27:08.541Z"
        }
    }
]

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}

## POST /wishlists/:productId
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
  Not needed

- Response(201)
{
    "message": "Wish you luck!"
}

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}

## PUT /wishlists/:cartId
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
  Not needed

- Response(201)
{
    "message": "Congratulations, your wish come true."
}

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}
