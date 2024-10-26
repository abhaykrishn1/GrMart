import React from 'react'

import Header from '../../Components/Header'

const ContactUsScreen = (props) => {
    return (
        <div className="Screen">
            <Header title="Contact Us" />

            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 Block">
                    <h5 className="text-center">
                        Reach out to us here
                    </h5>
                    <hr />
                    <div className="col-md-12 col-sm-12 col-xs-12 ">
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Abhay Krshna</strong><br />
                                <label className="fs-7">Store Manager</label><br />
                                <label className="fs-7">a@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-7">GrMart-Ajmera Colony</strong><br />
                                <label className="fs-7">Karad - 416012</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 8765204921 </label><br />
                                <label className="fs-7"> 0231-12345678 </label><br />
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr />
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Mohite Prakit</strong><br />
                                <label className="fs-7">Store Manager</label><br />
                                <label className="fs-7">m@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-7">GrMart-Karad Railway station</strong><br />
                                <label className="fs-7">Karad-411035</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 9999999999 </label><br />
                                <label className="fs-7"> 0233-3333333 </label><br />
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                        <hr />
                        <div className="row" Style="padding: 5px;">
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-5">Mayuresh Kholekar</strong><br />
                                <label className="fs-7">Store Manager</label><br />
                                <label className="fs-7">mk@gmail.com</label>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 Block" Style="padding: 15px;">
                                <strong className="fs-7">GrMart-Karad Bus station</strong><br />
                                <label className="fs-7">Karad-411035</label><br />
                                <label className="fs-7">Maharashtra | India</label>

                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12" Style="padding: 15px;">
                                <strong className="fs-5"> Contact </strong><br />
                                <label className="fs-7"> 88888888 </label><br />
                                <label className="fs-7"> 0233-444444 </label><br />
                                <label className="fs-7"> 1800-9090-5544 </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h5 className="text-center">
                        Let us get back to you
                    </h5>
                    <hr />
                    <div>
                        <br /><br />
                        <div className="mb-3" Style="padding:5px">
                            <h6>Name</h6>
                            <input className="form-control" type="text" placeholder="Your name" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Email</h6>
                            <input className="form-control" type="email" placeholder="YourEmail@example.com" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>Contact</h6>
                            <input className="form-control" type="number" placeholder="Your Mobile" />
                        </div>
                        <div className="mb-3" Style="padding:5px">
                            <h6>What would you like to know?</h6>
                            <textarea rows="3" className="form-control" type="text" placeholder="" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="button" className="btn btn-outline-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUsScreen
