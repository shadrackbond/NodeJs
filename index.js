// importing in currly braces indicates its not the default exported function
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts())

console.log(`Posts Length: ${getPostsLength()}`)