import {useGlobalContext } from "../context"

const Products =()=>{

    

    const {products} = useGlobalContext();
    
    return(
        <div className="container">
            <div className="row justify-content-center m-2">
                <div className="col-3">
           {products?.map((item)=>{
            
            const {id, title, price, image} = item;
            return(
            <div key ={id} className="card-collection md-4 sm-6">
                <div className="card-img-top">
                    <img src={image} style={{width: '200px'}} alt="item" />
                </div>
                <div className="card-body">
                <div className="card-title">
                    {title}
                </div>
                
                <div className="card-text">
                    <h3>Price: <b className="text-danger">{price}</b></h3> 
                </div>
                
                    
                </div>
            
            </div>
            ) 
           })}
           </div>
            </div>
        </div>
    )
}

export default Products;