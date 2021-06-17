//Connecting to mondodb

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {        //At the end, name of the db you want to create
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const personSchema = new mongoose.Schema({      // schema of the data you want to create
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 5,
        max: 30
    }
});

const Person = mongoose.model("person", personSchema);         //defining a model --> convert singular to plural

// const Nitin = new Person({              //Adding new content
//     name: "nitin",
//     age: 21
// });
// const Kirti = new Person({
//     name: "kirti",
//     age: 22

// });
// const Himani = new Person({
//     name: "himani",
//     age: 15
// });

// Person.insertMany([Nitin, Kirti, Himani], function (err) {           //To insert in the database
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("succesfully saved all the people");
//     }

// });

const Mukul = new Person({
    age: 25
});

Person.save();

Person.find(function (err, people) {                //To Find all the people
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();
        people.forEach(function (Person) {
            console.log(Person.name);
        });
    }
});

