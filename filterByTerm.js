"use strict";
const filterByTerm = (input, searchTerm) => {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(arrayElement => {
        return arrayElement.url.match(regex);
    });
};
const obj1 = { url: "string_1" };
const obj2 = { url: "string_2" };
const obj3 = { url: "string_3" };
const urlLinks = [obj1, obj2, obj3];
const term = "java";
filterByTerm(urlLinks, term);
