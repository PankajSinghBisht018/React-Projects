import React, { useContext } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { TableContext } from '../context/TableContext';

function DownloadButton() {
  const { table } = useContext(TableContext);

  const downloadExcel = () => {
    const deleted = table.map(row => {
      delete row.company;
      return row;
    });

    const worksheet = XLSX.utils.json_to_sheet(deleted);
    const workbook = XLSX.utils.book_new();
    // console.log(deleted)
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TableData');
    XLSX.writeFile(workbook, 'excel-file.xlsx');
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      theme: 'grid',
      head: [['ID', 'Name', 'Username', 'Email', 'Phone', 'Website']],
      body: table.map(row => [row.id, row.name, row.username, row.email, row.phone, row.website])
    });

    doc.save('Table-pdf.pdf');
  };

  return (
    <div className='flex justify-end space-x-7'>
      <Button endIcon={<DownloadIcon />} variant='contained' onClick={downloadExcel}>
        Excel
      </Button>
      <Button endIcon={<DownloadIcon />} variant='contained' onClick={downloadPdf}>
        Pdf
      </Button>
    </div>
  );
}

export default DownloadButton;
