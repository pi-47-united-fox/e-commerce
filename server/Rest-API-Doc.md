# RESTAPI DOCs CMS E-Commerce App
### Bagus Rizki Setiawan - United Fox
---

This cms App has:
1. Restful endpoint for Product's CRUD operation
2. Restful endpoint for User's R operation
3. JSON formated responses

---

&nbsp;

## HTTP Status Code
---
```
    200 - OK	Everything worked as expected.
    201 - Created	Everything worked as expected.
    403 - Forbidden	The access_token key doesn't have permissions to perform the request.
    --- 
    401 - Unauthorized	No valid access_token key provided.
    400 - Bad Request	The request was unacceptable, often due to missing a required parameter.
    404 - Not Found	The requested resource doesn't exist.
    500 - Server Errors	Something went wrong on Stripe's end. (These are rare.)
```

&nbsp;

## EndPoints
---

#### User Endpoints:
  1. POST /login
  2. POST /register
  3. GET /confirm/:confirmToken

#### Product Endpoints:
  1. GET /products
  2. GET /products/:id
  3. POST /products
  4. PUT /products/:id
  5. DELETE /products/:id

#### Banners Endpoints:
  1. GET /banners
  2. POST /banners
  3. PUT /banners/:id
  4. DELETE /banners/:id

#### Charts Endpoints:
  1. GET /carts
  2. POST /carts/:ProductId
  3. PUT /carts/:CartId
  4. DELETE /carts/:CartId
  5. PATCH /carts

#### Wislist Endpoints:
  1. GET /wishlist
  2. POST /wishlist/:ProductId
  4. DELETE /wishlist/:WishlistId

&nbsp;

## User Endpoints
---
### 1. POST /login
Request:
- data:
    ```json
    {
    "email": "string",
    "password": "string"
    }
    ```

Response:
- status: 200
- body:
    ```json
    {
        "access_token": "jwt string",
    }
    ```


### 2. POST /register
Request:
- data:
    ```json
    {
    "email": "string",
    "password": "string"
    }
    ```

Response:
- status: 200
- body:
    ```json
    {
        "access_token": "jwt string",
    }
    ```

### 3. GET /confirm/:confirmToken

description: 
  Confirm email user

Response:
- body : <html>

## Product Endpoints
---
### 1. GET /products
description: 
  show all products

Request:
- headers: access_token (string)

Response:
- status: 200
- body:
```json
[
    {
    "id": 2,
    "name": "Tas",
    "image_url": "https://cdn.elevenia.co.id/g/2/9/3/9/8/5/20293985_B.jpg",
    "price": 300000,
    "stock": 15,
    "CategoryId": 1,
    "createdAt": "2020-10-14T05:19:52.475Z",
    "updatedAt": "2020-10-14T05:19:52.475Z",
    "Category": {
      "id": 1,
      "categoryName": "Uncategorized",
      "createdAt": "2020-10-14T05:19:52.468Z",
      "updatedAt": "2020-10-14T05:19:52.468Z"
    }
  },{
    "id": 1,
    "name": "Sepatu",
    "image_url": "https://cdn.elevenia.co.id/g/2/9/3/9/8/5/20293985_B.jpg",
    "price": 700000,
    "stock": 20,
    "CategoryId": 2,
    "createdAt": "2020-10-14T05:19:52.475Z",
    "updatedAt": "2020-10-14T05:19:52.475Z",
    "Category": {
      "id": 2,
      "categoryName": "Sepatu",
      "createdAt": "2020-10-14T05:19:52.468Z",
      "updatedAt": "2020-10-14T05:19:52.468Z"
    }
  }
]
```

### 2. GET /products/:id
description:
  show product by id

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required

Response:
- status: 200
- body:

```json
{
  "id": 3,
  "name": "Kaos Polos",
  "image_url": "https://www.konveksipadang.com/wp-content/uploads/2018/08/GROSIR-KAOS-POLOS-DI-PADANG-MURAH-DENGAN-KUALITAS-TERJAMIN-705x705.jpg",
  "price": 80000,
  "stock": 200,
  "CategoryId": 3,
  "createdAt": "2020-10-14T05:19:52.475Z",
  "updatedAt": "2020-10-14T05:19:52.475Z",
  "Category": {
    "id": 3,
    "categoryName": "Baju",
    "createdAt": "2020-10-14T05:19:52.468Z",
    "updatedAt": "2020-10-14T05:19:52.468Z"
  }
}
```

### 3. POST /products
description: 
  add product (only admin) 

Request:
- headers: access_token (string)
- body: 
```json
{
    "name": "<product_name:String>",
    "image_url": "<product_img_url:String>",
    "price": "<product_price:Integer>",
    "stock": "<product_stock:Integer>",
    "categoryName": "<product_category_name:String>"
}
```

Response:

- status: 201
- body:

