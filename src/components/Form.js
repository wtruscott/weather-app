import {useState} from "react"
import React from "react"
const Form = (props) => {
    const [formData, setFormData] = useState({
        searchterm: ""
    })
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault() // prevents the refresh
        props.weathersearch(formData.searchterm)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.searchterm} placeholder="Where you at?" name="searchterm" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
}
export default Form