---
layout: class
week: 6
title: Scraping Makes You Feel Like a Small God
---
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.2.min.js"></script>


##Housekeeping
Questions?

##Ruby

What is it? Do you have it? Check by typing "ruby" at your terminal. If you get something like "command not found", [download Ruby](https://www.ruby-lang.org/en/downloads/).

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


###What about something you might really want to do?
WNYC collects NYC school attendance data every day. Having it lets them [respond to news](http://www.wnyc.org/story/school-was-open-most-parents-kept-students-home/), and also feeds some enterprise. 

```javascript

require 'watir' 

browser = Watir::Browser.new :chrome

browser.goto 'http://schools.nyc.gov/AboutUs/schools/data/Attendance.htm'

puts browser.span(:id => 'doecontrol_middlecentercontainer_a_attendance_lblPcnt').text

puts browser.link(:text => 'Microsoft Excel').click

```

###What about something one of you really does want to do?
Part of Jacqui's project requires knowing where the top-rated beers on BeerAdvocate.com are made. 

```javascript

require 'watir' 

browser = Watir::Browser.new :chrome
browser.goto 'http://www.beeradvocate.com/lists/top/'

table = browser.table(:index => 1)
links = table.links()
urls = links.map(&:href)
stop = urls.length

(0..stop).step(3) do |i|

  begin
      browser.goto urls[i]
      sleep 1
      name = browser.h1.text
      place = browser.link(:href, /place/).text
      style = browser.link(:href, /style/).text
      puts name + "," + place + "," + style
  rescue 
     puts "uhoh " + urls[i]
  end

end

browser.close
```

###Time permitting
Make the pivot table to answer Jacqui's question. Then, gather Bro and community ratings for the top-rated beers, and [do something] with this information.

