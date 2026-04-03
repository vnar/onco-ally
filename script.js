function handleLogin(event) {
  event.preventDefault(); // Prevent page refresh

  const usernameInput = document.getElementById("username").value.trim().toLowerCase();
  const passwordInput = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Static credentials for DEMO only
  const validPassword = "onco2025";

  // Check if username and password match the static values
  if ((usernameInput === "patient" || usernameInput === "provider") && passwordInput === validPassword) {
    // Redirect to a different page based on the username
    if (usernameInput === "patient") {
      window.location.href = "patients.html";
    } else {
      window.location.href = "providers.html";
    }
  } else {
    errorMsg.textContent = "Invalid credentials. Try 'patient' or 'provider' with password 'onco2025'.";
  }

  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");
  const toggle = document.getElementById("navToggle");
  if (!header || !toggle) return;

  const nav = document.getElementById("site-nav");

  function setNavOpen(open) {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }

  toggle.addEventListener("click", function () {
    setNavOpen(!header.classList.contains("nav-open"));
  });

  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > 960) {
      setNavOpen(false);
    }
  });
});
