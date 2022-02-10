## Deliverables
- [x] See all ramen image
     - [x] fetch all ramen
     - [x] iterate all ramen
     - [x] create img elements
     - [x] add to DOM (ramen-menu)
- [x] Click an image and see details (ramen-detail)
- [x] Submit a form to create a new ramen in menu (no persistence)

### Bonus
- [x] see details for `ramen/1` on page load
- [] update rating and comment with an edit form (no persistence)
- [] delete a ramen from menu (no persistence)

## Data
```javascript
{
      "id": 1,
      "name": "Shoyu Ramen",
      "restaurant": "Nonono",
      "image": "./assets/ramen/shoyu.jpg",
      "rating": 7,
      "comment": "Delish. Can't go wrong with a classic!"
}
```

## Endpoints
base: http://localhost:3000
GET /ramens
GET /ramens/:id