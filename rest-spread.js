
// spread operator

const oldOne = [1, 2, 3, 4, 5];

const newOne = [...oldOne, 6];

// console.log(oldOne);
// console.log(newOne);

const [one, two,...three] = [1, 2, 3, 4, 5, 6];

// console.log(three);

// const [{name}, email, address, age] = [{ name: 'Bilal' }, {}, {}, {}]

// console.log(name);

const { first, last, address, email:e } = {
    first: 'Bilal',
    last: 'Qadri',
    address: 'Sahiwal',
    email:'bilalattari1409l@gmail.com'    
}

// console.log(e)



// rest operator
// function accepting infinite arguments as an array of elements
function sum(...args) {
    let sum = 0
    args.forEach(element => {
        sum += element
    });
    return sum
}

console.log(sum(1,2,3,4,5,6));