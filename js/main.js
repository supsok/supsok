var page_main = $('#page-main');
// $('#modal-start').modal('show')


// tab메뉴 (#page-main)
page_main.find('.bar-tab [data-tab]').on('click', function () {
  var tab_id = $(this).attr('data-tab');
  var title = $(this).attr('data-title');
  const navbar_search = page_main.find('[data-role="navbar-search"]');
  // $('body').css('overscroll-behavior','contain')
  $('meta[name="theme-color"]').attr('content', '#ffffff');
  page_main.find('.bar-nav [data-role="refresh"]').addClass('d-none');
  page_main.find('.bar-nav [data-tab]').addClass('d-none');
  page_main.find('.bar-nav [data-tab="'+tab_id+'"]').removeClass('d-none');

  page_main.find('.bar-nav .title span').text(title)
  page_main.find('.tab-content').removeClass('active');
  page_main.find('.bar-tab .tab-item').removeClass('active');

  navbar_search.removeClass('bar-header-secondary').addClass('d-none');

  $(this).addClass('active');
  $("#tab-"+tab_id).addClass('active');

  var tabs = page_main.find('.bar-tab .tab-item');

  $.each(tabs, function(index, element) {
    var icon = $(element).attr('data-icon')
    if (icon) {
      if ($(element).hasClass("active")) {
        $(element).find('i').removeAttr('class').addClass('bi bi-'+icon+'-fill icon');
      } else {
        $(element).find('i').removeAttr('class').addClass('bi bi-'+icon+' icon');
      }
    }
  });

  page_main.find('.content').scrollTop(0).attr('data-tab',tab_id);
 


  if (tab_id =='home') {


    navbar_search.addClass('bar-header-secondary').removeClass('d-none');


  }

  if (tab_id =='mento') {



  }

  if (tab_id =='chat') {




  }

  if (tab_id =='rental') {


    
  }

  if (tab_id =='more') {



  }
})


$('#modal-chat-room').on('shown.rc.modal',function(event) {
  var modal = $(this);
  var button = $(event.relatedTarget)

  modal.find('.content').scrollTop(99999);
  modal.find('.content').removeAttr('style');
  modal.find('.bar textarea').val(null);
  setTimeout(function() {
    $('meta[name="theme-color"]').attr('content', '#c5c6db');
  }, 280);

})


var swiperRentalGoods = new Swiper(".rental-swiperGoods", {
  slidesPerView: 2.3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registration successful with scope: ', registration.scope);
    })
    .catch(function(error) {
      console.log('Service Worker registration failed: ', error);
    });
}
