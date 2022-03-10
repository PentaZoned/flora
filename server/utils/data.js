const products = [
    {
        title: "Tuberose Boquet",
        description: "A lovely boquet of tuberoses complimented by eucalyptus leaves.",
        likes: "112",
        price: 12.99,
    },
    {
        title: "White Roses",
        description: "A lovely boquet of white roses.",
        likes: "96",
        price: 15.99,
    },
    {
        title: "Carnations",
        description: "A lovely boquet of mixed carnations.",
        likes: "76",
        price: 13.99,
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