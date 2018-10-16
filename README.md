## Book Manager &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

A simple personal library management application.

![Book Manager](https://cdn.rawgit.com/bdTechies/cdn/ae91723d02f6e5ba222da5a62315e628ff55df3e/images/book-manager-welcome-screen.png)

### Install & Run

1.  First clone the repo:

```bash
$ git clone git@github.com:bdTechies/book-manager.git
```

2.  Then install the dependencies:

```bash
$ npm install
```

3.  Finally run the app:

```bash
$ npm start
```

### Create Packages

Run the following commands to build and package the app for distribution. The packager will create packages based on the platform. [Linux: deb, AppImage; Win: exe; Mac: dmg]

- Only Current platform:

```bash
$ npm run make
```

- All platform (dmg will not be created if platform is not a mac):

```bash
$ npm run make:all
```
