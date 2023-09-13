
const prefecturalCapital = [
    {
      id: "01",
      question: "北海道の県庁所在地は？",
      answer01: "札幌",
      answer02: "福島",
      answer03: "前橋",
      answer04: "秋田",
    },
    {
      id: "02",
      question: "青森県の県庁所在地は？",
      answer01: "青森",
      answer02: "前橋",
      answer03: "秋田",
      answer04: "札幌",
    },
    {
      id: "03",
      question: "岩手県の県庁所在地は？",
      answer01: "盛岡",
      answer02: "福島",
      answer03: "仙台",
      answer04: "山形",
    },
    {
      id: "04",
      question: "宮城県の県庁所在地は？",
      answer01: "仙台",
      answer02: "札幌",
      answer03: "前橋",
      answer04: "水戸",
    },
    {
      id: "05",
      question: "秋田県の県庁所在地は？",
      answer01: "秋田",
      answer02: "盛岡",
      answer03: "青森",
      answer04: "札幌",
    },
  ];

(function ($) {
  'use strict';

  //合計問題数
  let $questionTotalNum = 5;

  const prefecturalCapital = [
    //配列の中身は先ほど紹介したものと同じなので省略
  ];

  //現在の質問数
  let $currentNum = 0

  //得点
  let $pointPerCorrect = 10;

  let questionObject = (function () {
    let Obj = function ($target) {

      //質問の番号
      this.$questionNumber = $target.find('.quiz-question-number');

      //質問文
      this.$questionName = $target.find('.quiz-question');

      //選択肢ボタン
      this.$questionButton = $target.find('.quiz-button');
      this.$button01 = $target.find('.button01');
      this.$button02 = $target.find('.button02');
      this.$button03 = $target.find('.button03');
      this.$button04 = $target.find('.button04');

      //選択肢のテキスト
      this.$answer01 = $target.find('.quiz-text01');
      this.$answer02 = $target.find('.quiz-text02');
      this.$answer03 = $target.find('.quiz-text03');
      this.$answer04 = $target.find('.quiz-text04');

      this.init();
    };
    Obj.prototype = {
      //初回設定
      init: function () {
        //イベント登録
        this.event();
      },
      event: function () {
          //ここにやりたいことを書く
          return false;
        });
      },
    };
    return Obj;
  })();

  let quiz = $('.quiz');
  if (quiz[0]) {
    let queInstance = new questionObject(quiz);
  }
})(jQuery);
// JavaScript Document