import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Button, Popover, PopoverHeader, PopoverBody,Tooltip } from 'reactstrap';

class Ui_popover_tooltips extends Component{

    constructor(props) {
        super(props);
    
        this.toggletop = this.toggletop.bind(this);
        this.toggleright = this.toggleright.bind(this);
        this.toggleleft = this.toggleleft.bind(this);
        this.togglebottom = this.togglebottom.bind(this);
        this.toggledismiss = this.toggledismiss.bind(this);
        this.toggledismissclose = this.toggledismissclose.bind(this);
    
         this.ttop = this.ttop.bind(this);
         this.tleft = this.tleft.bind(this);
         this.tright = this.tright.bind(this);
         this.tbottom = this.tbottom.bind(this);
    
        this.state = {
          popovertop: false,
          popoverleft: false,
          popoverright: false,
          popoverbottom: false,
    
           tttop: false,
           ttleft: false,
           ttright: false,
           ttbottom: false,
           

        };
    }

  
      

  toggletop() {  this.setState({  popovertop: !this.state.popovertop });  }
  toggleleft() {  this.setState({  popoverleft: !this.state.popoverleft });  }
  toggleright() {  this.setState({  popoverright: !this.state.popoverright });  }
  togglebottom() {  this.setState({  popoverbottom: !this.state.popoverbottom });  }
  toggledismiss() {  this.setState({  popoverdismiss: !this.state.popoverdismiss });  }
  toggledismissclose() {  this.setState({  popoverdismiss: false });  }

   ttop() {  this.setState({  tttop: !this.state.tttop  }); }
   tright() {  this.setState({  ttright: !this.state.ttright  }); }
   tbottom() {  this.setState({  ttbottom: !this.state.ttbottom  }); }
   tleft() {  this.setState({  ttleft: !this.state.ttleft  }); }

 
render(){

    return(
           <AUX>
		   
		     <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Popovers</h4>
                                <p className="text-muted m-b-30 font-14">Add small overlay content, like those found in iOS, to any element for housing secondary information.</p>

                                      
                                        <Button id="Popovertop" onClick={this.toggletop}>
                                          Popover on top
                                        </Button>
                                        <Popover placement="top" isOpen={this.state.popovertop} target="Popovertop" toggle={this.toggletop}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover>


       
                                        <Button id="Popoverright" onClick={this.toggleright}>
                                          Popover on right
                                        </Button>
                                        <Popover placement="right" isOpen={this.state.popoverright} target="Popoverright" toggle={this.toggleright}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover>


                                          <Button id="Popoverleft" onClick={this.toggleleft}>
                                          Popover on left
                                        </Button>
                                        <Popover placement="left" isOpen={this.state.popoverleft} target="Popoverleft" toggle={this.toggleleft}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover>

                                         <Button id="Popoverbottom" onClick={this.togglebottom}>
                                          Popover on bottom
                                        </Button>
                                        <Popover placement="bottom" isOpen={this.state.popoverbottom} target="Popoverbottom" toggle={this.togglebottom}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover>
        

                                       <Button id="Popoverdismiss"  className="btn btn-primary waves-effect waves-light mo-mb-2" onClick={this.toggledismiss}>
                                          Dismissible popover
                                        </Button>
                                        <Popover   onClick={this.toggledismissclose} placement="bottom" isOpen={this.state.popoverdismiss} target="Popoverdismiss" toggle={this.toggledismiss}>
                                          <PopoverHeader>Popover Title</PopoverHeader>
                                          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                        </Popover>

                            </div>
                        </div>
                    </div>
                </div> 


                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Tooltips</h4>
                                <p className="text-muted m-b-30 font-14">Hover over the links below to see tooltips:</p>

       
                            <Tooltip placement="top" isOpen={this.state.tttop} target="TooltipTop" toggle={()=> this.setState({ tttop: !this.state.tttop  })}>Hello world!</Tooltip>
                            <Tooltip placement="bottom" isOpen={this.state.ttbottom} target="TooltipBottom" toggle={()=> this.setState({ ttbottom: !this.state.ttbottom  })}>Hello world!</Tooltip>
                            <Tooltip placement="left" isOpen={this.state.ttleft} target="TooltipLeft" toggle={()=> this.setState({ ttleft: !this.state.ttleft  })}>Hello world!</Tooltip>
                            <Tooltip placement="right" isOpen={this.state.ttright} target="TooltipRight" toggle={()=> this.setState({ ttright: !this.state.ttright  })}>Hello world!</Tooltip>
                                    

                            <button type="button" className="btn btn-secondary mo-mb-2" id="TooltipTop"> Tooltip on top</button>
                            <button type="button" className="btn btn-secondary mo-mb-2" id="TooltipBottom"> Tooltip on Bottom</button>
                            <button type="button" className="btn btn-secondary mo-mb-2" id="TooltipLeft"> Tooltip on Left</button>
                            <button type="button" className="btn btn-secondary mo-mb-2" id="TooltipRight"> Tooltip on Right</button>
                                        
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

export default Ui_popover_tooltips;   
