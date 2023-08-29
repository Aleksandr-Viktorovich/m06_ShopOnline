const getId = async (callback) => {
  const id = +new URLSearchParams(window.location.search).get('id');
  if (id) {
    const request = await fetch(`https://gorest.co.in/public-api/posts/${id}`);
    const {data} = await request.json();
    callback(data);
  }
};


const blogRender = async (data) => {
  const {user_id: userId} = data

  const blogTitle = document.querySelector('.blog__title');
  const blogText = document.querySelector('.blog__text');
  const author = document.querySelector('.blog__author-title');

  author.textContent = `user_id ${userId}`;
  blogTitle.textContent = data.title;
  blogText.textContent = data.body;
};

getId(blogRender);

