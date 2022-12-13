# Final feedback

(X) tagged commit on main for sprint3
(X) set of closed user stories
(X) working deployment on Firebase
(-) GitHub reports build passing
( ) team members have completed reflection
(X) presentation
(X) demo
(X) report
( ) README has full deployment instructions

## Checklist notes

GitHub does report the build passing, but since you skip almost every one of the tests, this mostly just means that it builds.

The README description should be updated to include a full set of instructions on how to deploy the game if someone wanted to take over development. This should include any directions on setting up Firebase, etc...

## Discussion

### User stories

The last few user stories are looking better. However, I do see a "As a product owner..." story in there. The product owner is supposed to speak for the client, not _be_ the client. The truth is that the story wouldn't be very difficult to justify from a user perspective. Being able to tell if a letter you guessed is correct or close is an essential part of the game -- without that you just are making random guesses. The design decision to match the NYT green and yellow can also be justified as supporting familiarity for players who use the NYT version. "As a frequent Wordle player, I would like correct guesses to be colored green and misplaced letters to be colored yellow because I play the NYT version all of the time and I don't want to learn a new set of colors or hints".

### Agility/scrum

Your pattern of commits is still looking pretty bursty and you clearly have a division within the team in terms of contributions. I see some scoring and updating of the scores as things are completed, which is good.

### Integration

I see good use of PRs, though the feedback comments are seem to mostly be of the "great!" variety so it isn't clear if real code review was happening.

### Implementation

I am disappointed that you basically have zero tests. Someone wrote some, but every single one appears to be skipped. This is great for the "all green, everything is passing" badge, but not so hot for your project.

I think a little local state is all it would have taken to get the typing into the latest guess to work. It could have been done without tinkering with the rest of your state or components by realizing that you could have a different component that handled the current input.

### Functionality

The functionality here is good. Other than the need for the text input box, this looks like Wordle. I'm glad you managed to get the stats working so you had some DB interaction, and it is unfortunate that you didn't reach the account point that would keep track of your stats. The other piece of functionality I might ask for is some sort of feedback when you enter a word and it is rejected as not a word.

### Final word

I think you have a lot to be proud of here. You have a playable game, which was the goal. From your report it sounds like the process was a challenging one, but one that you got better at. Ultimately that is the goal of the project in this class -- to gve you a safe place to feel out how this process works where the stakes are not so high.
