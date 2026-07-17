console.log("patientRegistration.js Loaded");

const patientForm = document.getElementById("patientForm");

patientForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const symptoms = [];

    document.querySelectorAll('input[name="symptoms"]:checked').forEach((item) => {
        symptoms.push(item.value);
    });

    const user = JSON.parse(localStorage.getItem("user"));

    const patientData = {
        user: user._id,

        fullName: document.getElementById("fullName").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,

        concern: document.getElementById("concern").value,
        description: document.getElementById("description").value,

        symptoms: symptoms,

        preferredLanguage: document.getElementById("preferredLanguage").value,
        preferredPsychologistGender: document.getElementById("preferredPsychologistGender").value,
        preferredTime: document.getElementById("preferredTime").value,

        emergencyContactName: document.getElementById("emergencyContactName").value,
        emergencyRelationship: document.getElementById("emergencyRelationship").value,
        emergencyPhone: document.getElementById("emergencyPhone").value,

        previousTherapy: document.getElementById("previousTherapy").value,
        currentMedications: document.getElementById("currentMedications").value,
        existingDiagnosis: document.getElementById("existingDiagnosis").value,
        allergies: document.getElementById("allergies").value,
        additionalNotes: document.getElementById("additionalNotes").value
    };

    try {

        const response = await fetch("http://localhost:5000/api/register-patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patientData)
        });

        const data = await response.json();

        if (response.ok) {

            alert("Patient Registration Successful");

            window.location.href = "../Patient Dashboard/PatientDashboard.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);
        alert("Server Error");

    }

});