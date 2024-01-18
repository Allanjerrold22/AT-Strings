import React from "react";
import Rating from '@mui/material/Rating';
import Allan from '../assets/Allan.png'
import Avatar from '@mui/material/Avatar';
import { useLocation } from 'react-router-dom';

const Review = () => {
    const location = useLocation();
    const { state } = location;

    return (
        <div className="review-section" style={{marginLeft: 16, marginRight: 16}}>
            {state.reviews.map((review, index) => (
                <div className="reviews" style={{marginTop: 18}} key={index}>
                    <div className="line" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{width:"96%", height:1, backgroundColor:'#CDCDCD'}}></div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginTop:16}}>
                        <div className='profile' style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                            <Avatar
                                alt="Remy Sharp"
                                src={Allan}
                                sx={{ width: 50, height: 50 }}
                            />
                            <div style={{display:'flex', flexDirection:'column', alignItems:'right', marginLeft: 6}}>
                                <p style={{fontSize: 16, fontWeight: 500, color: '#252525', margin: 0}}>
                                    {review.custname}
                                </p>
                                <p style={{fontSize: 12, fontWeight: 400, color: '#656565', margin: 0}}>
                                    {review.place}
                                </p>
                            </div>
                        </div>
                        <p style={{fontSize: 12, color:"#656565", margin: 0}}>{review.date}</p>
                    </div>
                    <div style={{marginTop: 6}}>
                        <Rating name="" value={review.rating} readOnly style={{margin: 0}}/>
                        <p style={{fontSize: 14, fontWeight: 400, color: "#656565", margin: 0, textAlign: 'left'}}>
                            {review.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Review;
