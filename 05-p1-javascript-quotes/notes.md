## Deliverables
(As user, I should be able to...)
1. [x] Fetch all quotes (GET)
2. [x] See a list of quotes
3. [x] Submit a form to add a new quote to the DOM (no persistence)
4. [x] Click a delete button to remove a quote from the DOM (no persistence)
5. [x] Click a like button to increase the number of likes for a quote (no persistence)

## Bonus
- [x] Click an edit button which will allow each quote to be edited (form at my discretion)
- [x] Click a sort button that toggles between sort by id/author (sort on client/server at my discretion)

### Data
```javascript
{
    "id": 1,
    "quote": "Expect nothing. Live frugally on surprise.",
    "author": "Alice Walker",
    "likes": 1
}
```

### Display spec
```html
    <li class='quote-card'>
      <blockquote class="blockquote">
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">Someone famous</footer>
        <br>
        <button class='btn-success'>Likes: <span>0</span></button>
        <button class='btn-danger'>Delete</button>
      </blockquote>
    </li>
  ```

  MANTRA
  1. Get data
  2. Create elements
  3. Add data to elements
  4. Append to DOM