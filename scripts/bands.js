import { getBands } from "./database.js";
import { getVenues } from "./database.js";
import { getBookings } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const Bands = () => {
    let bandHTML = `<ul>`

    for (const band of bands) {
        bandHTML += `<li id="band--${band.id}">${band.bandName}</li> `
    }
    bandHTML += `</ul>`

    return bandHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            let matchingBand = null
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    matchingBand = band
                    break
                }
            }
            let matchingVenue = null
            for (const booking of bookings) {
                for (const venue of venues) {
                    if (booking.bandsId === matchingBand.id && booking.venueId === venue.id) {
                        matchingVenue = venue
                        break 
                    }
                }
                if (matchingVenue !== null) {
                    break
                }
            }
            window.alert(`${matchingBand.bandName} are playing at ${matchingVenue.venueName}`)
        }
    }
)

