import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { FullPackageTicketHolders } from "./fullPackage/FullPackageTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";
import { TicketBooth, FoodBooth, GameBooth, SideshowBooth, FullPackageBooth } from "./TicketBooth.js";
import { TotalTicketHolders } from "./totalTickets/TotalTickets.js";

const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("stateChanged", event => {
        TotalTicketHolders()
})

// Import and invoke the ticket booth component function
const startUp = () => { 
TicketBooth()
RideTicketHolders()
FoodBooth()
FoodTicketHolders()
GameBooth()
GameTicketHolders()
SideshowBooth()
SideshowTicketHolders()
FullPackageBooth()
FullPackageTicketHolders()
TotalTicketHolders()
}

startUp()