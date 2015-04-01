---
layout: class
week: 6
title: Scraping Makes You Feel Like a Small God
---
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.2.min.js"></script>


##Housekeeping
Questions?

##Scraping
What does it mean to think like a computer? What are alternatives to scraping?

##Ruby
What is it? Do you have it? Check by typing "ruby" at your terminal. If you get something like "command not found", [download Ruby](https://www.ruby-lang.org/en/documentation/installation/#homebrew). [Windows friends](http://rubyinstaller.org/)

We also need a library called [watir](http://watir.com/).
If you're lucky, typing "gem install watir" at your terminal will get you it.


##Watir

Watir is at its best when web pages are really complicated to scrape. But it works well for easier stuff too. Let's follow [their intro example](http://watir.com/examples/).

We can use ruby interactively (a line at a time) with the command 'irb'. Or you can run an entire script at once with ruby whatever.rb (where whatever.rb contains commands like the ones below.)


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


###Let's try something you might really want to do.
We've used watir to scrape [power outage maps](http://outage.cl-p.com/outage/outagemap.aspx), [fill out this form](http://calc.taxpolicycenter.org/marriagepenaltycalculator/) 100,000 times, get [lists of donors](https://donate.aamaadmiparty.org/Report/Donation_List.aspx) in Indian elections and [grab thousands of art auction results in China](http://artso.artron.net/auction/search_auction.php?keyword=&showtype=1&auctiontype=020200000000&orgnum=3&orgid=JG0102&listtype=&orgenname_16=&artist=&startprice=&endprice=&starttime=2003-01-01&endtime=2003-12-31)

WNYC collects NYC school attendance data every day. Having it lets them [respond to news](http://www.wnyc.org/story/school-was-open-most-parents-kept-students-home/), and also feeds some enterprise. 

```javascript

require 'watir' 

browser = Watir::Browser.new :chrome

browser.goto 'http://schools.nyc.gov/AboutUs/schools/data/Attendance.htm'

puts browser.span(:id => 'doecontrol_middlecentercontainer_a_attendance_lblPcnt').text

puts browser.link(:text => 'Microsoft Excel').click

```

### Could watir have helped us a couple of weeks ago?
Maybe, but this is probably overkill.

```javascript
#http://stackoverflow.com/questions/1259009/watir-image-processing
require 'watir-webdriver'
require 'open-uri'
b = Watir::Browser.new :chrome

b.goto "http://projects.propublica.org/drug-labels/"
sleep 3

images = b.images(:src => /projectx\/labels/)

images.each do |img|
  
    url = img.src
    name =  url.gsub(/.*\//, '')

      File.open(name, 'wb') do |f|
             f.write open(url).read
      end 

end
```


###What about something one of you really does want to do?
Part of Jacqui's project requires knowing where the top-rated beers on [BeerAdvocate.com](http://www.beeradvocate.com/lists/top/) are made. 

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

###Use our new knowledge.
Answer Jacqui's question (you will probably need your excel skills). A hint: "Inc." is not a state.

###Time permitting
Gather Bro and community ratings for the top-rated beers, and come up with a lede based on this information.

