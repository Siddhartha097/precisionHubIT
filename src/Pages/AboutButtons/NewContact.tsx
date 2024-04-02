import React from 'react'

const NewContact = () => {
  return (
    <div><form action="">
    <div>
      <label htmlFor="">
        Name:
        <input type="text" name="name" />
      </label>
      <label htmlFor=""></label>
      <input type="email" name="email" value={"EMAIL"} />
    </div>
    <div>
      <input
        type="number"
        name=""
        value={"PHONENUMBER"}
        className="text-black"
      />
      <input type="number" name="number" value={"BUDGET"} />
    </div>
    <div>INP</div>
    <div></div>
    <div></div>
  </form></div>
  )
}

export default NewContact