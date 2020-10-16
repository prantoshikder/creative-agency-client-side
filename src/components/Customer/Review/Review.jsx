import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import SideBar from '../SideBar/SideBar';
import './Review.css';

const Review = () => {

    const [reviewInfo, setReviewInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newReviewInfo = { ...reviewInfo };
        newReviewInfo[e.target.name] = e.target.value;
        setReviewInfo(newReviewInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = () => {
        const formData = new FormData()
        console.log(reviewInfo);
        formData.append('file', file);
        formData.append('name', reviewInfo.name);
        formData.append('company', reviewInfo.company);
        formData.append('description', reviewInfo.description);

        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data){
                    alert("successfully");
                }
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="review-part" style={{ overflow: 'hidden', background: '#E5E5E5' }}>
            <HeaderMenu></HeaderMenu>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-6 offset-md-2">
                    <div className="review-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" autocomplete="off" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company's name, Designation" autocomplete="off" />
                            </div>
                            <div className="form-group">
                                <div class="form-group">
                                    <textarea onBlur={handleBlur} class="form-control" name="description" placeholder="Description" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <input onChange={handleFileChange} type="file" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <button type="submit" className="brand-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;