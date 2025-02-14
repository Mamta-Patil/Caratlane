import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FcLike } from "react-icons/fc";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Ring = () => {
  const [productdata, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedPriceFilters, setSelectedPriceFilters] = useState([]);
  const [selectedDiscountFilters, setSelectedDiscountFilters] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const priceRanges = [
    { label: "₹5,001 - ₹10,000", min: 5001, max: 10000 },
    { label: "₹10,001 - ₹15,000", min: 10001, max: 15000 },
    { label: "₹15,001 - ₹20,000", min: 15001, max: 20000 },
    { label: "₹20,001 - ₹30,000", min: 20001, max: 30000 },
  ];

  const discountOptions = ["20% off", "25% off"];

  const addWishlist = (product) => {
    axios
      .post("http://localhost:30001/wishlist", product)
      .then(() => alert("Added to wishlist!"))
      .catch((err) => console.log(err));
  };

  // Fetch products with filters
  const getFetchData = () => {
    let params = {
      _page: page,
      _limit: 5,
    };

    if (selectedPriceFilters.length > 0) {
      params.price_gte = Math.min(...selectedPriceFilters.map((f) => f.min));
      params.price_lte = Math.max(...selectedPriceFilters.map((f) => f.max));
    }

    axios
      .get("http://localhost:30001/products", { params })
      .then((res) => {
        let filteredProducts = res.data;

        if (selectedDiscountFilters.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            selectedDiscountFilters.some((discount) =>
              new RegExp(`${discount.replace("%", "\\%")}`, "i").test(product.discount)
            )
          );
        }

        setProductData(filteredProducts);
      })
      .catch((err) => console.log(err));
  };

  // Handle price filter selection
  const handlePriceFilterChange = (range) => {
    setSelectedPriceFilters((prevFilters) =>
      prevFilters.some((f) => f.min === range.min)
        ? prevFilters.filter((f) => f.min !== range.min)
        : [...prevFilters, range]
    );
  };

  // Handle discount filter selection
  const handleDiscountFilterChange = (discount) => {
    setSelectedDiscountFilters((prevFilters) =>
      prevFilters.includes(discount)
        ? prevFilters.filter((d) => d !== discount)
        : [...prevFilters, discount]
    );
  };

  useEffect(() => {
    getFetchData();
  }, [page, selectedPriceFilters, selectedDiscountFilters]);

  return (
    <div>
      <Navbar />
      <div className="d-flex row m-0">
        <div className="d-flex rings_product" style={{ marginTop: "9%" }}>
          {/* Filter Section */}
          <div className="filters col-lg-3">
            <h6>Price</h6>
            {priceRanges.map((range, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  className="ms-3"
                  checked={selectedPriceFilters.some((f) => f.min === range.min)}
                  onChange={() => handlePriceFilterChange(range)}
                />
                <span className="ps-2">{range.label}</span>
              </div>
            ))}

            <h6 className="mt-3">Discount</h6>
            {discountOptions.map((discount, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  className="ms-3"
                  checked={selectedDiscountFilters.includes(discount)}
                  onChange={() => handleDiscountFilterChange(discount)}
                />
                <span className="ps-2">{discount}</span>
              </div>
            ))}
          </div>

          {/* Products Section */}
          <div className="products col-lg-9">
            {productdata.length > 0 ? (
              productdata.map((el) => (
                <div key={el.id} className="ring">
                  <Link to={`/productdetails/${el.id}`}>
                    <img
                      src={el.image}
                      height={300}
                      width={"100%"}
                      className="image img-thumbnail"
                    />
                  </Link>
                  <p className="fs-6 m-0 ps-2 pt-2" style={{ color: "#433d8b" }}>
                    ₹{el.price}
                  </p>
                  <FcLike onClick={() => addWishlist(el)} />
                  <p className="m-0 ps-2" style={{ color: "#de57e5" }}>
                    Check Delivery Date
                  </p>
                  <p className="m-0 ps-2" style={{ color: "grey" }}>
                    {el.title}
                  </p>
                </div>
              ))
            ) : (
              <p>No products found for selected filters.</p>
            )}


          </div>
          
        </div>  
                    {/* Pagination */}
              <div className="d-flex justify-content-center w-100 mt-3">
                <button
                className="btn btn-primary"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                >
                Prev Page
                </button>
                <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
                Next Page
                </button>
            </div>
      </div>


      <Button className="btn offcanvance_btn p-2" style={{backgroundColor:"#433d8b",color:"#fff"}} variant="" onClick={handleShow}>
        Filter Products
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="bottom" style={{backgroundColor:"#a65ff3",color:"#fff"}}  className="offcanvas offcanvas-bottom show filter_offacanvas">
        <Offcanvas.Header closeButton style={{color:"#fff"}}>
          <Offcanvas.Title>Filter products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <h6>Price</h6>
            {priceRanges.map((range, index) => (
              <div key={index}>
                <input  
                  type="checkbox"
                  className="ms-3"
                  checked={selectedPriceFilters.some((f) => f.min === range.min)}
                  onChange={() => handlePriceFilterChange(range)}
                />
                <span className="ps-2">{range.label}</span>
              </div>
            ))}

            <h6 className="mt-3">Discount</h6>
            {discountOptions.map((discount, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  className="ms-3"
                  checked={selectedDiscountFilters.includes(discount)}
                  onChange={() => handleDiscountFilterChange(discount)}
                />
                <span className="ps-2">{discount}</span>
              </div>
            ))}
        </Offcanvas.Body>
      </Offcanvas>

      <Footer />
    </div>
  );
};

export default Ring;