```json
{
    "id": 1,
    "name": "Sepatu",
    "image_url": "https://cdn.elevenia.co.id/g/2/9/3/9/8/5/20293985_B.jpg",
    "price": 700000,
    "stock": 20,
    "CategoryId": 2,
    "createdAt": "2020-10-14T05:19:52.475Z",
    "updatedAt": "2020-10-14T05:19:52.475Z",
    "Category": {
      "id": 2,
      "categoryName": "Sepatu",
      "createdAt": "2020-10-14T05:19:52.468Z",
      "updatedAt": "2020-10-14T05:19:52.468Z"
    }
}
```

## 4. PUT /products/:id
description: 
  edit/update products (only admin)

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json 
{
    "name": "<product_name:String>",
    "image_url": "<product_img_url:String>",
    "price": "<product_price:Integer>",
    "stock": "<product_stock:Integer>",
    "categoryName": "<product_category_name:String>"
}
```

Response:

- status: 201
- body:

```json
{
    "id": 1,
    "name": "Sepatu",
    "image_url": "https://cdn.elevenia.co.id/g/2/9/3/9/8/5/20293985_B.jpg",
    "price": 700000,
    "stock": 20,
    "CategoryId": 2,
    "createdAt": "2020-10-14T05:19:52.475Z",
    "updatedAt": "2020-10-14T05:19:52.475Z",
    "Category": {
      "id": 2,
      "categoryName": "Sepatu",
      "createdAt": "2020-10-14T05:19:52.468Z",
      "updatedAt": "2020-10-14T05:19:52.468Z"
    }
}
```
```
- status: 403
- body:
```json
{
  "message": "You dont have access"
}
```

### 5. DELETE /products/:id
description:
  delete products by id

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required

Response:
- status: 200
- body:

```json
{
    "id": "<deleted product id>",
    "message": "Product: success deleted"
}
```

- status: 403
- body:
```json
{
    "message": "You dont have access"
}
```


## Banners Endpoints
---
### 1. GET /banners
description: 
  show all banners

Request:
- headers: access_token (string)

Response:
- status: 200
- body:
```json
[
  {
    "id": 1,
    "title": "Special Offers - Big Sale",
    "image_url": "https://image.freepik.com/free-vector/special-offer-big-sale-background_1361-2651.jpg",
    "description": "Up To 50% Off",
    "isActive": true,
    "createdAt": "2020-10-17T09:23:15.518Z",
    "updatedAt": "2020-10-17T09:23:15.518Z"
  },
    {
    "id": 2,
    "title": "Special Offers - Big Sale",
    "image_url": "https://image.freepik.com/free-vector/special-offer-big-sale-background_1361-2651.jpg",
    "description": "Up To 50% Off",
    "isActive": true,
    "createdAt": "2020-10-17T09:23:15.518Z",
    "updatedAt": "2020-10-17T09:23:15.518Z"
  }
]
```

### 2. POST /banners
description: 
  add banner (only admin) 

Request:
- headers: access_token (string)
- body: 
```json
{
      "title": "Special Offers - Big Sale",
      "image_url": "https://image.freepik.com/free-vector/special-offer-big-sale-background_1361-2651.jpg',
      description: 'Up To 50% Off",
      "isActive": true,
}
```

Response:

- status: 201
- body:

```json
{
    "id": 1,
    "title": "Special Offers - Big Sale",
    "image_url": "https://image.freepik.com/free-vector/special-offer-big-sale-background_1361-2651.jpg',
    description: 'Up To 50% Off",
    "isActive": true,
    "createdAt": "2020-10-14T05:19:52.475Z",
    "updatedAt": "2020-10-14T05:19:52.475Z",
}
```

## 3. PUT /banners/:id
description: 
  edit/update banner (only admin)

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json 
{
    "title": "Special Offers - Big Sale",
    "image_url": "https://image.freepik.com/free-vector/special-offer-big-sale-background_1361-2651.jpg',
    description: 'Up To 50% Off",
    "isActive": true,
}
```

Response:

- status: 201
- body:

```json
{
    "id": 1,
    "title": "Special Offers - Big Sale",
    "image_url": "https://image.freepik.com/free-vector/special-offer-big-sale-background_1361-2651.jpg',
    description: 'Up To 50% Off",
    "isActive": true,
    "createdAt": "2020-10-14T05:19:52.475Z",
    "updatedAt": "2020-10-14T05:19:52.475Z"
}
```
```
- status: 403
- body:
```json
{
  "message": "You dont have access"
}
```

### 4. DELETE /banners/:id
description:
  delete banners by id

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required

Response:
- status: 200
- body:

```json
{
    "id": "<deleted banner id>",
    "message": "Banners: success deleted"
}
```

- status: 403
- body:
```json
{
    "message": "You dont have access"
}
```


---

## Cart Endpoints

### 1. GET /carts
description:
  show cart by logedin UserId

Request:
- headers: access_token (string)

Response:
- status: 200
- body:

