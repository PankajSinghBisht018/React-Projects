import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function TableFetch() {
  useEffect(() => {
    const fetchTable = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = response.data;
      setTable(data);
    };
    fetchTable();
  }, []);

  const [table, setTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexLastData = currentPage * itemsPerPage;
  const indexFirstData = indexLastData - itemsPerPage;
  const currentData = table.slice(indexFirstData, indexLastData);
  const totalPages = Math.ceil(table.length / itemsPerPage);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const [searchData, setSearchData] = useState('');
  

  const handleSearch = (value) => {
    setSearchData(value);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAdd = () => {
    setTable(prev => [...prev, formData]);
    setFormData({
      id: '',
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
const [sorting, setSorting] = useState({ column: 'name', order: 'asc' });
  const handleSort = () => {
    const sortedData = [...table];
    const sortOrder = sorting.order === 'asc' ? 'desc' : 'asc';
    sortedData.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name < b.name ? -1 : 1;
      } else {
        return a.name > b.name ? -1 : 1;
      }
    });
    setTable(sortedData);
    setSorting({ column: 'name', order: sortOrder });
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div>
      <div className='flex justify-center my-4 space-x-20'>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={<SearchIcon />}
          value={searchData}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <IconButton onClick={handleSort}>
          {sorting.order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </IconButton>
        <Button startIcon={<AddIcon />} onClick={handleAdd}>Add</Button>
      </div>
      <div className='flex justify-center space-x-5'>
        <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="ID" />
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
      </div>

      <TableContainer component={Paper} className="flex justify-center my-4">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Website</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData
              .filter(item => item.name.toLowerCase().includes(searchData.toLowerCase()))
              .map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell>{item.name}</StyledTableCell>
                  <StyledTableCell>{item.username}</StyledTableCell>
                  <StyledTableCell>{item.email}</StyledTableCell>
                  <StyledTableCell>{item.phone}</StyledTableCell>
                  <StyledTableCell>{item.website}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='flex justify-between'>
        <Button
          style={{ backgroundColor: '#0f172a', borderRadius: '80px', marginLeft: '15px' }}
          variant='contained'
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <Button
          style={{ backgroundColor: '#0f172a', borderRadius: '80px', marginRight: '15px' }}
          variant='contained'
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default TableFetch;
