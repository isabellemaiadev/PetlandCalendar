import axios from 'axios';

const getOccupiedSchedules = async (id: number) => {
  const response = await axios.get(
    'https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employee/' +
      id +
      '/appointments',
  );

  return response.data;
};

export default getOccupiedSchedules;
