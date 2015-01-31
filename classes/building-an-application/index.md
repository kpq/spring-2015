---
layout: class
week: 7
title: Walking the Walk
---

We've had some of practice breaking down other applications and talking about how they work. Today, we'll make one ourselves.

##Housekeeping

- General thoughts on project pitches.
- Talking about our class assignment. We're missing a lot. Maybe update?


<a href="http://juliashu.github.io/data-journalism/csspractice">Example</a>
<a href="http://sherryhsieh.github.io/Data-Journalism/homework%20practice/index.html">Example</a>
<a href="http://annacanlas.github.io/data-journalism/html-practice/index.html">Example</a>
<a href="http://abrunker.github.io/data-journalism/html-homework.html">Example</a>
<a href="http://ksurana6.github.io/datajournalism/test2.html">Example</a>
<a href="http://as4092.github.io/data_journalism/homework/ABC.html">Example</a>
<a href="http://zahra526.github.io/datajournalism1/htmlpracticeinclass.html">Example</a>

##Let's Make an App

Tonight, we deconstruct a ProPublica application [about drug labels](http://projects.propublica.org/drug-labels/). Let's go over some things we might have done differently if we were building it.

Now let's build it. Our goal is to replicate the functionality of the interactive (which means, at the bare minimum, it has to work) and improve it as you prefer.



Things we need:

1. Make sure you have Google Chrome and Sublime Text downloaded and ready to rumble.
2. Make a older somewhere on your desktop and make an `index.html` page inside it. Add the following code as a starter.

  ```html
  <style type="text/css">

  body {
      width:760px;
      margin:40px auto;
      font-family: georgia, sans;
  }

  h1 {
      border-bottom:1px solid #dedede;
      margin-bottom:20px;
      padding-bottom:20px;
  }

  </style>


  <h1>Starter interactive</h1>

  <p>This is where HTML will go.</p>

  <script type="text/javascript">

  // this is how you comment in javascript.
    console.log("this is where javascript will go!");

  </script>
  ```


3. In your Terminal, navigate to the folder and run (optional, mac users only)

	```
	python -m SimpleHTTPServer
	```

4. As a class, let's make a plan in plain English.

5. There is no step-by-step tutorial for this project. It's mostly going to be about learning on your own and figuring out how to ask the internet good questions. Amanda and Kevin will be available to help you with any questions you have. We'll make sure everyone is on track with their plan.

6. Tips for success: break up your project into tiny little parts in plain English.

Things you might need:

- Probably the assets.
- Probably the data for maximum daily dose by drug.
- Probably how to make a list/grid of things.
- Probably a way to store data in Javascript (we've done this before)
- Probably a way to "do stuff when you click things". One popular library non-experts do this is with [jQuery](http://jquery.com/).
- Probably a way to do basic math in a web browser. (JavaScript seems like a good idea.)


