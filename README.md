# Git Learning

This Repos is ment to try and learn how to make the best with git commands.
Inspired and oriented to the "advanced Git" Series of css-tricks

## Part 1 The Perfect Commit

In Order to create a readable and understandable Version Control and not just some sort of backup.
Changes in a single commit should belong with each other and make sense together.

what makes a good commit message?
 - A brief and concise subject line that summarizes the changes
   - brief summary of what happened
   - under 50 characters
   - if you find yourself struggling to come up with something brief, this might be an indicator that the commit tackles too many topics!
 - A descriptive message body that explains the most important facts (and as concisely as possible)
   - What changed in your project with this commit?
   - What was the reason for making this change?
   - Is there anything special to watch out for? Anything someone else should know about these changes?

### Exercise Committing single Files
One of the first things to do is to commit multiple times, instead of throwing everything together.

In the folder Exercise_01 are 3 files with their content commented out.
- Remove the comment so that the content is "valid".
- Commit the 3 files in different commits. ``git add <filename>`` + ``git commit``
- Use a meaningful message as if their content had been new.

### Exercise Committing partial file
Sometimes we have multiple changes in a file. Were we either only want to commit part of it,
or they belong to 2 different commits. E.g. we changed the link href, and we also added a new section to the page.

In the folder Exercise_02 are 2 nearly identically files.
- Copy the content of file "index_new" into file "index".
- Commit the changes in index.html in parts ``git add -p index.html`` + ``git commit``
- (i) You have to commit multiple times
- (i) You might have to take attention in which order you create the commits
