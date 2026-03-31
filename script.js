function scrollAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function sendMessage() {
  // Get form values (optional: you can add simple validation later)
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Very basic check (optional – prevents sending empty messages)
  if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
  }

  // Show success message
  alert("Message sent successfully!");

  // Clear all fields after alert is closed
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
function sendMessage() {
  // ... existing code ...
  alert("Message sent successfully!");
  
  // Fake delay then clear (looks more realistic)
  setTimeout(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
  }, 300);
}