import React, { Component } from 'react';
import './App.css';
import GenericTable from './components/generic-table/GenericTable';

class App extends Component {
  data: any[] = [
    {
      id: 1,
      vendor: "apple",
      name: "macbook pro 13\"",
      price: 1200,
      meta: {
        views: 100,
        page: 1
      }
    },
    {
      id: 2,
      vendor: "apple",
      name: "macbook pro 15\"",
      price: 1800,

      meta: {
        views: 101,
        page: 1
      }
    },
    {
      id: 3,
      vendor: "apple",
      name: "macbook pro 13\" touchbar",
      price: 1500,
      meta: {
        views: 102,
        page: 1
      }
    },
    {
      id: 4,
      vendor: "apple",
      name: "macbook pro 15\" touchbar",
      price: 2000,

      meta: {
        views: 103,
        page: 1
      }
    },
    {
      id: 5,
      vendor: "microsoft",
      name: "surface pro",
      price: 1200,
      meta: {
        views: 104,
        page: 1
      }
    },
    ,
    {
      id: 6,
      vendor: "microsoft",
      name: "surface pro 15\"",
      price: 1400,
      meta: {
        views: 104,
        page: 1
      }
    }
  ];

  render() {
    let dataToRender: any[] = [];
    for (let i = 0; i < 5; i++) {
      dataToRender = dataToRender.concat(this.data)
    }
    return (
      <div className="App">
        <GenericTable
          enableSelect={true}
          headers={
            [
              {
                title: "ID",
                key: "id",
                width: '50px'
              },
              {
                title: "Vendor",
                key: "vendor"
              },
              {
                title: 'Name',
                key: 'name'
              },
              {
                title: 'Cost',
                key: 'price'
              },
              {
                title: 'Views',
                key: 'meta.views'
              }
            ]
          }
          items={dataToRender}
        />
      </div>
    );
  }
}

export default App;
