import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Nestable from 'react-nestable';


const styles = {
    position: "relative",
    padding: "10px 15px",
    fontSize: "20px",
    border: "1px solid #f9fafa",
    background: "#f9fafa",
    cursor: "pointer"
  };
  const handlerStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "10px",
    height: "100%",
    background: "steelblue",
    cursor: "pointer"
  };
  const handlerStyles1 = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "10px",
    height: "100%",
    background: "steelblue",
    cursor: "pointer"
  };
  
  const items = [
    {
      id: 0,
      text: 'Item 1'
    },
    {
      id: 1,
      text: 'Item 2',
      children: [
        {
          id: 2,
          text: 'Item 3'
        },
        {
            id: 3,
            text: 'Item 4'
          }
      ]
    },
    {
      id: 4,
      text: 'Item 5',
      children: [
        {
          id: 5,
          text: 'Item 6'
        }
      ]
    }
  ];

  
  const items1 = [
    {
      id: 0,
      text: 'Item 11'
    },
    {
      id: 1,
      text: 'Item 12',
      children: [
        {
          id: 2,
          text: 'Item 13'
        },
        {
            id: 3,
            text: 'Item 14'
          }
      ]
    },
    {
      id: 4,
      text: 'Item 15',
      children: [
        {
          id: 5,
          text: 'Item 16'
        }
      ]
    }
  ];
  



class Ui_nestable extends Component{

    state = {
        example: 1, example1: 1,
        defaultCollapsed: false ,defaultCollapsed1: false
      };
    
      collapse = (collapseCase) => {
        if (this.refNestable) {
          switch (collapseCase) {
            case 0:
              this.refNestable.collapse('NONE');
              break;
            case 1:
              this.refNestable.collapse('ALL');
              break;
            case 2:
              this.refNestable.collapse([1]);
              break;
          }
        }
      };
    
   
    
      renderItem = ({ item, collapseIcon, handler }) => {
        return (
          <div style={styles}>
            {handler}
            {collapseIcon}
            {item.text}
          </div>
        );
      };

      renderItem1 = ({ item, collapseIcon, handler }) => {
        return (
          <div style={styles}>
            {handler}
            {collapseIcon}
            {item.text}
          </div>
        );
      };
    
      renderExampleOne = () => {
        const { defaultCollapsed } = this.state;
        const onDefaultCollapsed = () => this.setState({
          defaultCollapsed: !defaultCollapsed
        });
    
        return (
          <div>
    
            <Nestable
              items={items}
              collapsed={defaultCollapsed}
              renderItem={this.renderItem}
              ref={el => this.refNestable = el}
            />
    
          </div>
        );
      };

      renderExampleOne1 = () => {
        const { defaultCollapsed1 } = this.state;
        const onDefaultCollapsed1 = () => this.setState({
          defaultCollapsed1: !defaultCollapsed1
        });
    
        return (
          <div>
    
            <Nestable
              items={items1}
              collapsed={defaultCollapsed1}
              renderItem={this.renderItem1}
              ref={el => this.refNestable = el}
            />
    
          </div>
        );
      };
    
     

render(){

    const { example } = this.state;
    const { example1 } = this.state;
    const onExampleChange = e => this.setState({ example: +e.target.value });
    const onExampleChange1 = e => this.setState({ example1: +e.target.value });

    return(
           <AUX>
		   
		      <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">List 1</h4>
                                <p className="text-muted m-b-30 font-14">Drag & drop hierarchical list with
                                    mouse and touch compatibility (jQuery plugin).</p>

                                    

                                <div className="custom-dd dd" id="nestable_list_1">

                                    {example === 1 && this.renderExampleOne()}
                                                     
                                </div>

                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">List 2</h4>
                                <p className="text-muted m-b-30 font-14">Drag & drop hierarchical list with
                                    mouse and touch compatibility (jQuery plugin).</p>

                                <div className="custom-dd dd" id="nestable_list_2">
                                
                                    {example === 1 && this.renderExampleOne1()}
                                       
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

export default Ui_nestable;   