import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '393bf7023d2144d78459ff533a64c780'
    }
});

