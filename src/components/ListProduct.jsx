import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

const ListProduct = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});

    const param = useParams();
    const catId = param.catId;

    useEffect(() => {
        fetch("http://localhost:9999/product/")
            .then(res => res.json())
            .then(result => {
                if (catId === '0') {
                    setProducts(result);
                }
                else {
                    setProducts(result.filter(product => product.Category_ID.toString() === catId));
                }
            })
    }, [catId])


    useEffect(() => {
        fetch("http://localhost:9999/Category")
            .then(res => res.json())
            .then(result => {
                if (catId !== '0') {
                    const cate = result.filter(category => category.id.toString() === catId);
                    setCategory({
                        id: cate[0].id,
                        Category_Name: cate[0].Category_Name,
                        Logo: cate[0].Logo
                    })
                } 
            })
    }, []);



    return (
        <div className="container col-12">
            <Breadcrumb className="col-10 mx-auto">
                <BreadcrumbItem href="/">Trang Chủ</BreadcrumbItem>
                <BreadcrumbItem href={`/dien-thoai/${catId}`}>
                    {catId === '0' ? 'Điện Thoại' : category.Category_Name}
                </BreadcrumbItem>
            </Breadcrumb>

            <div className="title-container col-10 mx-auto px-2">
                <h1>{catId === '0' ? 'Điện Thoại' : category.Category_Name}</h1>
                <h5 style={{ fontStyle: 'italic', color: 'red', fontWeight: 'bolder' }}>{products.length} sản phẩm</h5>
            </div>

            <div className="product-container row fluid ">
                <div className="col-9 row">
                    {
                        products.map(product => {
                            const price = product.Price.toLocaleString('en-US');
                            return (
                                <div className="product-item card col-10 col-sm-6 col-md-4 col-lg-3 shadow m-5" key={product.id}>
                                    <div className="product-item-body card-body">
                                        <img src={product.Images} alt={product.Name} className="col-md-10" />
                                        <p className="product-name">{product.Name}</p>
                                        <div className="btn-card-container">
                                            <button className="product-price">{price} đ</button>
                                            <a href={`product-detail/${product.id}`} className="btn-product-detail">Detail</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ListProduct;