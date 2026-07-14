document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;

    if(name === "" || email === "") {
        alert("Please fill all fields!");
    } else {
        alert("Thanks " + name + "! Your message has been received.");
        this.reset(); // clears form
    }
});
