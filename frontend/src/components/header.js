import React from "react";
import Search from "./search";

const Header = (customSearchInput, itemList, dbItemList, setItemList, setCustomSearchInput) => {
    // console.log("Header Search Function")
    // console.log(customSearchInput.setCustomSearchInput)
    return (
        <div className="header">
            <h1>My Inventory</h1>
            <Search
                itemList={itemList}
                customSearchInput={customSearchInput.customSearchInput}
                dbItemList={dbItemList}

                setItemList={setItemList}
                setCustomSearchInput={customSearchInput.setCustomSearchInput}
            />
        </div>
    )
}

export default Header