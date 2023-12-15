'use client';
import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Box, Text, Button, Icon } from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';
import { DownloadIcon } from '@chakra-ui/icons';
import { IoMdDownload } from 'react-icons/io';
import 'react-datepicker/dist/react-datepicker.css';
const data = [
    { date: '2023-01-01', branch: 'Branch 1', leaderboard: 1, menuItem: 'Item A', totalAmountEarned: 1200, percentageChange: 25, totalAmountSold: 50 },
    { date: '2023-01-02', branch: 'Branch 2', leaderboard: 2, menuItem: 'Item B', totalAmountEarned: 900, percentageChange: -10, totalAmountSold: 30 },
    { date: '2023-01-03', branch: 'Branch 1', leaderboard: 3, menuItem: 'Item C', totalAmountEarned: 1500, percentageChange: 15, totalAmountSold: 60 },
    { date: '2023-01-04', branch: 'Branch 2', leaderboard: 4, menuItem: 'Item D', totalAmountEarned: 800, percentageChange: 5, totalAmountSold: 40 },
    { date: '2023-01-05', branch: 'Branch 1', leaderboard: 5, menuItem: 'Item E', totalAmountEarned: 1100, percentageChange: 20, totalAmountSold: 45 },
    { date: '2023-01-06', branch: 'Branch 2', leaderboard: 6, menuItem: 'Item F', totalAmountEarned: 950, percentageChange: -8, totalAmountSold: 35 },
    { date: '2023-01-07', branch: 'Branch 1', leaderboard: 7, menuItem: 'Item G', totalAmountEarned: 1300, percentageChange: 30, totalAmountSold: 55 },
    { date: '2023-01-08', branch: 'Branch 2', leaderboard: 8, menuItem: 'Item H', totalAmountEarned: 700, percentageChange: -15, totalAmountSold: 25 },
    { date: '2023-01-09', branch: 'Branch 1', leaderboard: 9, menuItem: 'Item I', totalAmountEarned: 1000, percentageChange: 10, totalAmountSold: 50 },
    { date: '2023-01-10', branch: 'Branch 2', leaderboard: 10, menuItem: 'Item J', totalAmountEarned: 1200, percentageChange: 18, totalAmountSold: 48 },
  ];
  
interface SalesListProps {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  selectedBranch: string;
}
const SalesList: React.FC<SalesListProps> = ({ selectedStartDate, selectedEndDate, selectedBranch }) => {
  // Filter data based on selected date range and branch
  const filteredData = data
    .filter(item => {
      // Check if the date is within the selected range
      const date = new Date(item.date);
      return (
        (!selectedStartDate || date >= selectedStartDate) &&
        (!selectedEndDate || date <= selectedEndDate)
      );
    })
    .filter(item => !selectedBranch || item.branch === selectedBranch)
    .map((item, index) => {
      const totalAmountEarned = item.totalAmountEarned; // Replace with your actual formula
      const percentageChange = item.percentageChange;
      const totalAmountSold = item.totalAmountSold;

      return {
        ...item,
        totalAmountEarned,
        percentageChange,
        totalAmountSold,
      };
    });


 
  const handleDownload = async () => {
    try {
      const chartContainer = document.getElementById('salesChart');
      if (!chartContainer) {
        console.error('Chart container not found.');
        return;
      }

      const dataUrl = await domtoimage.toPng(chartContainer);
      const blob = await (await fetch(dataUrl)).blob();
      saveAs(blob, 'sales_report.png');
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  return (
    <Box >
      <Box
        w="1491px"
        h="918px"
        bg="white"
        rounded="md"
        position="absolute"
        top="1318px"
         marginLeft="850"
        background="white"
      >
        <Text
          width="149px"
          height="29px"
          content="Sales by day"
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          lineHeight="29px"
          letterSpacing="0px"
          textAlign="left"
          position="absolute"
          top="40px"
          left="40px"
        />

        {/* Sales Section */}
        <Text
          width="149px"
          height="29px"
          top="40px"
          left="40px"
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          lineHeight="29px"
          letterSpacing="0px"
          textAlign="left"
          className="text-black text-lg font-semibold p-2"
        >
          Sales by day
        </Text>
        <Text
          width="1121px"
          height="19px"
          top="77px"
          left="40px"
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          lineHeight="19px"
          letterSpacing="0px"
          textAlign="left"
          className="text-black text-lg font-semibold p-2"
          marginBottom="70px"
        >
          Breakdown of total sales and order volume per day or per month. Use this to see whether your business is trending upward or downwards over time.
        </Text>

        <Button
          width="193px"
          height="40px"
          top="-70px"
          left="1226px"
          padding="0px 16px"
          borderRadius="6px"
          gap="8px"
          background="#1A202C"
          color="white"
          onClick={handleDownload}
          rightIcon={<Icon as={IoMdDownload} boxSize={30} />}
        >
          Download Report
        </Button>
          {/* Table Section */}
       
          <Box
          width="100%"
          height="918px"
          marginTop="-5px"
          overflowY="auto"
        >
          <table style={{ width: '100%',  height: "918px" }}>
            <thead>
              <tr>
                <th width="20px" style={{ textAlign: 'left', borderBottom: '2px solid #E83E8C', width: '20px' }}>Leaderboard</th>
                <th width="180px" style={{ textAlign: 'left', borderBottom: '2px solid #E83E8C', marginBottom: '5px', width: '180px' }}>Menu Item</th>
                <th width="2px" style={{ textAlign: 'right', borderBottom: '2px solid #E83E8C', width: '2px' }}>Sales</th>
                <th width="2px" style={{ textAlign: 'right', borderBottom: '2px solid #E83E8C', width: '2px' }}>%</th>
                <th width="2px" style={{ textAlign: 'right', borderBottom: '2px solid #E83E8C', width: '2px' }}>Item sold</th>
              </tr>
            </thead>
            <tbody>
      {filteredData.map((item, index) => (
       <tr key={index} style={{ borderBottom: '1px solid #F1F1F1', background: index % 2 === 0 ? '#F1F1F1' : 'white' }}>
       <td style={{ fontWeight: 'bold', width: '150px' }}>{item.leaderboard}</td>
       <td style={{ fontWeight: 'normal', fontSize: '16px', fontFamily: 'Inter', width: '200px' }}>
  {item.menuItem}
</td>
       <td style={{ fontWeight: 'bold',textAlign: 'right', paddingBottom: '5px', width: '120px' }}>${item.totalAmountEarned.toFixed(2)}</td>
       <td style={{ textAlign: 'right', paddingBottom: '5px', width: '120px', fontWeight: 'bold', color: 'green' }}>
  {`${item.percentageChange.toFixed(2)}%`}
</td>

       <td style={{ textAlign: 'right', paddingBottom: '5px', width: '120px' }}>{item.totalAmountSold}</td>
     </tr>
      ))}
    </tbody>
          </table>
        </Box>
     
      </Box>
          
     
    </Box>
  );
};

export default SalesList;
