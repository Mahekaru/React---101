import axios from 'axios';
import { base } from 'framer-motion/client';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '324cc710e4d04d388dfe84f6238ffc6f'
    }
})