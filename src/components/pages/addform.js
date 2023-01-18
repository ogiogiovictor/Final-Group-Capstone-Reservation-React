import React from 'react';
import './form.css';

const AddForm = () => {

    return (
        <div  className="col-sm-9 content-area">
             <h2>ADD CARS</h2>
             <div>Add new car brands</div>


             <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">

                  
                        <div className="add-car">
                        <form>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Fullname</label>
                <div class="col-sm-10">
                <input type="text"  class="form-control" id="Email" placeholder="Enter Fullname" />
                </div>
            </div><br/>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="text"  class="form-control" id="Email" placeholder="Email" />
                </div>
            </div><br/>

            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="Password" placeholder="Password" />
                </div>
            </div><br/>

            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="Password" placeholder="Password" />
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