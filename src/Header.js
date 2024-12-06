import './Header.css'
function header(){
    return(
        <>
        <nav class="navbar">
            <h1>Flipkart</h1>
                <input class="inputsearch" type="search" placeholder="Search  for Products,Brands and more" aria-label="Search"/>
            <h2>Cart</h2>
        </nav>
        </>
    );
}
export default header