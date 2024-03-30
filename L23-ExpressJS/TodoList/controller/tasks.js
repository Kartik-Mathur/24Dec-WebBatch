const fs = require('fs/promises');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'database', 'tasks.json')

// function getData() {
//     return new Promise(async(resolve, reject) => {
//         try {
//             let data = await fs.readFile(dbPath);
//             resolve(JSON.parse(data));
//         }
//         catch (err) {
//             reject(new Error("File reading error"))
//         }
//     })
// }

class Tasks {
    static addTask(newTask) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await fs.readFile(dbPath);
                let tasks = JSON.parse(data);
                let indx = tasks.indexOf(newTask);
                if (indx == -1) {
                    console.log(tasks, newTask)
                    tasks.push(newTask);
                    await fs.writeFile(dbPath, JSON.stringify(tasks));
                    resolve({
                        msg: "Task Added Successfully"
                    });
                }
                else {
                    reject({
                        msg: "Duplicate task not allowed"
                    });
                }
            } catch (err) {
                reject(err);
            }
        })
    }
    static getTasks() {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await fs.readFile(dbPath);
                let tasks = JSON.parse(data);
                resolve(tasks);
            }
            catch (err) {
                reject(err);
            }
        })
    }
    static deleteTask(task) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await fs.readFile(dbPath);
                let tasks = JSON.parse(data);

                tasks = tasks.filter(d => d !== task);
                await fs.writeFile(dbPath, JSON.stringify(tasks));
                resolve("Task Deleted Successfully");
            }
            catch (err) {
                reject(err);
            }
        })
    }

    static increase(task) { }
    static decrease(task) { }
}

module.exports = Tasks;