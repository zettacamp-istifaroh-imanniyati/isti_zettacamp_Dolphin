#I create new repo named Git_Day1 in my github, not create a new branch in this branch and repo (for task no 1 & 2)
#I create a new repo named istifaroh (for task 3)

TASK
Create a new repositor
Create empty files & directory inside the repository like this : 
    Index.html
    Readme.txt
    assets
    style.css
Do first commit for all empty files & directory named “[Initialization] Files & Directory Creation”
Update index.html to have a tab header titled “Website for git”, and in the body to have <h1> This is the website for git </h1> with center aligned.
Do second commit for the changes in index.html named “[UI] Update Index HTML to have tab title and body”
Updated assets/style.css to have style for class .red-color which has attribute color: “red”
Update index.html to import assets/style.css and use class .red-color in <h1 class=”red-color”>
Do third commit for the changes named “[UI] Update Index HTML and Style.css to have red color on text <h1>”
Do Revert on commit “[UI] Update Index HTML and Style.css to have red color on text <h1>”
Create new empty file “my-note.txt” and .gitignore that exclude my-note.txt
Do fourth commit for changes “[Structure] Add gitignore file”
At the end of tasks, we should have :
    Commits :
    First commit initialization
    Second commit UI index.html
    Third commit UI index.html and style.css (REVERTED)
    Fourth commit gitignore
    UI :
    UI should be back to have black color for <h1>

START of Branching Tasks. Create a new repository, different from what you created during the learning with readme file and then commit “[Initialization] First Commit”
Readme.txt.
Create a new branch “dev/your_name”, for example “dev/budi” from master
Create empty files & directory inside the repository like this in dev branch : 
Index.html
yourname.txt
assets
style.css
Do first commit for all empty files & directory named “[Initialization] Files & Directory Creation”
Create a new branch “bugfix/your_name”, for example “bugfix/budi” from master branch 
Create empty files inside bugfix branch and commit : 
my_note.txt
Merge branch dev into master branch
Merge branch bugfix into master branch
In master branch, it should have all files like this : 
Index.html
yourname.txt
Readme.txt
my_note.txt
assets
Style.css

START of GITHUB Tasks. Create a new remote repository, different from what you created during the learning.
Connect the remote repository with your local repository. 
Create local branch ‘dev/your_name’
Push your local dev branch into remote repository
In dev branch, create empty files like this : 
index.html
readme.txt
assets
style.css
Commit the changes with commit name “[Initialization] Creation of files”
Push your local dev branch with new commits into remote repository
Create Pull Request in Github website from dev branch to master branch 
