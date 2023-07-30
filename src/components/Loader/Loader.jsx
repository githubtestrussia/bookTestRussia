import { Spin } from 'antd';

const Loader =({textAlign,margin,borderRadius,size,width})=>(
        <Spin style={{borderRadius,textAlign, margin,
            flexDirection: 'column', alignItems: 'center', justifyContent:'center', width,position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 10px)'
        }} size={size}/>
)



export default Loader;