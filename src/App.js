import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import ImageE from './Employee.jpg';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tableDetails : '',
      order : true,
    }
  }
  
  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(result => {
         
        this.setState({ tableDetails : result.data }) });
     
  }
  handleSort = (field, orderFlag) => {
    let data = this.state.tableDetails;
    let order = orderFlag ? 'asc' : 'desc';
    let sortedData = data;
    if(field === 'id')
   { 
      sortedData = _.sortBy(data,['id']);
    }
    if(field === 'employee_name')
   { 
      sortedData = _.orderBy(data,['employee_name'],[order]);
    }
    this.setState({tableDetails : sortedData});
  }
render(){
  console.log(this.state.tableDetails)
  let tableData = this.state.tableDetails;
 
  return (
    <div className="App">
       <h2>EMPLOYEE DETAILS</h2>
       <TableContainer className = "table_content" component={Paper}>
      <Table className='Table_Container' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><TableSortLabel onClick={(e)=>this.handleSort('id',true)}></TableSortLabel>ID</TableCell>
            <TableCell align="right">
            <TableSortLabel onClick={(e)=>this.handleSort('employee_name',true)}></TableSortLabel>Employee Name
            </TableCell>
            <TableCell align="right">Employee Salary</TableCell>
            <TableCell align="right">Employee Age</TableCell>
            <TableCell align="right">Profile Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData && tableData.map((data) => (
            <TableRow key={data.id}>
               <TableCell align="right">{data.id}</TableCell>
              <TableCell align="right">{data.employee_name}</TableCell>
              <TableCell align="right">{data.employee_salary}</TableCell>
              <TableCell align="right">{data.employee_age}</TableCell>
              <TableCell align="right">{data.profile_image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}
  
}

export default App;
