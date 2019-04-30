import React from "react";

var rootURL = "https://magnusklitmose.com/jwtbackend/api/info/swapi/";

/*
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}
*/

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "", number: "", name: "", data: ""};
  }

  
  search = async evt => {  
    evt.preventDefault();
    var url = rootURL + this.state.type + "/" + this.state.number + "/"
    const data = await fetch(url)
    const json = await data.json();
    
    if(this.state.type === "people") {
      const peopleTable = json.map(p => (
        <li key={p.name}>{p.name}</li>
      ))
      this.setState({name: peopleTable})
    }
    if(this.state.type === "planets") {
      this.setState({name: "The planet " +json[0].name})
    }
  }


  onChange = evt => {
    this.setState({ [evt.target.id]: evt.target.value });
  };

  render() {
    return (
      <div>
        <h3>StarWars Fetch here:</h3>
        <p>Search through the StarWars universe</p>
        <form onSubmit={this.search} onChange={this.onChange}>
          <select id="type">
            <option value="default">please select</option>
            <option value="people">people</option>
            <option value="planets">planets</option>
            <option value="starships">starships</option>
          </select>
          <input placeholder="number" id="number" />
          <button>Search</button>
        </form>
        <h3>{this.state.type}</h3>
        <div>{this.state.name}</div>
        <div>{this.state.data}</div>
      </div>
    )
    }
  };

class SearchStarWars extends React.Component {


  render() {
    return (
      <div>
      <StarWars/>
      </div>
    )}
}

export default SearchStarWars;
