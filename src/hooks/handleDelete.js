const handleDelete = (id) => {
    const proceed = window.confirm("Want to Delete?")
    if (proceed) {
        fetch(`http://localhost:5000/inventory/${id}`,
            {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => console.log(data)
            )
    }
}