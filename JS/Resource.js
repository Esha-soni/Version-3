/*=====================================================
                PsyConnect Resources JS
======================================================*/


document.addEventListener("DOMContentLoaded", () => {


    /*================================
            Mobile Navbar Toggle
    =================================*/


    const navbar = document.querySelector(".glass-navbar");

    const navLinks = document.querySelector(".nav-links");


    if(navbar && navLinks){

        const menuBtn = document.createElement("button");

        menuBtn.classList.add("menu-toggle");

        menuBtn.innerHTML =
        `<i class="fa-solid fa-bars"></i>`;


        navbar.insertBefore(
            menuBtn,
            navLinks
        );


        menuBtn.addEventListener(
            "click",
            ()=>{

                navLinks.classList.toggle(
                    "show"
                );


                menuBtn.innerHTML =
                navLinks.classList.contains("show")
                ?
                `<i class="fa-solid fa-xmark"></i>`
                :
                `<i class="fa-solid fa-bars"></i>`;

            }
        );

    }



    /*================================
            Resource Filtering
    =================================*/


    const categoryButtons =
    document.querySelectorAll(
        ".category-chip"
    );


    const resourceCards =
    document.querySelectorAll(
        ".resource-card"
    );


    categoryButtons.forEach(button=>{


        button.addEventListener(
            "click",
            ()=>{


                // Remove active class

                categoryButtons.forEach(btn=>{

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );



                const category =
                button.innerText
                .trim()
                .toLowerCase();



                resourceCards.forEach(card=>{


                    const cardCategory =
                    card.querySelector(
                        ".resource-category"
                    )
                    ?.innerText
                    .toLowerCase();



                    if(
                        category === "all" ||
                        cardCategory.includes(category)
                    ){

                        card.style.display =
                        "block";


                    }
                    else{


                        card.style.display =
                        "none";


                    }


                });



            }
        );


    });




    /*================================
            Resource Search
    =================================*/


    const searchInput =
    document.querySelector(
        ".search-box input"
    );


    const searchButton =
    document.querySelector(
        ".search-card .btn-primary"
    );



    function searchResources(){


        const value =
        searchInput.value
        .toLowerCase()
        .trim();



        resourceCards.forEach(card=>{


            const text =
            card.innerText
            .toLowerCase();



            if(
                text.includes(value)
            ){

                card.style.display =
                "block";

            }

            else{

                card.style.display =
                "none";

            }


        });


    }



    if(searchButton){

        searchButton.addEventListener(
            "click",
            searchResources
        );

    }



    if(searchInput){

        searchInput.addEventListener(
            "keyup",
            (event)=>{


                if(event.key==="Enter"){

                    searchResources();

                }


            }
        );

    }





    /*================================
            Newsletter Validation
    =================================*/


    const newsletterForm =
    document.querySelector(
        ".newsletter-form"
    );


    if(newsletterForm){


        newsletterForm.addEventListener(
            "submit",
            (event)=>{


                event.preventDefault();


                const email =
                newsletterForm.querySelector(
                    "input"
                ).value;



                if(
                    email === ""
                ){

                    showMessage(
                        "Please enter your email address",
                        "error"
                    );

                    return;

                }



                if(
                    !email.includes("@")
                ){

                    showMessage(
                        "Please enter a valid email",
                        "error"
                    );

                    return;

                }



                showMessage(
                    "Thank you for subscribing!",
                    "success"
                );



                newsletterForm.reset();


            }
        );


    }





    /*================================
            Button Feedback
    =================================*/


    const actionButtons =
    document.querySelectorAll(
        ".resource-link, .btn-primary"
    );



    actionButtons.forEach(button=>{


        button.addEventListener(
            "click",
            ()=>{


                button.style.transform =
                "scale(.95)";


                setTimeout(()=>{


                    button.style.transform =
                    "";


                },150);


            }
        );


    });



});





/*=====================================================
                Toast Message
======================================================*/


function showMessage(message,type){


    const toast =
    document.createElement(
        "div"
    );


    toast.className =
    `toast ${type}`;


    toast.innerHTML =
    `
        <i class="fa-solid 
        ${type==="success"
        ?"fa-circle-check"
        :"fa-circle-exclamation"}">
        </i>

        ${message}
    `;



    document.body.appendChild(
        toast
    );



    setTimeout(()=>{


        toast.classList.add(
            "show"
        );


    },100);



    setTimeout(()=>{


        toast.classList.remove(
            "show"
        );


        setTimeout(()=>{

            toast.remove();

        },300);



    },3000);



}