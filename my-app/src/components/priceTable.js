import React, { useState } from 'react';

const PriceTable = () => {
  const [display, setDisplay] = useState('School');

  const divStyle = {
    Width: '90%',
    margin: '12%',
    marginTop:'15%'
  }
  const divStyle_1 = {
    textAlign: 'center'
  }
  const imgStyle = {
    width: '190px',
    height: '200px'
  }
  return (
    <>
        
        <div className="page-section" id="priceList">
            <div className="d-flex justify-content-center">
                <button
                className={`btn btn-info ${display === 'School' ? 'active' : ''}`}
                onClick={() => setDisplay('School')}
                >
                School
                </button>
                <button
                className={`btn btn-info ${display === 'Teacher' ? 'active' : ''}`}
                onClick={() => setDisplay('Teacher')}
                >
                Teacher
                </button>
            </div>
        
            {display === 'School' ? (
            <>
                <div className='container  px-5'>
                    <table className="table">
                    <thead>
                        <tr>
                            <th> </th>
                            <th>50 Users</th>
                            <th>100 Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><b>Monthly fee</b></td>
                        <td>$14.95</td>
                        <td>$19.95</td>
                        </tr>
                        <tr>
                        <td><b>Features</b></td>
                        <td>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className='container'>
                        <div className="d-flex justify-content-center my-5">
                            <h2><b>Other Features</b></h2>
                        </div>
                        <div className='flex hstack justify-content-evenly'>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                        </div>
                </div>
            </>
            ) : (
                <>
                <div className='container px-5'>
                    <table className="table">
                    <thead>
                        <tr>
                            <th> </th>
                            <th>150 Users</th>
                            <th>250 Users</th>
                            <th>500 Users</th>
                            <th>750 Users</th>
                            <th>1000 Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><b>Monthly fee</b></td>
                        <td>$24.95</td>
                        <td>$69.95</td>
                        <td>$119.95</td>
                        <td>$159.95</td>
                        <td>$199.95</td>
                        </tr>
                        <tr>
                        <td><b>Features</b></td>
                        <td>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Ullamcorper sit amet</li>
                                <li>LUllamcorper sit amet</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                                <li>Excepteur sint occaecat</li>
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className='container'>
                    <div className="d-flex justify-content-center my-5">
                        <h2><b>Other Features</b></h2>
                    </div>
                    <div className='flex hstack justify-content-evenly'>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                            <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                </div>
                </>
            )}
        </div>
    </>
  );
};

export default PriceTable;