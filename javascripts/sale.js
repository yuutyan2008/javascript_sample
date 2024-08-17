// 関数内で長くなった要素を関数の外で別の変数に格納
// htmlのタグ情報を取得
// selectタグのid="product"でタグの情報を取得
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

// クリックの度に配列に要素を追加して、purchaseを、合計金額ボタンがクリックされるまで保持する
// データベースの代わりとして機能
let purchases = [];

// オブジェクト配列に商品データを格納
let data = [
  {
    id: 1,
    name: "オリジナルブレンド200g",
    price: 500,
  },

  {
    id: 2,
    name: "オリジナルブレンド500g",
    price: 900,
  },
  {
    id: 3,
    name: "スペシャルブレンド200g",
    price: 700,
  },
  {
    id: 4,
    name: "スペシャルブレンド500g",
    price: 1200,
  },
];

function display() {

    //newArray = purchases.map( function (elem) { elem.value += 1; });
    //newArray.join("\n");

    // 入力したデータが入るpurchases配列内の各要素に対して、mapメソッドのコールバック関数で処理し、結果を返す
    newArray = purchases.map(function (purchase) { 
      return `${purchase.name} ${purchase.price}円:${purchase.number}点`;
})
// purchases内のプロパティ(要素)をjoinで連結させ、改行を挟んだ文字列にする
newArray.join("\n");
}
  
/*
["aaa 100en:1ten","aaa 100en:1ten","aaa 100en:1ten"].join("¥n")
=> "aaa 100en:1ten¥naaa 100en:1ten¥naaa 100en:1ten"
alert(display())
alert("aaa 100en:1ten¥naaa 100en:1ten¥naaa 100en:1ten")
*/


function add() {
  const product_id = priceElement.value; //selectタグのvalue="1" の値を取得
  const number = numberElement.value;

  /// elem.id(商品データ)がproduct_id(selectタグに入っているユーザー入力のid)と一致すればtrueを返すcallback関数
  // findメソッドはtrueが返ったらそのdataオブジェクトの要素を返す
  const found = data.find(function (elem) {
    if (elem.id == product_id) {
      return true;
    } else {
      return false;
    }
  });
  // purchaseはユーザ入力データが入っている
  let purchase = {
    name: found.name,
    price: parseInt(found.price),
    number: parseInt(number),
  };
  let newPurchase = true; //新しい商品の追加なのか、すでに追加済みの商品の追加なのかをtrue/falseで保持する変数

  purchases.forEach((item) => {
    //purchases配列の要素のpriceプロパティを確認し、newPurchase変数の値を書き換えています
    if (item.price === purchase.price) {
      newPurchase = false;
    }
  });
  // 配列に何も入っていない（初回の追加である）または、newPurchase = trueなら
  if (purchases.length < 1 || newPurchase) {
    purchases.push(purchase); //配列に追加
  } else {
    //追加済でないなら、purchases配列を繰り返してpriceプロパティの値が同じものを見つける
    for (let i = 0; i < purchases.length; i++) {
      if (purchases[i].price === purchase.price) {
        //purchases配列に購入数を追加しています
        purchases[i].number += purchase.number;
      }
    }
  }
  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
}

// 確定した小計金額を返却してくれる
function subtotal() {
  let sum = 0;
  // 合計を算出する処理
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}

function calc() {
  const sum = subtotal();
  //送料算出の処理をcalcPostageFromPurchase()関数に抜き出しているので、calcPostageFromPurchase()関数の値を送料の値としてpostage定数に代入
  const postage = calcPostageFromPurchase(sum);
  window.alert(
    `小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`
  );
  purchases = [];
  //合計金額を表示後に、フォームに残っている選択した商品や数量をリセットするため、値に空文字を代入しています。
  priceElement.value = "";
  numberElement.value = "";
}
