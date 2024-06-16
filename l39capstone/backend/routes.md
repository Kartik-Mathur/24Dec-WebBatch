ADMIN Routes
    Mount: /admin
    Routes:
    - POST /add-food: add a particular food item
        body: image, price, name, restaurant_id, cuisineName(Italian, Chinese), description
        
        # returns 
        {
            message: "Food added successfully",
            food: [
                {
                    cuisineName: String,
                    foodList: [
                        {
                            name: String,
                            price: Number,
                            description: String,
                            image: String,
                        }
                    ]
                }
            ]
        }
        
    - POST /add-restaurant
        body: image, name, location, rating([{ userId: String, userName: String, value: Number }]), food: []
    - POST /update-food
    - POST /update-restaurant
    - GET /get-foods
    - GET /get-restaurants
    - GET /get-food/:id
    - GET /get-restaurant/:id
    - DELETE /delete-food/:id
    - DELETE /delete-restaurant/:id
    - POST /add-order

USER Routers
    Mount: /user
        - /