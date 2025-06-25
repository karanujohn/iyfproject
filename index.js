

  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
     sidebar.style.display = 'none'
  }

    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')

    next.addEventListener('click',function(){
      let client = document.querySelectorAll('.client')
      document.querySelector('.cards').appendChild(client[0])

    })
     prev.addEventListener('click',function(){
      let client = document.querySelectorAll('.client')
      document.querySelector('.cards').prepend(client[client.length - 1])

     })


     // JavaScript to create an infinite horizontal sliding effect for logos inside .partners_container
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".partners_container");
  const logos = Array.from(container.children);

  // Clone logos to create seamless infinite scroll
  logos.forEach(logo => {
    const clone = logo.cloneNode(true);r
    container.appendChild(clone);
  });

  let scrollSpeed = 1; // pixels per frame
  let currentX = 0;

  function step() {
    currentX -= scrollSpeed;

    // When the scroll reaches the width of the first set of logos, reset to 0
    const firstSetWidth = container.scrollWidth / 10;

    if (-currentX >= firstSetWidth) {
      currentX = 0;
    }

    container.style.transform = `translateX(${currentX}px)`;
    requestAnimationFrame(step);
  }

  step();
});

     document.querySelectorAll('.faq_answers p').forEach(p => {
        const icon = p.querySelector('.icon');
        const answer = p.querySelector('.answer');
        
        icon.addEventListener('click', () => {
            p.classList.toggle('expanded');
        });
    });



 


