'use client';
import React, { useState } from 'react';
import { Box, Text, Button, Icon } from '@chakra-ui/react';



import 'react-datepicker/dist/react-datepicker.css';
import DownloadButtonWithLogic from './downloadbutton';
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
  selectedDateRange: Date[]; // Assuming this is a range
  selectedBranch: string;
}
// Modify 'SalesList' component to accept 'FilterProps' and filter the data accordingly
const SalesList: React.FC<SalesListProps> = ({ selectedDateRange, selectedBranch }) => {
  const csvContent = 'Your,CSV,Content\n1,2,3\n4,5,6';

// Filter data based on the date range and branch
const filteredData = data
  .filter(item => {
    const date = new Date(item.date);
    // Assuming 'selectedDateRange' is an array with [startDate, endDate]
    return (
      (!selectedDateRange[0] || date >= selectedDateRange[0]) &&
      (!selectedDateRange[1] || date <= selectedDateRange[1])
    );
  })
  .filter(item => !selectedBranch || item.branch === selectedBranch)
  .map((item, index) => {
    const totalAmountEarned = item.totalAmountEarned;
    const percentageChange = item.percentageChange;
    const totalAmountSold = item.totalAmountSold;

    return {
      ...item,
      totalAmountEarned,
      percentageChange,
      totalAmountSold,
    };
  });

 

  return (
    <Box width="500" marginTop="100px" borderTop="2px solid #E2E8F0">
    <Text
      width={['100%', '100%', '149px']}
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
      width={['100%', '100%', '1121px']}
      height="19px"
      marginTop="7px"
      left="40px"
      fontFamily="Inter"
      fontSize="21px"
      fontWeight="400"
      lineHeight="19px"
      letterSpacing="0px"
      textAlign="left"
      className="text-black text-lg font-semibold p-2"
      marginBottom="70px"
    >
      Breakdown of total sales and order volume per day or per month. Use this to see whether your business is trending upward or downwards over time.
    </Text>
   

    <DownloadButtonWithLogic csvContent={csvContent} fileName="report.csv" />
    <Box
      variant="line"
      size="md"
      isFitted={false}
      colorScheme="blue"
      width={['100%', '100%', '1509px']}
      height="42px"
      top="200px"
      left="40px"
      borderBottom="2px solid #E2E8F0"
      background="white"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
    

   
    </Box>
    
          {/* Table Section */}
       
     
        
          <table style={{ width: '100%',  height: "40%" }}>
            <thead>
              <tr>
              <th style={{ textAlign: 'center', borderBottom: '2px solid #E83E8C', width: '30px', fontWeight: 'bold' ,fontSize: '18px'}}>Leaderboard</th>
<th style={{ textAlign: 'center', borderBottom: '2px solid #E83E8C', marginBottom: '5px', width: '130px', fontWeight: 'bold',fontSize: '18px' }}>Menu Item</th>
<th style={{ textAlign: 'center', borderBottom: '2px solid #E83E8C', width: '2px', fontWeight: 'bold' ,fontSize: '18px'}}>Sales</th>
<th style={{ textAlign: 'center', borderBottom: '2px solid #E83E8C', width: '2px', fontWeight: 'bold' ,fontSize: '18px'}}>%</th>
<th style={{ textAlign: 'center', borderBottom: '2px solid #E83E8C', width: '2px', fontWeight: 'bold' ,fontSize: '18px'}}>Item sold</th>

              </tr>
            </thead>
            <tbody>
      {filteredData.map((item, index) => (
       <tr key={index} style={{ borderBottom: '2px solid #F1F1F1', background: index % 2 === 0 ? '#F1F1F1' : 'white',textAlign: 'center',fontSize: '18px' }}>
       <td style={{ fontWeight: 'bold', width: '150px',fontSize: '18px' }}>{item.leaderboard}</td>
       <td style={{ fontWeight: 'bold', fontSize: '16px', fontFamily: 'bold', width: '200px' ,fontSize: '18px'}}>
  {item.menuItem}
</td>
       <td style={{ fontWeight: 'bold',textAlign: 'center', paddingBottom: '5px', width: '120px',fontSize: '18px' }}>${item.totalAmountEarned.toFixed(2)}</td>
       <td style={{ textAlign: 'center', paddingBottom: '5px', width: '120px', fontWeight: 'bold', color: 'green',fontSize: '18px' }}>
  {`${item.percentageChange.toFixed(2)}%`}
</td>

       <td style={{ textAlign: 'center', paddingBottom: '5px', width: '120px',fontWeight: 'bold',fontSize: '18px' }}>{item.totalAmountSold}</td>
     </tr>
      ))}
    </tbody>
          </table>
        </Box>
     
      
          
     
   
  );
};

export default SalesList;
