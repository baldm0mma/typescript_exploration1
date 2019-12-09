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
const urls = [{ url: "string_1" }, { url: "string_2" }, { url: "string_3" }];
filterByTerm(urls, "java");
