var sidebar = document.querySelector(".sidebar");
var sidebarToggle = document.querySelector(".sidebar-toggle");

var toggleSidebar = function() {
  if (sidebar.className === "sidebar open") {
    sidebar.className = "sidebar";
  }
  else {
    sidebar.className = "sidebar open";
  }
}