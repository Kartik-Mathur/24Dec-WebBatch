let students = [
    {
        id: 1,
        name: "John",
        age: 20,
        address_id: 1
    },
    {
        id: 2,
        name: "Lakhan",
        age: 21,
        address_id: 2
    }
]

// Now insert students : db.students.insertMany(students);
let address = [
    {
        id: 1,
        city: "Pune",
        student_id: 1
    },
    {
        id: 2,
        city: "Delhi",
        student_id: 2
    }
]
/*  
    db.students.aggregate({
        $lookup:
            {
                from: "address",
                localField: "address_id",
                foreignField: "id",
                as: "ADDRESS"
            }
    })
*/