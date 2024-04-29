document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    initialView: 'listWeek',

    // customize the button names,
    // otherwise they'd all just say "list"
    views: {
      listDay: { buttonText: 'list day' },
      listWeek: { buttonText: 'list week' },
      listMonth: { buttonText: 'list month' }
    },

    headerToolbar: {
      left: 'title',
      center: '',
      right: 'listDay,listWeek,listMonth'
    },
    events: 'https://fullcalendar.io/api/demo-feeds/events.json'
  });

  calendar.render();
});