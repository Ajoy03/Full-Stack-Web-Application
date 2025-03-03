// User Authentication
function loginUser() {
    let username = document.getElementById("username").value;
    if (username.trim() !== "") {
        localStorage.setItem("user", username);
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("upload-container").style.display = "block";
    } else {
        alert("Please enter a username.");
    }
}

// Image Upload and Display
function uploadImage() {
    let fileInput = document.getElementById("imageUpload");
    let gallery = document.getElementById("gallery");

    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        let reader = new FileReader();
        reader.onload = function(event) {
            let img = document.createElement("img");
            img.src = event.target.result;
            img.classList.add("mosaic-item");
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select an image to upload.");
    }
}
