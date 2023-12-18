// DownloadButtonWithLogic.tsx
import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { IoMdDownload } from 'react-icons/io';

interface DownloadButtonWithLogicProps {
  csvContent: string;
  fileName: string;
}

const DownloadButtonWithLogic: React.FC<DownloadButtonWithLogicProps> = ({ csvContent, fileName }) => {
  const handleDownload = () => {
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      width={['100%', '100%', '193px']}
      height="40px"
      padding="0px 16px"
      left={['0px', '0px', '1256px']}
      borderRadius="6px"
      gap="8px"
      background="#1A202C"
      color="white"
      onClick={handleDownload}
      rightIcon={<Icon as={IoMdDownload} boxSize={30} />}
    >
      Download Report
    </Button>
  );
};

export default DownloadButtonWithLogic;
