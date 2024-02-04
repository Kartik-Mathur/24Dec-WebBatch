function personDetails(name,age,marks){
    return function(name,age,marks){
        function isAdult(){
            return age>=18;
        }
        function getName(){
            return name;
        }
        function getMarks(){
            return marks;
        }
    }
}

let Person = {
    isAdult : function(age){
        return age>=18;
    },
    name: "Ruchi",
    hobbies: ["Cleaning Books"]
}

