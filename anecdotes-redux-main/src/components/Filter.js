import {useDispatch} from "react-redux";
import { setFilter } from "../reducers/filterReducer";


const Filter = () => {
  const dispatch = useDispatch()

  return (
    <>
      Filter: <input onChange={ ( { target } ) => dispatch(setFilter(target.value)) } type="text"/>
    </>
  )
}

export default Filter