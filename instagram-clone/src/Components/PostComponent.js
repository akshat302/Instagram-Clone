import React from 'react'
import '../Post.css';
import Avatar from "@material-ui/core/avatar";

function Post() {
    return (
        <div className="post">
            {/* header-> avatar + username */}
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt="akshatgupta321"
                    src="/static/images/avatar/1.jpg" 
                />
                <h3>Username</h3>
            </div>
            

            {/* header-> avatar + username */}
            <img className="post_image" src="https://wallpaperaccess.com/full/48071.jpg" />

            {/* username + caption */}
            <h4 className="post_text"><strong>akshatgupta321</strong> This a test caption.</h4>


        </div>
    )
}

export default Post;
