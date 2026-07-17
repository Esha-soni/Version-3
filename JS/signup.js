console.log("signup.js loaded");

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const role = document.querySelector('input[name="role"]:checked');

    if (!role) {
        alert("Please select a role");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {

        const response = await fetch("http://localhost:5000/api/signup", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                fullName,
                email,
                password,
                role: role.value
            })

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            // Registration form માટે data save
            localStorage.setItem("user", JSON.stringify(data.user));
            ({
                fullName,
                email,
                role: role.value
            }));

            if (role.value === "patient") {

                window.location.href = "../Registration Form/Patient Registration.html";

            } else {

                window.location.href = "../Registration Form/Psychologist Registration.html";

            }

        }

    } catch (error) {

        console.error(error);
        alert("Unable to connect to server.");

    }

});
