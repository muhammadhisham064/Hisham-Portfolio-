
let main=document.querySelector("header")
let cursor=document.querySelector("#cursor")
let heading=document.querySelector("#mood-btn")

document.body.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX, 
    y: dets.clientY,
    duration: 1,
    ease: "back.out"
  });
});


heading.addEventListener("mouseenter",function () {
  gsap.to(cursor,{
    scale:3
  })  
})

heading.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1
  });
});




const texts = [
    "Designing for delight. ✦",
    "Storytelling through layout. ✦",
    "Making ideas feel. ✦"
  ];
  
  let count = 0;
  const textDiv = document.getElementById("rotatingText");
  
  setInterval(() => {
    count = (count + 1) % texts.length;
    textDiv.textContent = texts[count];
  }, 1000); 
  
  const themes = [
    { bg: "#EDE8E3", text: "#1c1c1b" },
    { bg: "#272727", text: "#D6FF00" },
    { bg: "#141D2E", text: "#016AFF" },
    { bg: "#1F6246", text: "#FFBCD2" },
    { bg: "#BA554A", text: "#FFE086" },
    { bg: "#514C26", text: "#EBFF00" },
    { bg: "#99A3BF", text: "#EBF0FF" },
    { bg: "#42503E", text: "#FFD4AF" }
  ];
  
  let currentTheme = 0;
  
  const lottieContainer = document.getElementById('lottie');
  
  const animation = lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Main Scene.json'
  });
  
  // Helper to apply color
  function applyLottieColor(color) {
    const svg = lottieContainer.querySelector('svg');
    if (!svg) return;
  
    svg.querySelectorAll('[stroke]').forEach(el => {
      el.setAttribute('stroke', color);
    });
  
    svg.querySelectorAll('[fill]').forEach(el => {
      if (el.getAttribute('fill') !== 'none') {
        el.setAttribute('fill', color);
      }
    });
  }
  
  // Keep color updated during animation
  animation.addEventListener('enterFrame', () => {
    const theme = themes[currentTheme];
    applyLottieColor(theme.text);
  });
  
  // Mood switch button
  document.getElementById("mood-btn").addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themes.length;
    const newTheme = themes[currentTheme];
  
    document.documentElement.style.setProperty('--bg-color', newTheme.bg);
    document.documentElement.style.setProperty('--text-color', newTheme.text);
  
    applyLottieColor(newTheme.text); // Apply right away
  });
  





  let mq = gsap.matchMedia();

  mq.add(
    {
      isDesktop: "(min-width: 501px)",
      isMobile: "(max-width: 500px)"
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions;
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mybag",
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
          markers: false
        }
      });
  
      if (isDesktop) {
        // Desktop animations
        tl.to(".tech:nth-child(2)", { x: 300 }, 0);
        tl.to(".tech:nth-child(3)", { x: -300 }, 0);
        tl.to(".tech:nth-child(4)", { y: -300 }, 0);
        tl.to(".tech:nth-child(5)", { y: 300 }, 0);
        tl.to(".tech:nth-child(6)", { x: 200, y: -200 }, 0);
        tl.to(".tech:nth-child(7)", { x: -200, y: 200 }, 0);
        tl.to(".tech:nth-child(8)", { x: 250, y: 250 }, 0);
      }
  
      if (isMobile) {
        // Mobile-optimized animation
        tl.to(".tech:nth-child(2)", { x: 80 }, 0);
        tl.to(".tech:nth-child(3)", { x: -120 }, 0);
        tl.to(".tech:nth-child(4)", { y: -80 }, 0);
        tl.to(".tech:nth-child(5)", { y: 80 }, 0);
        tl.to(".tech:nth-child(6)", { x: 70, y: -60 }, 0);
        tl.to(".tech:nth-child(7)", { x: -90, y: 60 }, 0);
        tl.to(".tech:nth-child(8)", { x: 95, y: 35 }, 0);
      }
    }
  );
  


  let lines = document.querySelectorAll(".line");
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-wrapper",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
      markers: false
    }
  });
  
  lines.forEach((line, i) => {
    tl.to(line, {
      opacity: 1,
      duration: 0.5,
      ease: "none"
    }, i);
  });
  




  var h1 = document.getElementById("heading");
var h1Text = h1.textContent;





















// Fix: split, not /split
var splittedText = h1Text.split("");


// Wrap each character in a span
var clutter = "";
splittedText.forEach(function (elem) {
  clutter += `<span class="char">${elem}</span>`; // use backticks and class
});

// Replace heading content with spans
h1.innerHTML = clutter;

// Animate each span
gsap.from("#heading .char", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.05, // smaller stagger looks better
});

gsap.from("#rotatingText", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.05, // smaller stagger looks better
});




const header = gsap.timeline({
  defaults: {
    opacity: 0,
    duration: 1,
    delay:1,
    ease: "power2.out",
    stagger: 0.2
  }
});



header.from("#logo, #mood-btn,#contact, #socials,#lottie", {
  y: 30,
});


