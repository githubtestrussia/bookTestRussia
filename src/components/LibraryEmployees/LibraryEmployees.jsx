import axios from "axios";
import { addEmployees, changeLoadingStatus} from "../../reducers/libraryReducer.js";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Employee from "../Employee/Employee.jsx";
import Loader from "../Loader/Loader.jsx";

const LibraryEmployees=()=>{
    const dispatch = useDispatch();
    const {employees, isLoading} = useSelector(state=>state.libraryReducer)
    const getEmployees = async () => {
        dispatch(changeLoadingStatus(true));

        try {
            await axios('https://jsonplaceholder.typicode.com/users')
                .then(employee=>dispatch(addEmployees(employee.data)));

        } catch (error) {
            alert(error);
        }
        dispatch(changeLoadingStatus(false))
    };


    useEffect(()=>{
        getEmployees()
    },[]);


    return (
        <>
            {isLoading ? <Loader/> : (
                <div>
                    {employees && employees.map(person=>{
                        return <Employee key={person.id} adress={person.address['street']} zipCode={person.address['zipcode']} {...person}/>
                    })}
                </div>
            )}

        </>
    )
}

export default LibraryEmployees;
