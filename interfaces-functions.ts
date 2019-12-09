interface Person {
  name: string;
  city: string;
  age: number;
  printDetails(): string;
}

const tom: Person = {
  name: "Tom",
  city: "Munchin",
  age: 33,
  printDetails: function() {
    return `${this.name} - ${this.city}`;
  }
};
