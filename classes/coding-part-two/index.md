---
layout: class
week: 5
title: Finishing up programming, and projects
---
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.2.min.js"></script>

We'll finish what we started in the same groups we started them in, all while doing some projects chats in the background.

##Housekeeping
Questions?

##Basic HTML and CSS

Recall the list of things we wanted to accomplish when we started out this task. From last week:

- Probably the assets.
- Probably the data for maximum daily dose by drug.
- Probably how to make a list/grid of things.
- Probably a way to store data in Javascript (we've done this before)
- Probably a way to "do stuff when you click things". One popular library non-experts do this is with [jQuery](http://jquery.com/).
- Probably a way to do basic math in a web browser. (JavaScript seems like a good idea.)

Below are some snippets that could be helpful to you. We'll go over these together. Feel free to use the starter file Amanda provided last week to follow along.

#jQuery tips
[jQuery](https://jquery.com/) is a common library developers load to "do stuff" in Javascript. It's helpful because it performs reliably in internet explorer 6 and Safari on your iPhone 6. To load it, paste this code snippet in your html file:

```html
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
```

When it's loaded, you should be able to use it with the `$`, which is just shorthand for typing `jQuery`. An easy way to find out if it loaded correctly is simply to type `jQuery` in your Javascript console. If it returns something (even if you don't understand it), it loaded! You can do this on almost any web page.

###Detecting when you click something
These kinds of things are called [events](http://api.jquery.com/category/events/), so you might want to look for a "click" event. here's the [documentation page](http://api.jquery.com/click/) for that, which is full of great examples.

In our case, many of you put the values for your dosages as `data-attributes` of your divs. So one kind of product could look like this:

```html

<div class="dose tylenol" data-dosage="3000">
  
</div>

```

jQuery targets things with CSS selectors, so if you want to do something any time you click on a div of the class `dose`, you would do something like this in your javascript tags (more on jQuery data attribution is [here](http://api.jquery.com/data/):

```html

<script type="text/javascript">
  
$(".dose").click(function(evt) {



  console.log("event is:", evt);

  console.log("dose is", $(this).data("dosage");

});

</script>

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

