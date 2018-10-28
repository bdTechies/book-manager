## Book Manager &middot; [![GitHub license](https://img.shields.io/github/license/bdTechies/book-manager.svg?style=popout)](https://github.com/bdTechies/book-manager/blob/master/LICENSE.md) [![GitHub stars](https://img.shields.io/github/stars/bdTechies/book-manager.svg?style=popout)](https://github.com/bdTechies/book-manager/stargazers) [![GitHub forks](https://img.shields.io/github/forks/bdTechies/book-manager.svg?style=popout)](https://github.com/bdTechies/book-manager/network) [![GitHub issues](https://img.shields.io/github/issues/bdTechies/book-manager.svg?style=popout)](https://github.com/bdTechies/book-manager/issues) [![Build Status](https://travis-ci.com/bdTechies/book-manager.svg?branch=master)](https://travis-ci.com/bdTechies/book-manager)

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

**N.B.** For Windows users:

```bash
$ npm run start:win
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

- If any problem occurs on mac os during create package try following command:
```bash
$ npm config set python /usr/bin/python2.7
```
