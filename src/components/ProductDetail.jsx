import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import Navigation from "./Navigation";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
    const [product, setProduct] = useState({
        id: '',
        name: '',
        category_id: '',
        price: '',
        images: ''
    });
    const param = useParams();
    const productId = param.id;

    useEffect(() => {
        fetch(`http://localhost:9999/product/${productId}`)
            .then(res => res.json())
            .then(result => {
                setProduct({
                    id: result.id,
                    name: result.Name,
                    category_id: result.Category_ID,
                    price: result.Price,
                    images: result.Images
                });
            });
    }, [productId]);

    return (
        <>
            <Navigation />
            <Breadcrumb className="col-10 mx-auto">
                <BreadcrumbItem href="/">Trang Chủ</BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to={`/dien-thoai/0`}>
                        {'Điện Thoại'}
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="product-detail-container col-10 mx-auto">
                <div className="product-title col-12">
                    <h1>
                        {product.name}
                    </h1>
                </div>
                <div className="product-content col-12 container row">
                    <div className="col-4">
                        <img src={product.images} alt="product" className="col-12" />
                    </div>
                    <div className="col-8">
                        <div className="col-12">
                            <div className="product-content-price">
                                <h2>
                                    {product.price.toLocaleString('en-US')} đ
                                </h2>
                            </div>
                            <div className="product-content-detail">
                                <h4>Mô tả chi tiết sản phẩm</h4>
                            </div>
                        </div>
                        <div className="col-12 btn-buy-now align-bottom">
                            <button className="col-8">
                                <p>MUA NGAY</p>
                                <p>Giao hàng miễn phí hoặc nhận tại shop</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;