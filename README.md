
# Google Analytics Feedback Widget


Free and unlimited feedback widget for your websites through Google Analytics.

The only thing you need is to use Google Analytics, no jQuery or other dependiencies needed.

The plugin is fully customizable and supports multiple languages.

You can see a live demo here: <a href="http://trendliker.com/">trendliker.com</a>.



## How it works


The plugin places a sticky button at the bottom right of the page:

![Feedback button](https://cloud.githubusercontent.com/assets/141241/6185187/ce03b870-b36b-11e4-86a7-a6ef880f95ec.png)

Once clicked, it shows a Feedback form:

![Feedback dialog](https://cloud.githubusercontent.com/assets/141241/6185199/f122f686-b36b-11e4-8858-fb8869824b82.png)

The user can select what type of feedback to send and fill in a text box.

Feedback submissions are saved as Events in Google Analytics (Reporting > Behaviour > Events)



## Setup


- Load the .js file after the Google Analytics code
- Done.

Optional: You can configure everything (button text, question, type of feedback, etc.)

<pre>Namespace.gaf.init( {
	'open': 'Feedback',
	'title': 'We would love to hear your thoughts!',
	'option1': 'Problem',
	'option2': 'Suggestion',
	'option3': 'Compliment',
	'option4': 'Other',
	'placeholder': 'Please enter your feedback here&hellip;',
	'send': 'Send',
	'thankyou': 'Thank you for your feedback!'
} );</pre>


### Spanish version

<pre>Namespace.gaf.init( {
	'open': 'Feedback',
	'title': 'Nos encantaría conocer tu feedback:',
	'option1': 'Problema',
	'option2': 'Sugerencia',
	'option3': 'Cumplido',
	'option4': 'Otro',
	'placeholder': 'Por favor, escribe aquí tu feedback&hellip;',
	'send': 'Enviar',
	'thankyou': '¡Gracias por tu feedback!'
} );</pre>
