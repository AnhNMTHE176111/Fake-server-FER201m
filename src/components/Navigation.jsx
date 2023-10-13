import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navigation = () => {
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:9999/Category")
            .then(res => res.json())
            .then(result => {
                setCategory(result);
            })
    }, [])

    return (
        <Container className="nav bg-dark text-light nav-content" fluid style={{ marginTop: "0px", padding: '20px' }} >
            <Row style={{ width: "100%", color:'#fff' }}>
                <Col md={12} className="nav-content text-light">
                    <NavLink className="text-light" to="/dien-thoai/0">Sản phẩm</NavLink>
                    {category.map((c) => {
                        return (
                            <NavLink className="text-light" to={`/dien-thoai/${c.id}`} key={c.id}>
                                {c.Category_Name}
                            </NavLink>
                        )
                    })
                    }
                </Col>
            </Row>
        </Container >
    )
}
export default Navigation;