import React, { Fragment, useState , Dispatch, SetStateAction } from 'react'
import { PostType } from '../../../types';

import './Filter.scss'

const Filter: React.FC<{type: PostType, setType: Dispatch<SetStateAction<PostType>>}> = ({type, setType}) => {
  const [kindToggle, setKindToggle] = useState(false);
  const [sortToggle, setSortToggle] = useState(false);

  return (
    <Fragment>
      <div className="filtermobile">
        <div className="filtermobile__kinds">
          <button onClick={() => {setKindToggle(!kindToggle); setSortToggle(false)}}>Kind <i className="fa fa-angle-down"></i></button>

          {!kindToggle ? null : (
            <div className="filtermobile__options">
              <input type="radio" name="kind" id="All" value="All" onClick={()=>setType(PostType.all)}/>
              <label htmlFor="All">All kinds</label><br />
              <input type="radio" name="kind" id="Movie" value="Movie" onClick={()=>setType(PostType.movie)}/>
              <label htmlFor="Movie">Movie</label><br />
              <input type="radio" name="kind" id="Celebrity" value="Celebrity" onClick={()=>setType(PostType.celebrity)}/>
              <label htmlFor="Celebrity">Celebrity</label>
            </div>
          )}

        </div>

        <div className="filtermobile__sort">
          <button onClick={() => {setSortToggle(!sortToggle); setKindToggle(false)}}>Sort <i className="fa fa-angle-down"></i></button>

          {!sortToggle ? null : (
            <div className="filtermobile__options">
              <input type="radio" name="sort" id="Latest" value="Latest" />
              <label htmlFor="Latest">Latest First</label><br />
              <input type="radio" name="sort" id="Oldest" value="Oldest" />
              <label htmlFor="Oldest">Oldest First</label><br />
            </div>
          )}
        </div>

      </div>
      <div className="filterdesktop">
        <button onClick={() => {setKindToggle(!kindToggle); setSortToggle(false)}}><i className="fas fa-mug-hot"></i> Kind</button>
        {!kindToggle ? null : (
          <div>
            <input type="radio" name="kind" id="All" value="All" />
            <label htmlFor="All">All kinds</label><br />
            <input type="radio" name="kind" id="Movie" value="Movie" />
            <label htmlFor="Movie">Movie</label><br />
            <input type="radio" name="kind" id="Celebrity" value="Celebrity" />
            <label htmlFor="Celebrity">Celebrity</label>
          </div>
        )
        }

        <button onClick={() => {setSortToggle(!sortToggle); setKindToggle(false)}}><i className="fas fa-sort-amount-up"></i> Sort</button>
        {!sortToggle ? null : (
          <div>
            <input type="radio" name="sort" id="Latest" value="Latest" />
            <label htmlFor="Latest">Latest First</label><br />
            <input type="radio" name="sort" id="Oldest" value="Oldest" />
            <label htmlFor="Oldest">Oldest First</label><br />
          </div>
        )}

        <button><i className="fas fa-store"></i> My Store</button>
        <button><i className="fas fa-save"></i> Saved Posts</button>
      </div>
    </Fragment>
  )
}

export default Filter
