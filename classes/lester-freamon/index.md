---
layout: class
week: 1
title: Approaching good enough in Excel
---

The big 4 – sorting, filtering, aggregating and merging – are enough to help you answer 99 percent of data questions. And almost all the time, Excel will be all you need. Today, we use Excel in two real news situations, including formatting is as it actually comes in the real world.

##Housekeeping

- General thoughts on project pitches: think small + manageable
- Project requirements and [pitches](../../projects/), which are due **Monday**.
- [Critique time](https://github.com/kpq/nyu-data-journalism-fall-2014/wiki/Critique-schedule)

##Basic skills when your data is bigger

A digression: sometimes data is published to the web, but, without context, it's hard to know whether it's interesting or not. Here's <a href = "http://schools.nyc.gov/AboutUs/schools/data/Attendance.htm">an example</a> about 
<a href = "http://www.wnyc.org/story/fewer-faces-nyc-schools-after-storm/">NYC school attendance from WNYC.</a>

It's easy to pull down this data every day, but, pretty quickly, it's going to get big enough that you will regret any cheating / manual labor you might have done in our earlier exercises last week.

##Excel work doesn't have to look like it

<img src="http://graphics8.nytimes.com/packages/images/multimedia/bundles/projects/2013/BostonMoment/moment1600.jpg">

Your job is to identify as many people as you can in the picture above.

1. The easiest people to identify in the picture should be the runners. From  the online <a href="http://boston-iframe.r.mikatiming.de/2013/?event=R&idp=999999117A7326000008693E&pid=start">results</a>, here's [a spreadsheet](close-finishers.xls).

2. Here's a wrinkle: not everyone in the photo started at the same time. Here's what the race organizers have to say about that: "Red bibs (numbers 101 - 8,999) are assigned to Wave 1 (10:00 a.m.). White bibs (numbers 9,000 to 17,999) are assigned to Wave 2 (10:20 a.m.). Blue bibs (numbers 18,000 +) are assigned to Wave 3 (10:40 a.m.)."

3. Subtract 40 minutes from the finish gun off of everyone with a bib number less than 9000, and 20 minutes from everyone with a bib number from 9000 to 17999.

4. Make a list of runners to call. Put their first and last names into separate columns with some combination of "Data -> Text to columns" and find and replace.

5. Here's the <a href="http://www.nytimes.com/interactive/2013/04/22/sports/boston-moment.html">NYT take.</a>

 
##Data in the real world

Unfortunately, data doesn't always come formatted the way we like. Let's take a recent example from last year with some data about successful gun traces out of Chicago. (A [gun trace](http://www.atf.gov/publications/factsheets/factsheet-national-tracing-center.html) is where they find out where a gun found in a crime was purchased.) After some phone calls, you get your hands on some source data. Go ahead and [download it](county-data.txt) and open it in a spreadsheet.

1. Take a look at the data. What does one row look like? What does our dream data set look like? Do the things we always do: know dimensions, make a copy, give the columns names.

1. Let's think of questions we might ask of our dream data set instead of this data set. What are some headlines we wish we could be able to write? Add a couple of your own in [this Google Doc](https://docs.google.com/document/d/19bZ5tU5acdgRGX45qU_MPYHaCMNaP1cQap094SkXs6o/edit?usp=sharing). This is a 'hat-on' exercise, so don't be shy.

3. Name the sheet `traces`. How sad does this data make us? 

4. Make columns called `county_clean` and `state_clean` that has just have counties and states only. 

5. How useful would a pivot table of county_clean be? Do a filter in `clean_county` for "Washington". 

6. It's pretty clear that we need some data that has unique values for each county. Google "US county fips codes" and see what the Census has to offer (though any of them are probably fine, we should stick to government data). Save the file locally and enter it as a second sheet in your main Excel file. Call the sheet `FIPS`. <a class="hidden" href="https://www.census.gov/geo/reference/codes/files/national_county.txt">BLAMO</a> and clean it up, doing the normal things we do.

8. Be happy if your sheet looks like this:
  <img src="Screenshot 2014-03-02 16.42.54.png">

10. Make a new column for the 5-digit county FIPS code for each county. Call it ```5_digit_fips```. There are lots of ways to do this.

11. How are we going to join our data?

11. Remove the word "county" from ```county_name``` in a new field called ```county2```.

11. *In both sheets*, make a new column called `joinfield` that pastes the county name and state together, separated by a hyphen. You might need to do this in steps.

14. We're ready to make a crude attempt a vlookup. Try to get a column called "county_fips" in your traces sheet.

15. Which ones didn't match? Why?

16. Make a new field called is_error that gives you a 1 if there is an error and a zero if there is not.

17. Sort your traces data by is_error and then count, both decreasing. This will let you prioritize your targets and quantitatively answer how good our merge was. How many do we need to fix? 

18. Seek and destroy! There's no wrong way to do this, but some ways are righter than others. Keep going until you have matched *98 percent of guns and are not missing any counties with more than 30 guns traced*. (Protip: a pivot table of `is_error` and sum of `count` will be helpful.)

27. With the FIPS codes, what can we do that we couldn't before?

28. Can we answer this question the way we did this join? "What percent of counties had at least one gun traced to Chicago?"

29. One stats program called R would let us map these without too much trouble. What questions might these maps lead you to ask? Where might you go to get answers?
  <img src="http://kpq.github.io/r-tutorials/assets/images/chicago-map-10.png">
  <img src="http://kpq.github.io/r-tutorials/assets/images/chicago-map-12.png">

30. Here's the <a href="http://www.nytimes.com/interactive/2013/01/29/us/where-50000-guns-in-chicago-came-from.html?ref=us">NYT take</a> and <a href="http://www.nytimes.com/2013/01/30/us/strict-chicago-gun-laws-cant-stem-fatal-shots.html?pagewanted=all">story</a>.

##If there's time

• More aggregating practice from last week.
• Projects.