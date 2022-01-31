import { incrementTickets } from "./totalTickets/TotalTickets.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id.startsWith("rideTicket")) {
            const rideEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(rideEvent)
        }
    }
)
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id.startsWith("foodTicket")) {
            const foodEvent = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(foodEvent)
        }
    }
)
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id.startsWith("gameTicket")) {
            const gameEvent = new CustomEvent("gameTicketPurchased")
            eventHub.dispatchEvent(gameEvent)
        }
    }
)
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id.startsWith("sideshowTicket")) {
            const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
            eventHub.dispatchEvent(sideshowEvent)
        }
    }
)
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id.startsWith("fullPackageTicket")) {
            const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
            eventHub.dispatchEvent(fullPackageEvent)
        }
    }
)
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "rideTicket" || clickEvent.target.id === "foodTicket" || clickEvent.target.id === "gameTicket" || clickEvent.target.id === "sideshowTicket" || clickEvent.target.id === "fullPackageTicket") {
            incrementTickets()
        }
    }
)

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

export const FoodBooth = () => {
    contentTarget.innerHTML += `
    <div class="ticketBooth">
    <button id="foodTicket">Food Ticket</button>
    </div>
`
}

export const GameBooth = () => {
    contentTarget.innerHTML += `
    <div class="gameBooth">
    <button id="gameTicket">Game Ticket</button>
    </div>
`
}

export const SideshowBooth = () => {
    contentTarget.innerHTML += `
    <div class="sideshowBooth">
    <button id="sideshowTicket">Sideshow Ticket</button>
    </div>
`
}

export const FullPackageBooth = () => {
    contentTarget.innerHTML += `
    <div class="fullPackageBooth">
    <button id="fullPackageTicket">Full Package Ticket</button>
    </div>
`
}

