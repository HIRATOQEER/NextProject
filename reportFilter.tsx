// FilterUsed.tsx
import React, { useState } from 'react';
import { Box, FormControl, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react';
import { RangeDatepicker } from 'chakra-dayzed-datepicker';

interface FiltersProps {
  selectedDates: Date[];
  handleDateChange: (dates: Date[]) => void;
  selectedBranch: string;
  handleBranchChange: (branch: string) => void;
}

const FilterUsed: React.FC<FiltersProps> = ({ selectedDates, handleDateChange, selectedBranch, handleBranchChange }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Box>
      {/* Date Range Picker */}
      <Box w="1491px" h="178px" bg="white" rounded="md" marginLeft="100" marginTop="100px" background="#FFFFFF" 
 
   position="fixed" // Set position to fixed
>

        <Box
          width="1589px"
          height="178px"
          border="0px 0px 1px 0px"
          borderBottom="1px solid #E2E8F0"
          top="218px"
          left="291px"
        >

<Box
            ml="40px"
            mt="40px"
            position="absolute"
            width="93px"
            height="29px"
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            lineHeight="29px"
            letterSpacing="0px"
            textAlign="left"
            background="white"
            color="black"
            zIndex="1"
          >
            Reports
          </Box>

          <Box
            ml="40px"
            mt="77px"
            position="absolute"
            width="346px"
            height="19px"
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            lineHeight="19px"
            letterSpacing="0px"
            textAlign="left"
            background="#FFFFFF"
            color="#555555"
            zIndex="1"
          >
            Analyze your performance with these insights
          </Box>

          {/* ... (rest of your component) */}
          
          {/* Date Range Picker */}
          <Menu isOpen={menuIsOpen} onOpen={() => setMenuIsOpen(true)} onClose={() => setMenuIsOpen(false)}>
            <MenuButton
              as={FormControl}
              ml="1000px"
              mt="37px"
              width="243px"
              height="62px"
              textAlign="center"
              lineHeight="62px"
              backgroundColor="#FFFFFF"
              borderBottom="1px solid #E2E8F0"
              cursor="pointer"
              position="absolute"
              zIndex="1"
              bg="#F1F1F1"
            >
              Select Date Range
            </MenuButton>
            <MenuList>
              {/* Using RangeDatepicker directly within MenuList */}
              <RangeDatepicker selectedDates={selectedDates} onDateChange={(dates) => handleDateChange(dates)} />
            </MenuList>
          </Menu>

          {/* Branch Filter */}
          <Menu>
            <MenuButton
              as={Box}
              ml="1306px"
              mt="37px"
              width="243px"
              height="62px"
              textAlign="center"
              lineHeight="62px"
              backgroundColor="#FFFFFF"
              borderBottom="1px solid #E2E8F0"
              cursor="pointer"
              position="absolute"
              zIndex="1"
              bg="#F1F1F1"
            >
              Select Branch
            </MenuButton>
            <MenuList>
              <MenuItem value="" onClick={() => handleBranchChange('')}>
                All Branches
              </MenuItem>
              <MenuItem value="branch1" onClick={() => handleBranchChange('branch1')}>
                Branch 1
              </MenuItem>
              <MenuItem value="branch2" onClick={() => handleBranchChange('branch2')}>
                Branch 2
              </MenuItem>
              {/* Add more branches as needed */}
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterUsed;
