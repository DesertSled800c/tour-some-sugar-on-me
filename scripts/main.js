import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"
import { Venues } from "./venues.js"



const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="bookings">
<h2>Bookings</h2>
${Bookings()}
</article>

<article class="details">

<section class="detail--column list details__venues">
<h2>Venues</h2>
${Venues()}
</section>

<section class="detail--column list details__bands">
<h2>Bands</h2>
${Bands()}
</section>

</article>
`
const mainContainer = document.querySelector("#container")

mainContainer.innerHTML = applicationHTML
