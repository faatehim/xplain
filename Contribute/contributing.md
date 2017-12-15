# CONTRIBUTING

Explain Me Please is open source. We love contributers! Do you have any knowledge or experience in a particular subject or area?
Share your knowledge! 

### Contributing Content

One thing to remember is to write from the audience's perspective rather than your abilities. Let say you want to write about Quantum computing.
You should have numerous categories such as 7 year old, nerd, average joe, mathematician, etc.

If it is useful, it will be on the site, credit given to you of course!

- fork & star the repo
- in the contribute folder, place the text (content) in a '.md' file 
- submit a pull request

If you do not want to go through github, you can email me your content at feedback@explainmeplease.com

If you want to contribute to the code base, see below.

### FORK

[Fork](https://github.com/faatehim/xplain) the project and check out your copy.

```sh
$ git clone git@github.com:username/xplain.git
$ cd xplain
$ git remote add upstream git://github.com/faatehim/xplain.git
```

### BRANCH

Create a feature branch and start hacking:

```sh
$ git checkout -b my-feature-branch
```

### COMMIT

Make sure git knows your name and email address:

```sh
$ git config --global user.name "J. Random User"
$ git config --global user.email "j.random.user@example.com"
```

Writing good commit logs is paramount.  A commit log should describe what
changed and why x changed.

The header line should be meaningful; it is what other people see when they
run `git shortlog` or `git log --oneline`. Follow these guidelines when
writing one:

1. The first line should be 50 characters or less and contain a short
   description of the change.
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.

A good commit log looks like this:

```
explaining the commit in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.
```

### REBASE

Use `git rebase` (not `git merge`) to sync your work from time to time.

```sh
$ git fetch upstream
$ git rebase upstream/master
```

### INSTALL

Once you have the code, install npm dependencies:

```bash
npm install
```

### START SERVER

Simply run:

```bash
node server.js
```

This single command does the following:

- Starts the node server

Now, just open the site in a web browser:

**[http://localhost:8888/](http://localhost:8888/)**

Whenever you make a change and want to see it live, simply restart the server.

That's it! If you have problems, open a GitHub issue.

