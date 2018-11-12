import axios from 'axios';

const loadHeads = () => axios.get('http://localhost:3003/heads');
const loadTorsos = () => axios.get('http://localhost:3003/torsos');
const loadLegs = () => axios.get('http://localhost:3003/legs');

export default { loadHeads, loadTorsos, loadLegs };
