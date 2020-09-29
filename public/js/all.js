$(function () {
  // ------------------------------------------------------- //
  // Multi Level dropdowns
  // ------------------------------------------------------ //
  $("ul.dropdown-menu [data-toggle='dropdown']").on('click', function (event) {
    event.preventDefault()
    event.stopPropagation()

    $(this).siblings().toggleClass('show')

    if (!$(this).next().hasClass('show')) {
      $(this)
        .parents('.dropdown-menu')
        .first()
        .find('.show')
        .removeClass('show')
    }
    $(this)
      .parents('li.nav-item.dropdown.show')
      .on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass('show')
      })
  })
})

// Mega Menu
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation()
})

// // Slider small

// $(document).ready(function () {
//   $('.items').slick({
//     dots: true,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   })
// })

// Bugs
$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show')
  }
  var $subMenu = $(this).next('.dropdown-menu')
  $subMenu.toggleClass('show')

  $(this)
    .parents('li.nav-item.dropdown.show')
    .on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass('show')
    })

  return false
})

// Copy To Clipboard
function myFunction() {
  var copyText = document.getElementById('myInput')
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  document.execCommand('copy')

  var tooltip = document.getElementById('myTooltip')
  tooltip.innerHTML = 'Copied: ' + copyText.value
}

function outFunc() {
  var tooltip = document.getElementById('myTooltip')
  tooltip.innerHTML = 'Copy to clipboard'
}
