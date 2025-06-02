// 🎯 Target Date: June 4, 2025
const countdownDate = new Date("June 2, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.getElementById("countdown").style.display = "none";
    const timeUpButton = document.getElementById("timeUpButton");
    timeUpButton.style.display = "inline-block";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerHTML = 
    `<strong>${days}</strong> days 
     <strong>${hours}</strong> hrs 
     <strong>${minutes}</strong> min 
     <strong>${seconds}</strong> sec`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 🗓️ Generate 30-Day Check-in Grid
const startDate = new Date("May 5, 2025");
const giftGrid = document.getElementById("giftGrid");
const today = new Date();

const gifts = [
  {
    title: "Day 1 💖",
    content: "A warm hug for my Nehu 🤗",
    image: "assets/images/02.gif",
    link: "https://ourgallery.pythonanywhere.com/"
  },
  {
    title: "Day 2 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day2"
  },
  {
    title: "Day 3 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day3"
  },
  {
    title: "Day 4 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day4"
  },
  {
    title: "Day 5 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day5"
  },
  {
    title: "Day 6 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day6"
  },
  {
    title: "Day 7 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day7"
  },
  {
    title: "Day 8 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day8"
  },
  {
    title: "Day 9 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day9"
  },
  {
    title: "Day 10 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day10"
  },
  {
    title: "Day 11 💖",
    content: "A warm hug from Arsln to Nehu 🤗",
    image: "assets/images/hug1.gif",
    link: "https://example.com/day11"
  },
  {
    title: "Day 12 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day12"
  },
  {
    title: "Day 13 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day13"
  },
  {
    title: "Day 14 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day14"
  },
  {
    title: "Day 15 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day15"
  },
  {
    title: "Day 16 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day16"
  },
  {
    title: "Day 17 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day17"
  },
  {
    title: "Day 18 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day18"
  },
  {
    title: "Day 19 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day19"
  },
  {
    title: "Day 20 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day20"
  },
  {
    title: "Day 21 💖",
    content: "A warm hug from Arsln to Nehu 🤗",
    image: "assets/images/hug1.gif",
    link: "https://example.com/day21"
  },
  {
    title: "Day 22 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day22"
  },
  {
    title: "Day 23 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day23"
  },
  {
    title: "Day 24 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day24"
  },
  {
    title: "Day 25 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day25"
  },
  {
    title: "Day 26 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day26"
  },
  {
    title: "Day 27 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day27"
  },
  {
    title: "Day 28 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day28"
  },
  {
    title: "Day 29 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day29"
  },
  {
    title: "Day 30 💫",
    content: "You’re my favorite star in the sky ⭐",
    image: "assets/images/star1.png",
    link: "https://example.com/day30"
  },
];

const dayDifference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

for (let i = 0; i < 30; i++) {
  const dayNum = i + 1;
  const div = document.createElement("div");
  div.classList.add("gift-day");

  // Unlock gifts up to the current day difference + 1
  if (dayNum <= dayDifference + 1) {
    div.innerText = `Day ${dayNum} 💝`;
    div.addEventListener("click", () => {
      const gift = gifts[i];
      showModal(gift.title, gift.content, gift.image, gift.link);
    });
  } else {
    div.classList.add("locked");
    div.innerText = `Day ${dayNum} 🔒`;
  }

  giftGrid.appendChild(div);
}

function showModal(title, message, imageUrl, link) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalMessage").innerText = message;
  document.getElementById("modalImage").src = imageUrl;
  const modalLink = document.getElementById("modalLink");
  if (link) {
    modalLink.href = link;
    modalLink.style.display = "inline-block";
  } else {
    modalLink.href = "#";
    modalLink.style.display = "none";
  }
  document.getElementById("giftModal").style.display = "flex";
}

document.querySelector(".close").onclick = function () {
  document.getElementById("giftModal").style.display = "none";
  const modalLink = document.getElementById("modalLink");
  modalLink.href = "#";
  modalLink.style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("giftModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  if (music) {
    music.play().catch((error) => {
      // Autoplay might be blocked, user can toggle manually
      console.log("Autoplay prevented:", error);
    });
  }
});
