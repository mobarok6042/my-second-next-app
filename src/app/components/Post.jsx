import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <div className="border border-gray-500 rounded p-4 m-3">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.body}</p>
            </div>
        </div>
    );
};

export default Post;