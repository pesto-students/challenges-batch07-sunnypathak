# Git Excercise insights

1. Created a folder named git-exercise on my desktop and initialized with 'git init'
command and created a test file having dummy text content and committed in the master
branch.
2. Retrived the latest commit id from git log and then inspected the objects, and 
I found that type for this commit id is commit and details showed me committer
name, email, and commit message
3. As, I didn't have changed anything but still in my staging area, but this command showed
me the txt file present in my repository.
4. I used git reset and then checked the staging area but that was still showing me some files,
Now here I am confused a little bit and this is a doubt, I have to ask.
5. Performed following operations :
   	a. Added a new line in the txt file and stashed it with name "stashA"
	b. Now, Opened the txt file and added one more line and stashed it with name "stashB"
	c. Now, file don't have any of the lines, so i applied stash@{1} and 
	   checked file, and it had the line I added initially.
	d. Now, I applied stash@{0}, and got error message that my file may would be over-
	   -written, so I should first commit these changes and then apply another
	   stash. So I committed my file and applied another stash, but this time I
	   encountered a conflict,  because my changes in stashA and stashB were
	   at same line in the same file, so I dropped stash@{0}(Doubt what should we do in this case).
6. Created git tag with name "tag-1" and then used git log command to check that
   it is pointing to the right commit also I took a checkout using tha tag name
   and reconfirmed by looking for the changes, I did in that commit.
7. After this, I took a checkout from the feature branch again, and did some changes
   and made a committ and tagged this commit with annotated tag and used git show
   to check the tag details it showed both the tags(lightweight and annotated) then used
   git tag tag-2.0.
8. Created a new branch named test-branch and made few commits in the branch and then
   used git merge master command and my test-branch got merged in the master.
9. Already faced same while practicing stash(refer to 5.d).
10. Practised git log with --oneline, --since, --all,checked 2 most recent
    logs, by aithor name, by committer name.
11. tried 
    echo 'Creating SHA key' | git hash-object --stdin
    and got output 16d98f07c99014df150bc06983800412c5d897aa
12. tried this to revert the most recent commit changes.

