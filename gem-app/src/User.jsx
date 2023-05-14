// import React from 'react';

function User(){
    return(
        
            
        <form>
        {/* //form for POST action */}
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
    )
}


export default User