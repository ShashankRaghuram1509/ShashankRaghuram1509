const API_URL = "http://localhost:5000";

async function loadMenu() {
  try {
    const response = await fetch(`${API_URL}/courses`);
    const courses = await response.json();

    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = ""; // Clear existing content

    // Loop through each course and dynamically create menu items
    courses.forEach(course => {
      const item = document.createElement("div");
      item.classList.add("menu-item");

      item.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button class="dropdown-btn">View Videos</button>
        <div class="dropdown-content">
          <a href="#">Video 1</a>
          <a href="#">Video 2</a>
        </div>
      `;

      menuContainer.appendChild(item);
    });

    // Add event listeners for dropdown buttons
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    dropdownButtons.forEach(button => {
      button.addEventListener('click', function () {
        const parentItem = this.closest('.menu-item');
        parentItem.classList.toggle('active'); // Toggle the visibility of the dropdown
      });
    });

  } catch (error) {
    console.error("Error loading menu:", error);
  }
}

// Load menu once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadMenu);
