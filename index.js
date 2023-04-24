

//  swiper code starts 


 var swiper = new Swiper(".swiper", {
    autoplay :{
        delay:3000,
    },
    loop:true,
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
     },
    coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });



//  gallery code starts 


const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
      // deactivate existing active 'filter-item'
      filterContainer.querySelector(".active").classList.remove("active");
      // activate new 'filter-item'
      event.target.classList.add("active");
      const filterValue = event.target.getAttribute("data-filter");
      galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
         item.classList.remove("hide");
          item.classList.add("show");
      }
      else{
         item.classList.remove("show");
         item.classList.add("hide");
      }
      });
  }
});





 
var swiper = new Swiper(".slide-content", {
   autoplay:{
    delay:5000 ,
   },
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
         slidesPerView: 4,
       },
    },
  });
 
