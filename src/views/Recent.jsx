import React, { useState } from 'react'
import PostCardLayout from '../components/PostCardLayout'

const posts = [
    {
        post_id: 0,
        user_id: 1,
        caption: "These poppyseed buns are delicious!!",
        image_url: "https://images.unsplash.com/photo-1597673934455-f32e0fe3f529",
        likes: 10,
        dislikes: 5
    },
    {
        post_id: 1,
        user_id: 1,
        caption: "just went to iHop",
        image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
        likes: 50,
        dislikes: 25
    },
    {
        post_id: 2,
        user_id: 2,
        caption: "Nothing beats tacos.",
        image_url: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f",
        likes: 100,
        dislikes: 5
    },
    {
        post_id: 3,
        user_id: 2,
        caption: "Nothing beats tacos.",
        image_url: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f",
        likes: 100,
        dislikes: 5
    },
    {
        post_id: 4,
        user_id: 2,
        caption: "Nothing beats tacos.",
        image_url: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f",
        likes: 100,
        dislikes: 5
    }
];

export default function Recent() {
    return (
        <div>
            <PostCardLayout posts={posts} />
        </div>
    )
}
