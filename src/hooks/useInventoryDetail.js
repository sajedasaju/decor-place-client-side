import { useEffect, useState } from "react";

const useInventoryDetail = (inventoryId) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://afternoon-fjord-70162.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventory])
    return [inventory, setInventory];

}
export default useInventoryDetail;