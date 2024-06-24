document.addEventListener("DOMContentLoaded", function () {
  const API_KEY = "1H0RBJcXbyyora4N8cI0XAyjvAAQGpYrz751rMe7Pf4Sbls4z4DHLZd5";
  const url = "https://api.pexels.com/videos/search";
  const searchForm = document.getElementById("search-form");

  function searchVideos(query) {
    const params = {
      query: query,
      per_page: 10,
      page: 1,
    };

    const options = {
      headers: {
        Authorization: API_KEY,
      },
      params: params,
    };

    axios
      .get(url, options)
      .then((response) => {
        const videos = response.data.videos;
        displayVideos(videos);

        
        hideAdContainer();
        hideGroupContainer();
      })
      .catch((error) => {
        console.error(`Erro na busca por vídeos: ${error}`);
      });
  }

  function displayVideos(videos) {
    const videoListElement = document.getElementById("video-list");
    videoListElement.innerHTML = "";

    videos.forEach((video) => {
      const videoItem = document.createElement("li");
      videoItem.classList.add("video-item");

      const videoElement = document.createElement("video");
      videoElement.classList.add("video-thumbnail");
      videoElement.src = video.video_files[0].link;
      videoElement.controls = true;

      const videoTitle = document.createElement("h3");
      videoTitle.textContent = video.user.name;

      videoItem.appendChild(videoElement);
      videoItem.appendChild(videoTitle);
      videoListElement.appendChild(videoItem);
    });
  }

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const searchTerm = document.getElementById("search-input").value.trim(); 

    if (searchTerm) {
      
      searchVideos(searchTerm); 
    } else {
      console.log("O termo de pesquisa está vazio.");
    }
  });

  function hideAdContainer() {
    const adContainer = document.querySelector(".ad-container");
    if (adContainer) {
      adContainer.style.display = "none";
    }
  }

  function hideGroupContainer() {
    const groupContainer = document.querySelector(".group-container");
    if (groupContainer) {
      groupContainer.style.display = "none";
    }
  }
});
