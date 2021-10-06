import React from 'react'

const Search = (customSearchInput, itemList, dbItemList, setItemList, setCustomSearchInput) => {
    // console.log("Search Search Function")
    // console.log(customSearchInput.setCustomSearchInput)
    const onSearchInputChange = (event) => {
        customSearchInput.setCustomSearchInput(event.target.value)
    }

    const HandleSearch = (event) => {
        event.preventDefault()
        console.log("Searching " + customSearchInput.itemList)
        // setItemList(
        //     customSearchInput.itemList.filter((i) => i.id === customSearchInput)
        // )
    }

    const HandleReset = (event) => {
        event.preventDefault()
        console.log("Reset")
        customSearchInput.setItemList(dbItemList)
    }

    return (
        <div className="form-wrapper">
            <form>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Search"
                        className="task-input"
                        required
                        value={customSearchInput.customSearchInput}
                        onChange={onSearchInputChange}
                    />
                </div>
                <div className="incline-content">
                    <button className="button" onClick={(event) => HandleReset}>Reset</button>
                    <button className="button" onClick={(event) => HandleSearch}>Search using ID</button>
                </div>
            </form>
        </div>
    )
}

export default Search
