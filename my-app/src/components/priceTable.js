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
    <div style={divStyle}>
        
        <div className="page-div bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h1 className="div-heading text-uppercase">Manage All Your School Skills in One Place</h1>
                    <h3 className="div-subheading text-muted">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</h3>
                </div>
                <div id="scroll">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-5 order-lg-2">
                                <div className="p-5"><img className="img-fluid" src="7.png" alt="..." /></div>
                            </div>
                            <div className="col-lg-7 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">For those about to rock...</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/>
      <div className="d-flex justify-content-between" style={divStyle_1}>
        <button
          className={`btn btn-primary ${display === 'School' ? 'active' : ''}`}
          onClick={() => setDisplay('School')}
        >
          School
        </button>
        <button
          className={`btn btn-primary ${display === 'Teacher' ? 'active' : ''}`}
          onClick={() => setDisplay('Teacher')}
        >
          Teacher
        </button>
      </div>
      <br />
      {display === 'School' ? (
        <div>
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
            <br/><br/>
            <div className='container'>
                <div className='row'>
                    <div className="d-flex justify-content-center">
                        <h2><b>Other Features</b></h2>
                        
                    </div>
                </div>
                <br/><br/>
                <div className='row'>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        
                    </div>
                    <div className='col-2'>
                        
                    </div>
                </div>
            </div>
            </div>
      ) : (
        <div>
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
            <br/><br/>
            <div className='container'>
                <div className='row'>
                    <div className="d-flex justify-content-center">
                        <h2><b>Other Features</b></h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                    <div className='col-2'>
                        <img src='placeholder.jpg' alt='feature pic...' style={imgStyle}/>
                    </div>
                </div>

        </div>
        </div>
        
      )}
      <br/><br/>
      
    </div>
  );
};

export default PriceTable;