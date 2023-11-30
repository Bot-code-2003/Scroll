gsap.registerPlugin(ScrollTrigger);

function anime(name) {
  gsap.to(name, {
    x: 880,
    scrollTrigger: {
      trigger: name,
      start: "top 98%",
      end: "bottom 80%",
      scrub: 1,
    },
  });
}

function pinAnime(name) {
  gsap.to(name, {
    scrollTrigger: {
      trigger: "h1",
      start: "top 39%",
      end: "bottom 54%",
      pin: true,
      // markers: true,
    },
  });
}

function anime1(name) {
  gsap.to(name, {
    opacity: 1,
    scrollTrigger: {
      trigger: name,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  });
}

pinAnime(".heading");
anime(".card");
anime(".card2");
anime(".card3");
anime(".card4");
anime1(".card5");
anime1(".card6");

// alert("Hello");

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
