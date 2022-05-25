import axios from 'axios';

const getEmployees = async () => {
  const queryResponse = await axios.get(
    'https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employees',
  );
  return queryResponse.data;
};

export default getEmployees;
