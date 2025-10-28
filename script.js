const courses = [
  {
    id: 1,
    title: "SPACE DEFI BASICS",
    price: 0.3,
    category: "DEFI",
    preview: "img/prev1.png",
  },
  {
    id: 2,
    title: "NFT GALAXY GUIDE",
    price: 1.5,
    category: "NFTS",
    preview: "img/prev2.png",
  },
  {
    id: 3,
    title: "TOKEN SNIPING",
    price: 2.0,
    category: "SNIPING",
    preview: "img/prev3.png",
  },
  {
    id: 4,
    title: "COSMIC SECURITY",
    price: 1.8,
    category: "SECURITY",
    preview: "img/prev4.png",
  },
  {
    id: 5,
    title: "BUILD SPACE DAPPS",
    price: 1.2,
    category: "SMART CONTRACTS",
    preview: "img/prev5.png",
  },
  {
    id: 6,
    title: "WALLET SAFETY",
    price: 0.5,
    category: "SECURITY",
    preview: "img/prev6.png",
  },
  {
    id: 7,
    title: "YIELD FARMING",
    price: 1.7,
    category: "DEFI",
    preview: "img/prev7.png",
  },
  {
    id: 8,
    title: "NFT FLIPPING",
    price: 2.5,
    category: "NFTS",
    preview: "img/prev8.png",
  },
  {
    id: 9,
    title: "AIRDROP HUNTING",
    price: 1.0,
    category: "SNIPING",
    preview: "img/prev9.png",
  },
  {
    id: 10,
    title: "SOLIDITY 101",
    price: 0.8,
    category: "SMART CONTRACTS",
    preview: "img/prev10.png",
  },
  {
    id: 11,
    title: "ADVANCED DEFI",
    price: 3.0,
    category: "DEFI",
    preview: "img/prev11.png",
  },
  {
    id: 12,
    title: "GENERATIVE ART",
    price: 2.2,
    category: "NFTS",
    preview: "img/prev12.png",
  },
  {
    id: 13,
    title: "MEV PROTECTION",
    price: 1.5,
    category: "SECURITY",
    preview: "img/prev13.png",
  },
  {
    id: 14,
    title: "FLASH LOANS",
    price: 2.8,
    category: "DEFI",
    preview: "img/prev14.png",
  },
  {
    id: 15,
    title: "NFT ROYALTIES",
    price: 0.7,
    category: "NFTS",
    preview: "img/prev15.png",
  },
  {
    id: 16,
    title: "GAS OPTIMIZATION",
    price: 1.3,
    category: "SMART CONTRACTS",
    preview: "img/prev16.png",
  },
  /*{
    id: 17,
    title: "RUG PULL DETECTION",
    price: 1.0,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?warning,space",
  },
  {
    id: 18,
    title: "LIQUIDITY POOLS",
    price: 1.6,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?pool,water",
  },
  {
    id: 19,
    title: "NFT METADATA",
    price: 0.9,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?data,server",
  },
  {
    id: 20,
    title: "FRONTRUNNING BOTS",
    price: 3.5,
    category: "SNIPING",
    preview: "https://source.unsplash.com/random/300x200/?robot,ai",
  },
  {
    id: 21,
    title: "DAO GOVERNANCE",
    price: 1.4,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?meeting,space",
  },
  {
    id: 22,
    title: "3D NFTS",
    price: 2.0,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?3d,model",
  },
  {
    id: 23,
    title: "MULTI-SIG WALLETS",
    price: 0.6,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?safe,lock",
  },
  {
    id: 24,
    title: "ORACLES",
    price: 1.9,
    category: "SMART CONTRACTS",
    preview: "https://source.unsplash.com/random/300x200/?oracle,temple",
  },
  {
    id: 25,
    title: "IMPERMANENT LOSS",
    price: 1.1,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?loss,space",
  },
  {
    id: 26,
    title: "NFT COMMUNITIES",
    price: 1.8,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?community,people",
  },
  {
    id: 27,
    title: "PRIVATE KEYS",
    price: 0.4,
    category: "SECURITY",
    preview: "https://source.unsplash.com/random/300x200/?key,door",
  },
  {
    id: 28,
    title: "UPGRADEABLE CONTRACTS",
    price: 2.3,
    category: "SMART CONTRACTS",
    preview: "https://source.unsplash.com/random/300x200/?upgrade,stairs",
  },
  {
    id: 29,
    title: "LEVERAGED YIELD",
    price: 3.2,
    category: "DEFI",
    preview: "https://source.unsplash.com/random/300x200/?lever,construction",
  },
  {
    id: 30,
    title: "NFT VALUATION",
    price: 1.7,
    category: "NFTS",
    preview: "https://source.unsplash.com/random/300x200/?valuation,money",
  },*/
];

const courseGrid = document.querySelector(".sk-course-grid");
const connectWalletBtn = document.querySelector(".sk-connect-btn");
const walletPopup = document.getElementById("skWalletPopup");
const unlockPopup = document.getElementById("skUnlockPopup");
const closePopupBtns = document.querySelectorAll(".sk-modal-close");
const walletOptions = document.querySelectorAll(".sk-wallet-option");
const unlockButtons = document.querySelectorAll(".sk-unlock-btn");
const unlockActionBtn = document.querySelector(".sk-unlock-action-btn");
const filterButtons = document.querySelectorAll(".sk-filter-btn");

