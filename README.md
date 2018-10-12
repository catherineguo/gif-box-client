# GIF Box
My capstone project for General Assembly Boston's WDI bootcamp.
GIF Box is a full-stack web app that allows users to save links to their favorite GIFS.

- Deployed front end: https://catherineguo.github.io/gif-box-client/
- Back end repo: https://github.com/catherineguo/gif-box-api
- Deployed back end: https://young-depths-92120.herokuapp.com/

Technologies used in this project: React, Bootstrap, Sass, Ruby on Rails, PostgreSQL.
The GIF search feature incorporates Tenor's GIF search API.

## How it works
To use GIF Box, you'll need to create an account. Once you have an account, you can simply click "Search for GIFs" to find GIFs to save, or click "Save New GIF" to add one manually. Your GIFs are saved in your GIF Box so you can view and edit them later.

It's that easy!

## GIF Box in Action

![My GIF Box](https://i.imgur.com/KYNNzyC.jpg)

## Planning
First, I sketched out the wireframes for my app: https://drive.google.com/file/d/1OsU0OXaJKl-L8gQ-HrlZrms5AJ-6wJ2C/view?usp=sharing

Then I wrote out user stories to guide my project design and goals:

1. As a user, I want to be able to save GIFs with a unique name.
2. As a user, I want to see the GIFs that I've saved.
3. As a user, I want to be able to edit the name I provide for my GIF.
4. As a user, I want to be able to remove GIFs that I've saved.
5. As a user, I want to be able to search for GIFs (through Tenor's API: https://tenor.com/gifapi/documentation)
6. As a user, I want to organize my saved GIFs in a folder / tag structure.

To view the ERDs for this project, please refer to the back end repo: https://github.com/catherineguo/gif-box-api

## Development


## Unsolved Problems
- Currently I limit the number of GIFs returned from the GIF search because I have not incorporated pagination or infinite scrolling yet.

## Future Updates
- Add v2 database: organize GIFs into folders.
