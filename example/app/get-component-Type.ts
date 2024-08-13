
const getComponentType = () => typeof window === 'undefined' ? 'server' : 'client';

export default getComponentType;