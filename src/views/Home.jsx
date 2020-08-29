import React from 'react';
import PostCardLayout from '../components/PostCardLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';

/* 
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
    }
]; */

export default function Home(props) {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        fetch(
            'http://localhost:9000/posts?user_id=1',
            {
                method: 'GET'
            }
        )
        .then(response => response.json())
        .then(json => {
            for(let i = 0; i < json.posts.length; ++i) {
                json.posts[i].image_url = 'http://localhost:9000' + json.posts[i].image_url;
            }

            console.log(json);

            setPosts(json.posts);
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

    /**
     * 
     * @param {React.FormEvent<HTMLFormElement>} ev 
     */
    const onSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        formData.append("user_id", '1');

        for(const entry of formData.entries()) {
            const key = entry[0];
            const value = entry[1];
            console.log(key + " : " + value);
        }
        //console.log(formData);

        fetch(
            "http://localhost:9000/posts",
            {
                method: "POST",
                body: formData
            }
        )
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => console.log(err))
    };

    console.log("Home.jsx rendered");

    return (
        <div>
            <div className="bg-gray-200 mx-4 my-4">
                <form method="post" encType="multipart/form-data" onSubmit={onSubmit}>
                    <span className="block text-gray-900 font-semibold uppercase tracking-wider">Create Post</span>
                    <input name="image" required id="image_url" type="file" accept="image/png, image/jpeg" />
                    <InputField label="Caption" name="caption" required/>
                    <Button text="Submit" buttonStyle={Button.styles.contained} />
                </form>
            </div>
            <PostCardLayout posts={posts} />
        </div>
    );
}