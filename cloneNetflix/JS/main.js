$('.owl-carousel').owlCarousel({
    
    loop:true,
    margin:10,
    merge:true,
    video:true,
    nav:false,
    lazyLoad: true,
    center:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener('click',()=>{
    const active = document.querySelector(".navbar").classList.toggle('activenav')
})






