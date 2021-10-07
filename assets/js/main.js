/*
$('.sidebar-toggle').click(() => {
  $('#sidebar').removeClass('hidden-xs');
  $('#sidebarwrap').toggleClass('d-none');
});
*/

/*
$('img-toggle').click(() => {
  $('img-toggle span').toggleClass('fa-minus-square fa-plus-square');
}); */

/// enlarge image on click using ligthtbox

/*
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true,
  });
}); */

/*
$(window).scroll(function () {
  sessionStorage.scrollTop = $(this).scrollTop();
}); */

document.addEventListener('DOMContentLoaded', () => {
  maintainScroll();
  initDrag();
  initTooltip();
  initPopOver();
  // imgToggleIcon();
  // sideBarToggle();
  // refreshScrollSpy();
  openLinksNewTab();
  editPasteBin();
  initDarkModeSwitcher();
});

/*
$(document).ready(() => {
  if (sessionStorage.scrollTop != 'undefined') {
    $(window).scrollTop(sessionStorage.scrollTop);
  }
  // init off canvas drag
  initDrag();
  // init tooltips

});
*/

/// maintain scroll position
function maintainScroll() {
  const sidebar = document.querySelector('.sidebar');
  const top = localStorage.getItem('sidebar-scroll');
  if (top !== null) {
    sidebar.scrollTop = parseInt(top, 10);
  }
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('sidebar-scroll', sidebar.scrollTop);
  });
}

// initiate off canvas drag functionality
function initDrag() {
  let dragging = 0;
  let initWidth; let initX;
  const { body } = document;
  const canvas = document.querySelector('.offcanvas-end');
  const target = document.getElementById('dragbar');

  function clearJSEvents() {
    dragging = 0;
    body.removeEventListener('mousemove', resize);
    body.classList.remove('resizing');
  }

  function resize(e) {
    const diff = e.pageX - initX;
    canvas.style.setProperty('width', `${initWidth - diff}px`);
  }

  if (target) {
    target.onmousedown = function (e) {
      initX = e.pageX;
      initWidth = parseInt(getComputedStyle(canvas).width) || 200;
      e.preventDefault();
      dragging = 1;
      body.addEventListener('mousemove', resize);
      body.classList.add('resizing');
    };

    document.onmouseup = function () {
      dragging ? clearJSEvents() : '';
    };
  }
}

// initate tooltips on hovers DON'T TOUCH IT
function initTooltip() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl, {
    container: 'body',
    placement: 'auto',
    html: true,
    viewport: { selector: '.container', padding: 5 },
    boundary: 'viewport',
  }));
}

// initiate bootstrap popovers
function initPopOver() {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  const popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
}

// toggle plus minus icon on image
/*
function imgToggleIcon() {
  document.querySelector('.img-toggle').addEventListener('click', () => {
    document.querySelector('.img-toggle span').classList.toggle('fa-minus-square fa-plus-square');
  });
} */

// toggle sidebar on mobile devices
function sideBarToggle() {
  document.querySelector('.sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('hidden-xs');
    document.getElementById('sidebarwrap').classList.toggle('d-none');
  });
}

// refresh scrollspy after loading page

function refreshScrollSpy() {
  const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
  dataSpyList.forEach((dataSpyEl) => {
    bootstrap.ScrollSpy.getInstance(dataSpyEl)
      .refresh();
  });
}

// open all links in new tab
function openLinksNewTab() {
  const { links } = document;
  for (let i = 0; i < links.length; i++) {
    if (!links[i].href.includes('lioranboard.ca')) links[i].target = '_blank';
  }
}

// select all for embed pastebins and force text break
function editPasteBin() {
  const els = document.getElementsByClassName('de1');
  for (let i = 0; i < els.length; i++) {
    els[i].classList.add('user-select-all');
    els[i].classList.add('text-break');
  }
}

/* eslint-disable */

function darkModeSwitcher() {/*
  (() => {
    const e = document.getElementById('DarkModeSwitch');
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? (document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:dark}</style>'),
      document.body.classList.add('dark'),
      e && (e.checked = !0),
      window.localStorage.getItem('scheme')
              && (document.getElementById('scheme').remove(), document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:light}</style>'), document.body.classList.remove('dark'), e && (e.checked = !1)),
      e
              && e.addEventListener('click', () => {
                e.checked
                  ? (document.getElementById('scheme').remove(),
                  document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:dark}</style>'),
                  document.body.classList.add('dark'),
                  localStorage.removeItem('scheme'))
                  : (document.getElementById('scheme').remove(),
                  document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:light}</style>'),
                  document.body.classList.remove('dark'),
                  localStorage.setItem('scheme', 1));
              }))
      : (document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:light}</style>'),
      e && (e.checked = !1),
      window.localStorage.getItem('scheme')
              && (document.getElementById('scheme').remove(), document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:dark}</style>'), document.body.classList.add('dark'), e && (e.checked = !0)),
      e
              && e.addEventListener('click', () => {
                e.checked
                  ? (document.getElementById('scheme').remove(),
                  document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:dark}</style>'),
                  document.body.classList.add('dark'),
                  localStorage.setItem('scheme', 1))
                  : (document.getElementById('scheme').remove(),
                  document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:light}</style>'),
                  document.body.classList.remove('dark'),
                  localStorage.removeItem('scheme'));
              }));
  })(),
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    location.reload(), localStorage.removeItem('scheme');
  });*/
}

function initDarkModeSwitcher () {
const e = document.getElementById('DarkModeSwitch');

e.addEventListener('click', () => {
  document.getElementById('scheme').remove()
  if (e.checked) {
    document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:dark}</style>');
    document.documentElement.setAttribute('data-theme', 'dark')
    window.localStorage.setItem('scheme', 'dark');
   }
   else {
     document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:light}</style>');
     document.documentElement.setAttribute('data-theme', 'light')
     window.localStorage.setItem('scheme', 'light');
   }

})

} 