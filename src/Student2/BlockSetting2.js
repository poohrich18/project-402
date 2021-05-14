import React from 'react'
import praew1 from '../assets/praew1.jpg' ;
export const BlockSetting2 = () => {
    return (
        <div className="rightblocksetting">
            <div className="blockwhitesetting">
                <h1 className="TopnameSetting">Setting</h1>

                <hr className="hr-setting"></hr>
                <div>
                    <img className="img-thumbnail" src={praew1} alt=""/>
                   
                </div>

                
                {/* <form>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                </form> */}

            </div>
        </div>
    )
}
