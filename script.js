// Expandable gallery panel
const galleryToggle = document.getElementById("gallery-toggle");
const galleryPanel = document.getElementById("gallery-panel");

if (galleryToggle && galleryPanel) {
  let open = false;

  galleryToggle.addEventListener("click", () => {
    open = !open;

    if (open) {
      galleryPanel.classList.add("open");
      galleryPanel.style.maxHeight = galleryPanel.scrollHeight + "px";
      galleryToggle.textContent = "Hide gallery";
    } else {
      galleryPanel.style.maxHeight = galleryPanel.scrollHeight + "px";
      void galleryPanel.offsetHeight; // force layout
      galleryPanel.style.maxHeight = "0";
      galleryPanel.classList.remove("open");
      galleryToggle.textContent = "Show gallery";
    }
  });
}
