let currentStep = "food_type";

let selectedRecipe = "";
let customerName = "";
let mobile = "";
let email = "";
let address = "";

function addMessage(message, sender) {

    let chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `
        <div class="${sender}">
            ${message}
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {

    let input = document.getElementById("user-input");
    let message = input.value.trim();

    if(message === "") {
        return;
    }

    addMessage(message, "user");

    input.value = "";

    if(currentStep === "food_type") {

        if(message.toLowerCase() === "veg") {

            addMessage(
                "Recommended Recipes:<br>" +
                "1. Paneer Butter Masala<br>" +
                "2. Veg Biryani<br>" +
                "3. Mix Veg Curry<br><br>" +
                "Please select recipe number (1-3)",
                "bot"
            );

            currentStep = "recipe_selection_veg";
        }

        else if(
            message.toLowerCase() === "non-veg" ||
            message.toLowerCase() === "nonveg"
        ) {

            addMessage(
                "Recommended Recipes:<br>" +
                "1. Chicken Biryani<br>" +
                "2. Chicken Tikka<br>" +
                "3. Chicken Curry<br><br>" +
                "Please select recipe number (1-3)",
                "bot"
            );

            currentStep = "recipe_selection_nonveg";
        }

        else {

            addMessage(
                "Please enter Veg or Non-Veg",
                "bot"
            );
        }
    }

    else if(currentStep === "recipe_selection_veg") {

        if(message === "1") {
            selectedRecipe = "Paneer Butter Masala";
        }
        else if(message === "2") {
            selectedRecipe = "Veg Biryani";
        }
        else if(message === "3") {
            selectedRecipe = "Mix Veg Curry";
        }
        else {
            addMessage("Please select 1, 2 or 3", "bot");
            return;
        }

        addMessage(
            selectedRecipe +
            " selected.<br><br>Please enter your Name:",
            "bot"
        );

        currentStep = "name";
    }

    else if(currentStep === "recipe_selection_nonveg") {

        if(message === "1") {
            selectedRecipe = "Chicken Biryani";
        }
        else if(message === "2") {
            selectedRecipe = "Chicken Tikka";
        }
        else if(message === "3") {
            selectedRecipe = "Chicken Curry";
        }
        else {
            addMessage("Please select 1, 2 or 3", "bot");
            return;
        }

        addMessage(
            selectedRecipe +
            " selected.<br><br>Please enter your Name:",
            "bot"
        );

        currentStep = "name";
    }

    else if(currentStep === "name") {

        customerName = message;

        addMessage(
            "Please enter your Mobile Number:",
            "bot"
        );

        currentStep = "mobile";
    }

    else if(currentStep === "mobile") {

        mobile = message;

        addMessage(
            "Please enter your Email:",
            "bot"
        );

        currentStep = "email";
    }

    else if(currentStep === "email") {

        email = message;

        addMessage(
            "Please enter your Address:",
            "bot"
        );

        currentStep = "address";
    }

    else if(currentStep === "address") {

        address = message;

        fetch("/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: customerName,
                mobile: mobile,
                email: email,
                address: address,
                recipe: selectedRecipe
            })
        })
        .then(response => response.json())
        .then(data => {

            addMessage(
                "🎉 Order Placed Successfully!<br><br>" +
                "Order ID: " + data.order_id +
                "<br><br>Recipe: " + selectedRecipe,
                "bot"
            );

            currentStep = "food_type";

            selectedRecipe = "";
            customerName = "";
            mobile = "";
            email = "";
            address = "";
        })
        .catch(error => {

            addMessage(
                "Error placing order.",
                "bot"
            );

            console.error(error);
        });
    }
}
