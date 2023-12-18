'use client';

import React, { useState } from 'react';

import { Box, Text, Checkbox, FormControl, FormLabel, Menu, MenuItem ,MenuButton,MenuList,Divider,Button, Icon} from '@chakra-ui/react';


import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area,ResponsiveContainer } from 'recharts';
import DownloadButtonWithLogic from './downloadbutton';




  // Sample data for the LineChart
  const data = [
    { date: '2023-01-01', sales: 100, orders: 30, prevSales: 80, prevOrders: 25 ,branch: 'branch1'},
    { date: '2023-03-02', sales: 150, orders: 40, prevSales: 120, prevOrders: 35 ,branch: 'branch2'},
    { date: '2023-05-03', sales: 8, orders: 38, prevSales: 109, prevOrders: 4,branch: 'branch3' },
    { date: '2023-06-03', sales: 188, orders: 95, prevSales: 60, prevOrders: 9 ,branch: 'branch4'},
    { date: '2023-8-8', sales: 3, orders: 25, prevSales: 7, prevOrders: 67 ,branch: 'branch2'},
    { date: '2023-09-03', sales: 120, orders: 75, prevSales: 40, prevOrders: 40 ,branch: 'branch2'},
    { date: '2023-10-03', sales: 17, orders: 80, prevSales: 50, prevOrders: 20,branch: 'branch13' },
    { date: '2023-01-01', sales: 100, orders: 30, prevSales: 80, prevOrders: 25, branch: 'branch4' },
    { date: '2023-03-02', sales: 150, orders: 40, prevSales: 120, prevOrders: 35, branch: 'branch1' },
    // Add more data points as needed
  ];
  const heatmapData = [
    // Monday
    { day: 'Monday', hour: 0, price: 70 },
    { day: 'Monday', hour: 1 ,price: 75 },
    { day: 'Monday', hour: 3, price: 40 },
    { day: 'Monday', hour: 4, price: 60 },
    { day: 'Monday', hour: 5 ,price: 35 },
    { day: 'Monday', hour: 6, price: 60 },
    { day: 'Monday', hour: 7, price: 20 },
    { day: 'Monday', hour: 8 ,price: 45 },
    { day: 'Monday', hour: 9, price: 30 },
    { day: 'Monday', hour: 10, price: 40 },
    { day: 'Monday', hour: 11 ,price: 65 },
    { day: 'Monday', hour: 12, price: 73 },
    { day: 'Monday', hour: 13, price: 80 },
    { day: 'Monday', hour: 14 ,price: 15 },
    { day: 'Monday', hour: 15, price: 40 },
    { day: 'Monday', hour: 16, price: 30 },
    { day: 'Monday', hour: 17 ,price: 58 },
    { day: 'Monday', hour: 18, price: 40 },
    { day: 'Monday', hour: 19, price: 30 },
    { day: 'Monday', hour: 19 ,price: 55 },
    { day: 'Monday', hour: 21, price: 20 },
    { day: 'Monday', hour: 22, price: 70 },
    { day: 'Monday', hour:  23,price: 10 },

    { day: 'Tuesday', hour: 0, price: 70 },
    { day: 'Tuesday', hour: 1 ,price: 75 },
    { day: 'Tuesday', hour: 3, price: 40 },
    { day: 'Tuesday', hour: 4, price: 60 },
    { day: 'Tuesday', hour: 5 ,price: 35 },
    { day: 'Tuesday', hour: 6, price: 60 },
    { day: 'Tuesday', hour: 7, price: 20 },
    { day: 'Tuesday', hour: 8 ,price: 45 },
    { day:'Tuesday', hour: 9, price: 30 },
    { day: 'Tuesday', hour: 10, price: 40 },
    { day: 'Tuesday', hour: 11 ,price: 65 },
    { day: 'Tuesday', hour: 12, price: 73 },
    { day: 'Tuesday', hour: 13, price: 80 },
    { day: 'Tuesday', hour: 14 ,price: 15 },
    { day: 'Tuesday', hour: 15, price: 40 },
    { day: 'Tuesday', hour: 16, price: 30 },
    { day: 'Tuesday', hour: 17 ,price: 58 },
    { day: 'Tuesday', hour: 18, price: 40 },
    { day: 'Tuesday', hour: 19, price: 30 },
    { day: 'Tuesday', hour: 19 ,price: 55 },
    { day: 'Tuesday', hour: 21, price: 20 },
    { day: 'Tuesday', hour: 22, price: 70 },
    { day: 'Tuesday', hour:  23,price: 10 },
    
    
    
  ];
  
