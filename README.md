# Invoca Ideas Workshop Application

Welcome to the GraphQL Workshop application! This Readme includes directions on how to your development environment up and running.

## Development Setup

### 1. Verify Base Libraries
We rely on the following base libraries/languages/tools:

- Rails v6
- Node v10.15 (or greater)
- sqlite3
- yarn

Please ensure that you have the above installed before continuing.

### 2. Install Project Dependencies

The first step in starting development is to checkout the code locally, and install dependencies:

```bash
$ bundle install`
$ yarn install
```
Both should pass successfully (you can ignore warnings)

### 3. Setup Database

We're using the ultra-simple `sqlite` database (as default with new rails projects). You'll need to get the schema loaded by running:

```bash
$ bundle exec rails db:schema:load
```

### 4. Start the Application and Client Pack server
One two terminal tabs, we'll start two processes:

*Tab 1: Rails Server*

```
$ bundle exec rails server
```

*Tab 2: Webpack Dev Server*

```
$ bundle exec ./bin/webpack-dev-server
```

### 5. Celebrate!
You're ready to develop our sample app! :tada:
