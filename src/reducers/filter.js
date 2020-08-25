import selectFilters from '../actions/selectFilters';
export const set_filter = 'set_filter'

const filter = (state = selectFilters.show_all, action) =>{
    switch (action.type) {
        case set_filter:
            return action.filter
        default: return state
    }
}

export default filter