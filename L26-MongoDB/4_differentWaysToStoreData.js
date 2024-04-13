// To use new db students
// use students;

let students = [
    {
        name: "Badal",
        address: "SRM university"
    },
    {
        name: "Aayush",
        address: "DTU"
    },
    {
        name: "RUCHI",
        address: "IP"
    },
    {
        name: "Lakhan",
        address: "IIT-D"
    },
    {
        name: "Lakhan-I",
        address: "SRM University"
    },
    {
        name: "Lakhan-II",
        address: "DTU"
    }
]

// To insert data into the table
// db.students.insertMany(students);
// upar se students ka array copy paste krna padega tabhi yeh chlega otherwise nhi
/* 
db.students.updateMany(
    {address:'DTU'},
    {
        $set:{
            address: 'DTU, New Delhi'
        }
    }
)
*/