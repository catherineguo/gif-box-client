# GIF Box
GIF Box is my capstone project for General Assembly Boston's WDI bootcamp. This is a full-stack web app that allows users to save links to their favorite GIFS.

- Deployed front end: https://catherineguo.github.io/gif-box-client/
- Back end repo: https://github.com/catherineguo/gif-box-api
- Deployed back end: https://young-depths-92120.herokuapp.com/

Technologies used in this project: React, Bootstrap, Sass, Ruby on Rails, PostgreSQL. The search feature incorporates Tenor's GIF search API.

## How it works
To use GIF Box, you'll need to create an account. Once you have an account, you can simply click "Search for GIFs" to find GIFs to save, or click "Save New GIF" to add one manually. Your GIFs are saved in your GIF Box so you can view and edit them later.

It's that easy!

## GIF Box in Action

![My GIF Box](https://i.imgur.com/KYNNzyC.jpg)
![GIF Box Search](https://i.imgur.com/C2H8qUf.jpg)

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
This was my very first React app so I planned accordingly and spent most of my time working on the front end to get comfortable using this framework. Components, virtual DOM, and state were all new concepts to me that tripped me up during the first two days I worked on this project. On the second day, I almost decided to abandon using React for this app, but I took a break, talked with my classmates, did some "rubber ducking", and finally managed to get basic CRUD capability by lunch time on the third project day.

As an added challenge, I wanted to incorporate a third party API, so I decided to use Tenor's GIF search API to provide search functionality for my app. It was much easier to use than I thought it would be, so by the end of the third day, the search feature was complete. The hardest part was figuring out where to find the URL to the gif in the JSON returned from the API call (it was in an object in an array in an object). I also needed to Google search how to use Fetch to make a GET request to the Tenor API.

Overall, I'm proud of how this project turned out, and I'm glad I stuck with using React because I gained a new perspective on how to structure web apps.

## Installation Instructions
- Fork and clone this repository to your local device
- Install dependencies with `npm install`
- Run the app using `npm run start`

## Unsolved Problems
- Currently I limit the number of GIFs returned from the GIF search because I have not incorporated pagination or infinite scrolling yet.

## Future Updates
- Add v2 database: organize GIFs into folders.
- Add validation on the front-end: only accept GIF URLs that end in '.gif'
