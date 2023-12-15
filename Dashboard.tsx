
'use client';
import { Box, ChakraProvider, List } from '@chakra-ui/react';
import React, { useState } from 'react'
import FilterUsed from './Filter';
import Sales from './Report1';
import SalesList from './List';


const Dashboard: React.FC = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string>('');

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  const handleBranchChange = (selectedBranch: string) => {
    setSelectedBranch(selectedBranch);
  };
  return (
    <ChakraProvider>
     
        {/* FilterUsed component at the top */}
        <FilterUsed
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          selectedBranch={selectedBranch}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleBranchChange={handleBranchChange}
        />

        {/* Sales component below FilterUsed */}
        <Sales
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          selectedBranch={selectedBranch}
        />
      <SalesList
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        selectedBranch={selectedBranch}
     />
    </ChakraProvider>
  );
};

export default Dashboard;