# WICS Git + ReactJS Workshop

Welcome to the workshop!
Follow along to get started :)

# GIT

## SETUP

Firstly, we will set up git on our laptop.

1. Install Git from git-scm.com

2. Configure your user info so commits have your name and email:

    ```
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    ```

3. Enable nice colored output for easier reading:

    ```
    git config --global color.ui auto
    ```


## Your first repository:

There are two ways you can create your first repository.
    - Convert your existing folder on your machine into a git repo.

    ```
    git init
    ```

Start from scratch by creating a repo on github and clone it.

    ``` 
    git clone
    ```

## Exercise

1. Fork this repository to your github account.

2. Clone your _forked_ repository on your vscode

    Please make sure you replace your username in the URL below.

    ```
    git clone https://github.com/YOUR_USERNAME/git-workship.git
    ```

4. Change to your clone directory

    ```
    cd git-workshop
    ```

5. Open your repo to make changes.

    ```
    code .
    ```

6. Check the status of your git repository

    ```
    git status
    ```

7. Stage, Commit & Push

    ```
    git add hello.txt
    git commit -m "Initial Commit"
    git push
    ```

8. Undoing & Viewing History

    View commit history:

    ```
    git log
    ```
    To quit, press 'q'

    Unstage a file but keep changes:

    ```
    git reset <file>
    ```

    Discard changes in working directory (use carefully):

    ```
    git checkout -- <file>
    ```

9. Branches let you work on features independently.

    List branches:
    ```
    git branch
    ```

    Create a new branch (working directory):
    ``` git branch <branch-name>```

    Switch to a branch:
    ```git checkout <branch-name>```

    Add the branch to github:
    ```
    git push --set-upstream origin <branch-name>
    ```

10. Merging branches

    In order to merge a branch, checkout to the directory in which you want to merge <branch-name> and run the command.

    ```
    git merge <branch-name>
    ```

    This opens a file in which you can make changes to the commit message. Once you close the file, a merge request is created. The continue with pushing to see changes on github.

# REACT JS

## SETUP

1. Download Node.js from https://nodejs.org/en/download

    Run the following commands:

    ```
    npm create vite@latest my-app --template react
    cd my-app
    ```

    After you do this, I want you to create your github repository for storing this project. (HINT: use ```git init```)

    ```
    npm install
    npm run dev
    ```

    Create a .gitignore file

    And write
    
    ```
    /node-modules
    ```

## Basics of React Js

1. JSX – React Syntax

    JSX looks like HTML but is JavaScript:

    ```
    const element = <h1>Hello, world!</h1>;
    ```

    Embed JS expressions with {}:

    ```
    <p>
    {user.name}
    </p>
    ```

    Render lists with .map():
    ```
    # This is the list
    const items = ['Apple', 'Banana'];

    # Printing like an unordered list.
    <ul>
    {items.map(item => <li key={item}>{item}</li>)}
    </ul>
    ```

2. Components

   Components are JavaScript functions that return JSX:
    
    ```
    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }
    ```

    props are inputs for components (like function arguments).

