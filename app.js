let data = document.getElementById('data');


var games, etag;


var checkGames = async function () {
  let result = await axios.get("https://api.chess.com/pub/player/speedonly/stats")
  console.log(result)
  let returnData =
    (result.data.chess_bullet.record.win - 90) + " - "
    + (result.data.chess_bullet.record.loss - 6) + " - "
    + (result.data.chess_bullet.record.draw - 5)
  return returnData
}

let main = async function () {
  data.innerHTML = await checkGames();
}

window.setInterval(() => {
  main()
}, 5000);
