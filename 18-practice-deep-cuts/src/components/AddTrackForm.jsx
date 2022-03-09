import React, {useState} from 'react'

function AddTrackForm({ onSubmitTrack }) {

  // const [image, setImage] = useState("")
  // const [title, setTitle] = useState("")
  // const [artist, setArtist] = useState("")
  // const [bpm, setBpm] = useState("")
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    artist: "",
    BPM: ""
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitTrack(formData)
    setFormData({
      image: "",
      title: "",
      artist: "",
      BPM: ""
    })
    // onSubmitTrack({
    //   image,
    //   title,
    //   artist,
    //   BPM: Number(bpm)
    // })
    // setImage("")
    // setTitle("")
    // setArtist("")
    // setBpm("")
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            onChange={handleChange} 
            // onChange={e => setImage(e.target.value)} 
            value={formData.image} 
            type="text" 
            name="image" 
            placeholder="Image URL"/>
          <input 
            onChange={handleChange} 
            // onChange={e => setTitle(e.target.value)} 
            value={formData.title} 
            type="text" 
            name="title" 
            placeholder="title" />
          <input 
            onChange={handleChange} 
            // onChange={e => setArtist(e.target.value)} 
            value={formData.artist} 
            type="text" 
            name="artist" 
            placeholder="Artist" />
          <input 
            onChange={handleChange} 
            // onChange={e => setBpm(e.target.value)} 
            value={formData.BPM} 
            type="number" 
            name="BPM" 
            placeholder="BPM" 
            step="1.00" />
       </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm