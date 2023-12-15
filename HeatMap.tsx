'use client';
import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const SalesHeatmap = () => {
  // Dummy data, replace with your actual sales data
  const salesData = [
    [100, 150, /* Add more data points */],
    [90, 80, /* Add more data points */],
    // Add more rows for additional days
  ];

  const getCellColor = (value) => {
    // You can adjust the color scale based on your preference
    if (value >= 80) {
      return 'pink.800';
    } else if (value >= 50) {
      return 'pink.600';
    } else {
      return 'pink.400';
    }
  };

 
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <Box p={8} bg="gray.100">
      <Grid
        templateColumns={`repeat(${daysOfWeek.length + 1}, 1fr)`}
        templateRows={`repeat(25, 1fr)`}
        gap={2}
      >
        {/* Empty cell for corner */}
        <GridItem colSpan={1} rowSpan={1} bg="gray.200" p={2}>
          <Text textAlign="center">Hour / Day</Text>
        </GridItem>

        {/* Hour labels on y-axis */}
        {[...Array(24)].map((_, hourIndex: number) => (
          <GridItem key={hourIndex + 1} colSpan={1} rowSpan={1} bg="gray.200" p={2}>
            <Text textAlign="center">{hourIndex.toString().padStart(2, '0')}</Text>
          </GridItem>
        ))}

        {/* Days on x-axis and Sales data cells */}
        {daysOfWeek.map((day, dayIndex) => (
          <React.Fragment key={dayIndex + 1}>
            {/* Day label */}
            <GridItem colSpan={1} rowSpan={1} bg="gray.200" p={2}>
              <Text textAlign="center">{day}</Text>
            </GridItem>

            {/* Sales data for each hour */}
            {[...Array(24)].map((_, hourIndex: number) => (
              <GridItem
                key={(hourIndex + 1) * (dayIndex + 1)}
                colSpan={1}
                rowSpan={1}
                bg={getCellColor(salesData[dayIndex][hourIndex])}
                p={2}
                opacity={salesData[dayIndex][hourIndex] / 200}
                textAlign="center"
              >
                <Text>{salesData[dayIndex][hourIndex]}</Text>
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default SalesHeatmap;