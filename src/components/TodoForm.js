import React, { useState } from 'react'
import {connect} from 'react-redux'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

const TodoForm = (props) => {
    const [description, setDescription] = useState(props.todo ? props.todo.description : '')
    const [completion, setCompletion] = useState(props.todo ? props.todo.completion : 'active')
    const [date, setDate] = useState(props.todo ? moment(props.todo.date) : moment())
    const [calendarFocused, setCalendarFocus] = useState(false)
    const [error, setError] = useState('')

    const handleDateChange = (date) => {
        setDate(moment(date));
    }
    const handleFocusChange = (focus) => {
        setCalendarFocus(focus.focused)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleSelect= (e) => {
        setCompletion(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!description) {
            setError('Please make sure your input field is not empty!')
        } else {
            setError('')
            props.onSubmit({
                description,
                date: date.valueOf(),
                completion
            })
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <p className="form__error">{error}</p>
            <input className="text-input"
                value={description}
                onChange={handleDescriptionChange}
                type="text"
                placeholder="What do you need to do?"
            />
            <div className="form__date">
                <h3 className="form__date__title">Creation date:</h3>
                <SingleDatePicker
                    date={date} // momentPropTypes.momentObj or null
                    onDateChange={handleDateChange} // PropTypes.func.isRequired
                    focused={calendarFocused} // PropTypes.bool
                    onFocusChange={handleFocusChange} // PropTypes.func.isRequired
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    disabled={false}
                    displayFormat="DD/MM/YYYY"
                />
            </div>
            <select className="select" 
            value = {completion}
            onChange = {handleSelect}
            >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            </select>
            <div>
                <button className="button">Save Todo</button>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoForm)