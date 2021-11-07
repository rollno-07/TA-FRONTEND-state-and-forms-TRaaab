import React, { Component } from 'react'
import data from './data.json'
 import MenuCard from './MenuCard'



class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            activeItem:""
        }
        
    }
    handleClick=(category)=>{
        this.setState({
            activeItem:category
        })
    }
    render(){
        let categoty=data.map((food)=>food.category)
        let menu=[];
        if(!this.state.activeItem){
        menu=data.reduce((acc,food)=>{acc= acc.concat(food) ;return acc},[])
        }
        else {
            data.forEach((food)=>{
              if(food.category===this.state.activeItem){
                  menu.push(food)
              }
            })
            
        }
        let uniqueCategory = [];
        categoty.forEach((c) => {
    if (!uniqueCategory.includes(c)) {
        uniqueCategory.push(c);
    }
    
});
console.log(menu)
        return(
            <>
            <span className="">
        
        {
            uniqueCategory.map((categoty)=>(<li key={categoty}  className={categoty===this.state.activeItem?"active":""} onClick={()=>this.handleClick(categoty)}>{categoty}</li>))
        }
        
        </span>
         <MenuCard menu={menu}/>
            </>
        )
    }
}
export default Menu