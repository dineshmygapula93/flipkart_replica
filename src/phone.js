import "./phone.css"
function phone(props){
    return(
        <>
        <div className="container">
                <div id="imagecont">
                    <img id="image" src={props.src} alt="phone" ></img>
                    <br />
                    <input type='checkbox'/><span>Add to compare</span>
                </div>
                <div id="about">
                    <h3>{props.name}</h3>
                    <ul>
                        <li>{props.d1}</li>
                        <li>{props.d2}</li>
                        <li>{props.d3}</li>
                        <li>{props.d4}</li>
                        <li>{props.d5}</li>
                    </ul>
                </div>
                <div id="prices">
                    <h3 id="pricestyle">{props.price}</h3>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="fp" width="50px" height="15px"></img>
                    <br />
                    <br />
                    <strike>{props.mrp}</strike>&nbsp;&nbsp;<span Style="color:green" font=""><b>{props.offer}</b></span>
                    <p>Free delivery</p>
                    <p Style="color:green">save extra with combo offers</p>
                </div>
        </div>
        <hr></hr>
        </>
    );
}
export default phone