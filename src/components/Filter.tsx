"use client"
import { filter_all, filter_important, filter_not_important } from "@/reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();   

    return (
        <form>
            <fieldset>
                <legend>Filter notes:</legend>
                <div>
                    <input type="radio" id="all" name="filter" onChange={() => dispatch(filter_all())} />
                    <label htmlFor="all">All</label>
                    <input type="radio" id="important" name="filter" onChange={() => dispatch(filter_important())} />
                    <label htmlFor="important">Important</label>
                    <input type="radio" id="not-important" name="filter" onChange={() => dispatch(filter_not_important())} />
                    <label htmlFor="not-important">Not important</label>
                </div>
            </fieldset>
        </form>
    );
};

export default Filter;