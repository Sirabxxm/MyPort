$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
})

function togglePopup() {
  var textBox = document.getElementById("textBox");
  var button = document.querySelector(".my-button");
  if (textBox.style.display === "none" || textBox.style.display === "") {
    textBox.style.display = "block";
    button.textContent = "Submit";
  } else {
    textBox.style.display = "none";
    button.textContent = "Message";
    
    textBox.textContent = "";
  }
}

  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  readMoreButtons.forEach((button) => {
      button.addEventListener('click', function () {
          const details = this.nextElementSibling;
          details.classList.toggle('show-details');
      });
  });

  const toggleButtons = document.querySelectorAll('.toggle-details-btn');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const details = this.nextElementSibling;
        this.innerText = details.style.display === 'block' ? 'Read More' : 'Back';
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});

function togglePopup() {
  var textBox = document.getElementById("textBox");
  var button = document.querySelector(".my-button");
  if (textBox.style.display === "none" || textBox.style.display === "") {
    textBox.style.display = "block";
    button.textContent = "Submit";
  } else {
    textBox.style.display = "none";
    button.textContent = "Message";
   
    textBox.textContent = "";
  }
}

