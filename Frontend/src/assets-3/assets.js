import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'
import mail_icon from './mail_icon.svg'
import person_icon from './person_icon.svg'
import lock_icon from './lock_icon.svg'
import google from './google.png'
export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
    mail_icon,
    person_icon,
    lock_icon,
    google
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/1pHDWnXmK7Y'
    },
    {
        image:"https://img.youtube.com/vi/mjBym9uKth4/maxresdefault.jpg",
videoUrl:"https://www.youtube.com/embed/mjBym9uKth4"
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/umiKiW4En9g'
    },
]


const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
  {
    _id: "324544",
    title: "In the Lost Lands",
    poster_path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    vote_average: 6.4,
    vote_count: 124500,
    original_language: "english",
    runtime: 102,
    genres: [{ name: "Action" }, { name: "Fantasy" }, { name: "Adventure" }],
    overview: "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness...",
    release_date: "2025-02-27",
    trailer: "https://www.youtube.com/embed/CMyrp5Vk3mU?si=7tbnDEF4ETs7q1X6",
    casts: dummyCastsData
  },
  {
    _id: "654321",
    title: "Chhakka Panja 5",
    poster_path: "https://resizing.flixster.com/l5nZW2MJxtGvZJGyJMb-hmuXPSc=/206x305/v2/https://resizing.flixster.com/4Tb1AA7NAxK4hiPVuVjE42B7Zzc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBhM2E1MTdkLTY2MzMtNDZlZi1iNjhhLThlZjNlOTM2MTVkMC5qcGc=",
    vote_average: 7.5,
    vote_count: 210000,
    original_language: "nepali",
    runtime: 150,
    genres: [{ name: "Comedy" }, { name: "Drama" }],
    overview: "The latest installment in the Chhakka Panja series...",
    release_date: "2025-10-20",
    trailer: "https://www.youtube.com/embed/_hBsVHlNOtA",
    casts: [
      { name: "Deepak Raj Giri", role: "Mundu" },
      { name: "Jeetu Nepal", role: "Supporting Role" },
      { name: "Barsha Raut", role: "Main Female Lead" }
    ]
  },
  {
    _id: "123456",
    title: "War 2",
    poster_path: "https://i.pinimg.com/736x/b0/9f/79/b09f7935b6abb19b92b084c4fdc3b2b2.jpg",
    vote_average: 7.8,
    vote_count: 358700,
    original_language: "hindi",
    runtime: 145,
    genres: [{ name: "Action" }, { name: "Thriller" }, { name: "Crime" }],
    overview: "In this high-octane spy thriller, Hrithik Roshan reprises his role as Kabir...",
    release_date: "2025-08-14",
    trailer: "https://www.youtube.com/embed/mjBym9uKth4?si=kcYzgcfWdyF0Hhq8",
    casts: [
      { name: "Hrithik Roshan", role: "Kabir" },
      { name: "Jr NTR", role: "Agent Vikram" },
      { name: "Kiara Advani", role: "Nisha" }
    ]
  },
  {
    _id: "1232546",
    title: "Until Dawn",
    poster_path: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    vote_average: 6.405,
    vote_count: 945000,
    original_language: "english",
    runtime: 103,
    genres: [{ name: "Horror" }, { name: "Mystery" }],
    overview: "One year after her sister Melanie mysteriously disappeared...",
    release_date: "2025-04-23",
    trailer: "https://www.youtube.com/embed/2b3vBaINZ7w?si=ynFhrzlcSZ7PVCJS",
    casts: dummyCastsData
  },
  {
    _id: "552524",
    title: "Lilo & Stitch",
    poster_path: "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    vote_average: 7.117,
    vote_count: 182000,
    original_language: "english",
    runtime: 108,
    genres: [{ name: "Family" }, { name: "Comedy" }, { name: "Science Fiction" }],
    overview: "The wildly funny and touching story of a lonely Hawaiian girl...",
    release_date: "2025-05-17",
    trailer: "https://www.youtube.com/embed/VWqJifMMgZE?si=STxT7eXCgW1cmyqJ",
    casts: dummyCastsData
  },
  {
    _id: "668489",
    title: "Havoc",
    poster_path: "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
    vote_average: 6.537,
    vote_count: 13200,
    original_language: "english",
    runtime: 107,
    genres: [{ name: "Action" }, { name: "Crime" }, { name: "Thriller" }],
    overview: "When a drug heist swerves lethally out of control...",
    release_date: "2025-04-25",
    trailer: "https://www.youtube.com/embed/6txjTWLoSc8?si=742XRtyEHbv0j47_",
    casts: dummyCastsData
  },
  {
    _id: "950387",
    title: "A Minecraft Movie",
    poster_path: "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    vote_average: 6.516,
    vote_count: 98000,
    original_language: "english",
    runtime: 101,
    genres: [{ name: "Family" }, { name: "Comedy" }, { name: "Adventure" }, { name: "Fantasy" }],
    overview: "Four misfits find themselves struggling with ordinary problems...",
    release_date: "2025-03-31",
    trailer: "https://www.youtube.com/embed/wJO_vIDZn-I?si=htrSi4YE7-zupido",
    casts: dummyCastsData
  },
  {
    _id: "575265",
    title: "Mission: Impossible - The Final Reckoning",
    poster_path: "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    vote_average: 7.042,
    vote_count: 243000,
    original_language: "english",
    runtime: 170,
    genres: [{ name: "Action" }, { name: "Adventure" }, { name: "Thriller" }],
    overview: "Ethan Hunt and team continue their search for the terrifying AI...",
    release_date: "2025-05-17",
    trailer: "https://www.youtube.com/embed/fsQgc9pCyDU?si=YhUnu59waxaZPDv5",
    casts: dummyCastsData
  },
  {
    _id: "986056",
    title: "Thunderbolts*",
    poster_path: "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    vote_average: 7.443,
    vote_count: 197500,
    original_language: "english",
    runtime: 127,
    genres: [{ name: "Action" }, { name: "Science Fiction" }, { name: "Adventure" }],
    overview: "After finding themselves ensnared in a death trap...",
    release_date: "2025-04-30",
    trailer:"https://www.youtube.com/embed/hUUszE29jS0?si=1rH_J4A329OU5D4N",
    casts: dummyCastsData
  },
  {
    _id: "888999",
    title: "The Forgotten Kingdom",
    poster_path: "https://image.tmdb.org/t/p/original/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
    vote_average: 7.2,
    vote_count: 156000,
    original_language: "english",
    runtime: 124,
    genres: [{ name: "Adventure" }, { name: "Fantasy" }],
    overview: "A young archaeologist discovers a hidden civilization...",
    release_date: "2025-07-04",
    trailer: "https://www.youtube.com/embed/RQinquBq338?si=t-cjYp_x6PdWP69f",
    casts: dummyCastsData
  },
  {
    _id: "999111",
    title: "Neon Drift",
    poster_path: "https://image.tmdb.org/t/p/original/aBkVgChtyyJaHyZh1gfd8DbzQon.jpg",
    vote_average: 8.1,
    vote_count: 402000,
    original_language: "japanese",
    runtime: 115,
    genres: [{ name: "Action" }, { name: "Science Fiction" }],
    overview: "In a futuristic Tokyo, street racers battle for control of a city's underground AI traffic system...",
    release_date: "2025-08-14",
    trailer: "https://www.youtube.com/embed/YhJ-pa9V7R4?si=7MICUCozU2GwpoT6",
    casts: dummyCastsData
  }
];

