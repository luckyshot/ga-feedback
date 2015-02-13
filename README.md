
# Google Analytics Feedback Widget


Free and unlimited feedback widget for your websites through Google Analytics.

This plugin is intended as a free and quick way to gather feedback without having to register in any website, worry about limitations or pay any monthly fees.

The only thing you need is to use Google Analytics, no jQuery or other dependiencies needed.

The plugin is fully customizable and supports multiple languages, it has been coded to be extremely tiny at just 3KB.

You can see a live demo here: <a href="http://trendliker.com/">trendliker.com</a>



## How it works


The plugin places a sticky button at the bottom right of the page:

![Feedback button](https://cloud.githubusercontent.com/assets/141241/6185187/ce03b870-b36b-11e4-86a7-a6ef880f95ec.png)

Once clicked, it shows a Feedback form:

![Feedback dialog](https://cloud.githubusercontent.com/assets/141241/6185199/f122f686-b36b-11e4-8858-fb8869824b82.png)

The user can select what type of feedback to send and fill in a text box. Once the user clicks <em>Send</em> a Thank you message shows up and the dialog disappears.


#### Monitoring feedback

Feedback submissions are saved as Events in Google Analytics (<em>Reporting</em> > <em>Behaviour</em> > <em>Events</em>).

- Events Category: Feedback
- Events Action: Problem, Suggestion, Compliment or Other
- Events Label: User's feedback

##### Events Action

![Google Analytics Events Action](https://cloud.githubusercontent.com/assets/141241/6185994/6abf609e-b374-11e4-8e4c-7501001007e5.png)

##### Events Label

![Google Analytics Events Label](https://cloud.githubusercontent.com/assets/141241/6186019/b39a9fae-b374-11e4-8c98-a1c0ebb52949.png)


## Setup


- Load the <code>feedback.js</code> file after the Google Analytics code
- Initialize the Feedback widget with your parameters

Here's a couple examples:

#### English

<pre>&lt;script src="feedback.js"&gt;&lt;/script&gt;
&lt;script&gt;
		Namespace.gaf.init( {
		'open': 'Feedback',
		'title': 'We would love to hear your thoughts!',
		'option1': 'Problem',
		'option2': 'Suggestion',
		'option3': 'Compliment',
		'option4': 'Other',
		'placeholder': 'Please enter your feedback here&hellip;',
		'send': 'Send',
		'thankyou': 'Thank you for your feedback!'
	} );
&lt;/script&gt;</pre>


#### Spanish

<pre>&lt;script src="feedback.js"&gt;&lt;/script&gt;
&lt;script&gt;
		Namespace.gaf.init( {
		'open': 'Feedback',
		'title': 'Nos encantaría conocer tu feedback:',
		'option1': 'Problema',
		'option2': 'Sugerencia',
		'option3': 'Cumplido',
		'option4': 'Otro',
		'placeholder': 'Por favor, escribe aquí tu feedback&hellip;',
		'send': 'Enviar',
		'thankyou': '¡Gracias por tu feedback!'
	} );
&lt;/script&gt;</pre>
