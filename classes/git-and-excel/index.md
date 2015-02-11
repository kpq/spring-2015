---
layout: class
week: 2
title: Sort, Filter, Aggregate, Merge
---

How do you interview a spreadsheet like a human being? Today, we'll work on turning a spreadsheet into a story, a source, a chart or something else journalistically valuable.

##Housekeeping

-   Make sure your info is right on the [class roster](https://docs.google.com/spreadsheets/d/1W753AamUgr9wTKawTzDbJooIbyP_v5H_iWZg9a8ZTZY/edit#gid=0)
-   Are you sure you've signed up for the [Google group](https://groups.google.com/forum/#!forum/spring-2015-data-journalism)?
- More introductions

##Critique

- Some lucky classmates are leading our discussion about a [tricky](http://iquantny.tumblr.com/post/83696310037/meet-the-fire-hydrant-that-unfairly-nets-nyc
) [fire](http://iquantny.tumblr.com/post/83770853308/update-single-fire-hydrant-nets-nyc-33-000-a
) [hydrant](http://iquantny.tumblr.com/post/87573867759/success-how-nyc-open-data-and-reddit-saved-new).


## Enough to make you dangerous

<style type="text/css">
	table {
		border-collapse: collapse;
	}
	tr {
		border-bottom: 1px solid #ccc;
	}
	td {
		padding: 5px 40px 5px 3px;
	}
	tr:last-of-type {
		border-bottom: none;
	}
</style>

<table>
	<tr><td>Sort</td><td>Data menu &#8594; Sort</td></tr>
	<tr><td>Filter</td><td>Data menu &#8594; Filter</td></tr>
	<tr><td>Aggregate</td><td>Data menu &#8594; Pivot table</td></tr>
	<tr><td>Merge</td><td>=vlookup(...)</td></tr>
</table>

##Basic skills

Here is some data on <a href = "drunkdrivingdeaths.xls">drunk driving deaths</a> in 2013 from the National Highway Traffic Safety Administration.


1. Download the data to your computer, and open it in your spreadsheet program of choice. 
2. What were the 3 states with the most deaths? The 3 with the fewest?
3. Find some state <a href = "http://www.census.gov/popest/data/state/totals/2013/"> population estimates</a>. Add them to your spreadsheet using a function called <code>vlookup</code>. 
4. What were the states with the highest rates deaths due to drunk driving? The lowest?
5. How many deaths occured in the South? What region of the country had the highest rate of deaths? Here are some <a href = "http://kpq.github.io/sherp-31/assets/data/nytnames.xls">region codes</a> that might help you. For practice, answer this question by using a <code>pivot table</code>. Pivot tables are one way to summarize data.
5. On the second second sheet of the drunk driving data, there is a bit more data. Use this sheet to ask and answer a more interesting question than those we have answered so far.
 
##It's exactly the same when your data is a little bigger.

<p>Here is some data on where <a href="http://kpq.github.io/nyu-data-journalism-fall-2014/classes/codey-code-code/chicago-starter.xlsx">guns recovered in Chicago</a> between 2001 and March 2012 came from.</p>

1. What counties did the most guns come from?
2. What counties in Mississippi did the most guns come from? The fewest?
3. What states did the most guns come from?
4. <a href = "http://www.ers.usda.gov/dataFiles/CountyLevelDatasets/PopulationEstimates.xls"> Per capita?</a>. 


##Choose your own adventure.
1. Using some of the skills we learned last time, make a map about the guns recovered in Chicago.
2. What happens when the data is even bigger? Find the fire hydrant in NYC that now has the most tickets.

