import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({ text, category})
    setText("")
    setCategory("Code")
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          placeholder="Details"
          onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select 
          value={category}
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
