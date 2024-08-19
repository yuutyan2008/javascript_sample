function addElement() {
  // createElement("p"):HTML文書にはない要素をノードとして作成
  const element = document.createElement("p");
  // 要素の中にテキストを入れる
  element.innerText = "JavaScriptはスクリプト言語です"
  //[0]は、 document.getElementsByTagName("div") が返す HTMLCollection の最初の要素（インデックス0の要素）
  const parentElement = document.getElementsByTagName("div")[0];
  // 作成したノードをHTML文書に挿入するには、appendChild()メソッドやinsertBefore()メソッドを使用します
  // parentElement.appendChild(element);
  const target = document.getElementsByTagName("p")[0];
  // 要素オブジェクト.insertBefore(挿入したいノードオブジェクト, その前に挿入したい子要素) 
  parentElement.insertBefore(element, target);
};
window.onload = addElement;

function addLink() {
  // index.htmlに新たに<a>要素を作成
  const element = document.createElement("a");
  // setAttribute()メソッドでhref属性を設定し、ディープロのWebサイトへのリンクを作成
  element.setAttribute("href", "https://diveintocode.jp/");
  element.innerText = "DPro";
  // getAttribute()メソッドは、要素オブジェクトに対して使用し、引数に設定した属性の値を取得
  const parentElement = document.getElementsByTagName("div")[0];
  parentElement.appendChild(element);
};

window.onload = addLink;

// href属性を削除する関数を追加
function removeLink() {
  const link = document.getElementsByTagName("a")[0];
  link.removeAttribute("href");
}

window.onload = function() {
  addLink();
  removeLink();
}

// URLを表示する関数を追加
//getAttribute()メソッドで、setAttribute()メソッドで追加した<a>要素のhref属性を取得
function showLink() {
  const link = document.getElementsByTagName("a")[0];
  const url = link.getAttribute("href");
  console.log(url)
}

window.onload = function() {
  addLink();
  showLink();
}
// HTML要素のclassNameプロパティを使用し,HTML要素のclassを取得する
function operateCSS() {
  const element = document.getElementsByTagName("h1")[0];
  // //クラス名を表示する
  // console.log(element.classList)
  // <h1>要素に”background_pink”というclassを追加してみましょう。
  element.classList.add("background_pink");
  //remove()メソッドは、classListsオブジェクトからclassを削除します。
  //toggle()メソッドは、classListsオブジェクトに該当のclassがなければ追加し、あれば削除します。
  // element.addEventListener('click', function(){
  //   this.classList.toggle('background_pink');
  // });
  element.classList.remove("red");
  // //すでに作成済みのclass名に変更
  // element.className = "display_none";
};

window.onload = operateCSS;

// addEventListener()メソッドを使用して、<button>要素がクリックされた時に、”クリックされました”とアラートするイベントを登録
function clickBtn() {
  const button = document.getElementById("btn");
  // ”click”は「クリックされた時」を表すイベント
  //１つ目のイベントハンドラalert()
  // button.addEventListener("click", function() {
  //   alert("クリックされました");
  // });
  //
  button.addEventListener("click", alertClick);
};
function alertClick(event) {
  console.log(event)


  //2つ目のイベントハンドラconsole.log()
  // //<button>要素をクリックしたときに、Consoleにも”クリックされました”と出力するイベントリスナを登録
  // button.addEventListener("click", function() {
  //   console.log("クリックされました");
  // });
  //
  // button.onclick = function() {
  //   console.log("クリックされました");
  // };
};

window.onload = clickBtn;

//jQueryで記述
const parent = $("#parent");
console.log(parent)
//jQueryでイベントハンドラ登録
//$("#btn")で取得した<button>要素に、クリックイベントのイベントハンドラを設定しています。
$("#btn").click(function() {
  alert("クリックされました")
})

$(function(){
  $("h1").append("をはじめます");
});
// classの追加
$(function(){
  $("h1").addClass("background_pink");
});
// アニメーションを非表示→表示
$(function(){
  $("#btn").on("click", function() {
    $("p").show("500", "linear")
  });
});