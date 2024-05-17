window.onload = function() {
    // Function to handle the GET request
    function handleRequest() {
        // Get the query parameter from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const requestData = urlParams.get('data');

        // Check if the GET request data is "hi"
        if (requestData === 'hi') {
            // Set the response text to "hi"
            document.getElementById('response').innerText = 'hi';
        } else {
            // Set the response text to indicate invalid data
            document.getElementById('response').innerText = 'Invalid data';
        }
    }

    // Trigger the function when the page loads
    handleRequest();
};
