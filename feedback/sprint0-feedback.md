# Sprint 0 Feedback

_It appears that you deleted this file instead of merging it at the end of the last sprint._

## Setup checklist

[X] Repository is created  
[X] All members of the team have accepted the project  
[X] `package.json` is updated  
[X] `npm test` and `npm run lint` run cleanly  
[X] Github CI is running  
[X] Skeleton is posted to Firebase  
[X] Readme has status badge, goal of the project and link to deployed version  
[X] At least one PR has been created and merged  
[X] a commit has been tagged `sprint0`

`editable-number`

Comments:

I hope that you are not under the impression that `editable-number` is a good general name for your branches. That was the name we used in the practical because we were making the number editable... In any event I am glad to see some back and forth in the PR, though the feature branch should be deleted after you have merged it.

## Design checklist

[X] The Product backlog is populated with epic user stories  
[X] There are some lo-fi storyboards with the initial design thoughts
[ ] There are some CRC cards for the main "nouns" in the project

Comments:

I wonder if you can truly get a large enough dictionary to make the words all Midd specific

I appreciate that so many of the user stories are linked in with storyboards, this is a good approach.

I feel like you dipped into the details a little fast. I was looking for the real epics here -- things like different numbers of letters, ability to play multiple times, stats, leader boards (?). You have some of that, but you have them sort of mixed into the details. I want to make sure you have a pretty clear "big vision". Maybe this just means labeling the epics as "epic"

I see a fair amount of redundancy in your user stories. You will probably wnt to do some pruning. You don't want to be in a situation where two people take different user stories on and implement the same thing, or your todo list never looks done because you have redundant cruft in there.

Remember that at a certain level, user stories should be testable. A story like "As a site administrator, I want the gameplay and site to run smoothly so that people return to the site." is not a testable story. The administrator certainly should have some stories, but I suspect it would be better if it was about administering word lists and maybe keeping an eye out for bad actors.

I note that one user story talks about seeing a friend's stats. This is an example of a user story that will open up to a bunch of other stories. What does it mean to be a "friend" on your site? Will you have tools for finding and connecting with friends? Or will it just be one big leader board?

Another one that catches my eye is this one: "As a prospective student I want to be able to play Middordle so that I can learn middlebury language before I get to campus". On the face of it, this is not testable or trivially testable (this is just "able to play"). However, this is one where there are potential implications. The unstated implication here is that there is a log in process and it will not be restricted to middlebury.edu access.

I don't see any CRC cards (but I do see an entry in the In Progress column). I am less concerned about your data model, though you will need to sort out users and score keeping.
