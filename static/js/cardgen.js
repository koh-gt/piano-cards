function get_roll_list() {
    const card_num = document.getElementById("card-roll-num").value;
    const container = document.getElementById("cardroll-cards");

    if (!card_num) {
        container.textContent = "Please enter a card number."; 
        return;
    }

    fetch('/roll_cards', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({'n_cards': card_num})
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {         
            container.innerHTML = ''; // Clear any existing content
            data.cardlist.forEach(card => {
                const cardElement = document.createElement("div"); // Create a div for each card
                cardElement.classList.add("card", card === 0 ? "black-card" : "white-card");
                container.appendChild(cardElement);
            });
        }
    })
    .catch(error => {
        container.textContent = "Error" + error.message;
    });
}

function submitForm() {
    get_roll_list();
}