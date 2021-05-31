import React from 'react'
import '../Post.css';
import Avatar from "@material-ui/core/avatar";

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            {/* header-> avatar + username */}
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt="akshatgupta321"
                    src="/static/images/avatar/1.jpg" 
                />
                <h3>{username}</h3>
            </div>
            

            {/* header-> avatar + username */}
            <img className="post_image" src={imageUrl} />

            {/* username + caption */}
            <h4 className="post_text"><strong>{username}</strong> {caption}</h4>


        </div>
    )
}

export default Post;
