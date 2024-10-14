
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 800)
})

gsap.ticker.lagSmoothing(0)

introText = gsap.to('#header .headline-wrap .char',{
    y:0,
    stagger:0.1,
    
})

// 맨위 수평 스크롤바
gsap.to('.top-scroll .scroll-inner',{
    scrollTrigger:{
        trigger:".wrapper",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
       scrub:0
    },
    scaleX:1
})

gsap.defaults({
    ease:'none',
})

//스크롤 내릴때 로고 위로 올리기
gsap.to('#header .group-title svg',{
    scrollTrigger:{
        trigger:".sc-intro .sticky-wrapper",
        start:"0% 0%",
        end:"10% 0%",
        scrub:0,
        // markers:true,
    },
    yPercent:-100
})

//sc-intro
// 이미지 시퀀싱
imgList=``;
for (let idx = 0; idx < 220; idx++) {
    first=(idx===0)?"on":'';
    imgList+=`<img class="${first}" src="./assets/img/Intro1080_${idx.toString().padStart(5, '0')}.png" alt>`
}

$('.sc-intro .thumb').html(imgList);

//인트로 텍스트
introText = gsap.to('.sc-intro .headline .char',{
    y:0,
    stagger:0.1,
    paused:true,
})

ScrollTrigger.create({
    trigger:".sc-intro .sticky-wrapper",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    onUpdate:function(self){
        idx=Math.floor(self.progress * 219);

        if(idx > 5){
            introText.reverse();
        }else{
            introText.play();
        }

        $('.sc-intro .thumb img').eq(idx).addClass('on').siblings().removeClass('on')
    }
})

introText.play();

//sc-product headline 
textChar = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-product .headline",
        start:"0% 0%",
        end:"100% 80%",
        // markers:true,
       scrub:1
    },
})

textChar.from('.sc-product .char',{
    scale:0,
    stagger:0.1,
},'a')
textChar.from('.sc-product .word',{
    xPercent:15
},'a')

//sc-product swiper
// const mainSlide = new Swiper('.moblie-slide',{
//     slidesPerView: 'auto',
//     centeredSlides: true,    
//     spaceBetween: 30,
//     pagination: {
//                       el: '.swiper-pagination',
//                       clickable: true,
//                 }
   
//   })

//sc-eggovac headline
const spans = document.querySelectorAll('.sc-eggovac .char');

spans.forEach((span, index) => {
  gsap.to(span, {
    scrollTrigger: {
      trigger: '.sc-eggovac .headline',
      start: "0% 50%", 
      end: "100% 30%",
    //   markers: true,
      scrub:0,
    },
    rotation:"random(0,110)",
    ease: "none"
  });
});

//sc-eggovac video
gsap.to('.sc-eggovac .video-area',{
    scrollTrigger:{
        trigger:".sc-eggovac .sticky-wrapper",
        start:"0% 30%",
        end:"100% 100%",
        // markers:true,
       scrub:0
    },
    width:'99%'
})

//sc-hydrosteam headline

gsap.from('.sc-hydrosteam .headline .crumbs g',{
    scrollTrigger:{
        trigger:".sc-hydrosteam .headline",
        start:"0% 50%",
        end:"100% 50%",
       scrub:0,
    //    markers:true
    },
    stagger:1,
    opacity:0,
    duration:0
   
})


//sc-hydrosteam video
gsap.to('.sc-hydrosteam .video-area',{
    scrollTrigger:{
        trigger:".sc-hydrosteam .sticky-wrapper",
        start:"0% 100%",
        end:"100% 100%",
        // markers:true,
       scrub:0
    },
    width:'99%'
})

//sc-carpet headline

gsap.registerPlugin(ScrollTrigger);

gsap.from('.sc-carpet .word .char', {
  scrollTrigger: {
    trigger: ".sc-carpet .char",
    start: "0% 70%",  
    end: "100% 100%",
    scrub: 0.5,       
    // markers: true,     
  },
  scale: 0,           
  filter: "blur(40px)", 
  stagger: {
    from: "center",   
    each: 0.1,
  }
});



//sc-carpet video-area
gsap.to('.sc-carpet .video-area',{
    scrollTrigger:{
        trigger:".sc-carpet .sticky-wrapper",
        start:"0% 100%",
        end:"100% 100%",
        // markers:true,
       scrub:0
    },
    width:'99%'
})
//sc-carpet headline
gsap.from('.sc-carpet .word .char',{
    scrollTrigger:{
        trigger:".sc-carpet .word",
        start:"0% 50%",
        end:"100% 0%",
        scrub:0,
        // markers:true,
    },
    scale:0,
    "filter":"blur(20px)",
    stagger:{
        from:"center",
        each:0.1,
    }
})

//sc-compare
gsap.matchMedia().add("(min-width: 751px)", () => {
    document.querySelectorAll('.sc-compare .compare-list').forEach((item, index) => {
        const showContent = gsap.timeline({
            scrollTrigger: {
                trigger: item,  
                start: "top 10%",  
                end: "bottom 100%",
                scrub: 0,       
                // markers: true    
            }
        });

        // 이미지와 sub-item이 동시에 순차적으로 나타나게 함
        showContent
          .to(item.querySelectorAll('img'), {
              opacity: 1,
              scale: 1,
              stagger: 0.3,   
              duration: 1,     
          }, 0)  
          .to(item.querySelectorAll('.sub-item'), {
              opacity: 1,
              stagger: 0.3,   
              duration: 0.5,    
          }, 0);  
    });
});





//탑 버튼 애니메이션
$(window).scroll(function(){
    curr = $(this).scrollTop();
    if (curr >= 100) {
        $('.btn-top').addClass('show');
    } else {
        $('.btn-top').removeClass('show');
    }
})

//최상단으로 스크롤 
$('.btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})








  































