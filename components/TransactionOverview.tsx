import { Box } from '@chakra-ui/react';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// @ts-ignore
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Savings',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderWidth: 1,
      borderRadius: 6,
    },
    {
      label: 'Expenses',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
};

export const TransactionOverview = () => {
  return (
    <Box
      w="100%"
      bg="white"
      boxShadow="lg"
      borderRadius="16px"
      px="40px"
      py="40px"
      mb="40px"
    >
      <Bar options={options} data={data} />
    </Box>
  );
};
