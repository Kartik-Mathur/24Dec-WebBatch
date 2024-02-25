const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '/data/tasks.json');

function updateData(name, age) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, {
            encoding: 'utf8'
        }, (err, data) => {
            if (err) return reject(err);
            data = JSON.parse(data);
            data = data.map((val) => {
                {
                    if (val.name === name) {
                        return { name, age }
                    }
                    else {
                        return val;
                    }
                }
            })

            fs.writeFile(filePath, JSON.stringify(data), (err) => {
                if (err) return reject(err);
                resolve("Updated Successfully");
            })
        })
    })
}


updateData("Mehak", 180)
    .then((msg) => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err);
    })
