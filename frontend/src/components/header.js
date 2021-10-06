import React from "react";
import Search from "./search";

const Header = (customSearchInput, dbItemList, setItemList, setCustomSearchInput) => {
    // console.log("Header Search Function")
    console.log(customSearchInput)
    return (
        <div className="header">
            <h1>My Inventory</h1>
            <Search
                customSearchInput={customSearchInput.customSearchInput}
                dbItemList={customSearchInput.dbItemList}

                setItemList={customSearchInput.setItemList}
                setCustomSearchInput={customSearchInput.setCustomSearchInput}
            />
        </div>
    )
}

export default Header