btnMusic1.onclick=function(){
  //const searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];
  //const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];
  //const YOUTUBE_API_KEY = "";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDQDqbT0MqzwqDkCTikF0boH4dp4IyVsdg&q=sleeping music&maxResults=1`;
  // console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data.items[0].id.videoId);
      document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
  });
}

btnMusic2.onclick=function(){
  //const searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];
  //const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];
  //const YOUTUBE_API_KEY = "";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDQDqbT0MqzwqDkCTikF0boH4dp4IyVsdg&q=relaxing music&maxResults=1`;
  // console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data.items[0].id.videoId);
      document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
  });
}
