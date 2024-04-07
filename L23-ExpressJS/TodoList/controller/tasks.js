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

    static increase(task) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await fs.readFile(dbPath);
                let todo = JSON.parse(data);
                let indx = todo.indexOf(task);
                if (indx <= 0 || indx >= todo.length) return reject("Cannot Increase Priority of this task");
                let temp = todo[indx];
                todo[indx] = todo[indx - 1];
                todo[indx - 1] = temp;
                await fs.writeFile(dbPath, JSON.stringify(todo));
                resolve("Increase Priority task success");
            }
            catch (err) {
                reject(err);
            }
        })
    }
    static decrease(task) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await fs.readFile(dbPath);
                let todo = JSON.parse(data);
                let indx = todo.indexOf(task);
                if(indx <= -1 || indx >= todo.length-1) return reject("Cannot Increase Priority of this task");
                let temp = todo[indx];
                todo[indx] = todo[indx + 1];
                todo[indx + 1] = temp;
                await fs.writeFile(dbPath, JSON.stringify(todo));
                resolve("Decrease Priority task success");
            }
            catch (err) {
                reject(err);
            }
        })
    }
}

module.exports = Tasks;