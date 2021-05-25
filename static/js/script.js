// SIDE NAV OPEN
$(document).ready(function () {
  $(".sidenav").sidenav({
    edge: "right"
  });
  $('.collapsible').collapsible();
});
// URGENT ICON
$(document).ready(function () {
  $('.tooltipped').tooltip();
});
// DATE PICKER
$(document).ready(function () {
  $('.datepicker').datepicker({
    format: "dd mmmm, yyyy",
    yearRange: 3,
    showClearBtn: true,
    i18n: {
      done: "Select"
    }
  });
});