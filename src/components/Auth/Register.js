import React, {Fragment} from 'react';
import Modal from '../UI/Modal';

const Register = (props) => {


    return <Modal onClose={props.onClose}>
         <Fragment>
        <h2>Register</h2><hr/>
        <div className="container-fluid">
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
                <button class="btn btn-block btn-vespa">Register</button>
            </div>
            </form>
        </div>
        </Fragment>
    </Modal>
};

export default Register;