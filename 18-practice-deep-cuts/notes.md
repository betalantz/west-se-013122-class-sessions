## User stories
As a user I can:
1. [x] see all the track info listed in the table
  - GET fetch and store response in state
  - send array from state down as prop to container component
  - iterate with map over array to generate list of <Track />
  - render array of compenents
2. [x] fill out and submit a form to add a new track to both DOM and db (persistence needed, POST)
3. [] filter the diplayed tracks by typing in the search bar, which will filter by any field on the tracks (LIVE search)

## Shape of data
```json
{
    "id": 1,
    "title": "Givenchy",
    "artist": "Lonely Boy",
    "BPM": 122,
    "image": "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTUxMzAyMi9pbWFnZS9rODlZRzAxclh0VXkvY2djZmd4ZmcuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1638295080242"
}
```

## Endpoints
GET /tracks
POST /tracks