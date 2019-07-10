import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      title: 'React-Aplication',
      subtitle:'Adenilson-Developers',
      act: 0,
      index:'',
      datas: []

    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }
  fsubmit = (e)=>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let addres = this.refs.addres.value;

    if(this.state.act === 0){ //new
      let data = {
        name, addres
      }
      datas.push(data);

      }else{ //update
        let index = this.state.index;
        datas[index].name = name;
        datas[index].addres = addres;

      }

    this.setState({
      datas: datas,
      act: 0,
    });

    //this.refs.myform.reset();
    //this.refs.name.focus();
  }
  fRemove = (i)=> {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });
  }
  fEdit = (i)=>{
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.addres.value = data.addres;

    this.setState({
      act: 1,
      index: i

    });
    this.refs.name.focus();

  }
  render(){
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <h3>{this.state.subtitle}</h3>
        <form ref="myfrom"className="myform">
          <input type="text" ref="name" placeholder="seu nome" className="formfield" />
          <input type="text" ref="addres" placeholder="seu endereço" className="formfield" />
          <button onClick={this.fsubmit} className="mybutton">Salvar</button>
          </form>
          <pre>
            {datas.map((data, i) =>
            <li Key={1} className="myList">
              {1+1}. {data.name}, {data.addres}
              <button onClick={()=>this.fRemove(i)}className="myListbutton">Remove</button>
              <button onClick={()=>this.fEdit(i)}className="myListbutton">Edit</button>
              </li>
              )}
            </pre>
        </div>
    );
  }
}

export default App;