```json
[
  {
    "id": 1,
    "UserId": 13,
    "ProductId": 2,
    "quantity": 1,
    "status": null,
    "createdAt": "2020-10-21T00:09:27.092Z",
    "updatedAt": "2020-10-21T00:09:27.092Z",
    "Product": {
      "id": 2,
      "name": "Sepatu Sangat Keren",
      "image_url": "https://cdn.elevenia.co.id/g/2/9/3/9/8/5/20293985_B.jpg",
      "price": 300000,
      "stock": 150,
      "CategoryId": 1,
      "createdAt": "2020-10-14T05:19:52.475Z",
      "updatedAt": "2020-10-17T05:51:07.604Z"
    }
  },
  {
    "id": 2,
    "UserId": 13,
    "ProductId": 11,
    "quantity": 2,
    "status": null,
    "createdAt": "2020-10-21T00:11:07.810Z",
    "updatedAt": "2020-10-21T00:11:11.223Z",
    "Product": {
      "id": 11,
      "name": "Sepatu Model Biasa",
      "image_url": "https://cdn.elevenia.co.id/g/2/9/3/9/8/5/20293985_B.jpg",
      "price": 664000,
      "stock": 34,
      "CategoryId": 2,
      "createdAt": "2020-10-14T23:42:07.228Z",
      "updatedAt": "2020-10-14T23:42:07.228Z"
    }
  }
]
```


### 2. POST /carts/:ProductId
description: 
  add cart use ProductId 

Request:
- headers: access_token (string)
- params : ProductId (integer)

Response:

- status: 201
- body:

```json
{
    "id": 3,
    "UserId": 13,
    "ProductId": 11,
    "quantity": 2,
    "status": null,
    "createdAt": "2020-10-21T00:11:07.810Z",
    "updatedAt": "2020-10-21T00:11:11.223Z",
}
```

## 3. PUT /carts/:CartId
description: 
  edit/update carts

Request:
- headers: access_token (string)
- params: 
  - CartId: "integer" required
- body: 
```json 
{
    "quantity": "<cart_quantity:Integer>",
}
```

Response:

- status: 201
- body:

```json
{
    "id": 3,
    "UserId": 13,
    "ProductId": 11,
    "quantity": 2,
    "status": null,
    "createdAt": "2020-10-21T00:11:07.810Z",
    "updatedAt": "2020-10-21T00:11:11.223Z",
}
```
```
- status: 403
- body:
```json
{
  "message": "You dont have access"
}
```

### 5. DELETE /carts/:CartId
description:
  delete cart by id

Request:
- headers: access_token (string)
- params: 
  - CartId: "integer" required

Response:
- status: 200
- body:

```json
{
    "id": "<deleted cart id>",
    "message": "Success Deleted"
}
```

- status: 403
- body:
```json
{
    "message": "You dont have access"
}
```

### 6. PATCH /carts/checkout
description:
  cehekout the waiting cart by user LogedIn

Request:
- headers: access_token (string)

Response:
- status: 200
- body:

```json
{
    "message": "checkeout finished"
}
```

- status: 403
- body:
```json
{
    "message": "You dont have access"
}
```


---

## Wishlist Endpoints

### 1. GET /wishlist
description:
  show wishlist by logedin UserId

Request:
- headers: access_token (string)

Response:
- status: 200
- body:

```json
[
  {
    "id": 1,
    "UserId": 13,
    "ProductId": 2,
    "createdAt": "2020-10-21T00:09:27.092Z",
    "updatedAt": "2020-10-21T00:09:27.092Z",
    "Product": {
      "id": 2,
      "name": "Sepatu Sangat Keren",
      "image_url": "https://cdn.elevenia.co.id/g/2/9/3/9/8/5/20293985_B.jpg",
      "price": 300000,
      "stock": 150,
      "CategoryId": 1,
      "createdAt": "2020-10-14T05:19:52.475Z",
      "updatedAt": "2020-10-17T05:51:07.604Z"
    }
  },
  {
    "id": 2,
    "UserId": 13,
    "ProductId": 11,
    "createdAt": "2020-10-21T00:11:07.810Z",
    "updatedAt": "2020-10-21T00:11:11.223Z",
    "Product": {
      "id": 11,
      "name": "Sepatu Model Biasa",
      "image_url": "https://cdn.elevenia.co.id/g/2/9/3/9/8/5/20293985_B.jpg",
      "price": 664000,
      "stock": 34,
      "CategoryId": 2,
      "createdAt": "2020-10-14T23:42:07.228Z",
      "updatedAt": "2020-10-14T23:42:07.228Z"
    }
  }
]
```

### 2. POST /wishlist/:ProductId
description: 
  add wishlist use ProductId 

Request:
- headers: access_token (string)
- params : ProductId (integer)

Response:

- status: 201
- body:

```json
{
    "message": "added to wishlist"
}
```

- status: 400
- body:

```json
{
    "message": "product already in wishlist
}
```


### 3. DELETE /wishlist/:WishlistId
description:
  delete cart by id

Request:
- headers: access_token (string)
- params: 
  - CartId: "integer" required

Response:
- status: 200
- body:

```json
{
    "id": "<deleted cart id>",
    "message": "Success Deleted"
}
```