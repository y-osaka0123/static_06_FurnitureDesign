$(function(){
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.toggle_btn').on('click', function() {
    // #headerにopenクラスが存在する場合
    if ($('#header').hasClass('open')) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
      $('#header').removeClass('open');

    // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      $('#header').addClass('open');
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('#mask').on('click', function() {
    // openクラスを削除して、メニューを閉じる
    $('#header').removeClass('open');
  });
});


// 最初は非表示
// ハンバーガーメニュー「#navi」には、「opacity: 0;」が設定されているので、最初は非表示の状態です。
// メニューをクリック（メニューを開く）
// ハンバーガーメニューをクリックすると、main.jsの以下イベントが動作します。
// $('.toggle_btn').on('click', function() {
// headerタグにopenクラスを追加
// イベントが動作すると、はじめはheaderタグにopenクラスが存在しないので、 イベントの中の「$('#header').addClass('open');」が実行され、headerタグにopenクラスが追加されます。
// openクラスのCSSが認識されメニューが表示される
// headerタグにopenクラスが追加されると、openクラスのCSS「.open #navi」が認識されるので、 メニューが表示されるようになります。（「.open #navi」には、「opacity: 1;」が設定されているため）
// もう一度メニューをクリック（メニューを閉じる）
// この状態で、もう一度ハンバーガーメニューをクリックすると、 今度はすでにheaderタグの中にopenクラスが存在しているので 「$('#header').removeClass('open');」が実行され、headerタグからopenクラスが削除されます。
// openクラスのCSSが認識されなくなりメニューが非表示になる
// headerタグからopenクラスが削除されると、openクラスのCSS「.open #navi」が認識されなくなるので、 メニューが非表示になります。