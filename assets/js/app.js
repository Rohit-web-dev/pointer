$( document ).ready(function() {
  $('.arrow-icon').on('click', function () {
    $('body').toggleClass('show-side-bar')
    // $('.side-bar').toggle()
    if ($('body').hasClass('show-side-bar')) {
      $('.arrow-icon i').addClass('fa-angle-right').removeClass('fa-angle-left')
    } else {
      $('.arrow-icon i').addClass('fa-angle-left').removeClass('fa-angle-right')
    }
  })

  // navbar highlight
  // const pagesArr = [
  //   'index.html',
  //   'practice.html',
  //   'language-abilities.html',
  //   'international-network.html',
  //   '',
  //   'contact.html'
  // ]

  // const fileOpned = window.location.pathname.split('/').pop();
  // const pageIndex = pagesArr.indexOf(fileOpned)

  // $(`#navbarNav ul li:nth-child(${pageIndex+1}) a`).addClass('text-danger')
})
