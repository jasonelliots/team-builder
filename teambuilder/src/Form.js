import React from 'react'

export default function Form(props){

    const {
        values,
        onInputChange,
        onSubmit,
      } = props


    return (
        <form onSubmit={onSubmit}>
            <div>
                <h1>Add Team Member </h1>
                <button> <h2>Submit</h2> </button>

            </div>

            <div>

                <label> Name: 
                <input 
                
                    type='text'
                    placeholder='team member name'
                    maxLength='30'
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                
                /> 
                </label>

                <label> Email: 
                <input
                    type='text'
                    placeholder='team member email'
                    maxLength='30'
                    name='email'
                    value={values.email}
                    onChange={onInputChange}
                
                /> 
                </label>

                <label> Role: 
                <input
                    type='text'
                    placeholder='team member role'
                    maxLength='30'
                    name='role'
                    value={values.role}
                    onChange={onInputChange}
                
                /> 
                </label>

            </div>


        </form>
    )

}