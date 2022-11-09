# Sprint 1 feedback

( ) tagged commit on main for sprint1
(-) set of closed user stories
(X) working deployment on Firebase
(X) GitHub reports build passing
(-) team members have completed reflection
(X) demo

## Checklist notes

No sprint 1 commit

There are closed _items_ in the backlog, but no _user stories_.

I have reflections from
Addison
Hayden
Wright
Hannah
Lucas
Jared

Missing
Lizzie

## Discussion

### User stories

You have something of a mixed bag in the user story department. I don't see any actual user stories in the complete column. I also don't see any scheduled for the next sprint. Don't lose sight of the fact that we want to frame requirements as user stories so we know why we are implementing a feature (which can suggest its priority and how we will approach it).

You do have some user stories in the product backlog. Some are better than others.

Here are some examples:

These two are fine. They describe features of the site that you have deemed important and provide a rationale for that:

"As a competitive Wordle player, I want to be able to see my stats (# of guesses count, average # of guesses) so that I can benchmark against my past results."

"As a player I want to know what letters I already guessed that aren’t in the word, so that I don’t use them again."

This one is trickier

"As a Middlebury student, I want to be able to play a game of Wordle that is more specific to my school."

It would be very difficult to make this testable. I'm also not sure how this would really teach Middlebury specific words to new students. If education is really the goal, then we would expect them to fail a lot (less fun) and there should eb some way for them to educate themselves (a glossary?)

This one, while amusing, does not have a real justification:

"As a player I want to know that the words are spelled correctly so I don’t get angry and smash my computer."

This one is also vague and untestable (and arguably could be applied to every project).

"As a site administrator, I want the gameplay and site to run smoothly so that people return to the site."

### Agility/scrum

I see some reasonable use of the backlog, and scoring. I would like to see some acceptance tests incorporated into your backlog items. There should be something that says how to tell when the item is complete.

### Integration

I am seeing some good frequency on the PRs. The ones I looked at all had a second pair of eyes, though I'm not sure that I saw a lot of meaningful comments. The more worrying trend was the number of PRs that were merged that were failing the tests. These should not have made it into main.

### Implementation

Looking at the main `Guess` component, it looks like some refinement could be done. This doesn't really look like a React component -- this looks more like a helper function.

Some code smells:

- there are too many props
- there are four separate calls to callbacks within the main render function

It is okay to make utility functions that aren't components. I would separate out the logic that is just parsing the guess and make it a normal function. let this just display the guesses.

I spoke with Lizzie today, and Guess.test.js is not really a test yet.

The `Keyboard` also exhibits some code smell.

I see three copy and pasted blocks. You should figure out a way to handle this that does not have this duplication. Some suggestions:

- an array of arrays for the rows of the keyboard
- make a letter component that handles the coloring
- remove the intermediate stage that converts every letter to an object and then to a button

In `Main`, you are saving a lot of state, and I'm not convinced you need it all. Some of that is easily derivable, so you are partially violating the single source of truth rule. This is asking for problems later if any of these get out of sync.

The index test is quite problematic since it is only checking for "Generic Project" to be on the page, which it should be any more.

### Functionality

There is clearly a ways to go, but I appreciate that you led with your core functionality and have the very basic functionality in place.
