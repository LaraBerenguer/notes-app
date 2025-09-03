"use client"
import { filter_all, filter_important, filter_not_important } from "@/reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();   

    return (
        <div className="notes-filter flex gap-2">
            <button
                type="button"
                className="px-3 py-1 rounded-md border-2 border-gray-100 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 text-sm font-medium transition act"
                onClick={() => dispatch(filter_all())}
            >
                All
            </button>
            <button
                type="button"
                className="px-3 py-1 rounded-md border-2 border-gray-100 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 text-sm font-medium transition"
                onClick={() => dispatch(filter_important())}
            >
                Important
            </button>
            <button
                type="button"
                className="px-3 py-1 rounded-md border-2 border-gray-100 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 text-sm font-medium transition"
                onClick={() => dispatch(filter_not_important())}
            >
                Not important
            </button>
        </div>
    );
};

export default Filter;