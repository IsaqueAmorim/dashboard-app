import './boxX.css'
import {FaArrowAltCircleDown, FaChartPie} from 'react-icons/fa'

export default ({title, value, porcent,period,color,icon,background})=>{
    return(
        <div className="box-x">
            <div className="box-container">
                <div>
                    <p>{title}</p>
                    <h4>{value}</h4>
                </div>

                <div 
                className="icon"
                style={{backgroundColor:background}}>
                    {icon}
                </div>
            </div>
            <span>
                <FaArrowAltCircleDown style={{marginRight: '5px'}}
                color={color}/>
                <span style={{color:color,
                fontWeight: 'bold',marginRight:'20px'}}>{porcent}</span>{period}
            </span>
        </div>
    );
}