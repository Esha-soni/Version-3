console.log("psychologistRegistration.js Loaded");

const psychologistForm = document.getElementById("psychologistForm");


if (psychologistForm) {

psychologistForm.addEventListener("submit", async (e) => {

    e.preventDefault();


    const user = JSON.parse(localStorage.getItem("user"));


    const psychologistData = {

        user: user._id,

        fullName: document.getElementById("fullName").value,

        dob: document.getElementById("dob").value,

        gender: document.getElementById("gender").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value,

        city: document.getElementById("city").value,

        professionalBio: document.getElementById("professionalBio").value,


        qualification: document.getElementById("qualification").value,

        institution: document.getElementById("institution").value,

        graduationYear: document.getElementById("graduationYear").value,

        specialization: document.getElementById("specialization").value,


        licenseNumber: document.getElementById("licenseNumber").value,

        issuingAuthority: document.getElementById("issuingAuthority").value,

        licenseType: document.getElementById("licenseType").value,

        licenseExpiryDate: document.getElementById("licenseExpiryDate").value,


        experience: document.getElementById("experience").value,

        previousWorkplace: document.getElementById("previousWorkplace").value,

        expertise: document.getElementById("expertise").value

    };


    try {


        const response = await fetch(
            "http://localhost:5000/api/register-psychologist",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify(psychologistData)
            }
        );


        const data = await response.json();


        if(response.ok){

            alert("Psychologist Registration Successful");

            window.location.href =
            "../Psychologist Dashboard/PsychologistDashboard.html";

        }
        else{

            alert(data.message);

        }


    }
    catch(error){

        console.log(error);

        alert("Server Error");

    }


});

}