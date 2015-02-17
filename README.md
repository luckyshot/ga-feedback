
# Google Analytics Feedback Widget

## Receive Feedback simply by using Google Analytics

![Feedback dashboard](https://cloud.githubusercontent.com/assets/141241/6202018/df394a10-b4ce-11e4-9b75-047aaf44c511.png)

Free and unlimited widget to gather feedback without having to register in any website, worry about limitations or pay any monthly fees.

* Free and unlimited feedback
* Integrated with your Google Analytics data
* Just 3KB in size and no dependencies
* Easy to install
* Mobile-ready
* Daily emails + Advanced reports
* Full customization + Multilanguage

The only thing you need is to use Google Analytics, no jQuery or other dependiencies are needed.

The plugin is fully customizable, supports multiple languages and works in Desktop, mobile and tablet devices. It has been coded to be extremely tiny at just 3KB.

You can see a live demo here: <a href="http://trendliker.com/">trendliker.com</a>



## How it works


The plugin places a sticky button at the bottom right of the page:

![Feedback button](https://cloud.githubusercontent.com/assets/141241/6185187/ce03b870-b36b-11e4-86a7-a6ef880f95ec.png)

Once clicked, it shows a Feedback form:

![Feedback dialog](https://cloud.githubusercontent.com/assets/141241/6185199/f122f686-b36b-11e4-8858-fb8869824b82.png)

The user can select what type of feedback to send and fill in a text box. Once the user clicks <em>Send</em> a Thank you message shows up and the dialog disappears.

All messages are saved as "Feedback" Events in Google Analytics.


## Feedback Dashboard

The Feedback widget dashboard is a readymade dashboard that displays user's feedback in tables (these are sorted by Number of Sessions per User so more active users show up first). The right column has a few other things like a pie chart and a timeline of all feedback received.

<a href="https://www.google.com/analytics/web/template?uid=DcXKkhvbT1GSHHcOrdkGoA">Click here to get this Dashboard</a>, it's a great starting point and you can customize it further later, keep reading to see how.

![Feedback dashboard](https://cloud.githubusercontent.com/assets/141241/6202018/df394a10-b4ce-11e4-9b75-047aaf44c511.png)

## Get results by email every day

At the top of the Dashboard there's an <em>Email</em> button, click it to get an email with the Dashboard. You can customize Daily, Weekly, Monthly reports and also send it to you and your team:

![Daily email](https://cloud.githubusercontent.com/assets/141241/6202046/85f10072-b4d0-11e4-9bd6-d5f9c7c7f677.png)


### Occasional alert for small sites

If you don't want to receive an email every day, Google Analytics has got a feature called <em>Alerts</em> in <em>Intelligence Events</em> which allow you to receive emails when certain things happen. In the example below we receive a daily email when Feedback is submitted:

![Intelligence Events](https://cloud.githubusercontent.com/assets/141241/6192851/649201c6-b3b6-11e4-9b0a-b15783c18b01.png)

You can choose to get an email only when more than 10 people submitted feedback, or filter only "Problems", or just get feedback from returning visitors, or from people that are in the US, or feedbacks that include the word "error", or feedback from users using Firefox...

### Customization and detail

Feedback submissions are saved as Events in Google Analytics (<em>Reporting</em> > <em>Behaviour</em> > <em>Events</em>).

- **Events Category**: <code>Feedback</code>
- **Events Action**: <code>Problem</code>, <code>Suggestion</code>, <code>Compliment</code> or <code>Other</code>
- **Events Label**: User's feedback
- **Events Value**: <code>1</code>

#### Event Actions

![Google Analytics Events Action](https://cloud.githubusercontent.com/assets/141241/6185994/6abf609e-b374-11e4-8e4c-7501001007e5.png)

#### Event Labels

![Google Analytics Events Label](https://cloud.githubusercontent.com/assets/141241/6186019/b39a9fae-b374-11e4-8c98-a1c0ebb52949.png)


## Setting it up in your website


1. Load the <code>feedback.js</code> file after the Google Analytics code
2. Initialize the Feedback widget with your parameters
3. Done :)

Here's a couple examples you can copy-paste:

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


### Advanced manual triggers

You can load the Feedback form and control the Feedback widget from any other script in your site by accessing the <code>gaf</code> namespace. For example, to show the Feedback dialog window you can run this:

<pre>Namespace.gaf.loadDialog();</pre>

## Monthly reports and more...

You now have a full Feedback website tool for free, and what's more awesome is that it is already built into Google Analytics with the rest of your website's traffic data. You can add it to your Dashboard, create reports on % of bugs reported, user satisfaction vs number of visits, etc... Be creative!

<hr>

Built by <a href="http://xaviesteve.com">Xavi</a>. Feel free to create issues, pull requests or send me suggestions and ideas on how to improve the Dashboard, etc.