// Generate course cards
function generateCourseCards() {
  courseGrid.innerHTML = "";

  courses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "sk-course-card";

    card.innerHTML = `
      <div class="sk-course-preview" style="background-image: url('${course.preview}')"></div>
      <div class="sk-course-info">
        <h3 class="sk-course-title">${course.title}</h3>
        <div class="sk-course-price">
          <i class="fas fa-coins"></i>
          <span>${course.price} KNOW</span>
        </div>
        <div class="sk-course-categories">
          <span class="sk-category">${course.category}</span>
        </div>
        <button class="sk-unlock-btn">UNLOCK</button>
      </div>
    `;

    courseGrid.appendChild(card);
  });

  // Add event listeners to new unlock buttons
  document.querySelectorAll(".sk-unlock-btn").forEach((btn) => {
    btn.addEventListener("click", handleUnlockClick);
  });
}

// Handle unlock button click
function handleUnlockClick() {
  if (!connectWalletBtn.classList.contains("connected")) {
    showUnlockPopup();
  } else {
    // Handle actual unlock logic here
    console.log("Course unlocked!");
  }
}

// Show unlock popup
function showUnlockPopup() {
  unlockPopup.style.display = "flex";
}

// Close all popups
function closeAllPopups() {
  walletPopup.style.display = "none";
  unlockPopup.style.display = "none";
}

// Connect wallet button click
connectWalletBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeAllPopups();
  walletPopup.style.display = "flex";
});

// Close popup buttons
closePopupBtns.forEach((btn) => {
  btn.addEventListener("click", closeAllPopups);
});

// Close popups when clicking outside
[walletPopup, unlockPopup].forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      closeAllPopups();
    }
  });
});

// Wallet selection
walletOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const walletName = option.querySelector("span").textContent;
    console.log(`Connecting ${walletName} wallet...`);

    // Simulate wallet connection
    walletPopup.style.display = "none";
    connectWalletBtn.innerHTML = `
      <span>${walletName}</span>
      <div class="sk-btn-dots">
        <span class="sk-dot" style="background: var(--sk-accent)"></span>
        <span class="sk-dot" style="background: var(--sk-accent)"></span>
        <span class="sk-dot" style="background: var(--sk-accent)"></span>
      </div>
    `;
    connectWalletBtn.classList.add("connected");
  });
});

// Unlock action button
unlockActionBtn.addEventListener("click", () => {
  if (!connectWalletBtn.classList.contains("connected")) {
    closeAllPopups();
    walletPopup.style.display = "flex";
  } else {
    // Handle actual unlock logic here
    closeAllPopups();
  }
});

// Filter functionality
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filter = button.textContent;
    const courseCards = document.querySelectorAll(".sk-course-card");

    courseCards.forEach((card) => {
      const category = card.querySelector(".sk-category").textContent;
      if (filter === "ALL" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  generateCourseCards();

  // Add confetti animation styles
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fall {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// Money effect on click
document.addEventListener("click", function (e) {
  // Don't create money if clicking on interactive elements
  if (
    e.target.tagName === "BUTTON" ||
    e.target.tagName === "A" ||
    e.target.closest("button") ||
    e.target.closest("a")
  ) {
    return;
  }

  const moneyContainer = document.createElement("div");
  moneyContainer.id = "sk-money-container";
  moneyContainer.style.position = "fixed";
  moneyContainer.style.top = "0";
  moneyContainer.style.left = "0";
  moneyContainer.style.width = "100%";
  moneyContainer.style.height = "100%";
  moneyContainer.style.pointerEvents = "none";
  moneyContainer.style.zIndex = "9999";
  document.body.appendChild(moneyContainer);

  const moneyCount = 5 + Math.floor(Math.random() * 10);

  for (let i = 0; i < moneyCount; i++) {
    const money = document.createElement("div");
    money.className = "sk-money-bill";
    money.textContent = Math.floor(Math.random() * 50) + 1;
    money.style.position = "absolute";
    money.style.color = "gold";
    money.style.fontWeight = "bold";
    money.style.fontSize = "20px";
    money.style.userSelect = "none";

    // Position near click
    const x = e.clientX + (Math.random() * 100 - 50);
    const y = e.clientY + (Math.random() * 100 - 50);

    money.style.left = x + "px";
    money.style.top = y + "px";
    money.style.opacity = "1";

    // Random rotation
    const rotation = Math.random() * 60 - 30;
    money.style.transform = `translateY(0) rotate(${rotation}deg)`;

    moneyContainer.appendChild(money);

    // Animate money
    const duration = 1 + Math.random() * 2;
    money.style.transition = `all ${duration}s ease-out`;

    setTimeout(() => {
      money.style.opacity = "0";
      money.style.transform = `translateY(-100px) rotate(${rotation + 45}deg)`;

      // Remove after animation
      setTimeout(() => {
        money.remove();
        if (moneyContainer.children.length === 0) {
          moneyContainer.remove();
        }
      }, duration * 1000);
    }, 50);
  }
});
