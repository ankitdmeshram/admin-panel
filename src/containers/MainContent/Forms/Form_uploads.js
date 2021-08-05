import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import Dropzone from 'react-dropzone';


class Form_uploads extends Component
{
    
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        
        this.state = { selectedFiles: []  }
        }
        
        handleAcceptedFiles = (files) => {
        files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size)
        }));
        
        this.setState({ selectedFiles: files });
        }
        
        /**
        * Formats the size
        */
        formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
        
  
 
render(){

    return(
           <AUX>
		     <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Dropzone</h4>
                                <p className="text-muted m-b-30 font-14">DropzoneJS is an open source library
                                    that provides drag’n’drop file uploads with image previews.
                                </p>

                                <section>
                                   <Dropzone onDrop={acceptedFiles => this.handleAcceptedFiles(acceptedFiles)}>
                                        {({ getRootProps, getInputProps }) => (
                                        <div className="dropzone">
                                        <div className="dz-message needsclick" {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <i className="h1 text-muted dripicons-cloud-upload"></i>
                                        <h3>Drop files here or click to upload.</h3>
                                        <span className="text-muted font-13">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                                        </div>
                                        </div>
                                        )}
                                        </Dropzone>
                                                                                
                                        <div className="dropzone-previews mt-3" id="file-previews">
                                        {this.state.selectedFiles.map((f, i) => {
                                        return <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete" key={i + "-file"}>
                                        <div className="p-2">
                                        <Row className="align-items-center">
                                        <Col className="col-auto">
                                        <img data-dz-thumbnail="" className="avatar-sm rounded bg-light" alt={f.name} src={f.preview} />
                                        </Col>
                                        <Col className="pl-0">
                                        <Link to="#" className="text-muted font-weight-bold">{f.name}</Link>
                                        <p className="mb-0"><strong>{f.formattedSize}</strong></p>
                                        </Col>
                                        </Row>
                                        </div>
                                        </Card>
                                        })}
                                        </div>
                                </section>

                                <div className="text-center m-t-15">
                                    <button type="button" className="btn btn-primary waves-effect waves-light">Send Files</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
           </AUX>
        );
    }
}

export default Form_uploads;   