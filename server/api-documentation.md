# RESTful endpoints
`-POST /login`
`-POST /register`
`-GET /product`
`-POST /product`
`-PUT /product/:id`
`-DELETE /product/:id`
`-GET /cart`
`-POST /cart`
`-PATCH /cart/:CartId`
`-DELETE /cart/:CartId`
`-POST /checkout`


## POST /login
### _Request Header_
```
{

}
```  
### _Request Params_
```       
{
    
}
```
### _Request Body_
```       
{
    "email:"<email>",
    "password:"<password>"
}
```
### _Response (201)_
```
{
    "access_token":"<access_token>"
}
```
### _Response (400)_
```
{
    "message":"Email/Password Cannot be empty"
}
```
### _Response (401)_
```
{
    "message":"Wrong Email/Password"
}
```
### _Response (404)_
```
{
    "message":"Email Not Found !"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## POST /register
### _Request Header_
```
{

}
```  
### _Request Params_
```       
{
    
}
```
### _Request Body_
```       
{
    "email:"<email>",
    "password:"<password>"
}
```
### _Response (201)_
```
{
    "message":"register success",
    "id":<id>
    "email":"<email>"
```
### _Response (409)_
```
{
    "message":"email already registered"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## GET /product 

> Mengambil semua data product
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```
### _Request Body_
```
{
    not needed
}
```
### _Response (201)_
```
[
    {
        "id":1,
        "name":"<name>",
        "image_url":"<image_url>",
        "price":<price>,
        "stock":<stock>,
        "createdAt":"2020-09-28T12:17:16.572Z",
        "updatedAt":"2020-09-28T12:17:16.572Z"
    }
]
```
### _Response (401)_
```
{
    "message":"login first"
}

```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## POST /product 
> Membuat product
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```    
### _Request Body_
```       
{
   "name":"<name>",
    "image_url":"<image_url>",
    "price":<price>,
    "stock":<stock>
}

```
### _Response (201 - Created)_
```
{
    "id":"<id>",
    "name":"<name>",
    "image_url":"<image_url>",
    "price":<price>,
    "stock":<stock>
}
```
### _Response (400)_
```
{
    "message":"<Invalid Request Message>"
}
```
### _Response (401)_
```
{
    "message":"<Authorization / Authentication Message>"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## PUT /product/:id 
> Mengedit product
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```    
### _Request Body_
```       
{
    "name":"<name>",
    "image_url":"<image_url>",
    "price":<price>,
    "stock":<stock>
}

```
### _Request Params_
```       
{
   "id":"<id>"
}

```
### _Response (200 - Updated)_
```
{
    "message":"<messages>"
}
```
### _Response (400)_
```
{
    "message":"<Invalid Request Message>"
}
```
### _Response (401)_
```
{
    "message":"<Authorization / Authentication Message>"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## DELETE /tasks/:id
> Delete tasks
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```   

### _Request Params_
```       
{
   "id":"<id>"
}

```
### _Response (200)_
```
{
   "message":"delete task id = <id> successfully"
}
```
### _Response (401)_
```
{
    "message":"<Authorization / Authentication Message>"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```


`-DELETE /cart/:CartId`


## GET /product 

> Mengambil semua data Cart
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```
### _Request Body_
```
{
    not needed
}
```
### _Response (201)_
```
[
    {

        "id":<id>,
        "UserId":<UserId>,
        "ProductId":<ProductId>,
        "quantity":<quantity>,
        "status":"<status>",
        "createdAt":"2020-09-28T12:17:16.572Z",
        "updatedAt":"2020-09-28T12:17:16.572Z",
        "Product":{<Product>}
    }
]
```
### _Response (401)_
```
{
    "message":"login first"
}

```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```


## POST /cart 
> Membuat Cart
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```    
### _Request Body_
```       
{
    "ProductId":<ProductId>
}

```
### _Response (201 - Created)_
```
{
    "id":<id>,
    "UserId":<UserId>,
    "ProductId":<ProductId>,
    "quantity":<quantity>,
    "status":"<status>",
    "createdAt":"2020-09-28T12:17:16.572Z",
    "updatedAt":"2020-09-28T12:17:16.572Z"
}
```
### _Response (400)_
```
{
    "message":"<Invalid Request Message>"
}
```
### _Response (401)_
```
{
    "message":"<Authorization / Authentication Message>"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## PATCH /cart/:CartId 
> Mengedit Cart
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```    
### _Request Body_
```       
{
    "quantity":"<quantity>",
}

```
### _Request Params_
```       
{
   "CardId":"<CardId>"
}

```
### _Response (200 - Updated)_
```
{
    "message":"<messages>"
}
```
### _Response (400)_
```
{
    "message":"<Invalid Request Message>"
}
```
### _Response (401)_
```
{
    "message":"<Authorization / Authentication Message>"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## DELETE /cart/:CartId
> Delete Cart
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```   

### _Request Params_
```       
{
   "CartId":"<CartId>"
}

```
### _Response (200)_
```
{
   "message":"delete Cart id = <id> successfully"
}
```
### _Response (401)_
```
{
    "message":"<Authorization / Authentication Message>"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```


## POST /checkout
> Delete Cart
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```   

### _Response (200)_
```
{
   "message":"<message>"
}
```
### _Response (401)_
```
{
    "message":"<Authorization / Authentication Message>"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```