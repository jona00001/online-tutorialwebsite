// change the narbar background when scrolling
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle
    ("window-scroll",window.scrollY>0)

})


// change the faq to toggle

const faqs =document.querySelectorAll(".faq");

faqs.forEach(faq => {
           faq.addEventListener("click",()  => {
            faq.classList.toggle("open-faq");

           const icon= faq.querySelector(".faq--icon i");
           if (icon.className === "fa-solid fa-plus"){
            icon.className ="fa-solid fa-minus";
           } else{
            icon.className="fa-solid fa-plus";
        }
        })
    })

    // navbar display open and close

    const menu= document.querySelector(".nav--menu");
    const openBtn= document.querySelector("#open-menu-btn");
    const closeBtn= document.querySelector("#close-menu-btn");


    openBtn.addEventListener("click",() => {
        menu.style.display ="flex";
        closeBtn.style.display="inline-block";
        openBtn.style.display="none";
    })

    // to close the nav bar

    
    const closeNav =() => {
        menu.style.display ="none";
        closeBtn.style.display="none";
        openBtn.style.display="inline-block";
    }
    
    closeBtn.addEventListener("click", closeNav );



