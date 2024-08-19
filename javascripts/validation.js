window.onload = function() {
    // document.formsでHTMLの中のform要素が HTMLCollectionオブジェクト として取得できる
    // HTMLCollectionオブジェクトの特徴であるhtml要素(form)の取得が可能
    const forms = document.forms;
    // elementsプロパティを参照することで、フォームの中の<input>タグや<textarea>タグの要素などを取得することができます。
    console.log(forms[0].elements);
  };
  // 送信ボタンをクリックした時のイベントハンドラ
  function confirmSubmit() {
    const forms = document.forms;
    forms[0].onsubmit = function(){
      const name = forms[0].name.value; // お名前欄の内容を取得してname変数に格納する処理
      // confirm()メソッドは「OK」ボタンをクリックした時はtrueが、「キャンセル」ボタンをクリックした時はfalseが返る
      if (!(confirm("${name}さん、本当に送信しますか？"))) {
        alert("キャンセルされました");
        return false;
      }
    };
  };
  
  window.onload = confirmSubmit;

  function emailValidation() {
    const form = document.getElementById("form");  //getElementById()メソッドを使用し、formオブジェクトを取得
    form.onsubmit = function() { //onsubmitを使用して、送信ボタンクリック時のイベントを登録
      //formから<input>タグのname="email" name="email_confirm"で<input>要素を取得
      //form.email.valueとすることで<input>要素のvalue属性を取得することができます
      if(form.email.value !== form.email_confirm.value) { 
        const element = document.createElement("p") //createElement()メソッドで<p>要素を作成
        const message = document.createTextNode("Eメールが一致しません") //createTextNode()メソッドでテキストノードを作成し、
        element.appendChild(message); //appendChild()メソッドで<p>要素に追加
        form.appendChild(element); //appendChild()メソッドで、<form>要素に<p>要素を追加
        element.classList.add("alert"); //エラーメッセージの要素を挿入した際に、alertclassを追加をする処理を追加
        // return false;  //submitの処理をキャンセルしています
        setTimeout(() => {
          form.removeChild(element)
        }, 3000)
      } else {
        form.submit();
      }
    };
      }

  
  window.onload = emailValidation;
  