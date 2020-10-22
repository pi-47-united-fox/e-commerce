E-Commerce App
Link Deploy CMS : https://e-commerce-cms-ae90d.web.app/
Link Deploy App : 
```json
    RESTful endpoint for E-Commerce CMS App
    JSON-formatted response.

 
RESTful Endpoints

## POST /register
## POST /login
## GET /product 
## GET /cart
## POST /cart/:id
## DELETE /cart/:id
## GET /checkout
## GET /history
## GET /wishlist
## POST /wishlist/:id
## DELETE /wishlist/:id
## POST /product
## PUT /product/:id
## DELETE /product/:id

##POST /register 

        Request Header

            Not Needed

        Request Body

        {
            "email": "customer@mail.com",
            "password": 1234, 
        }

        Response (201)

        {
            "email": "customer@mail.com",
            "role": "customer"
        }

        Response (400 - Bad Request)
        {
        "message": "Email and Password can't Empty"
        }

        Response (500 - Internal Server Error)

        {
        "message": "Internal Server Error."
        }

##POST /login 

        Request Header

            Not Needed

        Request Body

        {
            "email": "admin@mail.com",
            "password": 1234, 
        }

        Response (201)

        {
            "access_token"
        }

        Response (400 - Bad Request)
        {
        "message": "Email and Password can't Empty"
        }

        Response (401 - Unauthorized)

        {
        "message": "Wrong Email/Password"
        }

        Response (500 - Internal Server Error)

        {
        "message": "Internal Server Error."
        }


##GET /product 

        Request Header

        not needed

        Request Body

        not needed

        Response (200)

        [
            {
                "id":1,
                "name": "carvil bag",
                "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/18/batch-upload/batch-upload_bd784ea6-18d2-4efa-9882-78ab2306a3d7.jpeg",
                "price": 100000,
                "stock": 10,
                "category": "fashion"
            },
            {
                "id":2,
                "name": "carvil bag",
                "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/18/batch-upload/batch-upload_bd784ea6-18d2-4efa-9882-78ab2306a3d7.jpeg",
                "price": 100000,
                "stock": 10,
                "category": "fashion"
            }
        ]

        Response (404 - not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##GET /cart 

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        not needed

        Response (200)

        [
            {
                "ProductId": 7,
                "UserId": 7,
                "quantity": 2,
                "status": "unpaid",
                "createdAt": "2020-10-21T23:46:56.174Z",
                "updatedAt": "2020-10-22T01:02:38.839Z",
                "Product": {
                    "id": 7,
                    "name": "Blue Formal",
                    "image_url": "https://5.imimg.com/data5/VH/SL/MY-53759799/men-s-shoes-500x500.jpg",
                    "price": 900000,
                    "stock": 12,
                    "category": "shoes",
                    "createdAt": "2020-10-15T06:22:56.607Z",
                    "updatedAt": "2020-10-21T23:20:15.318Z"
                }
            }
        ]

        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (404 - not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##POST /cart/:id 

        Description: If product already added to cart, at the second clicked, will increases quantity

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        {
            "quantity": null || 2
        }

        Request Params

        {
            "id": 1
        }

        Response (200)

        {
            "ProductId": 1,
            "UserId": "given by system"
        }

        Response (400)
        {
        "message": "Exceeded max stock 6"
        }
        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (404 - not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##DELETE /cart/:id 

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        not needed

        Request Params

        {
            "id": 1
        }

        Response (200)

        {
            "message": "Removed From Cart"
        }

        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (404 - not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##GET /checkout 

        Descripton: reduce stock of product minus cart quantity, if all requirement is correct change status of cart status to 'ispaid'

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        not needed

        Request Params

        {
            "id": 1
        }

        Response (200)

        {
            "message": "Checkout Completed"
        }

        Response (400)
        {
        "message": "Exceeded max stock 6"
        }
        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (404 - not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##GET /history 

        Description: 'Fetch all items which status = ispaid'

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        not needed

        Response (200)

        [
            {
                "id": 1,
                "UserId": 7,
                "quantity": 2,
                "status": "ispaid",
                "Product": {
                    "id": 7,
                    "name": "Blue Formal",
                    "image_url": "https://5.imimg.com/data5/VH/SL/MY-53759799/men-s-shoes-500x500.jpg",
                    "price": 900000,
                    "stock": 10,
                    "category": "shoes",
                    "createdAt": "2020-10-15T06:22:56.607Z",
                    "updatedAt": "2020-10-21T23:20:15.318Z"
                }
            }
        ]

        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (404 - not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##GET /wishlist 

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        not needed

        Response (200)

        [
            {
                "UserId": 7,
                "ProductId": 1,
                "createdAt": "2020-10-22T01:08:54.922Z",
                "updatedAt": "2020-10-22T01:08:54.922Z",
                "Product": {
                    "id": 1,
                    "name": "Blue Casual ",
                    "image_url": "https://rukminim1.flixcart.com/image/714/857/jpmxuvk0/shoe/b/q/w/bh-sh-001-8-believe-sky-blue-original-imafbmwftzsusxx4.jpeg?q=50",
                    "price": 50000,
                    "stock": 6,
                    "category": "shoes",
                    "createdAt": "2020-10-12T09:12:06.247Z",
                    "updatedAt": "2020-10-21T12:54:00.758Z"
                }
            }
        ]

        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (404 - not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##POST /wishlist/:id 

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        not needed

        Request Params

        {
            "id": 1
        }

        Response (200)

        {
            "ProductId": 1,
            "UserId": "given by system"
        }

        Response (400)
        {
        "message": "Already Added to Wishlist"
        }
        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##DELETE /wishlist/:id 

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        not needed

        Request Params

        {
            "id": 1
        }

        Response (200)

        {
        "message": "Successfully removed from wishlist"
        }

        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (404 - Not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##POST /product 

        Request Header
        {
        "access_token": "<access_token>"
        }

        Request Body

        {
        "name": "carvil bag",
        "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/18/batch-upload/batch-upload_bd784ea6-18d2-4efa-9882-78ab2306a3d7.jpeg",
        "price": 100000,
        "stock": 10,
        "category": "fashion"
        }

        Response (201)
        {
        "id":1,
        "name": "carvil bag",
        "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/18/batch-upload/batch-upload_bd784ea6-18d2-4efa-9882-78ab2306a3d7.jpeg",
        "price": 100000,
        "stock": 10,
        "category": "fashion"
        }


        Response (400 - Bad Request)
        {
        "name": "SequelizeValidationError"
        }
        Response (401 - Unauthorized)
        {
        "message": "You are not authenticated"
        }
        Response (403 - Forbidden)
        {
        "message": "You Dont Have Access!"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##PUT /product/:id


        Request Header

        {
        "access_token": "<your access token>"
        }

        Request Body

        {
        "name": "polo bag",
        "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/18/batch-upload/batch-upload_bd784ea6-18d2-4efa-9882-78ab2306a3d7.jpeg",
        "price": 50000,
        "stock": 5,
        "category": "fashion"
        }

        Request Params
        {
            "id": 1
        }
        

        Response (200)
        {
        "id":1,
        "name": "polo bag",
        "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/18/batch-upload/batch-upload_bd784ea6-18d2-4efa-9882-78ab2306a3d7.jpeg",
        "price": 50000,
        "stock": 5,
        "category": "fashion"
        }

        Response (400 - Bad Request)
        {
        "message": "SequelizeValidationError"
        }
        Response (401 - Unauthorized)
        {
        "message": "You are not autenthicated"
        }
        Response (403 - Forbidden)
        {
        "message": "You Dont Have Access!"
        }
        Response (404 - Not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##DELETE /product/:id


        Request Header
        {
        "access_token": "<your access token>"
        }

        Request Params
        {
            "id": 1
        }

        Response (200)
        {
            "message": "Product success to delete"
        }

       
        Response (401 - Unauthorized)
        {
        "message": "You are not autenthicated"
        }
        Response (403 - Forbidden)
        {
        "message": "You Dont Have Access!"
        }
        Response (404 - Not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }