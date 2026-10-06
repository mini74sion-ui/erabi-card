// サイトごとに変わる設定はここだけにまとめる
export const site = {
  name: 'えらびラボ カード',
  seal: '選',
  tagline: 'クレジットカードを、1年でいくら戻るかで比べるサイト',
  description:
    'クレジットカードの還元率・年会費・特典を、公式情報をもとに「1年間で実際に戻る金額」で比べる比較メディアです。計算ツールで、あなたの支払い先に合わせた還元額を確かめられます。',
  url: 'https://erabi-card.mini74sion.workers.dev',
  sister: { name: 'えらびラボ 通信費', url: 'https://erabi-tsushin.mini74sion.workers.dev' },
  simulator: 'card-reward' as const,
  hero: {
    title: 'そのカード、1年でいくら戻りますか',
    lead: '還元率の数字だけでは比べられません。どこで、いくら払い、年会費がいくらかかるか。支払い先ごとの明細にして、1年間で実際に戻る金額で比べます。',
  },
};
