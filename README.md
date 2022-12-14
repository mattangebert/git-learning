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

[y,n,q,a,d,j,J,g,/,e,?]
-  y - stage this hunk
-  n - do not stage this hunk
-  q - quit; do not stage this hunk nor any of the remaining ones
-  a - stage this hunk and all later hunks in the file
-  d - do not stage this hunk nor any of the later hunks in the file
-  j - leave this hunk undecided, see next undecided hunk
-  J - leave this hunk undecided, see next hunk
-  g - select a hunk to go to
-  / - search for a hunk matching the given regex
-  e - manually edit the current hunk
-  ? - print help

:question: What are some potential traps/mistakes. Which things can't be "easily" partially committed?

### Exercise Conflicts
Merge conflicts can occur when 2 different sources try to apply changes at the "same" place.
Most common merge conflicts happen during:
- merge, pull, rebase, cherry-pick, applying commits from other branch, reapplying a stash

Most of the time git can resolve them by itself. If not Git will tell you.

If Git can't resolve the conflicts by itself we have following to options
- Resolve the conflict(s)
- Abort or undo the action that cause the conflict(s) (i) Usually with --abort option e.g ``git merge --abort``

Conflicts are surrounded by <<<<<<< and >>>>>>> . 
And the 2 different changes seperated by =======


In the folder Exercise_03 there's an index file with a list in it.
- Add and Change at least 1 Item :warning: DON'T add/commit
- Stash your changes ``git stash``
- Checkout the branch Exercise_03 ``git checkout Exercise_03``
- Reapply your changes ``git stash pop``
- Resolve the conflict (by Hand or with Help of Tool)

### Exercise Rebase vs Merge
A pretty good explanation what happens in merge and what in rebase can be found here:

https://css-tricks.com/rebase-vs-merge-integrating-changes-in-git/

In the folder Exercise_04 is a file that had multiple commits.
The branch Exercise_04 does not have all of those commits, but a few new ones.

- Checkout the branch Exercise_04 ``git checkout Exercise_04``
- Either merge or rebase the branch with master ``git rebase master`` ``git merge --no-ff master``
- Resolve potential conflicts

### Exercise Interactive Rebase
Often enough we want to adjust things that are already committed

the last commit can be edited by using ``git commit --amend``
:warning: Will only "easily" work when branch is not yet pushed

For older commits you have to perform and interactive rebase ``git rebase -i HEAD~3``
in the Editor window following actions are possible (by replacing the word pick)
-  p, pick = use commit
-  r, reword = use commit, but edit the commit message
-  e, edit = use commit, but stop for amending
-  s, squash = use commit, but meld into previous commit
-  f, fixup = like "squash", but discard this commits log message
-  x, exec = run command (the rest of the line) using shell

In the folder Exercise_05 are a few files and multiple commits.
- Checkout the branch Exercise_05 ``git checkout Exercise_05``
- Use interactive rebase to correct the commits flagged with [EXE_5]

### Exercise Cherry Pick
When you committed & pushed something you didn't want to, or put it into the wrong branch
cherry-pick is the tool you can use.

To use the command type ``git cherry-pick <commitId>``
commitId can be seen on the commits e.g. with ``git log``

:warning: Cherry picking is meant for special occasions,
not as a replacement for merging and rebasing.

In the folder Exercise_06 are a few files and multiple commits-
- Checkout the branch Exercise_06 ``git checkout Exercise_05``
- Use cherry-pick to add the commit from main branch titled "feat: Add cherries to tree"