function Admin(){
    //create a fetch request that displays all gems and display as cards on a grid
    // remember to change state

    return(
        <>
        {/* display fetch results */}
        <div className="cards">
            <img src="" alt="" />
            <p>Name:</p>
            <p>Video-url:</p>
            <p>Decription:</p> 
            
        {/*PUT form */}
        <button>EDIT</button>

        {/* DELETE form */}
        <button>DELETE</button>
        </div>

       

        {/*form for POST */}
        <form>
                   <label>Name:
                <input type="text" />
            </label>
            <label>Image url:
                <input type="text" />
            </label>
            <label>Video url:
                <input type="text" />
            </label>
            <label>Description:
                <input type="text" />
            </label>
            <button>Submit</button>

        </form>

        </>
    )
}


export default Admin