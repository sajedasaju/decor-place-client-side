import { toast, ToastContainer } from 'react-toastify';
const handleDelete = (id) => {

    const proceed = window.confirm("Want to Delete?")
    if (proceed) {
        fetch(`https://afternoon-fjord-70162.herokuapp.com/inventory/${id}`,
            {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast("Item Deleted")
                }
            }
            )
    }

}
export default handleDelete;