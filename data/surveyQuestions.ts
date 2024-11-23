export interface Option {
  id: string;
  text: string;
  value: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export const surveyQuestions: Question[] = [
  {
    id: 1,
    question: "森の中で光る石を見つけました。どうしますか？",
    options: [
      { id: "1a", text: "すぐに拾って持ち帰る", value: "immediate_action" },
      {
        id: "1b",
        text: "しばらく観察してから判断する",
        value: "careful_observation",
      },
      { id: "1c", text: "そっとその場を離れる", value: "risk_averse" },
      { id: "1d", text: "誰かに相談してから決める", value: "seek_advice" },
    ],
  },
  {
    id: 2,
    question:
      "魔法の泉があります。一度飲むと何かが変化するそうです。飲みますか？",
    options: [
      { id: "2a", text: "迷わず飲んでみる", value: "adventurous" },
      { id: "2b", text: "効果を調べてから決める", value: "analytical" },
      { id: "2c", text: "他の人の経験を待つ", value: "cautious" },
      { id: "2d", text: "飲まないことにする", value: "conservative" },
    ],
  },
  {
    id: 3,
    question: "永遠の若さか、無限の知恵か、選べるとしたら？",
    options: [
      { id: "3a", text: "永遠の若さ", value: "experience_focused" },
      { id: "3b", text: "無限の知恵", value: "growth_focused" },
      { id: "3c", text: "しばらく考えてから決めたい", value: "contemplative" },
      { id: "3d", text: "どちらも選ばない", value: "content_present" },
    ],
  },
  {
    id: 4,
    question:
      "雲の上に浮かぶ城があります。入場料は高額ですが、一生忘れられない体験ができるそうです。行きますか？",
    options: [
      { id: "4a", text: "迷わず行く", value: "value_oriented" },
      { id: "4b", text: "料金を確認してから決める", value: "price_conscious" },
      { id: "4c", text: "他の体験と比較検討する", value: "comparative" },
      { id: "4d", text: "行かない", value: "practical" },
    ],
  },
  {
    id: 5,
    question:
      "不思議な樹があなたに問いかけます。「幸せな記憶と、辛い記憶。どちらを消しましょうか？」",
    options: [
      { id: "5a", text: "幸せな記憶を消す", value: "growth_through_pain" },
      { id: "5b", text: "辛い記憶を消す", value: "comfort_seeking" },
      { id: "5c", text: "どちらも消さない", value: "experience_embracing" },
      { id: "5d", text: "もう少し考えたい", value: "deliberative" },
    ],
  },
];
