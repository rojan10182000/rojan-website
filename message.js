// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to display the appropriate message based on query parameter
function displayMessage() {
    const selection = getQueryParam('selection');
    console.log("Selected option:", selection); // Debugging log

    // Hide all messages
    document.querySelectorAll('.message').forEach(function(el) {
        el.classList.remove('show');
    });

    // Show the appropriate message
    if (selection === "Visitor") {
        document.getElementById('visitor-message').classList.add('show');
    }
    else if (selection === "Programmer") {
        document.getElementById('programmer-message').classList.add('show');
    }
    else if (selection === "Employer") {
        document.getElementById('employer-message').classList.add('show');
    }
    else {
        document.getElementById('no-selection-message').classList.add('show');
    }
}

// Call the function when the page loads
window.onload = displayMessage;
