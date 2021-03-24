import React from 'react';

class ImageUpload extends React.Component{
    constructor(props){
        super();
        this.state={
            file : null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        console.log(event.target.files.length);
        this.setState({
            
            file : URL.createObjectURL(event.target.files[0])
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                File Upload
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <input type="file" multiple onChange={this.handleChange} className="form-control" />                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                            {
                                                this.state.file ? <img src={this.state.file} className="img-thumbnail" alt="" width="200"/> :null
                                            }                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ImageUpload;