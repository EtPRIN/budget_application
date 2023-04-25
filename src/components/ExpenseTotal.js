import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext'; 

const ExpenceTotal = () => {
    const {expenses} = useContext(AppContext)
    const ExpenceTotals =expenses.reduce((total,item) => {
        return (total=total+item.cost)
    },0)
    return (
        <div className={`alert alert-primary`}>
            <span>Total: {ExpenceTotals}</span>
        </div>
    )
}
export default ExpenceTotal