// Toggle the visibility of a section
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Example: You can add more functionalities as needed
document.addEventListener("DOMContentLoaded", function() {
    // Toggle skills section
    document.getElementById("toggleSkills").addEventListener("click", function() {
        toggleSection("skills");
    });
});
