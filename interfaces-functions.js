"use strict";
const tom = {
    name: "Tom",
    city: "Munchin",
    age: 33,
    printHello: function () {
        return `Hello, my name is ${this.name} from ${this.city}.`;
    }
};
const makeTom = (person, a, b) => {
    return `${tom.name} from ${tom.city} is a real ${a}${b}!`;
};
makeTom(tom, "dick", "bag");