interface SalesProps {
  selectedDateRange: Date[]; // Assuming this is a range
  selectedBranch: string;
}

const Sales: React.FC<SalesProps> = ({ selectedDateRange, selectedBranch }) => {
    const csvContent = 'Your,CSV,Content\n1,2,3\n4,5,6';
  const [selectedMetric, setSelectedMetric] = useState<'sales' | 'orders'>('sales');
 
  const [showPreviousPeriod, setShowPreviousPeriod] = useState<boolean>(true);

  const filterData = () => {
    return data.filter(
      (item) =>
       
        (!selectedBranch || item.branch === selectedBranch)
    );
  };

  const handleMetricChange = (metric: 'sales' | 'orders') => {
    setSelectedMetric(metric);
  };

  const togglePreviousPeriod = () => {
    setShowPreviousPeriod(!showPreviousPeriod);
  };

  

return (

  
  <Box
   width="1589px"
   height="300px"
   border="0px 0px 1px 0px"
   borderBottom="1px solid #E2E8F0"
   marginTop="300px"
   marginLeft="0"
   marginRight="20"
   position="fixed" // Set position to fixed
>



    <Text
      width= '149px'
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
      width='1121px'
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
        width='42px'
        height="24px"
        fontFamily="Inter"
        fontSize="16px"
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
        Sales
      </Text>

      <Text
        width='53px'
        height="24px"
        fontFamily="Inter"
        fontSize="16px"
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
        Orders
      </Text>
      </Box>
<Box marginLeft='10px'marginTop='40px'>
        {/* Your responsive code here */}
  <Text
    width="144px"
    height="20px"
    fontFamily="Inter"
    fontSize="14px"
    fontWeight="500"
    lineHeight="20px"
    letterSpacing="0em"
    textAlign="left"
    color="#333"
   
  >
    Sales
  </Text>

  <Text
   width='144px'
    height="32px"
    fontFamily="Inter"
    fontSize="24px"
    fontWeight="600"
    lineHeight="32px"
    letterSpacing="0em"
    textAlign="left"
    color="#000"
    marginLeft="2px"
  >
    SAR 768.39
  </Text>
  <Box
    width="20px"
    top="2px"
    left="-25px"
    border="3px solid blue"
    transform="rotate(0deg)"
    position="relative"
  />
    <Text
    width="50px"
    height="20px"
    opacity="0.8"
    fontFamily="Inter"
    fontSize="14px"
    fontWeight="400"
    lineHeight="20px"
    letterSpacing="0em"
    textAlign="left"
    color="#333"
  >
    23.36%
  </Text>
  <Box
  width="20px"
 
  border="3px solid #FF0085"
 // angle="-0deg"
  background="#FF0085"
  position="relative"
/>

<Text
  width="150px"
  height="20px"
  opacity="0.8"
  fontFamily="Inter"
  fontSize="14px"
  fontWeight="400"
  lineHeight="20px"
  letterSpacing="0em"
  textAlign="left"
  color="#333"
  position="relative"
  
  marginLeft="30px"
>
  27 Nov 2023 - 27 Dec 
</Text>

  
  {/* Date */}
</Box>

    


            <LineChart
              id="salesChart" // Assign an ID to the chart container
              width={1509}
              height={711}
              data={filterData()}
              margin={{ top: 100, right: 10, left: 20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
               <Line
  type="monotone"
  dataKey={selectedMetric}
  stroke="#FF00FF" // Pink color for sales or orders
  strokeWidth={2}
  dot={{ stroke: '#FF00FF', strokeWidth: 2, r: 4 }}
/>
              {showPreviousPeriod && (
                <Line
                  type="monotone"
                  dataKey={`prev${selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)}`}
                  stroke="#0000ff" // Blue line for previous period
                  strokeWidth={2}
                  dot={{ stroke: '#0000ff', strokeWidth: 2, r: 4 }}
                />
              )}
            </LineChart>
      
            <Box className="ml-5 mr-2">
        <Checkbox
          colorScheme="blue"
          isChecked={showPreviousPeriod}
          onChange={togglePreviousPeriod}
        >
          Show Previous Period
        </Checkbox>
      </Box>
          </Box>
      
        
    
  
  );
};

export default Sales;