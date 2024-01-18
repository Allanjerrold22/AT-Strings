import React, { useRef, useState, useEffect } from "react";
import "./Details.css";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";
import details1 from "../assets/details1.jpeg";
import details2 from "../assets/details2.jpeg";
import details3 from "../assets/details3.jpeg";
import details4 from "../assets/details4.jpeg";
import SearchBar from "./SearchBar";
import Button from "@mui/material/Button";
import Heart from "../assets/heart.svg";
import Heart1 from "../assets/selected-heart.svg";

import { motion } from "framer-motion";
import Responsivecard from "../Responsivecard";
import Card from "../Card";
import back from "../assets/back.svg";
import cart from "../assets/shopping-cart.svg";
import wishlist from "../assets/wishlist.svg";
import { SnackbarProvider, useSnackbar } from "notistack";
import Review from "../Elements/Review";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../lib/firebaseConfig"
import { urlFor, client } from "../../lib/client";
import { usersUrlFor, usersClient } from "../../lib/usersClient";

function Details(props) {
  const location = useLocation();
  const _state = location.state;
  const [state, setState] = useState({});

  const [_products, _setProducts] = useState([])


  const auth = getAuth(app)

  useEffect(() => {
    // Example: Fetch some data from Sanity using the client instance
    const query = `*[_type == "products"]`;
    client
      .fetch(query)
      .then((data) => {
        const filtered = data.filter((curr) => curr.key == _state.id)[0]
        setState(filtered)
        const query = '*[_type == "users"]';
        let lis = []

        client.fetch(query)
          .then(data => {
            data.map((ele) => {
              ele.User.filter((curr) => curr.uid == auth.currentUser.uid).forEach((item, inx) => {
                console.log(item);
                lis = [...lis, item.list]
              })
            })
            lis.forEach((ele) => {
              if (ele[0].name == filtered.name) setIsHeartClicked(true)
            })
            _setProducts(lis)
          }
          )
          .catch(error => console.error('Error fetching data:', error));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  let navigate = useNavigate();
  const [isHeartClicked, setIsHeartClicked] = React.useState(false);

  async function upload() {

    var uniqid = Math.random().toString(36).substring(2, 7);
    client
      .create({
        _type: "users",
        _id: _state.id + auth.currentUser.uid,
        User: [
          {
            uid: _state.id + auth.currentUser.uid,
            list: [
              {
                name: state.name,
                rating: state.ratings,
                cover: state.images ? urlFor(state.images[0]) : "",
                price: state.price ?? 0,
                size: "219 x 24",
                key: _state.id
              },
            ],
          },
        ],
      })
      .then(() => {
        _setProducts(curr => ([...curr, {
          name: state.name,
          rating: state.ratings,
          cover: state.images ? urlFor(state.images[0]) : "",
          price: state.price ?? 0,
          size: state.size ?? "24 x 24",
          key: _state.id
        },]))
        handleClickVariant("success")(); // Call your notification function here

        LikeClick(); // Call the function to toggle the heart icon source
      })
      .catch((error) => {
        console.error(error.message);
        handleClickVariant("error")(); // Call your notification function here
      });
  }

  async function uploadCart() {

    var uniqid = Math.random().toString(36).substring(2, 7);
    client
      .create({
        _type: "users",
        _id: _state.id + auth.currentUser.uid + "cart",
        User: [
          {
            uid: _state.id + auth.currentUser.uid + "cart",
            list: [
              {
                name: state.name,
                rating: state.ratings,
                cover: state.images ? urlFor(state.images[0]) : "",
                price: state.price ?? 0,
                size: "219 x 24",
                key: _state.id
              },
            ],
          },
        ],
      })
      .then(() => {
        enqueueSnackbar(" Product added to Cart", {
          action,
        });

      })
      .catch((error) => {
        console.error(error.message);
        
      });
  }

  const handleClickWithNotification = () => {
    if (auth.currentUser) {

      if (!isHeartClicked) upload()
      else {
    // client.fetch('*[_type == "users"]').then((res)=>{
    //   console.log(res)
    // })
    // console.log(auth.currentUser.uid);
        client
          .delete({
            query: `*[_type == "users" && _id == $uid]`,
            params: { uid: _state.id + auth.currentUser.uid },
          }).then(response => {
            console.log('Document deleted:', response);
            setIsHeartClicked(false)
          })
          .catch(error => {
            console.error('Error deleting document:', error);
          });
      }
    } else {
      enqueueSnackbar("Please sign in");

    }
  };

  const LikeClick = () => {

    setIsHeartClicked(!isHeartClicked);
  };
  const action = () => (
    <>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/cart");
        }}
        style={{ background: "white", color: "black" }}
      >
        Checkout
      </Button>
    </>
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    if (auth.currentUser) {
     uploadCart()
    } else {
      enqueueSnackbar("Please sign in");
    }

  };
  const handleClickVariant = function (variant) {
    return function () {
      // variant could be success, error, warning, info, or default
      if (auth.currentUser) {
        console.log(auth.currentUser);
        enqueueSnackbar("Product added to wishlist", { variant });

      } else {
        enqueueSnackbar("Please sign in");

      }
    };
  };

  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Owl String Art",
      src: [details1, details2, details3, details4],
      description: "24cm x 32cm",
      content:
        "Discover the enchanting world of owl string arts, where intricate designs and vibrant threads bring adorable owls to life, adding a touch of whimsy and charm to any space.",
      price: 23,
      count: 1,
    },
  ]);

  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    const { current: images } = myRef;
    if (images && images[index]) {
      images[index].className = "active";
    }
  }, [index]);

  return (
    <SnackbarProvider maxSnack={3} action={<Button>UNDO</Button>}>
      <div className="app">
        {/* <SearchBar/> */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <img
            src={back}
            onClick={() => {
              navigate(-1);
            }}
            style={{ width: 64, height: 26, objectFit: "contain" }}
          />
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              margin: 0,
              textAlign: "center",
              color: "#252525",
            }}
          >
            Product Details
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <img
              src={wishlist}
              onClick={() => {
                navigate("/wishlist");
              }}
              style={{ width: 26, height: 26 }}
            />
            <img
              src={cart}
              onClick={() => {
                navigate("/cart");
              }}
              style={{ width: 26, height: 26, marginLeft: 12 }}
            />
          </div>
        </div>
        <div className="details" key={state._id}>
          <div className="big-img">
            <img src={state.images ? urlFor(state.images[index]) : ""} alt="" style={{ height: 200, width: 500, objectFit: 'cover' }} />
          </div>

          <div className="box">
            <div className="row">
              <h2 style={{ margin: 0 }}>{state.name}</h2>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "green",
                  margin: 0,
                }}
              >
                ${state.price}
              </p>
            </div>

            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#656565",
                margin: 0,
              }}
            >
              Size: {state.size}
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#252525",
                marginTop: 12,
              }}
            >
              {state.description}
            </p>

            <DetailsThumb
              images={state.images ?? []}
              tab={handleTab}
              myRef={myRef}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 32,
              }}
            >
              <Button
                variant="outlined"
                type="lowercase"
                className="mui-button"
                onClick={handleClick}
                // onClick={handleClickVariant('success')}
                style={{
                  borderRadius: 6,
                  background: "#252525",
                  color: "#ffff",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                Add to cart
              </Button>

              <motion.div whileTap={{ scale: 0.8 }}>
                <div
                  className="example-container"
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    backgroundColor: "#eeee",
                  }}
                >
                  <img
                    onClick={handleClickWithNotification}
                    src={isHeartClicked ? Heart1 : Heart}
                    style={{
                      width: 24,
                      height: 24,
                      position: "relative",
                      top: 10,
                      left: 11,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            margin: 0,
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          Product Reviews
        </p>
        {state.reviews != undefined &&
          state.reviews.map((ele, index) => {
            return <Review state={ele} />;
          })}

        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "#252525",
            textAlign: "left",
            marginLeft: 16,
            marginTop: 32,
          }}
        >
          more like this
        </p>
        <div
          className="card-layout"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        ></div>
      </div>
    </SnackbarProvider>
  );
}
export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Details />
    </SnackbarProvider>
  );
}

// export default Details;
