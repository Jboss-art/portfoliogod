const countDownDate = new Date("Jul 26, 2024 00:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    timer.innerHTML = "Les JO sont commencés!";
  }
}, 1000);

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// dropdown............

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('userDropdown');
  const dropdownMenu = document.getElementById('dropdownMenu');

  dropdown.addEventListener('click', function (event) {
      event.preventDefault();
      dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) {
          dropdownMenu.classList.remove('show');
      }
  });
});

