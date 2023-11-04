//////////レビュー入力エリア//////////
$("main").slideDown(1000);
$("#save").on("click", function () {
  alert("save");
  const v = $("#text").val();
  localStorage.setItem("memo", v);
});
$("#clear").on("click", function () {
  localStorage.removeItem("memo");
  $("#textarea").val("");
  alert("clear");
});

//////////グラフ表示エリア//////////

let ctx = $("#chart");
let mychart = new Chart(ctx, {
  type: "bar",
  //   描画するグラフの種類(pie:円グラフ、line:折れ線グラフ、bar:棒グラフ、など)
  data: {
    labels: ["味", "アクセス性", "待ち時間", "コスト", "店舗効率"],
    datasets: [
      {
        label: "つじ田人形町店",
        data: [4, 3, 5, 3, 5],
        backgroundColor: "rgba(176, 110,  30, 1)",
      },
      {
        label: "麺屋周郷",
        data: [5, 2, 2, 4, 4],
        backgroundColor: "rgba( 31, 167, 165, 1)",
      },
      {
        label: "六厘舎",
        data: [5, 5, 1, 2, 5],
        backgroundColor: "rgba(241, 107, 141, 1)",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "つけ麺の店舗比較表",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: 5,
            suggestedMin: 0,
            stepSize: 1,
            callback: function (value, index, values) {
              return value + "";
            },
          },
        },
      ],
    },
  },
});
//////////グラフ表示エリア//////////
