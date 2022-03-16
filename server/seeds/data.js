const products = [
    {
        title: "Your Place In the Sun",
        description: "A vigorous arrangement of sunflowers, white roses, tuberoses, and yellow daffodils.",
        image: 'images/your-place-in-the-sun.jpg',
        category: 'Sunflowers',
        price: 24.99,
        likes: "112",
    },
    {
        title: "Country Morning",
        description: "Rustic and invigorating, this bundle of sunflowers, pink roses, various wildflowers, and lavendar brings pastoral charm to any environment.",
        image: 'images/country-morning.jpg',
        category: 'Sunflowers',
        price: 22.99,
        likes: "112",
    },
    {
        title: "Pastoral Picnic",
        description: "A simple yet endearing boquet of sunflowers, red daisies, yellow roses, and white hydrangeas.",
        image: 'images/pastoral-picnic.jpg',
        category: 'Sunflowers',
        price: 21.99,
        likes: "112",
    },
    {
        title: "Gallery Gladiolus",
        description: "Elegant and contemporary, this collection of white gladiolus complimented by split leaf philodendron brings a formal yet comforting feel to any room.",
        image: 'images/gallery-gladiolus.jpg',
        category: 'Gladiolus',
        price: 25.99,
        likes: "112",
    },
    {
        title: "Steven's Favorite",
        description: "Elegant and classic, this collection of pink and white gladioli compliments any environment from modern and minimalistic, to rustic and cozy.",
        image: 'images/stevens-favorite.jpg',
        category: 'Gladiolus',
        price: 24.99,
        likes: "112",
    },
    {
        title: "Daily Gratitude",
        description: "A classic boquet of hydrangeas and pink roses perfect for imbuing the day with a sense of freshness and beauty.",
        image: 'images/daily-gratitude.jpg',
        category: 'Hydrangeas',
        price: 18.99,
        likes: "112",
    },
    {
        title: "April Is the Cruelest Month",
        description: "A gorgeous boquet of yellow lillies, white daisies, and pink roses.",
        image: 'images/april-is-the-cruelest-month.jpg',
        category: 'Lillies',
        price: 29.99,
        likes: "112",
    },
    {
        title: "Enchanted Ravine",
        description: "A whimsical collection of pink tulips, orange roses, and indigo and purple wildflowers..",
        image: 'images/enchanted-ravine.jpg',
        category: 'Tulips',
        price: 28.99,
        likes: "112",
    },
];

const users = [
    {
        firstName: 'Leo',
        lastName: 'Lionni',
        email: 'frederick@aol.com',
        password: '4fieldMice',
        cart: []
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