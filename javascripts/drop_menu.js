// ドロップダウン処理を定義
function dropMenu() {
    const button = $("#drop_menu_btn");
    const menu = $("#drop_menu");
    button.click(function(){
      menu.toggle("500", "swing")
    });
  };
  // ドロップダウン処理を実行
  $(function() {
    dropMenu();
  })