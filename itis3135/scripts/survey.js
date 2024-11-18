document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("intro-form");
    const coursesContainer = document.getElementById("courses-container");
    const addCourseButton = document.getElementById("add-course-btn");

   
    function displayResults() {
        const results = `
            <h2>Your Introduction Page</h2>
            <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
            <p><strong>Mascot:</strong> ${document.getElementById("mascot").value}</p>
            <p><strong>Image Caption:</strong> ${document.getElementById("image-caption").value}</p>
            <p><strong>Personal Background:</strong> ${document.getElementById("personal-background").value}</p>
            <p><strong>Professional Background:</strong> ${document.getElementById("professional-background").value}</p>
            <p><strong>Academic Background:</strong> ${document.getElementById("academic-background").value}</p>
            <p><strong>Web Development Background:</strong> ${document.getElementById("web-background").value}</p>
            <p><strong>Primary Computer Platform:</strong> ${document.getElementById("platform").value}</p>
            <p><strong>Courses Currently Taking:</strong></p>
            <ul>
                ${Array.from(document.querySelectorAll(".course-input"))
                    .map((input) => `<li>${input.value}</li>`)
                    .join("")}
            </ul>
            <p><strong>Funny Thing:</strong> ${document.getElementById("funny-thing").value}</p>
            <p><strong>Anything Else?</strong> ${document.getElementById("anything-else").value}</p>
        `;
        form.outerHTML = results;
    }

    
    form.addEventListener("submit", function (e) {
        e.preventDefault();

       
        const requiredFields = [
            "name",
            "mascot",
            "image",
            "image-caption",
            "personal-background",
            "professional-background",
            "academic-background",
            "web-background",
            "platform" 
        ];

        let allValid = true;
        requiredFields.forEach((id) => {
            const field = document.getElementById(id);
            if (!field.value) {
                allValid = false;
                field.style.border = "2px solid red";
            } else {
                field.style.border = "";
            }
        });

        
        const agreeCheckbox = document.getElementById("agree");
        if (!agreeCheckbox.checked) {
            allValid = false;
            alert("You must agree to the terms before submitting.");
        }

        if (!allValid) {
            alert("Please fill out all required fields.");
            return;
        }

        
        displayResults();
    });


    form.addEventListener("reset", function () {
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach((input) => {
            input.style.border = "";
        });

        
        const courseInputs = document.querySelectorAll(".course-input");
        courseInputs.forEach((input, index) => {
            if (index > 0) input.remove(); 
        });
    });

    
    addCourseButton.addEventListener("click", function () {
        const newCourseInput = document.createElement("input");
        newCourseInput.type = "text";
        newCourseInput.className = "course-input";
        newCourseInput.placeholder = "Enter course name";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            newCourseInput.remove();
            deleteButton.remove();
        });

        coursesContainer.appendChild(newCourseInput);
        coursesContainer.appendChild(deleteButton);
    });
});