export const dummyDateTimeData = {
  "2025-02-27": [
    { time: "2025-02-27T10:00:00.000Z", showId: "324544" },
    { time: "2025-02-27T13:00:00.000Z", showId: "324544" },
    { time: "2025-02-27T16:00:00.000Z", showId: "324544" }
  ],
  "2025-03-31": [
    { time: "2025-03-31T10:00:00.000Z", showId: "950387" },
    { time: "2025-03-31T13:00:00.000Z", showId: "950387" },
    { time: "2025-03-31T16:00:00.000Z", showId: "950387" }
  ],
  "2025-04-23": [
    { time: "2025-04-23T10:00:00.000Z", showId: "1232546" },
    { time: "2025-04-23T13:00:00.000Z", showId: "1232546" },
    { time: "2025-04-23T16:00:00.000Z", showId: "1232546" }
  ],
  "2025-04-25": [
    { time: "2025-04-25T10:00:00.000Z", showId: "668489" },
    { time: "2025-04-25T13:00:00.000Z", showId: "668489" },
    { time: "2025-04-25T16:00:00.000Z", showId: "668489" }
  ],
  "2025-05-17": [
    { time: "2025-05-17T10:00:00.000Z", showId: "552524" },
    { time: "2025-05-17T13:00:00.000Z", showId: "552524" },
    { time: "2025-05-17T16:00:00.000Z", showId: "552524" }
  ],
  "2025-05-17": [
    { time: "2025-05-17T10:00:00.000Z", showId: "575265" },
    { time: "2025-05-17T13:00:00.000Z", showId: "575265" },
    { time: "2025-05-17T16:00:00.000Z", showId: "575265" }
  ],
  "2025-07-04": [
    { time: "2025-07-04T10:00:00.000Z", showId: "888999" },
    { time: "2025-07-04T13:00:00.000Z", showId: "888999" },
    { time: "2025-07-04T16:00:00.000Z", showId: "888999" }
  ],
  "2025-08-14": [
    { time: "2025-08-14T10:00:00.000Z", showId: "123456" },
    { time: "2025-08-14T13:00:00.000Z", showId: "123456" },
    { time: "2025-08-14T16:00:00.000Z", showId: "123456" }
  ],
  "2025-08-14": [
    { time: "2025-08-14T10:00:00.000Z", showId: "999111" },
    { time: "2025-08-14T13:00:00.000Z", showId: "999111" },
    { time: "2025-08-14T16:00:00.000Z", showId: "999111" }
  ],
  "2025-10-20": [
    { time: "2025-10-20T10:00:00.000Z", showId: "654321" },
    { time: "2025-10-20T13:00:00.000Z", showId: "654321" },
    { time: "2025-10-20T16:00:00.000Z", showId: "654321" }
  ],
  "2025-04-30": [
    { time: "2025-04-30T10:00:00.000Z", showId: "986056" },
    { time: "2025-04-30T13:00:00.000Z", showId: "986056" },
    { time: "2025-04-30T16:00:00.000Z", showId: "986056" }
  ]
};


export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2", "A3"],
        "isPaid": true,
    },
]
