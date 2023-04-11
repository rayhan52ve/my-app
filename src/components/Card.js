const todoTitle = "Call Family";
const todoDesc = "Laborum esse proident Lorem laboris commodo cillum nostrud ullamco non aute in voluptate non quis. Excepteur eiusmod excepteur sit laborum nulla consequat aliquip nulla ullamco sint nisi excepteur dolor. Pariatur cupidatat consectetur sunt magna. Laborum et eiusmod commodo fugiat voluptate cillum cupidatat quis dolor eiusmod velit tempor do. Excepteur elit in excepteur nulla nulla sunt nostrud dolor sint consectetur cillum laborum minim. Ad anim incididunt amet nulla dolore nulla commodo non aliquip. Laborum excepteur commodo quis consequat ut et quis ut laborum ex labore amet consectetur.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(){
    return <div className='card'>
            <h3 className='cardTitle' >{todoTitle}</h3>
            <p className='cardDesc' >{todoDesc}</p>
            <p className='cardFooter' >{dateName + "/" + monthName + "/" + currentYear}</p>
           </div>
}


export default Card;