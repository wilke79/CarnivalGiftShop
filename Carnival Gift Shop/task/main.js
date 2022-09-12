const input = require('sync-input');

let tickets = 0;
let gifts = [{Name: "Teddy Bear", Price: 10, ID: 1},
    {Name: "Big Red Ball", Price: 5, ID: 2},
    {Name: "Huge Bear", Price: 50, ID: 3},
    {Name: "Candy", Price: 8, ID: 4},
    {Name: "Stuffed Tiger", Price: 15, ID: 5},
    {Name: "Stuffed Dragon", Price: 30, ID: 6},
    {Name: "Skateboard", Price: 100, ID: 7},
    {Name: "Toy Car", Price: 25, ID: 8},
    {Name: "Basketball", Price: 20, ID: 9},
    {Name: "Scary Mask", Price: 75, ID: 10}];
function showGifts() {
    console.log("Here's the list of gifts:\n");
    gifts.forEach(gift => {
        console.log(gift.ID + "- " + gift.Name + ", Cost: " + gift.Price + " tickets");
    });
}

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
showGifts();
let selection = 0;
do {
    console.log("\nWhat do you want to do?");
    selection = Number(input("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop"));
    if (isNaN(selection) || selection < 0 || selection > 5) {
        console.log("Please enter a valid number!")
        continue;
    }
    switch (selection) {
        case 1:
            if (gifts.length === 0) {
                console.log("Wow! There are no gifts to buy.")
            } else {
                let wanted = Number(input("Enter the number of the gift you want to get: "));
                if (isNaN(wanted)) {
                    console.log("Please enter a valid number!")
                    break;
                }
                let giftIndex = gifts.findIndex((element) => element.ID === wanted);
                if (giftIndex === -1) {
                    console.log("There is no gift with that number!");
                    break;
                }
                if (tickets < gifts[giftIndex].Price) {
                    console.log("You don't have enough tickets to buy this gift.");
                    break;
                }
                console.log("Here you go, one " + gifts[giftIndex].Name + "!");
                tickets -= gifts[giftIndex].Price;
                gifts.splice(giftIndex, 1);
                console.log("Total tickets: " + tickets);
            }
            break;
        case 2:
            let amount = Number(input("Enter the ticket amount: "));
            if (isNaN(amount) || amount < 0 || amount > 1000) {
                console.log("Please enter a valid number between 0 and 1000.");
                break;
            }
            tickets += amount;
            console.log("Total tickets: " + tickets);
            break;
        case 3:
            console.log("Total tickets: " + tickets);
            break;
        case 4:
            showGifts();
            if (gifts.length === 0) {
                console.log("Wow! There are no gifts to buy.")
                break;
            }
            break;
        default:
            break;
    }
} while(selection !== 5);
console.log("Have a nice day!");
