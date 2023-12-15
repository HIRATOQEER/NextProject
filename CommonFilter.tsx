// CommonFilterComponent.tsx

import React, { useState } from 'react';

interface CommonFilterProps {
  children: (props: {
    selectedStartDate: Date | null;
    selectedEndDate: Date | null;
    selectedBranch: string;
    handleStartDateChange: (date: Date | null) => void;
    handleEndDateChange: (date: Date | null) => void;
    handleBranchChange: (branch: string) => void;
  }) => React.ReactNode;
}

const CommonFilterComponent: React.FC<CommonFilterProps> = ({ children }) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string>('');

  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  const handleBranchChange = (branch: string) => {
    setSelectedBranch(branch);
  };

  return <>{children({ selectedStartDate, selectedEndDate, selectedBranch, handleStartDateChange, handleEndDateChange, handleBranchChange })}</>;
};

export default CommonFilterComponent;
