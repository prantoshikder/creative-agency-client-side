import React, { useState } from 'react';
import HeaderMenu from '../../Customer/HeaderMenu/HeaderMenu';
import SideBar from '../../Customer/SideBar/SideBar';

const AddService = () => {

    const [addServices, setAddServices] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newAddService = { ...addServices };
        newAddService[e.target.name] = e.target.value;
        setAddServices(newAddService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(addServices);
        formData.append('file', file);
        formData.append('title', addServices.title);
        formData.append('description', addServices.description);

        fetch('https://whispering-plains-10037.herokuapp.com/addservice', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("successfully");
                }
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="addService-part" style={{ overflow: 'hidden', background: '#E5E5E5' }}>
            <HeaderMenu></HeaderMenu>
            <div className="row">
                <div className="col-lg-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-6 offset-lg-2">
                    <div className="addService-form" style={{marginTop:'30px', background:'#fff', padding:'40px', borderRadius: '10px'}}>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter title" />
                                    </div>
                                    <div class="form-group">
                                        <textarea onBlur={handleBlur} class="form-control" name="description" placeholder="Enter description" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input onChange={handleFileChange} type="file" id="exampleInputPassword1" placeholder="Picture" />
                                    </div>
                                    <button type="submit" className="brand-btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;