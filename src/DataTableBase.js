import React from 'react';
import DataTable from 'react-data-table-component';
import './App.css';
import './style.css';
import Pagination from 'react-data-table-component';
import logo from './logo.svg';




const columns = [
    {
        name: 'No',
        selector: row => row.no,
    },   
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];



const data = [
    {
        id: 1,
        no:'1',
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        no:'2',
        title: 'Ghostbusters',
        year: '1984',
    },
 {
        id: 3,
        no:'3',
        title: 'Beetle',
        year: '1985',
    },
    {
        id: 4,
        no:'4',
        title: 'Ghost Raiders',
        year: '1980',
    },
 {
        id: 5,
        no:'5',
        title: 'juice',
        year: '1988',
    },
    {
        id: 6,
        no:'6',
        title: 'busters',
        year: '1989',
    },
 {
        id: 7,
        no:'7',
        title: 'Vanya',
        year: '1988',
    },
    {
        id: 8,
        no:'8',
        title: 'Ronny S',
        year: '1974',
    },
 {
        id: 9,
        no:'9',
        title: 'Beeangca',
        year: '1988',
    },
    {
        id: 10,
        no:'10',
        title: 'Sonyadah',
        year: '1984',
    },
 {
        id: 11,
        no:'11',
        title: 'Lin Tian',
        year: '1988',
    },
    {
        id: 12,
        no:'12',
        title: 'Qin XieYu',
        year: '1984',
    },
]

function DataTableBase() {



    return (
      <div className="App">
      <header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />

      <p>
          <h2>TABEL DATA</h2>

          
        </p>

        
         <ul className="ul.header li a">
        
         <DataTable
            columns={columns}
            data={data}
            Pagination
         />
        </ul>

</header>
</div>
    );
};

  
export default DataTableBase;

