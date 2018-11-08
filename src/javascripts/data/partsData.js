import axios from 'axios';

const getParts = () => axios.get('http://localhost:3003/parts');

export default { getParts };
