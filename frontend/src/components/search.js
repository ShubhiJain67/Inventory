import React from 'react'

const Search = (customSearchInput, dbItemList, setItemList, setCustomSearchInput) => {
    // console.log("Search Search Function")
    console.log(customSearchInput)
    const onSearchInputChange = (event) => {
        customSearchInput.setCustomSearchInput(event.target.value)
    }

    const HandleSearch = (event) => {
        event.preventDefault()
        customSearchInput.setItemList(customSearchInput.dbItemList)
        customSearchInput.setItemList(
            customSearchInput.dbItemList.filter((i) => (i.name.toLowerCase().includes(customSearchInput.customSearchInput.toLowerCase()) || i.id == customSearchInput.customSearchInput))
        )
    }

    const HandleReset = () => {
        console.log("Reset")
        customSearchInput.setItemList(customSearchInput.dbItemList)
        customSearchInput.setCustomSearchInput('')
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={HandleSearch}>
                <div className="full-width">
                    <input 
                        type="text" 
                        placeholder="Item ID / Title"
                        className="task-input"
                        required
                        value={customSearchInput.customSearchInput}
                        onChange={onSearchInputChange}
                    />
                </div>
                <div className="incline-content">
                    <button className="button" onClick={() => HandleReset()}>Reset</button>
                    <button className="button" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search
