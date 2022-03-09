import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const baseUrl = "http://localhost:8001"

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetch(baseUrl + "/tracks")
      .then(res => res.json())
      .then(setTracks)
  }, [])
  
  const addTrack = newTrack => {
    console.log('newTrack: ', newTrack);
    const newTrackBody = {
      ...newTrack,
      BPM: parseInt(newTrack.BPM)
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTrackBody)
    }
    fetch(baseUrl + "/tracks", options)
      .then(res => res.json())
      .then(newTrack => {
        setTracks([...tracks, newTrack])
      })
  }

  return (
    <div>
      <Search />
      <AddTrackForm onSubmitTrack={addTrack} />
      <TracksList tracks={tracks} />
    </div>
  )
}

export default TracksPage