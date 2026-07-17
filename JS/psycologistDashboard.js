/* =========================================================
   PsyConnect Psychologist Dashboard JS
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {



    /* =========================================================
       SIDEBAR SECTION SWITCHING
       ========================================================= */


    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section");


    function showSection(sectionId) {


        sections.forEach(section => {

            if(section.id === sectionId){

                section.style.display = "block";

                setTimeout(() => {
                    section.classList.add("active-section");
                }, 10);

            }

            else{

                section.style.display = "none";
                section.classList.remove("active-section");

            }

        });



        navLinks.forEach(link => {


            link.classList.remove("active");


            if(link.getAttribute("href") === "#" + sectionId){

                link.classList.add("active");

            }


        });


    }



    navLinks.forEach(link => {


        link.addEventListener("click", (event)=>{


            event.preventDefault();


            const sectionId =
            link.getAttribute("href").substring(1);



            showSection(sectionId);



        });


    });



    // Default section

    showSection("dashboard");







    /* =========================================================
       SMOOTH BUTTON FEEDBACK
       ========================================================= */


    const buttons =
    document.querySelectorAll("button");



    buttons.forEach(button=>{


        button.addEventListener("click",()=>{


            button.classList.add("clicked");


            setTimeout(()=>{

                button.classList.remove("clicked");

            },200);


        });


    });







    /* =========================================================
       TASK CHECKBOXES
       ========================================================= */


    const taskInputs =
    document.querySelectorAll(".task-list input");



    taskInputs.forEach(task=>{


        task.addEventListener("change",()=>{


            const text =
            task.parentElement;


            if(task.checked){

                text.classList.add("completed-task");

            }

            else{

                text.classList.remove("completed-task");

            }


        });


    });







    /* =========================================================
       SEARCH FUNCTION
       Patients / Reports / Messages
       ========================================================= */


    const searchInputs =
    document.querySelectorAll(
        ".search-box input"
    );



    searchInputs.forEach(input=>{


        input.addEventListener("keyup",()=>{


            const value =
            input.value.toLowerCase();



            let container =
            input.closest("section");



            if(!container)
            return;



            const searchableItems =
            container.querySelectorAll(
                ".patient-card, .conversation, tbody tr"
            );



            searchableItems.forEach(item=>{


                const text =
                item.innerText.toLowerCase();



                if(text.includes(value)){

                    item.style.display="";

                }

                else{

                    item.style.display="none";

                }



            });



        });


    });







    /* =========================================================
       FILTER BUTTONS
       Appointment Filters
       ========================================================= */


    const filterButtons =
    document.querySelectorAll(".filter-btn");



    filterButtons.forEach(button=>{


        button.addEventListener("click",()=>{


            filterButtons.forEach(btn=>{

                btn.classList.remove("active");

            });



            button.classList.add("active");



        });


    });







    /* =========================================================
       NOTIFICATION SWITCHES
       ========================================================= */


    const switches =
    document.querySelectorAll(
        ".switch input"
    );



    switches.forEach(toggle=>{


        toggle.addEventListener("change",()=>{


            if(toggle.checked){


                console.log(
                    "Notification enabled"
                );


            }

            else{


                console.log(
                    "Notification disabled"
                );


            }



        });


    });







    /* =========================================================
       PROFILE IMAGE BUTTON
       ========================================================= */


    const cameraButtons =
    document.querySelectorAll(
        ".profile-image button"
    );



    cameraButtons.forEach(btn=>{


        btn.addEventListener("click",()=>{


            alert(
                "Profile image upload feature will connect with backend."
            );


        });


    });







    /* =========================================================
       ACTION BUTTON PLACEHOLDERS
       ========================================================= */


    const actionButtons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .table-btn"
    );



    actionButtons.forEach(button=>{


        button.addEventListener("click",(e)=>{


            const action =
            button.innerText.trim();



            if(
                action &&
                !button.closest("#settings")
            ){

                console.log(
                    action + " clicked"
                );

            }


        });


    });







    /* =========================================================
       LOGOUT
       ========================================================= */


    const logout =
    document.querySelector(".logout-btn");



    if(logout){


        logout.addEventListener("click",()=>{


            const confirmLogout =
            confirm(
                "Are you sure you want to logout?"
            );


            if(confirmLogout){


                console.log(
                    "Logging out..."
                );


                // Backend authentication
                // redirect will be added later


            }



        });


    }







});