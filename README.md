## DivaDiaries 2.0: RuPaul-themed Instagram Clone with a React/Rails API

## Description

Welcome to DivaDiaries 2.0, I appreciate you following along on the progress of this application! For those of you who are unfamiliar with DivaDiaries 1.0 here is some context. While deep in a RuPaul's Drag Race binge (I'm on season 9 - no spoilers please), I'm continuously working on my coding skills. This app has a React/Rails API, and is intended to function as an Instagram clone, but specifically for past contestants of Drag Race. I built this app to continue to sharpen my API-building skills. In doing so, I taught myself Redux and discovered a whole new world of state management.

In the first version of this app, I implemented a secure functionality for signing up and logging in users that involves the bcrypt gem and 'has_secure_password' to hash and store sensitive user information reliably. Like when using Instagram, queens will be able to peruse their main feed, which is filled with other users' content. Queens can interact by liking or commenting on posts, as well as post their own photo to be seen on the main feed and their own profile page. 

I'm proud to say that in my 2.0 version, I have added in Following and DirectMessage models to my database. Users can now follow each other and keep track of who follows them. Additionally, users can start chats with each other using the new DM functionality and dish all the shade they want in private. I've also improved overall design layout, added in hover states to icons, and a search functionality for a quicker look-up of good friends (or enemies).

As far as even further enhancements go, I'd love to look into the implementation of an external API, and possibly adding in a Discover feed feature like the real Instagram has. Also, as more users join the database, conditional rendering to only view posts of your followed friends would make the experience feel even more like IG. DivaDiaries 24hr stories, and perhaps notification logic, are also in the works. :)

Thank you for checking out DivaDiaries 2.0, and stay tuned for 3.0...

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql
- react-router-dom
- react-redux


## Setup

Start by **cloning** (not forking) the project template repository and removing
the remote:

```console
$ git clone git@github.com:learn-co-curriculum/project-template-react-rails-api.git your-project-name
$ cd your-project-name
$ git remote rm origin
```

Then, [create a new remote repository][create repo] on GitHub. Head to
[github.com](https://github.com) and click the **+** icon in the top-right
corner and follow the steps to create a new repository. **Important**: don't
check any of the options such as 'Add a README file', 'Add a .gitignore file',
etc. — since you're importing an existing repository, creating any of those
files on GitHub will cause issues.

[create repo]: https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line#adding-a-project-to-github-without-github-cli

If you're working with a partner,
[add them as a collaborator][add collaborator] on GitHub. From your repo on
GitHub, go to Settings > Manage Access > Invite a collaborator and enter your
partner's username. Once your partner has access, they should git **clone** (not
fork) the repository.

[add collaborator]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository

Finally, connect the GitHub remote repository to your local repository and push
up your code:

```console
$ git remote add origin git@github.com:your-username/your-project-name.git
$ git push -u origin main
```

When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

Render requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql