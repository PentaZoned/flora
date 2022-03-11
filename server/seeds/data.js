const products = [
    {
        title: "Glorius Gladioli",
        description: "A lovely boquet of Stephens favorite.",
        category: 'Gladioli',
        price: 12.99,
        likes: "112",
    },
    {
        title: "Spring is the Cruelest Season",
        description: "Smart arrangements of mixed selections of complimentary flowers.",
        category: 'Mixed Bouqets',
        price: 12.99,
        likes: "112",
    },
    {
        title: "The Kansas Special",
        description: "Ten cheerful, golden s that instantly brighten any room.",
        category: 'Sunflowers',
        price: 12.99,
        likes: "112",
    },
];

const users = [
    {
        firstName: 'Leo',
        lastName: 'Lionni',
        email: 'frederick@aol.com',
        password: '4fieldMice',
    },
    {
        firstName: 'Fyodor',
        lastName: 'Dostoevski',
        email: 'theidot@hotmail.com',
        password: 'AmICancelled?',
    },
    {
        firstName: 'Rocket',
        lastName: 'Power',
        email: 'oceanshoresrealty@gmail.com',
        password: 'NoShoobies!'
    }
];

const categories = [
    {
        name: 'Gladioli',
    },
    {
        name: 'Mixed Bouqets',
    },
    {
        name: 'Sunflowers',
    }
];

module.exports = { products, users, categories };