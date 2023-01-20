import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { addCar } from '../../redux/motorcycle/motocycle_slice';
import './form.css';

const AddForm = () => {

    const dispatch = useDispatch();
    const allCars = useSelector((state) => state.motor);
    const [state, setState] = useState(allCars);

    const navigate = useNavigate();

    const [enterBrand, setEnteredBrand] = useState('');
    const [enterModel, setEnteredModel] = useState('');
    const [enterReleaseDate, setEnteredReleaseDate] = useState('');
    const [enterColor, setEnteredenterColor] = useState('');
    const [enterTransmission, setenterTransmission] = useState('');
    const [enterSeats, setenterSeats] = useState('');
    const [enterwheelDrive, setenterwheelDrive] = useState('');
    const [enterPrice, setenterPrice] = useState('');
    const [enterImage, setImage] = useState('');

    

    const imagechangeHandler = (e) => {
        setImage(e.target.value);
      };

    const changeHandler = (e) => {
        setEnteredBrand(e.target.value);
      };
    
      const modelchangeHandler = (e) => {
        setEnteredModel(e.target.value);
      };

      const releasechangeHandler = (e) => {
        setEnteredReleaseDate(e.target.value);
      };

      const colorchangeHandler = (e) => {
        setEnteredenterColor(e.target.value);
      };

      const transmissionchangeHandler = (e) => {
        setenterTransmission(e.target.value);
      };

      const seatschangeHandler = (e) => {
        setenterSeats(e.target.value);
      };

      const drivechangeHandler = (e) => {
        setenterwheelDrive(e.target.value);
      };


      const pricechangeHandler = (e) => {
        setenterPrice(e.target.value);
      };
      

      const addCars = (e) => {
        e.preventDefault();
        if (!enterBrand || !enterModel || !enterPrice){
            alert("Please fill all form input");
            return;
        }

        const addnewCar = {
            enterBrand: enterBrand,
            enterModel: enterModel,
            enterPrice: enterPrice,
            enterReleaseDate: enterReleaseDate,
            enterColor: enterColor,
            enterTransmission: enterTransmission,
            enterSeats: enterSeats,
            enterwheelDrive: enterwheelDrive,
            enterImage: enterImage,
          };

         const response =  dispatch(addCar(addnewCar));
         if(response) {
            navigate("/home")
         }

      };


    return (
        <div  className="col-sm-9 content-area">
             <h2>ADD CARS</h2>
             <div>Add new car brands</div>


             <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">

                  
            <div className="add-car">
            <form onSubmit={addCars}>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Brand</label>
                        <div class="col-sm-10">
                        <input
                            class="form-control"
                            placeholder="Enter Brand"
                            type="text"
                            name="brand"
                            id="brand"
                            autoComplete="off"
                            required
                            value={enterBrand}
                            onChange={changeHandler}
                        />
                        </div>
                    </div><br/>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Model</label>
                        <div class="col-sm-10">
                        <input 
                            class="form-control"
                            placeholder="Enter Model"
                            type="text"
                            name="model"
                            id="model"
                            autoComplete="off"
                            required
                            value={enterModel}
                            onChange={modelchangeHandler}
                        />
                        </div>
                    </div><br/>

                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Release year</label>
                        <div class="col-sm-10">
                        <input 
                            class="form-control"
                            placeholder="Enter Release Year"
                            type="date"
                            name="release_year"
                            id="release_year"
                            autoComplete="off"
                            required
                            value={enterReleaseDate}
                            onChange={releasechangeHandler} />
                        </div>
                    </div><br/>

                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Color</label>
                        <div class="col-sm-10">
                        <input 
                             class="form-control"
                             placeholder="Select Color"
                             type="color"
                             name="color"
                             id="color"
                             autoComplete="off"
                             required
                             value={enterColor}
                             onChange={colorchangeHandler} />
                        </div>
                    </div><br/>

                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Transmission</label>
                        <div class="col-sm-10">
                        <input 
                             class="form-control"
                             placeholder="Add Transmission"
                             type="text"
                             name="transmission"
                             id="transmission"
                             autoComplete="off"
                             required
                             value={enterTransmission}
                             onChange={transmissionchangeHandler} />
                        </div>
                    </div><br/>

                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Seats</label>
                        <div class="col-sm-10">
                        <input 
                             class="form-control"
                             placeholder="Add Seats"
                             type="number"
                             name="seats"
                             id="Seats"
                             autoComplete="off"
                             required
                             value={enterSeats}
                             onChange={seatschangeHandler} />
                        </div>
                    </div><br/>

                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">wheel Drive</label>
                        <div class="col-sm-10">
                        <input 
                             class="form-control"
                             placeholder="Add wheel Drive"
                             type="number"
                             name="wheel_drive"
                             id="wheel_drive"
                             autoComplete="off"
                             required
                             value={enterwheelDrive}
                             onChange={drivechangeHandler} />
                        </div>
                    </div><br/>

                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-10">
                        <input 
                             class="form-control"
                             placeholder="Add price"
                             type="number"
                             name="price"
                             id="price"
                             autoComplete="off"
                             required
                             value={enterPrice}
                             onChange={pricechangeHandler} />
                        </div>
                    </div><br/>

                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Image Path</label>
                        <div class="col-sm-10">
                        <input 
                             class="form-control"
                             placeholder="Add Impage Path"
                             type="text"
                             name="image"
                             id="image"
                             autoComplete="off"
                             required
                             value={enterImage}
                             onChange={imagechangeHandler} />
                        </div>
                    </div><br/>
                
                    <div class="form-group row">
                        <button class="btn btn-block btn-vespa">Add</button>
                    </div>
                </form>             
            </div>

                  
                       
                </div>
             </div>



            </div>
    );
}

export default AddForm;