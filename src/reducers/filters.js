import moment from 'moment'

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    todoSortBy: 'active',
    startDate: moment().startOf('year'),
    endDate: moment().endOf('year')
}

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'TODO_SORT_BY_ACTIVE':
            return {
                ...state,
                todoSortBy: 'active'
            }
        case 'TODO_SORT_BY_COMPLETED':
            return {
                ...state,
                todoSortBy: 'completed'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}