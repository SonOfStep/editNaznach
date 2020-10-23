// ==UserScript==
// @name editNaznach
// @description:ru Измененние удаленных назначений
// @namespace Да, да я
// @version 0.2
// @updateURL    https://raw.githubusercontent.com/SonOfStep/editNaznach/main/index.js
// @author Omar "SonOfStep" Nurmakhanov
// @match *://172.30.149.11:8282/OE/patient/*
// @grant none
// ==/UserScript==
// 

$('.deleted_app').each( ( item, elem ) => {
  if ( $(elem).children().last().html() == '' ){
    $(elem).find('.func_td:nth-child(2n+1)').append(` <img id='${ $(elem).attr('data-appointid') }' class="button_delete_appoint img25" title="отменить назначение" src="/OE/assets/df8a2a5e/img/delete2.png" /> `)
  }
} )

const SETTINGS_URL = "/OE/appointment/getappoint";

$.ajaxSetup({
  beforeSend: function(jqXHR, settings) {
    if ( settings.url === SETTINGS_URL ) {


      $( document ).ajaxComplete( function( e ) {

        $('.deleted_app').each( ( item, elem ) => {
          if ( $(elem).children().last().html() == '' ){
            $(elem).children().last('.func_td:nth-child(2n+1)').append(` <img id='${ $(elem).attr('data-appointid') }' class="button_delete_appoint img25" title="отменить назначение" src="/OE/assets/df8a2a5e/img/delete2.png" /> `)
          }
        } )


      } )
    }
  }
});
