function MenuCard(props){
    return(
<div className="menu">
    {
        props.menu.map((food)=>{
           return(
           <div className="food">
                <img src={food.img} alt={food.title}/>
                <div className="menuDesc">
                <h2>{food.title}</h2>
                <p>{food.desc}</p>
                </div>
            </div>)
        })
    }

</div>
    )
}





export default MenuCard