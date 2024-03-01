const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav_wrapper");
const navLinks = document.querySelector(".nav_link_wrap");
const backdrop = document.querySelector(".backdrop");

let prevY = window.scrollY;

let timeout = null;

function addHideClass() {
    if (
        !navbar.classList.contains("hide") &&
        !hamburger.classList.contains("active")
    ) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }
}

function openHamburger() {
    navLinks.classList.add("active");
    backdrop.classList.add("active");
    hamburger.classList.add("active");
    document.body.classList.add("blocked");
    clearTimeout(timeout);
}

function closeHamburger() {
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("blocked");
    timeout = setTimeout(() => {
        addHideClass();
    }, 2000);
}

navLinks.addEventListener("click", () => {
    closeHamburger();
});

navbar.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
});

navbar.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
        addHideClass();
    }, 2000);
});

hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
        closeHamburger();
    } else {
        openHamburger();
    }
});

backdrop.addEventListener("click", (event) => {
    if (event.currentTarget === backdrop) {
        closeHamburger();
    }
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    console.log(window.scrollY);

    navbar.classList.remove("hide");
    clearTimeout(timeout);

    if (scrollY < 50) {
        navbar.classList.remove("fixed");
    } else {
        navbar.classList.add("fixed");
    }

    if (!hamburger.classList.contains("active")) {
        timeout = setTimeout(() => {
            addHideClass();
        }, 2000);
    }

    prevY = scrollY;
});

const partners = [
    {
        name: "Оптима",
        logo: "optima.jpg",
    },
    {
        name: "Бишкек Курулуш",
        logo: "bishkekkurulush.jpg",
    },
    {
        name: "БишкекПарк",
        logo: "bishkekpark.jpg",
    },
    {
        name: "DSKA",
        logo: "dska.jpg",
    },
    {
        name: "Алтын Курулуш",
        logo: "altynkurulush.jpg",
    },
    {
        name: "Елизавета",
        logo: "elizaveta.jpg",
    },
    {
        name: "Avangard",
        logo: "avangard.jpg",
    },
    {
        name: "Альфа",
        logo: "alfa.jpg",
    },
    {
        name: "KG ГРУПП",
        logo: "kggroup.jpg",
    },
    {
        name: "ACT",
        logo: "act.jpg",
    },
    {
        name: "aalam",
        logo: "aalam.jpg",
    },
    {
        name: "progroup",
        logo: "progroup.jpg",
    },
    {
        name: "Экспострой",
        logo: "expostroy.jpg",
    },
    {
        name: "nurimat",
        logo: "nurimat.jpg",
    },
    {
        name: "Одон строй",
        logo: "odon.jpg",
    },
    {
        name: "Канат строй",
        logo: "kanat.jpg",
    },
];

const partnersBlock = document.querySelector(".partners_list");

partners.forEach((partner) => {
    const div = document.createElement("div");
    div.classList.add("partner_logo");

    const img = document.createElement("img");
    img.src = `./assets/img/partners/${partner.logo}`;

    img.alt = partner.name;

    div.appendChild(img);

    partnersBlock.appendChild(div);
});
