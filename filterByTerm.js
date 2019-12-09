"use strict";
// interface Link {
//   description?: string;
//   id?: number;
//   url: string;
//   [index: string]: any;
// }
// interface TranslatedLink extends Link {
//   language: string;
// }
// type Authenticated = boolean | number | string;
// interface Example {
//   authenticated: Authenticated;
//   name: string;
// }
// const link1: TranslatedLink = {
//   description: "This is a description for Typescript practice.",
//   id: 1,
//   url: "http://jev.dev",
//   language: "English"
// };
// type Links = Array<Links>;
// const filterByTerm = (
//   input: Links,
//   searchTerm: string,
//   lookUpKey: string = "url"
// ): Links => {
//   if (!searchTerm) throw Error("searchTerm cannot be empty");
//   if (!input.length) throw Error("input cannot be empty");
//   const regex = new RegExp(searchTerm, "i");
//   return input.filter(arrayElement => {
//     return arrayElement[lookUpKey].match(regex);
//   });
// };
// const obj1: Link = { url: "string_1" };
// const obj2: Link = { url: "string_2" };
// const obj3: Link = { url: "string_3" };
// const urlLinks: Array<Link> = [obj1, obj2, obj3];
// const term: string = "java";
// filterByTerm(urlLinks, term);
