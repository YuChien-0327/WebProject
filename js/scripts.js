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
    var $form_modal_trans = $('.translate_div');

    $main_nav_trans = $('.translate_button'); 

    //彈出視窗 
    $main_nav_trans.on('click', function(event){ 
        $main_nav_trans.children('ul').removeClass('is-visible'); 
        $form_modal_trans.addClass('is-visible');   
    }); 

    //關閉彈出視窗 
    $("#return").click(function(){
        $form_modal_trans.removeClass('is-visible'); 
    })
    //按下div外頁面
    $('.translate_div').on('click', function(event){ 
      if( $(event.target).is($form_modal_trans) || $(event.target).is('.cd-close-form') ) { 
        $form_modal_trans.removeClass('is-visible'); 
      }   
    }); 
    //使用Esc鍵關閉彈出視窗 
    $(document).keyup(function(event){ 
      if(event.which=='27'){ 
        $form_modal_trans.removeClass('is-visible'); 
      } 
    }); 
   
    $('#drop').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $(this).siblings('ul').slideToggle(1000);
    });

 }); 