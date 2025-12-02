const posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' }
];

function getPosts() {
    return posts;
}

export const getPostsLength = () => posts.length;
//or I can write it as export {getPosts} mostly when i want to export multiple functions
export default getPosts;