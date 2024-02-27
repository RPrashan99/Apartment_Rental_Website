export const sample_apartments = [
    {
        id: '1',
        name: 'LionGates Apartments',
        price: 50000,
        imageUrl: 'Apart1.jpg',
        city: 'Rome',
        country: 'Italy',
        description: 'LionGates Apartments situated in beautiful city of Rome, one of the most eye-catching place on Italy',
        available: true,
        rules:['No pets allowed','No smoking allowed','No littering outside apartments','No musical instrument playing allowed'],
        email:'LionGates@gmail.com',
        teleNumber: '+(01)456 56 32'
    },

    {
        id: '2',
        name: 'InterCity Apartments',
        price: 70000,
        imageUrl: 'Apart2.jpg',
        city: 'Paris',
        country: 'France',
        description: 'InterCity Apartments situated in beautiful city of Paris, one of the most eye-catching place on France',
        available: true,
        rules:['No pets allowed','No smoking allowed','No littering outside apartments','No musical instrument playing allowed'],
        email:'InterCity@gmail.com',
        teleNumber: '+(01)456 56 32'
    },

    {
        id: '3',
        name: 'RainGardens Apartment',
        price: 65000,
        imageUrl: 'Apart3.jpg',
        city: 'Kurunagala',
        country: 'Sri Lanka',
        description: 'RainGardens Apartments situated in beautiful city of Kurunagala, one of the most eye-catching place on Sri Lanka',
        available: true,
        rules:['No pets allowed','No smoking allowed','No littering outside apartments','No musical instrument playing allowed'],
        email:'RainGardes@gmail.com',
        teleNumber: '+(01)456 56 32'

    },

    {
        id: '4',
        name: 'MDoren Apartment',
        price: 56000,
        imageUrl: 'Apart4.jpg',
        city: 'Sochi',
        country: 'Singapore',
        description: 'Mdoren Apartments situated in beautiful city of Sochi, one of the most eye-catching place on Singapore',
        available: true,
        rules:['No pets allowed','No smoking allowed','No littering outside apartments','No musical instrument playing allowed'],
        email:'Mdoren@gmail.com',
        teleNumber: '+(01)456 56 32'
    },
];

export const sildePages = [
    {
        id: '1',
        name:'France',
        image:'France1.png',
        description:'Charming, sunlit apartment in France with panoramic views, elegant design, and modern amenities, offering a cozy, tranquil living experience.'
    },

    {
        id: '2',
        name: 'Italy',
        image: 'Italy1.png',
        description:'Quaint Italian apartment with rustic charm, picturesque views, and authentic character. Sun-drenched rooms, cozy ambiance, and modern comforts create a delightful living space'
    },

    {
        id: '3',
        name:'Sri Lanka',
        image:'SL1.png',
        description:'Serene Sri Lankan apartment, nestled amidst lush greenery, offering tranquil vibes, panoramic vistas, and a perfect blend of modern luxury and exotic charm for an idyllic living experience.'
    }
];

export const sample_user = [
    {
        id: '1',
        name: 'Rush',
        email: 'Rush@gmail.com',
        password: 'Rush',
        isAdmin: true
    }
];

export const sample_purchase = [
    {
        id: '1',
        userId: '1',
        apartmentName: 'LionGates Apartments',
        apartmentImage: 'Apart1.jpg',
        movingDate:new Date(2021,10,23).toLocaleDateString(),
        apply: 'Processing'
    },

    {
        id: '2',
        userId: '1',
        apartmentName: 'InterCity Apartments',
        apartmentImage: 'Apart2.jpg',
        movingDate: new Date(2020,9,23).toDateString(),
        apply: 'Processed'
    },
];