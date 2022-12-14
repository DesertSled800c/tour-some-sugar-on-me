import { getVenues } from "./database.js";
import { getBands } from "./database.js";
import { getBookings } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const Venues = () => {
    let venueHTML = `<ul>`

    for (const venue of venues) {
        venueHTML += `<li id="venue--${venue.id}">${venue.venueName}</li> `
    }
    venueHTML += `</ul>`

    return venueHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {
            const [, venueId] = itemClicked.id.split("--")
            let matchingVenue = null
            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    matchingVenue = venue
                    break
                }
            }
            let matchingBand = null
            for (const booking of bookings) {
                for (const band of bands) {
                    if (booking.bandsId === matchingVenue.id && booking.venueId === band.id) {
                        matchingBand = band
                        break 
                    }
                }
                if (matchingBand !== null) {
                    break
                }
            }
            window.alert(`${matchingBand.bandName} are playing at ${matchingVenue.venueName}`)
        }
    }
)