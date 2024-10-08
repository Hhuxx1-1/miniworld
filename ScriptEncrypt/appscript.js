// Function to handle form submission
function submitForm() {
    // Access the form data using document.getElementById
    const scriptData = document.getElementById('script').value;
    const myKey = document.getElementById('KEY').value;
    // Prepare the data to be sent
    const data = {
        key :  myKey,
        script: scriptData
    };

    // Send the data via POST to a specific URL
    fetch('https://script.google.com/macros/s/AKfycbzHSSVec-xa2r8ucyF9vcuHKxreSFL99gp39Q-z4rkeRk805S8ARuSKMquAPU5vxlUwHg/exec', {
        redirect: "follow",
        method: 'POST', // Sending a POST request
        headers: {
            'Content-Type': 'text/plain;charset=utf-8', // Specify content type as JSON
        },
        body: JSON.stringify(data), // Convert data to JSON string
    })
    .then(response => response.json()) // Handle the response
    .then(data => {
        console.log('Success:', data); // Log the response from the server
        document.getElementById("output").innerHTML = '<pre id="CopyThis">' + data.encscript + '</pre>'
    })
    .catch((error) => {
        console.error('Error:', error); // Log any error
    });
}
