import React from 'react'

import './BlogForm.scss';

const BlogForm = () => {
  return (
    <div className="blogform">
      <h3>Create a New Review</h3>
      <form>
        <div className="blogform__type">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="movie" value="movie" checked />
            <label className="form-check-label" htmlFor="movie">
              Movie
          </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="celebrity" value="celebrity" />
            <label className="form-check-label" htmlFor="celebrity">
              Celebrity
          </label>
          </div>
        </div>


        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture Link</label>
          <input type="text" className="form-control" id="picture" required/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" id="content" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default BlogForm
