const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")
let totalTickets = 0

export const TotalTicketHolders = () => {
    contentTarget.innerHTML = `
        <div class="totalTickets"><p>Total tickets purchased: ${totalTickets}</div>`
}

export const incrementTickets = () => {
    totalTickets++
    eventHub.dispatchEvent(new CustomEvent("stateChanged"))
}

