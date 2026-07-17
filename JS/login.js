console.log("login.js loaded");

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    console.log("Login button clicked");

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login Successful");

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.user.role === "patient") {
                window.location.href = "../Patient Dashboard/PatientDashboard.html";
            } else if (data.user.role === "psychologist") {
                window.location.href = "../Psychologist Dashboard/PSYCHOLOGIST DASHBOARD.html";
            }
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error(error);
        alert("Server Error");
    }
});