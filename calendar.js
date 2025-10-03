document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Rapat Koordinasi',
        start: '2025-10-05',
        description: 'Rapat koordinasi internal divisi humas',
        progress: 'Sudah terlaksana 100%'
      },
      {
        title: 'Gen Expo',
        start: '2025-10-15',
        description: 'Gen expo',
        progress: 'Persiapan 70%'
      },
      {
        title: 'Pengabdian Masyarakat',
        start: '2025-10-20',
        description: 'Kegiatan pengabdian masyarakat di Karawang',
        progress: 'Belum mulai'
      }
    ],
    eventClick: function(info) {
      document.getElementById('eventTitle').textContent = info.event.title;
      document.getElementById('eventDesc').textContent = info.event.extendedProps.description;
      document.getElementById('eventProgress').textContent = info.event.extendedProps.progress;
      document.getElementById('eventModal').style.display = 'block';
    }
  });
  calendar.render();

  // Modal close
  document.querySelector('.close').onclick = function() {
    document.getElementById('eventModal').style.display = 'none';
  }
  window.onclick = function(event) {
    if (event.target == document.getElementById('eventModal')) {
      document.getElementById('eventModal').style.display = 'none';
    }
  }
});
