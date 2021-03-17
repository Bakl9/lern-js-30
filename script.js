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



// let user = {name: "macar"};

// Object.assign(user, {name:'ilysha'});

// alert(user.name)


// let user = { name:'ilsya', age:25,};

// let clone = object.assign({}, user)



let user = { name: ' Ilysha', age: 25,
    sizes: {
        height: 182,
        width: 50,
    }

};

let clone = Object.assign({}, user);

alert (user.sizes === clone.sizes);
