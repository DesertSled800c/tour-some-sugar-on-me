const database = {
    venues: [{
        id: 1,
        venueName: "Roxy",
        address: "500 melrose blvd",
        squareFootage: 2000,
        maxOccupancy: 500
    }, {
        id: 2,
        venueName: "Wild Buffalo",
        address: "200 main st",
        squareFootage: 1500,
        maxOccupancy: 300
    }, {
        id: 3,
        venueName: "The Green Tree",
        address: "2500 pillar dr",
        squareFootage: 500,
        maxOccupancy: 200
    }, {
        id: 4,
        venueName: "Coco Groove",
        address: "1 coconut grove",
        squareFootage: 1200,
        maxOccupancy: 600
    }, {
        id: 5,
        venueName: "Time Cap",
        address: "9999 showdown ct",
        squareFootage: 5000,
        maxOccupancy: 1000
    }],
    bands: [{
        id: 1,
        bandName: "Yoda",
        numOfMembers: 4,
        genre: "Lo-Fi",
        year: 2022
    }, {
        id: 2,
        bandName: "Mando",
        numOfMembers: 1,
        genre: "Western",
        year: 2021
    }, {
        id: 3,
        bandName: "Onion",
        numOfMembers: 15,
        genre: "Orchestra",
        year: 1990
    }, {
        id: 4,
        bandName: "Red",
        numOfMembers: 5,
        genre: "House",
        year: 2020
    }, {
        id: 5,
        bandName: "Blue",
        numOfMembers: 3,
        genre: "Hype",
        year: 1995
    }],
    bookings: [{
        id: 1,
        bandsId: 1,
        venueId: 5,
        bookingDate: "12/20/2020"
    }, {
        id: 2,
        bandsId: 2,
        venueId: 4,
        bookingDate: "11/15/2019"
    }, {
        id: 3,
        bandsId: 3,
        venueId: 3,
        bookingDate: "10/10/2018"
    }, {
        id: 4,
        bandsId: 4,
        venueId: 2,
        bookingDate: "9/5/2017"
    }, {
        id: 5,
        bandsId: 5,
        venueId: 1,
        bookingDate: "08/1/2016"
    }]
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}