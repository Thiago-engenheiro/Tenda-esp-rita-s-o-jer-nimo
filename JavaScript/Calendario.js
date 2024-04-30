document.addEventListener('DOMContentLoaded', function() {

  var initialLocaleCode = 'pt';
  var localeSelectorEl = document.getElementById('locale-selector');
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {

    headerToolbar: {

      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
    },
    
    locale: initialLocaleCode,
    buttonIcons: false,
    weekNumbers: true,
    navLinks: true,
    editable: true,
    dayMaxEvents: true,
    
    buttonText: {
      prev: 'Anterior',       
      next: 'Próximo ',
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      list: 'Lista',
    },


  events: [

    {

      title: 'Evento longo',
      start: '2024-05-03',
      end: '2024-05-07',
      description: 'Este é um evento longo que dura vários dias.'

    },

    {

      title: 'Evento com link',
      start: '2024-05-12',
      allDay: true,
      url: 'https://exemplo.com/pagina',
      description: 'Clique no evento para mais informações.'

    },

    {

      title: 'Evento com varias atividades',
      start: '2024-05-20',
      end: '2024-05-24',
      description: 'Este evento tem várias atividades.',

    },

    {

      title: 'Almoço',
      start: '2024-05-20T10:00:00',
      end: '2024-05-20T12:00:00',
      description: 'Almoço durante o evento "Evento com varias atividades".'

    },

    {

      title: 'Reunião da equipe',
      start: '2024-05-20T14:00:00',
      end: '2024-05-20T16:00:00',
      description: 'Reunião da equipe durante o evento "Evento com varias atividades".'

    },

    {

      title: 'Apresentação',
      start: '2024-05-20T17:00:00',
      end: '2024-05-20T18:00:00',
      description: 'Apresentação durante o evento "Evento com varias atividades".'

    },

  ]


  });

  // Adicione a fonte de eventos após a inicialização do calendário


  // Função para verificar a largura da tela e forçar a visualização de lista quando necessário
  function checkWindowSize() {
    if (window.innerWidth <= 720) {
      calendar.changeView('listMonth');
    } else {
      calendar.changeView('dayGridMonth');
    }
  }

  // Renderiza o calendário
  calendar.render();

  // Verifica o tamanho da tela inicialmente e sempre que a tela for redimensionada
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);

});


