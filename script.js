let user = { name: 'Иван' };

let admin = user;
\// let description = {
//     walls: 'while',
//     table: "brown",
// }

// let home = {}

// for (let[key] in description) {
//     description[key] = home[key]
// };

// home.name = 'ilysha'

// alert(home.name)


let user = { walls: 'brown' };

let permissions1 = { canView: true};
let permissions2 = { canView: true};

Object.assign (user, permissions1, permissions2);
