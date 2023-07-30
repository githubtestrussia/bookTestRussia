import { Spin } from 'antd';

const Loader =({textAlign,margin,borderRadius,size})=>(
            <Spin style={{borderRadius,textAlign, margin, display: 'flex', flexDirection: 'column', alignItems: 'center' }} size={size}/>
)

export default Loader;