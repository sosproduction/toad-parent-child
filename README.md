*** TaskToad multi-list todo project.  ****

Experiment in chieving state with one-to-many relationships between parent-child components without the use of Redux.


NOTES

1. There would be individual contribution graph views per project, so, for example you had three project,
"art", "music", "writing" there would be a year to date graph of each day of tasks you complete in each
category

2. There would be an "overall" contribution graph that shows the daily work across ALL projects, which of
course is the correct view, because in our daily work we work across many disciplines.  i.e. "Work", "Home",
"Hobby", etc.  

3. The interesting thing about the "overall" view would be that there would be a merging of color, or a
mixing of color based on contribution

EXAMPLE

If we have two projects and four contribution colors:

Contribution colors:
1. light yellow    -  minimal work (1 or 2 tasks completed)
2. medium yellow   -  medium work (3 to 5 tasks completed)
3. light green     -  good work (5 - 7 tasks completed)
4. heavy green     -  massive work (7+ tasks completed)


ART  (on a typical day)
1. One task complete  - minimal work (1 task completed) - light yellow

MUSIC
1. One task complete  - minimal work (1 task completed) - light yellow


OVERALL VIEW for Daily Total = minimal (1 or 2 tasks completed)

A "color average" algorithm would be developed to give a good color representation
of how much work gets down over a daily period across projects.


CHART
=====

light yellow + light yellow + light yellow = medium yellow?  or stay light yellow?
light yellow + medium yellow + light yellow = dark green?   

We could do number averages....

Key   Value
1     Light yellow
2     Medium yellow
3     Light Green
4     Dark Green

(1) Light Yellow + (1) Light Yellow + (4) Dark Green = 6 / Number of projects (3) = 2

So overall Contribution color would be (2) Medium Yellow

Having individual contribution graphs is very cool because we get more granular reporting capabilities 
per project....so we can see over time how much art we are working on versus music we are working on...
Over time it would also be incredible to see what work we do WHEN?  A discovery that we play more music
in the Winter, and paint more in the summer....or over a 3 year period.... we seem to write in the
winter, and paint in the spring....

This information can be extrapolated into seeing how we diet...and keeping journals of different kinds
for each task.

WOW.

You could have CUSTOM DEFINED COLOR FIELDS FOR certain things....

You could create a DIET project for instance.
and create "Breakfast", "Lunch", and "Dinner" projects
In each of these projects you could create a "Make Breakfast" Task,
  with notes for what you make yourself and then show the calorie intake...


















