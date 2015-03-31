---
layout: class
week: 6
title: Scraping Makes You Feel Like a Small God
---
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.2.min.js"></script>


##Housekeeping
Questions?

##Ruby

Do you have it? Check by typing "ruby" at your terminal. If you get something like "command not found", [download Ruby](https://www.ruby-lang.org/en/downloads/).

We also need a library called [watir](http://watir.com/).
If you're lucky, typing "gem install watir" at your terminal will get you it.


##Watir

Let's follow [the example](http://watir.com/examples/).

```javascript
  
require 'watir' 

browser = Watir::Browser.new :chrome
browser.goto 'http://bit.ly/watir-example'

browser.text_field(:name => 'entry.1000000').set 'Amanda'

browser.text_field(:name => 'entry.1000001').set "I come here from Australia. \n The weather is great here."
browser.radio(:value => 'Watir').set

browser.checkbox(:value => 'Ruby').set
browser.checkbox(:value => 'Python').set
browser.checkbox(:value => 'Python').clear

browser.select_list(:name => 'entry.1000004').select 'Chrome'

# your exercise: figure out how to click a button about how happy you are.

browser.button(:name => 'submit').click

puts browser.text.include? 'Your response has been recorded.'
puts browser.title == 'Thanks!'

browser.close

```

The `this` is frankly a little abstract.

###Doing math on strings
Data types are always annoying – numbers and words and dates are different to your browser, and we need to knwo what we're working with. In your console, type

```javascript

  var a = "3000";

  var b = 3000;

  console.log(a+b);

```

This is a problem that has been [Googled before](https://www.google.com/search?q=javascript+turning+a+string+into+a+number&oq=javascript+turning+a+string+into+a+number&aqs=chrome..69i57j69i65l2j0l2j69i60.5205j0j7&sourceid=chrome&es_sm=119&ie=UTF-8).


###Having and updating variables
To have a calculator of any kind, you need to be able to keep track of a few numbers. Variables can help!

```html

<script type="text/javascript">
  
//I start with zero.
var total = 0;

$(".dose").click(function(evt) {


  //how much is in the dose I jut clicked (number, please, not string)?
  var thisDose = +$(this).data("dosage");

  //my total is equal to the previous total plus what I just clicked
  total = thisDose + total;

});

</script>
```

###Selection and de-selection
Any button you want to click, you want to be able to un-click. That's an issue of <em>state</em> and of <em>presentation</em> – recognizing the state your button is in and displaying it to reflect that state.

An easy to do this is by adding a CSS class to the div when it is selected. 

```html

<style type="text/css">
    
  /* this applies to all .dose divs*/
  .dose {
    width: 100px;
    height: 100px;
    display: inline-block;
    background-color: #f0f0f0;
  }

  /* this applies to divs classed dose AND selected-dose */
  .dose.selected-dose {
    background-color: red;
  }

</style>


```


###Detecting classes
Of course, you need to know whether something is selected when you're doing math – are you adding to the total or subtracting from it? Here's what Googling "Detecting classes in jQuery" [got me](https://www.google.com/search?q=detecting+classes+in+jquery&oq=detecting+classes+in+jquery&aqs=chrome..69i57.3390j0j7&sourceid=chrome&es_sm=119&ie=UTF-8). The `hasClass` function in particular seems helpful. Here are [the docs](https://api.jquery.com/hasclass/) for that.

```javascript
<script type="text/javascript">
  
//I start with zero.
var total = 0;

$(".dose").click(function(evt) {

  var button = $(this);

  //how much is in the dose I jut clicked (number, please, not string)?
  var thisDose = +button.data("dosage");

  // is this already selected?
  var isAlreadySelected = button.hasClass("selected-dose");

  //if so, unselect it and remove its dosage from my total.
  if (isAlreadySelected === true) {
    this.removeClass("selected-dose");
    total = total - thisDose;
  }

  //if not, select it and add its dosage from my total.
  if (isAlreadySelected === false) {
    this.addClass("selected-dose");
    total = total + thisDose;
  }



});

</script>
```

###Writing stuff on a page
It's cool to see stuff show up on the page based on code you wrote. Here, an empty div with the class `current-total-dose-display` gets filled with the word "Moo":

```html
<div class="current-total-dose-display"></div>

<script type="text/javascript">
  //you can probably adopt this to your app easily.
  $(".current-total-dose-display").text("Moo");
</script>
```

###Putting it all together
Here's a [basic demo](demo.html) of all these concepts.

