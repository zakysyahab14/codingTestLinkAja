import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Modal, Button } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css'

const ListMovie = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="container-image d-flex justify-content-start" key={movie.id}>
                    <div>
                        <div className='titleMovie'>
                            {movie.title}
                        </div>
                        <LazyLoadImage className="imageList" src={movie.image} effect="blur" alt={movie.title} />
                        <div className='titleMovie'>
                            released date : <br />
                            {moment(movie.showTime).format('DD-MMM-YYYY HH:mm')}
                        </div>
                    </div>

                    <div className='overlay' onClick={() => props.handleDetail(movie.id)}>
                        <Button className="buttonDetail" onClick={showModal}>
                                <strong>View Detail</strong>
                        </Button>
					</div>
                </div>
            ))}
                <Modal className='w-100 modalDetail' title='DETAIL MOVIE' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                            <LazyLoadImage className="imageDetail" src={props.detail.image} effect="blur" alt={props.detail.title}  />
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12" style={{alignSelf: 'center'}}>
                            <div className="row mb-2">
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" style={{fontSize: '20px', color: 'gray'}}>
                                    Movie Title :
                                </div>
                                <div className='titleMovieDetail col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12' style={{fontSize: '20px'}}>
                                    {props.detail.title}
                                </div>
                            </div>
                            <div className="row mb-2">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 pr-0" style={{fontSize: '20px', color: 'gray'}}>
                                    Movie Description:
                                </div>
                                <div className='titleMovieDetail titleMovieDetail col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12' style={{fontSize: '20px'}}>
                                    Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" style={{fontSize: '20px', color: 'gray'}}>
                                    Released Date :
                                </div>
                                <div className='titleMovieDetail titleMovieDetail col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12' style={{fontSize: '20px'}}>
                                    {moment(props.detail.showTime).format('DD-MMM-YYYY HH:mm')}
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </Modal>
        </>
    )
};

export default ListMovie