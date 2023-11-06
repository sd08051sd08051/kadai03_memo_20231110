const a = ["つじ田人形町店", "麺屋周郷", "六厘舎"];
a.push("朧月"); //後ろに追加するもの
console.log(a);

//////////レビュー入力エリア//////////
$("main").slideDown(1000);

$("#save").on("click", function () {
  const value = $("#value").val();
  const text = $("#text").val();
  localStorage.setItem(value, text);
  const html = `
  <li>
  <p>${value}<p>
              <p>${text}<p>
                </li>
                `;
  $("#list").append(html);
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
    for (let i = 1; i <= 5; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }
  }
}
//////////レビューレーティングエリア//////////

//////////グラフ表示エリア(棒グラフ)//////////

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
      text: "ラーメン店舗比較表",
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

//////////グラフ表示エリア(棒グラフ)//////////

//////////グラフ表示エリア(円グラフ)//////////

// let pichart = $("#pichart");
// let mychart2 = new Chart(ctx, {
//   type: "pie",
//   //   描画するグラフの種類(pie:円グラフ、line:折れ線グラフ、bar:棒グラフ、など)
//   data: {
//     labels: ["正味作業", "付随作業"],
//     datasets: [
//       {
//         label: "つじ田人形町店",
//         data: [4, 3],
//         backgroundColor: "rgba(176, 110,  30, 1)",
//       },
//       // {
//       //   label: "麺屋周郷",
//       //   data: [5, 2],
//       //   backgroundColor: "rgba( 31, 167, 165, 1)",
//       // },
//       // {
//       //   label: "六厘舎",
//       //   data: [5, 5],
//       //   backgroundColor: "rgba(241, 107, 141, 1)",
//       // },
//     ],
//   },
//   options: {
//     title: {
//       display: true,
//       text: "つけ麺の店舗比較表",
//     },
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             suggestedMax: 5,
//             suggestedMin: 0,
//             stepSize: 1,
//             callback: function (value, index, values) {
//               return value + "";
//             },
//           },
//         },
//       ],
//     },
//   },
// });
//////////グラフ表示エリア(円グラフ)//////////

// function test() {
//   const str = "I don't know func";
//   alert(str);
// }
// test(); 繰り返して使うものはなるべくfuncにしておくべき

// function add() {
//   const n = 10 + 10;
//   alert(n);
// }
// add();

//繰り返し処理で、各要素を評価する
// function selectBoxCreate(start, end) {
//   let str = "";
//   for (let i = start; i < end; i++) {
//     str += `<option>${i}</option>`;
//   }
//   return str;

// }

// selectBoxCreate{1970,3000};
// selectBoxCreate{1,13};
// selectBoxCreate{1,32};

// function addition(a, b) {
//   const n = a + b;
//   return n;
// }

// const num = addition(100, 300);
// console.log(num);
