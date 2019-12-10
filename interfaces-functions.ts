interface Person {
  name: string;
  city: string;
  age: number;
  printHello(): string;
}

const tom: Person = {
  name: "Tom",
  city: "Munchin",
  age: 33,
  printHello: function() {
    return `Hello, my name is ${this.name} from ${this.city}.`;
  }
};

const makeTom = (person: Person, a: string, b: string): string => {
  return `${tom.name} from ${tom.city} is a real ${a}${b}!`;
};

makeTom(tom, "dick", "bag");
