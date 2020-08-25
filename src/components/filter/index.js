import React from 'react';
import selectFilters from '../../actions/selectFilters';
import store from '../../store';
import {set_filter} from '../../reducers/filter';

const Filter = () => {
    const show = (filter)=>{
        store.dispatch({
            type: set_filter,
            filter
        })
    }
    return (
        <div>
            {Object.keys(selectFilters).map((filter, index)=>(
                <button key={index} onClick={() => show(filter)}>{filter}</button>)
            )}
        </div>
    )
}

export default Filter