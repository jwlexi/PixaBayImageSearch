$("#searchBtn").on("click", imageSearch);

async function imageSearch() {
  let textInput = $("#search").val();

  if (textInput.length >= 3) {
    let layout = $("input:checked").val();
    let url = `https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=${textInput}&orientation=${layout}`;
    let data = await getData(url);
    data.hits = _.shuffle(data.hits);
    let hits = [data.hits[0], data.hits[1], data.hits[2], data.hits[3], data.hits[4]];
    var myLength = $("#search").val().length;

    $("#img1").attr("src", hits[0].webformatURL);
    $("#img2").attr("src", hits[1].webformatURL);
    $("#img3").attr("src", hits[2].webformatURL);
    $("#img4").attr("src", hits[3].webformatURL);
    $("#img5").attr("src", hits[4].webformatURL);

    $("#title1").html("Likes: " + hits[0].likes);
    $("#title2").html("Likes: " + hits[1].likes);
    $("#title3").html("Likes: " + hits[2].likes);
    $("#title4").html("Likes: " + hits[3].likes);
    $("#title5").html("Likes: " + hits[4].likes);

    $(".card-group").attr("style", "display");
  } else {
    alert("Please type at least 3 characters in the textbox");
  }
}

async function getData(url) {
  let response = await fetch(url);
  let data = response.json();
  return data;
}

async function loadBackgroundImage() {
  let background = _.sample(["otter", "cat", "snake", "dog", "cow"]);
  let url = `https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=${background}`;
  let data = await getData(url);
  data.hits = _.shuffle(data.hits);
  let hit = data.hits[0];
  $("body").css("background-image", "url(" + hit.webformatURL + ")");
  console.log("running");
}
loadBackgroundImage();