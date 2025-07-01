"use client"
const Filter = () => {
    const filerSelect = (value: string) => {
        console.log(value)
    };

    return (
        <form>
            <fieldset>
                <legend>Filter notes:</legend>
                <div>
                    <input type="radio" id="all" name="filter" onChange={() => filerSelect("all")} />
                    <label htmlFor="all">All</label>
                    <input type="radio" id="important" name="filter" onChange={() => filerSelect("important")}/>
                    <label htmlFor="important">Important</label>
                    <input type="radio" id="not-important" name="filter" onChange={() => filerSelect("not important")}/>
                    <label htmlFor="not-important">Not important</label>
                </div>
            </fieldset>
        </form>
    );
};

export default Filter;