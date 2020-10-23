// ==UserScript==
// @name OnlySeniorNurse
// @name:ru Только кабинет старшей мед сестры
// @description Hacking the transfer to a nursing station in another Department
// @description:ru Взлом перевода на сестринский пост в другое отделении
// @namespace Да, да я
// @version 0.4
// @updateURL    https://raw.githubusercontent.com/SonOfStep/editNaznach/main/index.js
// @author Omar "SonOfStep" Nurmakhanov
// @match *://172.30.149.11:8282/OE/appointment/remsandapps*
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
