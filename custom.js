// Custom JavaScript for mdBook

// Initialize when the document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers for collapsible sections if needed
  const collapsibles = document.querySelectorAll('.collapsible');
  
  if (collapsibles.length > 0) {
    collapsibles.forEach(function(item) {
      const header = item.querySelector('.collapsible-header');
      
      if (header) {
        header.addEventListener('click', function() {
          item.classList.toggle('expanded');
        });
      }
    });
  }
  
  // Add syntax highlighting for code blocks if not already handled by mdBook
  // This would typically use a library like highlight.js or prism.js
});
