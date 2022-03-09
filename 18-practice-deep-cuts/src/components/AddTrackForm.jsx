import React from 'react'

function AddTrackForm() {
  return (
      <form>
        <div>
          <input value="" type="text" name="image" placeholder="Image URL"/>
          <input value="" type="text" name="title" placeholder="title" />
          <input value="" type="text" name="artist" placeholder="Artist" />
          <input value="" type="number" name="bpm" placeholder="BPM" step="1.00" />
       </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm