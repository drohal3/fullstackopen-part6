import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";


const Filter = (props) => {
  return (
    <>
      Filter: <input onChange={ ( { target } ) => props.setFilter(target.value) } type="text"/>
    </>
  )
}

const mapDispatchToProps = {
  setFilter
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter