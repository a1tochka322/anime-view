/* eslint-disable no-alert */
/* eslint linebreak-style: ["error", "windows"] */

const detailData = () => {
  const preloader = document.querySelector('.preloder');
  const renderGenreList = (genres) => {
    const dropdownBlock = document.querySelector('.header__menu .dropdown');
    genres.forEach((genre) => {
      dropdownBlock.insertAdjacentHTML(
        'beforeend',
        `
            <li><a href="./categories.html?genre=${genre}">${genre}</a></li>
            `,
      );
    });
  };

  const renderAnimeDetails = (array, itemId) => {
    // eslint-disable-next-line eqeqeq
    const animeObj = array.find((item) => item.id == itemId);
    const imageBlock = document.querySelector('.anime__details__pic');
    const viewsBlock = imageBlock.querySelector('.view');
    const titleBlock = document.querySelector('.anime__details__title h3');
    const subTitleBlock = document.querySelector(
      '.anime__details__title span',
    );
    const descriptionBlock = document.querySelector(
      '.anime__details__text p',
    );
    const widgetList = document.querySelectorAll(
      '.anime__details__widget ul li',
    );
    const breadCrumb = document.querySelector('.breadcrumb__links span');

    if (animeObj) {
      imageBlock.dataset.setbg = `./img/animeList/${animeObj['original-title'].replace(/ |:|'/gi, '')}.jpg`;
      viewsBlock.innerHTML = '';
      viewsBlock.insertAdjacentHTML(
        'beforeend',
        `
            <i class="fa fa-eye"></i> ${animeObj.views}`,
      );
      document.querySelectorAll('.set-bg').forEach((elem) => {
        // eslint-disable-next-line no-param-reassign
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
      });

      setTimeout(() => {
        preloader.classList.remove('active');
      }, 500);

      titleBlock.textContent = animeObj.title;
      subTitleBlock.textContent = animeObj['original-title'];
      descriptionBlock.textContent = animeObj.description;
      widgetList[0].insertAdjacentHTML('beforeend', `
        <span>Date aired:</span>
        ${animeObj.date}
        `);
      widgetList[1].insertAdjacentHTML('beforeend', `
        <span>Rating:</span>
        ${animeObj.rating}
  `);
      widgetList[2].insertAdjacentHTML('beforeend', `  
        <span>Genres:</span>
        ${animeObj.tags.join(', ')}
        `);
      breadCrumb.textContent = animeObj.ganre;
    } else {
      alert('Error 404!');
    }
  };

  fetch(
    'https://anime-622bc-default-rtdb.europe-west1.firebasedatabase.app/anime.json',
  )
    .then((response) => response.json())
    .then((data) => {
      const genres = new Set();
      const genreParams = new URLSearchParams(window.location.search).get(
        'itemId',
      );
      data.forEach((item) => {
        genres.add(item.ganre);
      });

      if (genreParams) {
        renderAnimeDetails(data, genreParams);
      } else {
        alert('Error 404!');
      }

      renderGenreList(genres);
    });
};

detailData();
