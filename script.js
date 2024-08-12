// Function to display the popup
function showPopup(message) {
    document.getElementById('popupMessage').querySelector('p').textContent = message;
    document.getElementById('popupOverlay').style.display = 'block';
    document.getElementById('popupMessage').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('popupMessage').style.display = 'none';
}

// Add event listener to the login button
document.getElementById('loginButton').addEventListener('click', function() {
    showPopup('Login Sucessful Welcome Back!');
});
