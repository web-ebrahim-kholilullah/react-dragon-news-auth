import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch ('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className=" space-y-6">
            <h2>All Categories</h2>
            {
                categories.map(category => <Link className=" block text-xl font-medium ml-4" key={category.id} to={`$/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;