
import { useDispatch, useSelector } from 'react-redux'

export const Main = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.main);

    return (
    <div>
        <p> weather report goes here</p>
        <p></p>
    </div>)
}