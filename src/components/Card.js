
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
    const {todoTitle,todoDesc} = props;
    return <div className='card'>
            <h3 className='cardTitle' >{todoTitle}</h3>
            <p className='cardDesc' >{todoDesc}</p>
            <p className='cardFooter' >{dateName + "/" + monthName + "/" + currentYear}</p>
           </div>
}


export default Card;