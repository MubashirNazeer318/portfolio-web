document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // Navigation toggle
  // ===============================
  let menuToggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  let sec = document.querySelector('.sec');

  if (menuToggle) {
    menuToggle.onclick = function () {
      menuToggle.classList.toggle('active');
      navigation.classList.toggle('active');
      sec.classList.toggle('active');
    };
  }

  // ===============================
  // Image popup modal
  // ===============================
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("fullImg");
  var closeBtn = document.getElementsByClassName("close")[0];

  let scale = 1; // initial zoom

// Open modal when clicking project images
document.querySelectorAll(".project img").forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.getAttribute("data-full") || this.src;
  }
});


  // Close modal with close button
  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  // Close modal by clicking outside the image
  if (modal) {
    modal.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  // ===============================
  // Zoom with mouse wheel
  // ===============================
  if (modalImg) {
    modalImg.addEventListener("wheel", function (e) {
      e.preventDefault();
      if (e.deltaY < 0) {
        scale += 0.1; // zoom in
      } else {
        scale = Math.max(0.2, scale - 0.1); // zoom out, min 0.2
      }
      modalImg.style.transform = "scale(" + scale + ")";
    });
  }
});





// Navigation toggle
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let sec = document.querySelector('.sec');
    menuToggle.onclick = function(){
      menuToggle.classList.toggle('active');
      navigation.classList.toggle('active');
      sec.classList.toggle('active');
    }

    // Image popup modal
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("fullImg");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".project img").forEach(img => {
      img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.getAttribute("data-full");
      }
    });

    closeBtn.onclick = function() {
      modal.style.display = "none";
    }

    modal.onclick = function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    }