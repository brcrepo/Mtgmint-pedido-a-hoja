// ==UserScript==
// @name         mtgmint list generator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.mtgmintcard.com/shopping-cart
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js

// ==/UserScript==
var clipboard = new ClipboardJS('.btn');
var lista = "";

$('tr[id*="ShoppingCartRow"]').each(function(){

    var nombre = $(this).find('a[href*=singles]').text();
    //var link = $(this).find('a[href*=singles]').attr("href");
    var edicion = $(this).find('td:nth-child(3)').text();
    var idioma = $(this).find('td:nth-child(4)').text();
    var version = $(this).find('td:nth-child(5)').text();
    var estado ="NM";
    var precioUnitario = $(this).find('td:nth-child(6)').text();
    precioUnitario = precioUnitario.replace('$','');
    precioUnitario = precioUnitario.replace('.',',');
    var cantidad = $(this).find(':selected').text();
    var total = $(this).find('td:nth-child(8)').text();
    total = total.replace('$','');
    total = total.replace('.',',');
    //nombre = '=HYPERLINK(\"'+link+'\";\"'+nombre+'\")';




    //if (nombre.includes('(')){

      //  nombre = nombre.match(/\((.*)\)/g).pop().replace(/\(|\)/g,"");

    //}

    lista += nombre+"\t"+edicion+"\t"+idioma+"\t"+version+"\t"+estado+"\t"+precioUnitario.trim()+"\t"+cantidad.trim()+"\t"+total.trim()+"\n";

});



$('<button class="btn btn-default" type="button" data-clipboard-text="'+lista+'" >Copy list to clipboard</button>').prependTo("div#ShoppingCartCheckoutButton p");
