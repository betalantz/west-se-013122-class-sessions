## User stories
As a use I can:
1. [x] Show all items in CurrentInventoryList with image, name & price
2. [x] Click on an item in CurrentInventory to add it to the Reorder list. No dups. Item persists in Inventory.
3. [x] Click on an item on ReorderList to remove it from ReorderList, DOM-only
4. [x] Click on delete button button removes it from both lists in DOM and backend (DELETE)

## Static data
```javascript
{
    "id": 1,
    "image": "./images/doritos.jpeg",
    "name": "Doritos",
    "price": 4.99
  }
```

## Endpoints
GET /inventory
DELETE /inventory/:id