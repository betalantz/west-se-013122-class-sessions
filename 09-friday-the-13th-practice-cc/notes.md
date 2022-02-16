## Core Deliverables
1. View all movies in nav element
  - [x] Fetch all movie data
  - [x] Select the nav element
  - [x] Iterate over movies arr
  - [x] Create <img> for each movie
  - [x] Append each <img> to nav
2. Populate detail elements with 1st movie on page load
  - [x] Select the right detail elements (title, etc.)
  - [x] get 1st movie object by 0-index of movie arr
  - [x] Set the attributes of detail elements with right object values
3. Populate detail with movie when nav <img> clicked
  - [] add listener to each <img> in nav
  - [] create a detail render fn (maybe from above)
  - [] listener passes obj to render fn
  - [] Set the attributes of detail elements with object values
  _N.B. "Watched" on button derived from obj bool_
4. "Watched" button toggles and semi-persists
  - [] add event listener to button
  - [] cb needs conditional that will set button text based on "watched" bool
  - [] cb flips the value of "watched" for the detail movie obj
5. Enable blood-form to take a number input and increment the detail movie `blood_amount` by that number, updating DOM and semi-persisting
  - [] add event listener to form
  - [] get value of input from form
  - [] increment `blood_amount` of selected movie with input value
  - [] update the DOM (2 or more? options)

## Data shape
```javascript
{
    "id": 1,
    "title": "Friday the 13th",
    "release_year": 1980,
    "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    "image": "./assets/f13-1.jpeg",
    "watched": false,
    "blood_amount": 0
}
```

