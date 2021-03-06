const tl=gsap.timeline()
gsap.registerPlugin('scrollTrigger');
// for navigation
gsap.from('.navigation',{
    scrollTrigger:{
        trigger:'.navigation',
        toogleActions:'restart none restart none',
        // scrub:1
    },
    y:-100,
    duration:1
})
// for introduction section
gsap.from('.intro .in',{
    scrollTrigger:{
        trigger:'.intro .in',
        toogleActions:'restart none restart none',
        // scrub:2.3
    },
    opacity:0,
    delay:1.3,
    duration:1.1,
    
})

gsap.from('.skillcontainer h1',{
    scrollTrigger:{
        trigger:'.skillcontainer h1',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    delay:.23,
    opacity:0,
    y:-10,
    duration:1
})
// for the html skill
gsap.from('.skill1',{
    scrollTrigger:{
        trigger:'.skill1',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
// for the css skill
gsap.from('.skill2',{
    scrollTrigger:{
        trigger:'.skill2',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
// for the javascript skill
gsap.from('.skill3',{
    scrollTrigger:{
        trigger:'.skill3',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
// for the nodejs skill
gsap.from('.skill4',{
    scrollTrigger:{
        trigger:'.skill4',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
// for the react skill
gsap.from('.skill5',{
    scrollTrigger:{
        trigger:'.skill5',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
// for the github skill
gsap.from('.skill6',{
    scrollTrigger:{
        trigger:'.skill6',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
// for the postgres skill
gsap.from('.skill7',{
    scrollTrigger:{
        trigger:'.skill7',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
// for the API skill
gsap.from('.skill8',{
    scrollTrigger:{
        trigger:'.skill8',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
// for the express skill
gsap.from('.skill9',{
    scrollTrigger:{
        trigger:'.skill9',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    delay:.1,
    opacity:0,
    duration:1
})
gsap.from('#projects h1',{
    scrollTrigger:{
        trigger:'#projects h1',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    opacity:0,
    duration:1.5
})
// for the movie website
gsap.from('.projec1',{
    scrollTrigger:{
        trigger:'.projec1',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    scale:.8,
    opacity:0,
    duration:1.2
})
// for the restaurant website
gsap.from('.project2',{
    scrollTrigger:{
        trigger:'.project2',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    scale:.8,
    opacity:0,
    duration:1.2
})
// for the construction company website
gsap.from('.project3',{
    scrollTrigger:{
        trigger:'.project3',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    scale:.8,
    opacity:0,
    duration:1.2
})
// for the dictionary website
gsap.from('.project4',{
    scrollTrigger:{
        trigger:'.project4',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    scale:.8,
    opacity:0,
    duration:1.2
})
// for the school website
gsap.from('.project5',{
    scrollTrigger:{
        trigger:'.project5',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    scale:.8,
    opacity:0,
    duration:1.2
})
// for the movie website
gsap.from('.project6',{
    scrollTrigger:{
        trigger:'.project6',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    scale:.8,
    opacity:0,
    duration:1.2
})
// for the movie website
gsap.from('.project7',{
    scrollTrigger:{
        trigger:'.project7',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    y:50,
    scale:.8,
    opacity:0,
    duration:1.2
})

gsap.from('#contact h1',{
    scrollTrigger:{
        trigger:'#contact h1',
        toogleActions:'restart none restart none',
        // scrub:true
    },
    opacity:0,
    duration:1
})
gsap.from('#contact',{
    scrollTrigger:{
        trigger:'#contact',
        toogleActions:'restart none restart none',
        // scrub:1
    },
    opacity:0,
    scale:.8,
    duration:1
})