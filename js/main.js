$(function(){
  // ハンバーガーメニュー
  // クリックイベント
  $('.toggle_btn').on('click', function() {
    // #haeder に open クラスがある場合
    if ($('#header').hasClass('open')) {
      // open クラスを削除　メニューが非表示
      $('#header').removeClass('open');
    } else {
    // #header に open が無い場合、 openクラスを追加
    $('#header').addClass('open');
    }
  });

  // メニュー表示時に画面をクリックしたら、メニューを閉じる
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
});