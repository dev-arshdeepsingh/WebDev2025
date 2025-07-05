// Module import file

//default import is imported like this:
import multiply from "./mathOperationsM.js";

//named import or non default import:
import { add, subtract } from "./mathOperationsM.js"; //sometimes it works without extension. But always add .js for safety.

console.log(multiply(2, 2));
console.log(add(2, 2));
