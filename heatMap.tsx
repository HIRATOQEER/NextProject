'use client';
import React, { useState } from 'react';

import { Box, Grid, GridItem, Text, Button, Flex , Icon} from '@chakra-ui/react';
import DownloadButtonWithLogic from './downloadbutton';
//import { saveAs } from 'file-saver/dist/FileSaver';




interface HeatMapProps {
  selectedDateRange: Date[]; // Assuming this is a range
  selectedBranch: string;
 // filteredData: any[]; have added in case we can use it in
}

const SalesHeatmap: React.FC<HeatMapProps> = ({ selectedDateRange, selectedBranch }) => {
    const csvContent = 'Your,CSV,Content\n1,2,3\n4,5,6';
  const [selectedMetric, setSelectedMetric] = useState<'sales' | 'orders'>('sales');
  // Sample data structure
const salesData = [
  {
    date: '2023-01-01',
    branch: 'Branch 1',
    values: [100, 150, 80, 60, 120, 180, 200],
  },
  {
    date: '2023-01-02',
    branch: 'Branch 2',
    values: [90, 80, 70, 50, 110, 160, 180],
  },
  // Add more objects for additional days
];

const ordersData = [
  {
    date: '2023-01-01',
    branch: 'Branch 1',
    values: [50, 80, 40, 30, 70, 100, 120],
  },
  {
    date: '2023-01-02',
    branch: 'Branch 2',
    values: [40, 30, 20, 10, 60, 90, 100],
  },

  {
    date: '2023-01-02',
    branch: 'Branch 2',
    values: [40, 30, 20, 10, 60, 90, 100],
  },

  {
    date: '2023-01-02',
    branch: 'Branch 2',
    values: [40, 30, 20, 10, 60, 90, 100],
  },
  {
    date: '2023-01-02',
    branch: 'Branch 2',
    values: [40, 30, 20, 10, 60, 90, 100],
  },
  {
    date: '2023-01-02',
    branch: 'Branch 2',
    values: [40, 30, 20, 10, 60, 90, 100],
  },
  {
    date: '2023-01-02',
    branch: 'Branch 2',
    values: [40, 30, 20, 10, 60, 90, 100],
  },
  {
    date: '2023-01-02',
    branch: 'Branch 2',
    values: [40, 30, 20, 10, 60, 90, 100],
  },
  // Add more objects for additional days
];

  

  
  const sortData = (metric: 'sales' | 'orders') => {
    const data = metric === 'sales' ? salesData : ordersData;
    return [...data].sort((a, b) => a[0] - b[0]); // Assuming the first column is used for sorting
  };
  const getCellColor = (value) => {
    if (value >= 66 && value <= 88) {
      return 'pink.600'; // Dark pink
    } else if (value >= 44 && value < 66) {
      return 'pink.500'; // Less dark pink
    } else if (value >= 22 && value < 44) {
      return 'pink.300'; // Less dark pink
    } else if (value >= 0 && value < 22) {
      return 'pink.200'; // Least dark pink
    } else {
      return 'gray.100'; // Default color (you can change it as needed)
    }
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 
  const handleMetricChange = (metric: 'sales' | 'orders') => {
    setSelectedMetric(metric);

    // Check data validity when switching metric
   
  };

  return (


    <Box
    width="1589px"
    height="300px"
    border="0px 0px 1px 0px"
    borderBottom="1px solid #E2E8F0"
    marginTop="1200px"
    marginLeft="0"
    marginRight="20"
  
 >
 
    <Text
      width={['100%', '100%', '149px']}
      height="29px"
      marginTop="7px"
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
    
      fontSize="16px"
      fontWeight="bold"
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
      
      <Text
        width={['100%', '100%', '42px']}
        height="24px"
        fontSize="20px"
        fontWeight="500"
        lineHeight="24px"
        letterSpacing="0em"
        textAlign="center"
        onClick={() => handleMetricChange('sales')}
        cursor="pointer"
        color={selectedMetric === 'sales' ? '#000' : '#333'}
        _hover={{
          textDecoration: 'underline',
        
        }}
      >
        Sale
      </Text>

      <Text
        width={['100%', '50%', '53px']}
        height="24px"
       
        fontSize="20px"
        fontWeight="500"
        lineHeight="24px"
        letterSpacing="0em"
        textAlign="center"
    
        onClick={() => handleMetricChange('orders')}
        cursor="pointer"
        color={selectedMetric === 'orders' ? '#000' : '#333'}
        _hover={{
          textDecoration: 'underline',
        }}
        marginRight={['0px', '0px', '1400px']}
        
      >
        Order
      </Text>
    </Box>
    
    <Flex flexDirection="row" alignItems="center" marginTop="10" marginBottom='40px' marginLeft="250px">
      {/* Dark Pink */}
      <Box bg="pink.800" width="200px" height="50px" marginRight="2" display="flex" alignItems="center" justifyContent="center" marginLeft="5px">
        <Text fontSize="14px" color="white"  fontWeight='bold'>44-88</Text>
      </Box>

      {/* Less Dark Pink */}
      <Box bg="pink.600" width="200px" height="50px" marginRight="2" display="flex" alignItems="center" justifyContent="center" marginLeft="5px">
        <Text fontSize="14px" color="white"  fontWeight='bold'>44-66</Text>
      </Box>

      {/* Less Pink */}
      <Box bg="pink.400" width="200px" height="50px" marginRight="2" display="flex" alignItems="center" justifyContent="center" marginLeft="5px">
        <Text fontSize="14px"  fontWeight='bold'>22-44</Text>
      </Box>

      {/* Least Dark Pink */}
      <Box bg="pink.200" width="200px" height="50px" marginRight="2" display="flex" alignItems="center" justifyContent="center" marginLeft="5px">
        <Text fontSize="14px"  fontWeight='bold'>0-22</Text>
      </Box>
    </Flex>
    <Box
          width="100%"
          height="918px"
         
         
        >
     <Grid
  templateColumns={`repeat(${daysOfWeek.length + 1}, 1fr)`}
  templateRows={`repeat(25, 1fr)`}
  gap={2}
 
>
        {/* Hour/Days label for the first column */}
        <GridItem colSpan={1} rowSpan={1}  p={2}
           fontWeight='bold'>
        
          <Text textAlign="center">Hour/Days</Text>
        </GridItem>

        {/* Day labels starting from the second column */}
        {daysOfWeek.map((day, dayIndex) => (
          <GridItem key={dayIndex} colSpan={1} rowSpan={1} colStart={dayIndex + 2} p={2}
          fontWeight='bold' >
            <Text textAlign="center">{day}</Text>
          </GridItem>
        ))}

        {/* Hour labels on the y-axis starting from the second row */}
        {[...Array(24)].map((_hour, hourIndex: number) => (
          <GridItem key={hourIndex} colSpan={1} rowSpan={1} rowStart={hourIndex + 2}  p={2}
          fontWeight='bold'>
            <Text textAlign="center">{hourIndex}</Text>
          </GridItem>
        ))}

        {/* Data cells */}
        {sortData(selectedMetric).map((day, dayIndex) => (
          <React.Fragment key={dayIndex + 1}>
            {/* Data for each day */}
            {day.values.map((count, hourIndex) => (
              <GridItem
              key={(hourIndex + 1) * (dayIndex + 1)}
              colSpan={1}
              rowSpan={1}
              bg={getCellColor(count)}
              p={2}
              textAlign="center"
              fontSize='xl' // You can adjust the size (e.g., 'xl', '2xl', '3xl', etc.)
              fontWeight='bold'
              >
                <Text>{count}</Text>
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </Grid>

    </Box>
      
    </Box>
  );
};

export default SalesHeatmap;
