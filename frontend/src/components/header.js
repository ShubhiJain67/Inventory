import React from "react";
import Search from "./search";

const Header = ({customSearchInput, setItemList, setCustomSearchInput, setUpdateDBItemList}) => {
    return (
        <div className="header">
            <h1>My Inventory</h1>
            <Search
                customSearchInput={customSearchInput}
                setItemList={setItemList}
                setCustomSearchInput={setCustomSearchInput}
                setUpdateDBItemList={setUpdateDBItemList}
            />
        </div>
    )
}

export default Header