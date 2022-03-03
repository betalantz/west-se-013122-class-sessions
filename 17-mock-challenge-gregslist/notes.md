## User stories
As a user, I can:
1. [x] see all the listings (image, description, location, GET)
2. [x] click star icon to "fav/unfav" the item (no persistence, state on each card)
3. [] click a trash icon to DELETE from both db and DOM
4. [] submit a search term that will filter listings by name

### ADVANCED
1. [] sort alphabetically by location
2. [] create a new listing with a form and persistence (POST)


## Static data
```javascript
{
    "id": 1,
    "description": "heater",
    "image": "./images/heater.jpg",
    "location": "BROOKLYN"
  }
```

## Endpoints

GET /listings
DELETE /listings/:id

Bonus: POST /listings