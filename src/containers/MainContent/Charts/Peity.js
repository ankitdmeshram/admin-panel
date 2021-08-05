import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';

class Peity extends Component{

    componentDidMount() 
    {  

        (function($, document, Math, devicePixelRatio) {
            var canvasSupported = document.createElement("canvas").getContext
          
            var peity = $.fn.peity = function(type, options) {
              if (canvasSupported) {
                this.each(function() {
                  var defaults = peity.defaults[type]
                  var data = {}
                  var $this = $(this)
          
                  $.each($this.data(), function(name, value) {
                    if (name in defaults) data[name] = value
                  })
          
                  var opts = $.extend({}, defaults, data, options)
                  var chart = new Peity($this, type, opts)
                  chart.draw()
          
                  $this.change(function() {
                    chart.draw()
                  })
                });
              }
          
              return this;
            };
          
            var Peity = function($elem, type, opts) {
              this.$elem = $elem
              this.type = type
              this.opts = opts
            }
          
            var PeityPrototype = Peity.prototype
          
            PeityPrototype.colours = function() {
              var colours = this.opts.colours
              var func = colours
          
              if (!$.isFunction(func)) {
                func = function(_, i) {
                  return colours[i % colours.length]
                }
              }
          
              return func
            }
          
            PeityPrototype.draw = function() {
              peity.graphers[this.type].call(this, this.opts)
            }
          
            PeityPrototype.prepareCanvas = function(width, height) {
              var canvas = this.canvas
          
              if (canvas) {
                this.context.clearRect(0, 0, canvas.width, canvas.height)
              } else {
                canvas = $("<canvas>").attr({
                  height: height * devicePixelRatio,
                  width: width * devicePixelRatio
                })
          
                if (devicePixelRatio != 1) {
                  canvas.css({
                    height: height,
                    width: width
                  })
                }
          
                this.canvas = canvas = canvas[0]
                this.context = canvas.getContext("2d")
                this.$elem.hide().before(canvas)
              }
          
              return canvas
            }
          
            PeityPrototype.values = function() {
              return $.map(this.$elem.text().split(this.opts.delimiter), function(value) {
                return parseFloat(value)
              })
            }
          
            peity.defaults = {}
            peity.graphers = {}
          
            peity.register = function(type, defaults, grapher) {
              this.defaults[type] = defaults
              this.graphers[type] = grapher
            }
          
            peity.register(
              'pie',
              {
                colours: ["#ff9900", "#fff4dd", "#ffc66e"],
                delimiter: null,
                diameter: 29
              },
              function(opts) {
                if (!opts.delimiter) {
                  var delimiter = this.$elem.text().match(/[^0-9\.]/)
                  opts.delimiter = delimiter ? delimiter[0] : ","
                }
          
                var values = this.values()
          
                if (opts.delimiter == "/") {
                  var v1 = values[0]
                  var v2 = values[1]
                  values = [v1, v2 - v1]
                }
          
                var i = 0
                var length = values.length
                var sum = 0
          
                for (; i < length; i++) {
                  sum += values[i]
                }
          
                var canvas = this.prepareCanvas(opts.diameter, opts.diameter)
                var context = this.context
                var half = canvas.width / 2
                var pi = Math.PI
                var colours = this.colours()
          
                context.save()
                context.translate(half, half)
                context.rotate(-pi / 2)
          
                for (i = 0; i < length; i++) {
                  var value = values[i]
                  var slice = (value / sum) * pi * 2
          
                  context.beginPath()
                  context.moveTo(0, 0)
                  context.arc(0, 0, half, 0, slice, false)
                  context.fillStyle = colours.call(this, value, i, values)
                  context.fill()
                  context.rotate(slice)
                }
          
                context.restore()
              }
            )
          
            peity.register(
              "line",
              {
                colour: "#c6d9fd",
                strokeColour: "#4d89f9",
                strokeWidth: 1,
                delimiter: ",",
                height: 30,
                max: null,
                min: 0,
                width: 45
              },
              function(opts) {
                var values = this.values()
                if (values.length == 1) values.push(values[0])
                var max = Math.max.apply(Math, values.concat([opts.max]));
                var min = Math.min.apply(Math, values.concat([opts.min]))
          
                var canvas = this.prepareCanvas(opts.width, opts.height)
                var context = this.context
                var width = canvas.width
                var height = canvas.height
                var xQuotient = width / (values.length - 1)
                var yQuotient = height / (max - min)
          
                var coords = [];
                var i;
          
                context.beginPath();
                context.moveTo(0, height + (min * yQuotient))
          
                for (i = 0; i < values.length; i++) {
                  var x = i * xQuotient
                  var y = height - (yQuotient * (values[i] - min))
          
                  coords.push({ x: x, y: y });
                  context.lineTo(x, y);
                }
          
                context.lineTo(width, height + (min * yQuotient))
                context.fillStyle = opts.colour;
                context.fill();
          
                if (opts.strokeWidth) {
                  context.beginPath();
                  context.moveTo(0, coords[0].y);
                  for (i = 0; i < coords.length; i++) {
                    context.lineTo(coords[i].x, coords[i].y);
                  }
                  context.lineWidth = opts.strokeWidth * devicePixelRatio;
                  context.strokeStyle = opts.strokeColour;
                  context.stroke();
                }
              }
            );
          
            peity.register(
              'bar',
              {
                colours:["#f7b84b","#ebeff2"],
                delimiter: ",",
                height: 60,
                max: null,
                min: 0,
                spacing: devicePixelRatio,
                width: 300
              },
              function(opts) {
                var values = this.values()
                var max = Math.max.apply(Math, values.concat([opts.max]));
                var min = Math.min.apply(Math, values.concat([opts.min]))
          
                var canvas = this.prepareCanvas(opts.width, opts.height)
                var context = this.context
          
                var width = canvas.width
                var height = canvas.height
                var yQuotient = height / (max - min)
                var space = opts.spacing
                var xQuotient = (width + space) / values.length
                var colours = this.colours()
          
                for (var i = 0; i < values.length; i++) {
                  var value = values[i]
                  var x = i * xQuotient
                  var y = height - (yQuotient * (value - min))
          
                  context.fillStyle = colours.call(this, value, i, values)
                  context.fillRect(x, y, xQuotient - space, yQuotient * values[i])
                }
              }
            );
          })(jQuery, document, Math, window.devicePixelRatio || 1);

          jQuery("span.pie").peity("pie");
          jQuery("span.line").peity("line");
          jQuery("span.bar").peity("bar");     
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

                                        <h4 className="mt-0 header-title m-b-30">Line Chart</h4>

                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="p-4">
                                                <span class="pie">1/5</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="p-4">
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="p-4">
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="p-4">
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title m-b-30">Bar Chart</h4>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="p-4">
                                                <span class="bar">5,3,9,6,5,9,7,3,5,2,9,6,5,9,7,3,5,6,5,9</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="p-4">
                                                <span class="bar">5,3,2,-1,-3,-2,2,3,5,2,3,2,-1,-3,-2,2,3</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="p-4">
                                                <span class="bar">-5,-3,-2,-1,-3,-2,-2,-3,-5,-2,2,-1,-3,-2,-2,-3</span>
                                                </div>
                                            </div>
                                          
                                        </div>

                                    </div>
                                </div>

                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title m-b-30">Pie Chart</h4>

                                        <div className="row text-center">
                                            <div className="col-lg-2 col-md-6 m-b-20">
                                            </div>
                                            <div className="col-lg-2 col-md-6 m-b-20">
                                            </div>
                                            <div className="col-lg-2 col-md-6 m-b-20">
                                            </div>
                                            <div className="col-lg-2 col-md-6 m-b-20">
                                            </div>
                                            <div className="col-lg-2 col-md-6 m-b-20">
                                            </div>
                                            <div className="col-lg-2 col-md-6">
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title m-b-30">Donut Chart</h4>

                                        <div className="row text-center">
                                            <div className="col-lg-2 col-md-6 m-b-30">
                                            </div>
                                            <div className="col-lg-2 col-md-6 m-b-30">
                                            </div>
                                            <div className="col-lg-2 col-md-6 m-b-30">
                                            </div>
                                            <div className="col-lg-2 col-md-6 m-b-30">
                                            </div>
                                            <div className="col-lg-2 col-md-6 m-b-30">
                                            </div>
                                            <div className="col-lg-2 col-md-6">
                                            </div>
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

export default Peity;   