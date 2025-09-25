# WICS Git Workshop

## SETUP

Firstly, we will set up git on our laptop.

1. Install Git from [Link Text](git-scm.com)

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

    - Start from scratch by creating a repo on github and clone it.

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

    Unstage a file but keep changes:

    ```
    git reset <file>
    ```

    Discard changes in working directory (use carefully):
    
    ```
    git checkout -- <file>
    ```
