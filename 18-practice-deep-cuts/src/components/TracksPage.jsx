import React from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

    
  return (
    <div>
      <Search />
      <AddTrackForm />
      <TracksList />
    </div>
  )
}

export default TracksPage