const a = ["つじ田人形町店", "麺屋周郷", "六厘舎"];
a.push("朧月"); //後ろに追加するもの
console.log(a);

//////////レビュー入力エリア//////////
$("main").slideDown(1000);

$("#save").on("click", function () {
  const text = $("#text").val();
  const shopname = $("#shopname option:selected").val();
  var taste = parseInt($("#taste").val());
  var access = parseInt($("#access").val());
  var time = parseInt($("#time").val());
  var cost = parseInt($("#cost").val());
  var efficiency = parseInt($("#efficiency").val());

  const A = taste + access + time + cost + efficiency;
  const B = taste + cost;
  const C = (100 * B) / A;
  D = C.toFixed(1);

  localStorage.setItem("shopname", shopname);
  localStorage.setItem("text", text);
  localStorage.setItem("taste", taste);
  localStorage.setItem("access", access);
  localStorage.setItem("time", time);
  localStorage.setItem("cost", cost);
  localStorage.setItem("efficiency", efficiency);

  const html = `

<li>
    <p>店の名前: ${shopname}</p>
    <p>コメント: ${text}</p>
    <p>麺の湯がき: ${taste}　秒</p>
    <p>水気を切る: ${access}　秒</p>
    <p>皿準備: ${time}　秒</p>
    <p>盛り付け: ${cost}　秒</p>
    <p>歩行: ${efficiency}　秒</p>
     <p>正味: ${D} ％</p>
  </li>
  `;

  $("#list").append(html);
  mychart.data.datasets[0].data = [taste, access, time, cost, efficiency];
  mychart.update();
});

$("#clear").on("click", function () {
  localStorage.clear();
  $("#list").empty("");
});

//////////レビュー入力エリア//////////

//////////レビューレーティングエリア//////////

Ratings("taste");
Ratings("access");
Ratings("time");
Ratings("cost");
Ratings("efficiency");

function Ratings(selectId) {
  const select = document.getElementById(selectId);

  if (select) {
    for (let i = 1; i <= 60; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }
  }
}
//////////レビューレーティングエリア//////////

//////////正味作業率計算//////////

//////////正味作業率計算//////////

//////////正味作業率表示//////////

const shuffleNumberCounter = (target) => {
  const targetNum = Number(target.getAttribute("data-num"));

  if (!targetNum) {
    return;
  }

  let counterData = null;
  const speed = 5000 / targetNum;
  let initNum = 0;

  const countUp = () => {
    if (Number.isInteger(targetNum)) {
      target.innerHTML = initNum;
    } else {
      target.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`;
    }

    initNum++;

    if (initNum > targetNum) {
      target.innerHTML = targetNum;
      clearInterval(counterData);
    }
  };

  counterData = setInterval(countUp, speed);
};

const target = document.querySelector(".number");

shuffleNumberCounter(target);

//////////正味作業率表示//////////

//////////グラフ表示エリア(棒グラフ)//////////

let ctx = $("#chart");

let mychart = new Chart(ctx, {
  type: "bar",
  //   描画するグラフの種類(pie:円グラフ、line:折れ線グラフ、bar:棒グラフ、など)
  data: {
    labels: ["茹で時間", "水気を切る", "皿準備", "盛り付け", "歩行"],
    datasets: [
      {
        label: "つじ田人形町店",
        data: [taste, access, time, cost, efficiency],
        backgroundColor: "rgba(176, 110,  30, 1)",
      },
      {
        label: "麺屋周郷",
        data: [30, 20, 20, 32, 10],
        backgroundColor: "rgba( 31, 167, 165, 1)",
      },
      {
        label: "篝銀座店",
        data: [27, 45, 18, 15, 16],
        backgroundColor: "rgba(241, 107, 141, 1)",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "ラーメン店舗比較表",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: 60,
            suggestedMin: 0,
            stepSize: 10,
            callback: function (value, index, values) {
              return value + "";
            },
          },
        },
      ],
    },
  },
});
