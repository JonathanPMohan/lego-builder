import axios from 'axios';

const getHeads = () => axios.get('http://localhost:3003/heads');
const getTorsos = () => axios.get('http://localhost:3003/torsos');
const getLegs = () => axios.get('http://localhost:3003/legs');

export default { getHeads, getTorsos, getLegs };
