interface Link {
  description?: string;
  id?: number;
  url: string;
}

const filterByTerm = (input: Array<Link>, searchTerm: string) => {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(arrayElement => {
    return arrayElement.url.match(regex);
  });
};

const obj1: Link = { url: "string_1" };
const obj2: Link = { url: "string_2" };
const obj3: Link = { url: "string_3" };

const urlLinks: Array<Link> = [obj1, obj2, obj3];

const term: string = "java";

filterByTerm(urlLinks, term);
