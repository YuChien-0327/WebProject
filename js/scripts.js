/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

jQuery(document).ready(function($){ 
    var $form_modal = $('.translate_div'), 
     // $form_login = $form_modal.find('#cd-login'), 
     // $form_signup = $form_modal.find('#cd-signup'), 
     // $form_modal_tab = $('.cd-switcher'), 
     // $tab_login = $form_modal_tab.children('li').eq(0).children('a'), 
     // $tab_signup = $form_modal_tab.children('li').eq(1).children('a'), 
      $main_nav = $('.translate_button'); 
   
    //彈出視窗 
    $main_nav.on('click', function(event){ 
      //console.log("pop");
      //if( $(event.target).is($main_nav) ) { 
        // on mobile open the submenu 
        //console.log( $(this).children('ul'));
        //$(this).children('ul').toggleClass('is-visible'); 
      //} else { 
        // on mobile close submenu 
        $main_nav.children('ul').removeClass('is-visible'); 
        //show modal layer 
        $form_modal.addClass('is-visible');   
        //show the selected form 
        //( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected(); 
      //} 
   
    }); 
    $("#return").click(function(){
        $form_modal.removeClass('is-visible'); 
    })
    //關閉彈出視窗 
    $('.translate_div').on('click', function(event){ 
      if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) { 
        $form_modal.removeClass('is-visible'); 
      }   
    }); 
    //使用Esc鍵關閉彈出視窗 
    $(document).keyup(function(event){ 
      if(event.which=='27'){ 
        $form_modal.removeClass('is-visible'); 
      } 
    }); 
   
  }); 