# Sprint 2 feedback

( ) tagged commit on main for sprint2
(X) set of closed user stories
(X) working deployment on Firebase
( ) GitHub reports build passing
(-) team members have completed reflection
(X) demo

## Checklist notes

No sprint 2 tag
Github reports the build failing

I have reflections from
Addison
Wright
Lucas
Jared
Hannah

Missing
Lizzie
Hayden

## Discussion

### User stories

The user story situation has improved since the last sprint. However, you still have some issues.

For example: "Clicking buttons on the keyboard puts a letter into the input". This is not a user story, and it seems like a significant feature (having the virtual keyboard, that is).

Last time I suggested that you add acceptance tests that would describe when a story could be considered "done". I think this would help you write better user stories.

I will point to #7 (which I highlighted last time as well), which was closed and marked complete. I'm not sure how, from a user perspective, the player would ever know. I'm not sure what you are really trying to motivate here.

If the goal is to motivate the use of a dictionary list, then I might write a story like: "As a player, I would like the game to only use common words because if I never know the word I'm supposed to be guessing the game won't be fun and I won't come back." This could be implemented by coming up with a curated dictionary that is used (official Wordle has rules like "no proper names" and "no simple plurals" as well). This is an instance where testing is non-trivial, but you could put acceptance at something like: "a list of at least 50 common 5 letter words has been assembled. The list is loaded into the application and used to chose the next word.

The various Middlebury specific word lists are a good example of this as well. A Middlebury specific list seems to be something that is important to your group, but does it have real value? What are "Middlebury specific words"? Will it be things like "beach" that are only Middlebury specific in certain contexts? If the goal is to help new students learn Middlebury terms, wouldn't you want to explain the terms at some point in the process?

### Agility/scrum

I would like to see more commits. You seem to have a fairly even pace, which is okay, but I worry a little that the relatively small number of commits is indicative of a slower pace.

You have a couple of open branches that seem to have been abandoned or forgotten. You have one that is just lagging main, which the other two are simultaneously lagging main while having a number of unapplied changes.

Again I see reasonable use of the backlog and scoring, but I would still like it to be more obvious when an item can be considered complete (as mentioned above).

### Integration

Again, the PRs look pretty good in that you seem to have one non-trivial comment on each one. I appreciate that some of the broken ones have been closed and not merged, though right at the end you accepted some changes that broke the build, which is unfortunate (I appreciate that this is primarily because of the test and not the actual code base, but it is a bad practice to get into). This repeats a pattern from sprint 1.

### Implementation

You seem to be getting in trouble with the snapshot test. My advise would be to not do it at this stage of development. The snapshot test is really meant for a point where the UI is stable (to make sure you haven't broken the UI when you do something internal). If you do have changes to the UI, you need to regenerate the snapshots so they pass the tests.

I would also suggest that 150 lines of test data is too much to cram into your test files (especially if you are going to use it in multiple locations). Pull that out into a separate file somewhere.

The smoke test is another low quality test. I showed it to you because it is the most basic test, but you don't need it for every component. I would limit it to the end to end testing (if I added it at all -- it is really covered by your other tests). I see some more interesting tets starting to emerge, but they are skipped, which is unfortunate.

For the informational coloring, I would suggest not thinking in terms of color. Think in terms of what you want to communicate ("unguessed", "guessed", "present", "in place" for example). Some intelligent class naming would mean that you didn't need the `keyStyle` if statement at all -- it could just be a lookup based on the state name. I would also separate out the coloring from the other style you have. For example, you could have a `.key` style that contains the size and layout for any key. Then you can merge in the coloring. This would let you share the coloring style across the guesses and the keyboard so you only needed to specify the colors in one place.

### Functionality

The core functionality seems to be there.

- Your word list does seem to need some tuning
- It would be good if the text field cleared after a guess is submitted
- The color feedback in the keyboard is coming along. You want to make sure you don't leave the white text on bright yellow background though, as it is completely unreadable
- It would probably be good to tell the user what the word actually was if they fail (write a user story to justify it)
