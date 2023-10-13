import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'


const ListCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9999/Category")
            .then(res => res.json())
            .then(result => {
                setCategory(result);
            })
    }, [])

    return (
        <div className="list-category-container">
            {
                category.map((c) => {
                    return (
                        <NavLink className="category-item" to={`/dien-thoai/${c.id}`} key={c.id}>
                            <img src={c.Logo} alt={c.Category_Name} />
                            <p className="text-dark" >
                                {c.Category_Name}
                            </p>
                        </NavLink>
                    )
                })
            }
        </div>

    )
}

export default ListCategory