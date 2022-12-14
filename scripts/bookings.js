import { getBookings } from "./database.js";
import { getBands } from "./database.js";
import { getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

export const Bookings = () => {
    let bookingHTML = `<ul>`
    for (const booking of bookings) {
        for (const band of bands) {
            for (const venue of venues) {
                if (booking.bandsId === band.id && booking.venueId === venue.id) {
                    bookingHTML += `<li id="booking--${booking.id}">
                    ${band.bandName} are playing at ${venue.venueName} on ${booking.bookingDate}</li>`
                }
            }
        }
    }
    bookingHTML += `</ul>`

    return bookingHTML
}

const filterBandByBookings = (booking) => {
    let bookedBand = null
    for (const band of bands) {
        if (booking.bandsId === band.id) {
            bookedBand = band
        }
    }
    return bookedBand
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {
            const [, bookingId] = itemClicked.id.split("--")
            for (const booking of bookings) {
                if (booking.id === parseInt(bookingId)) {
                    const bookedBand = filterBandByBookings(booking)
                    window.alert(`
                    ${bookedBand.bandName}
                    Genre: ${bookedBand.genre}
                    Formed in ${bookedBand.year}
                    ${bookedBand.numOfMembers} band members`)
                }
            }
        }
    }           
)