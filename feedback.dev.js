/**
 * Google Analytics Feedback Widget
 * Version 1.1.0 by Xavi Esteve
 * http://xaviesteve.com
 */

(function ( d, N ) { 'use strict';

N.gaf = {
	css: '#gaf-button{position:fixed;bottom:0;right:50px;background:rgba(61, 194, 85, 0.8);color:#fff;padding:4px 7px;font-size:12px;border-top-left-radius:5px;border-top-right-radius:5px;z-index:999999999}' +
		'#gaf-dialog{position:fixed;top:20%;left:25%;right:25%;background:rgba(255,255,255,0.9);box-shadow:0 0 25px #aaa;padding:20px;z-index:999999999}' +
		'#gaf-dialog h5{text-align:center;font-size:24px;margin:0}' +
		'#gaf-type{text-align:center}' +
		'#gaf-type a{display:inline-block;width:24%;min-width:6em;text-align:center}' +
		'#gaf-type a:hover{opacity:.7}' +
		'#gaf-type a.active{font-weight:bold;text-decoration:underline}' +
		'#gaf-text{padding:.5em 0;text-align:center;width:100%;font-size:100%}' +
		'#gaf-submit{text-align:center;display:block;font-weight:bold;font-size:120%;padding:20px 0 10px}' +
		'#gaf-submit:hover{opacity:.7}' +
		'#gaf-dialog-close{position:fixed;top:19%;right:25%;padding:10px;font-size:24px;color:rgba(0,0,0,.3);line-height:1}' +

		'@media only screen and (max-width:800px){' +
			'#gaf-dialog{left:10%;width:80%}' +
			'#gaf-dialog-close{right:10%}' +
		'}',

	init: function( options )
	{
		this.options = options;
		this.loadCss();
		this.loadHtml();
		this.loadButton();
	},
	loadCss: function()
	{
		d.head.innerHTML += '<style>' + this.css + '</style>';
	},
	loadHtml: function()
	{
		this.buttonHtml = '<a id="gaf-button" style="" href="#">' + this.options.open + '</a>';

		this.dialogHtml = '<div id="gaf-dialog"><h5>' + this.options.title + '</h5><a id="gaf-dialog-close" href="#">&times;</a>' +
				'<p id="gaf-type" data-type="' + this.options.option1 + '">' +
					'<a class="active" href="#">' + this.options.option1 + '</a>' +
					'<a href="#">' + this.options.option2 + '</a>' +
					'<a href="#">' + this.options.option3 + '</a>' +
					'<a href="#">' + this.options.option4 + '</a>' +
				'</p>' +
			'<input id="gaf-text" type="text" placeholder="' + this.options.placeholder + '" maxlength="500">' +
			'<a id="gaf-submit" href="#">' + this.options.send + '</a>';

	},
	loadButton: function()
	{
		d.body.innerHTML += this.buttonHtml;
		d.getElementById('gaf-button').addEventListener( 'click', function(e) { N.gaf.loadDialog();e.preventDefault(); }, false );
	},
	loadDialog: function()
	{
		d.getElementById('gaf-button').removeEventListener('click', function(){}, false );

		d.body.removeChild( d.getElementById('gaf-button') );

		d.body.innerHTML += this.dialogHtml;
		d.getElementById('gaf-text').focus();

		d.getElementById('gaf-dialog-close').addEventListener( 'click', function(e) { N.gaf.closeDialog();e.preventDefault(); }, false );
		d.getElementById('gaf-type').addEventListener( 'click', function(e) { N.gaf.changeType(e);e.preventDefault(); }, false );
		d.getElementById('gaf-submit').addEventListener( 'click', function(e) { N.gaf.sendFeedback();e.preventDefault(); }, false );
	},
	closeDialog: function()
	{
		d.getElementById('gaf-dialog-close').removeEventListener('click', function(){}, false );
		d.getElementById('gaf-submit').removeEventListener('click', function(){}, false );
		d.getElementById('gaf-type').removeEventListener('click', function(){}, false );

		d.body.removeChild( d.getElementById('gaf-dialog') );

		this.loadButton();
	},

	changeType: function(e)
	{
		var types = d.querySelectorAll('#gaf-type a');
		for (var i = 0; i < types.length; i++)
		{
			types[i].className = '';
		}

		if ( e.target.tagName == 'A' )
		{
			d.getElementById('gaf-type').dataset.type = e.target.innerHTML;
			e.target.className = 'active';
		}
		d.getElementById('gaf-text').focus();
	},

	sendFeedback: function()
	{
		if ( d.getElementById('gaf-text').value.length < 1 )
		{
			d.getElementById('gaf-text').style.border = '2px solid #c00';
			d.getElementById('gaf-text').focus();
			return false;
		}
		ga( 'send', {
			'hitType': 'event',
			'eventCategory': 'Feedback',
			'eventAction': d.getElementById('gaf-type').dataset.type,
			'eventLabel': d.getElementById('gaf-text').value,
			'eventValue': 1
		} );
		alert( this.options.thankyou );
		this.closeDialog();
	}
};

}( document, window ));
