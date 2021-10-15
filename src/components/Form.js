import React, { useState, setState } from 'react';
import './Dashboard/Dashboard.css';

function Form(props) {

  const[climbInfo, setClimbInfo] = useState({
      username: '',
      date: '',
      gym: '',
      climbType: '',
      grade: '',
      rating: '',
      likes: 0,
      id: 0,
      comments: {},
  })

  const[idCounter, setIdCounter] = useState(0)

  

  const handleGymInputChange = (event) => {
    setClimbInfo({...climbInfo, gym: event.target.value})
} 

const handleGradeInputChange = (event) => {
    setClimbInfo({...climbInfo, grade: event.target.value})
} 

  const handleClimbTypeInputChange = (event) => {
      setClimbInfo({...climbInfo, climbType: event.target.value})
  } 

  const handleRatingInputChange = (event) => {
    setClimbInfo({...climbInfo, rating: event.target.value})
} 

  const handleUsernameInputChange = (event) => {
      setClimbInfo({...climbInfo, username: event.target.value})
  }

  const handleDateInputChange = (event) => {
      setClimbInfo({...climbInfo, date: event.target.value})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(climbInfo);
    event.target.reset();
    const newId = idCounter +1;
    setIdCounter(newId);
    setClimbInfo({likes: 0, id: newId});
  }

  return (
    
      <div className='form-container'>
          <form className='form' onSubmit={handleSubmit}>
              
              
              <h1 className='dash-title'>Submit a Climb</h1>
              <input
                  onChange={handleUsernameInputChange}
                  value={climbInfo.username}
                  className='form-field'
                  type='text'
                  placeholder='Username'
                  name='username'
              />
              <input
                  onChange={handleDateInputChange}
                  value={climbInfo.date}
                  className='form-field'
                  type='text'
                  placeholder='Date'
                  name='date'
              />
              <select id='gym' className='form-field' name='gym' onChange={handleGymInputChange}>
                  <option selected value='gym-select'>Select Gym</option>
                  <option value='BKB West Loop'>BKB West Loop</option>
                  <option value='BKB Lincoln Park'>BKB Lincoln Park</option>
                  <option value='FA Avondale'>FA Avondale</option>
                  
              </select>
              
              <select id='climbType' className='form-field' name='climbType' onChange={handleClimbTypeInputChange}>
                  <option selected value='climbType-select'>Select Climb Type</option>
                  <option value='Boulder'>Boulder</option>
                  <option value='Top Rope'>Top Rope</option>
                  <option value='Lead'>Lead</option>
              </select>

              <input
                  onChange={handleGradeInputChange}
                  value={climbInfo.grade}
                  className='form-field'
                  type='text'
                  placeholder='Grade'
                  name='grade'
              />
              
              <select id='rating' className='form-field' name='rating' onChange={handleRatingInputChange}>
                  <option selected value='rating-select'>Select Rating</option>
                  <option value='1'>1 Star</option>
                  <option value='2'>2 Stars</option>
                  <option value='3'>3 Stars</option>
                  <option value='4'>4 Stars</option>
                  <option value='5'>5 Stars</option>
              </select>
              
              <button className='form-field' type='submit'>
                  Submit
              </button>

          </form>
        </div>

        
      
      
  )
}

export default Form;
