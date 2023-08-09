import React, {useState} from 'react'


const Profile = ({ name }) => {

  const [count, setCount] = useState(0);
  return (
    <>
      <div>Profile Function Comp</div>
      <p>{name}</p>
      <p>{count}</p>
      <button className="px-2 py-1 bg-gray-400 rounded"   onClick={ ()=>setCount(count+1)}> Count ++ </button>

    </>

  )
}

export default Profile