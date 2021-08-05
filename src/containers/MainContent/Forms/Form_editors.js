import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Form_editors extends Component{
 
render(){
    return(
           <AUX>
		    <div className="page-content-wrapper">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Tinymce wysihtml5</h4>
                                    <p className="text-muted m-b-30 font-14">Bootstrap-wysihtml5 is a javascript
                                        plugin that makes it easy to create simple, beautiful wysiwyg editors
                                        with the help of wysihtml5 and Twitter Bootstrap.</p>

                                        <Editor
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName" />
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

export default Form_editors;   