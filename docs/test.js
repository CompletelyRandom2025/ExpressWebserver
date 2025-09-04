import { LoremIpsum } from "lorem-ipsum";

const lorem = await new LoremIpsum();
console.log(lorem.generateWords(20));