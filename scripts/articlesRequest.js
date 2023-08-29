const load = async (callback) => {
  let page = +new URLSearchParams(window.location.search).get('page');
  if (page === 0) {page = 1}

  const url = `https://gorest.co.in/public-api/posts?page=${page}`;
  const res = await fetch(url);
  const data = await res.json();

  callback(data, page);
};


const render = (data, page) => {
  const article = document.querySelector('.article__wrapper');
  const section = document.querySelector('section');
  const articleList = document.createElement('ul');
    articleList.classList.add('articleList');

  const articles = data.data.map(item => {
    const articleItem = document.createElement('article');
    articleItem.classList.add('article__item');

    if (item.title.length > 41) {item.title = item.title.slice(0, 39) + '...'}

    articleItem.innerHTML = `
      <img class="article__img" src="./img/baikal.jpg">
      <h2 class="article__title"><a id = "#${item.id}" href="blog.html?id=${item.id}">${item.title}</a></h2>
      <p class="article__date">06 марта 2020, 15:34</p>
      <ul class="article__activity">
        <li class="article__list-item">
         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M21.257 11.462C21.731 12.082 21.731 12.919 21.257 13.538C19.764 15.487 16.182 19.5 12 19.5C7.81801 19.5 4.23601 15.487 2.74301 13.538C2.51239 13.2411 2.38721 12.8759 2.38721 12.5C2.38721 12.1241 2.51239 11.7589 2.74301 11.462C4.23601 9.513 7.81801 5.5 12 5.5C16.182 5.5 19.764 9.513 21.257 11.462V11.462Z" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>         </svg>
          2,3k
        </li>
        <li class="article__list-item">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1901_110)">
              <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" fill="#8F8F8F"/>
            </g>
            <defs>
              <clipPath id="clip0_1901_110">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          0
        </li>
      </ul>
    `;
    return articleItem;
  });

  for (let i = 0; i < data.data.length; i++) {
    const articlesItem = document.createElement('li');
      articlesItem.classList.add('articlesItem');
    const articleLink = document.createElement('a');
    articleLink.textContent = i + 1;
    articleLink.href = `articles.html?page=${page = articleLink.text}`;

    articlesItem.append(articleLink);
    articleList.append(articlesItem);
  }
  article.append(...articles);
  section.append(articleList);

};

load(render);
