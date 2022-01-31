const rideTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")
const gameTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        rideTarget.innerHTML += `
        <div class="person bigSpender"></div>`
        foodTarget.innerHTML += `
        <div class="person bigSpender"></div>`
        gameTarget.innerHTML += `
        <div class="person bigSpender"></div>`
        sideshowTarget.innerHTML += `
        <div class="person bigSpender"></div>`
    })
}