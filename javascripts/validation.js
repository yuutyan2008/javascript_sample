// 課題
function emailValidation() {
  const email_confirm = document.getElementById("email_confirm");
  const email = document.getElementById("email");

    // 両方のフィールドが入力されていることを確認
    if (email.value === "" || email_confirm.value === "") {
      return; // どちらかが空なら、バリデーションを実行しない
    }

      // エラーメッセージ行が既に存在するかを確認
  const existingErrorRow = document.getElementById("errorRow");

  //確認フォームが入力フォームと一致しなければ,イベントを実施
  if (email_confirm.value !== email.value) {
    if (!existingErrorRow) { // エラーメッセージ行がまだ存在しない場合にのみ追加
        // 親の<tr>要素を取得し、その親要素をたどって<table>全体を取得
        const emailRow = email_confirm.closest("tr");  // email_confirmを囲んでいる<tr>要素を取得
        const tableBody = emailRow.parentNode; // parentNodeプロパティで、自動生成された<tbody>を取得
       // 新しい行を挿入してエラーメッセージを表示
       //email_confirmを囲んでいる<tr>要素の親の、自動生成された<tbody>に対して、emailRowの次に行を追加
      // rowIndexは、その行がテーブルの中で何番目にあるかを示す
       const newRow = tableBody.insertRow(emailRow.rowIndex + 1); // 
       //errorRowという名前は、「エラーメッセージを表示するための行」であることを示すために命名
       newRow.setAttribute("id", "errorRow"); //setAttributeは、指定された要素(newRow)に新しい属性(name=id,value=errorRow)を追加する 
        const newCell = newRow.insertCell(0);//insertCell() メソッドは、新しいセル (<td>) を表の行 (<tr>) に挿入

        newCell.setAttribute("colspan", "2");//setAttributeは、指定された要素(newCell)に対しcolspanを実施(2個のセルを連結)
        newCell.style.color = "#d14539";
        newCell.textContent = "Eメールが一致しません";
    
        // Eメール(確認)の背景色を赤にする
        email_confirm.style.backgroundColor = 'rgba(230,169,171,.5)'; 
    }

      } else {
        // エラーメッセージが表示されている場合は削除し、背景色をリセット
        const existingErrorRow = document.getElementById("errorRow");
        if (existingErrorRow) {
          existingErrorRow.remove();
        }
        email_confirm.style.backgroundColor = ""; // 背景色をリセットして元に戻す
      }
    }

  //inputイベントが発生したときにemailValidationという関数を実行する
  //ユーザーが入力を行うたびにリアルタイムでバリデーションが行われる
    document.getElementById("email_confirm").addEventListener("input", emailValidation);
    document.getElementById("email").addEventListener("input", emailValidation);

