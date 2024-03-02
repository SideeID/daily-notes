function greeting (name, language) {
    if (language == "english") {
        console.log(`Good morning ${name}`);
    } else if (language == "jawa") {
        console.log(`Sugeng injing ${name}`);
    } else {
        console.log(`Halo selamat pagi ${name}`);
    }
}

greeting("dimas", "jawa")

// function
const multiply = (a, b) => {
    return a * b 
}

let result = multiply(2, 6)
console.log(result);

// destructuring object function
const user = {
    id : 24,
    displayName : "dimas",
    fullName : "dimas fajar"
}

const introduce = ({displayName, fullName}) => {
    console.log(`${displayName} is ${fullName}`);
}
introduce(user)


const sum = (...numbers) => {
    let result = 0
    for (number of numbers) {
        result += number
    }
    return result
}
console.log(sum(1, 2, 3, 4, 5));