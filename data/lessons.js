const AUDIO_NAMES = {
  '向老母參駕':'向老母參駕','向老母辭駕':'向老母辭駕','作揖':'作揖','跪':'跪','明明上帝':'明明上帝','五叩首':'五叩首',
  '一叩、再叩、三叩、四叩、五叩首':'一叩再叩三叩四叩五叩首','諸天神聖':'諸天神聖','三叩':'三叩','一叩、再叩、三叩':'一叩再叩三叩',
  '彌勒祖師':'彌勒祖師','南海古佛':'南海古佛','一叩':'一叩','活佛師尊':'活佛師尊','月慧菩薩':'月慧菩薩','師尊':'師尊','師母':'師母',
  '點傳師':'點傳師','引保師':'引保師','前人大眾':'前人大眾','一禮':'一禮','起':'起','老前人':'老前人','前人':'前人','求':'求','感謝':'感謝',
  '護路菩薩':'護路菩薩','保佑':'保佑','參駕禮畢鞠躬':'參駕禮畢鞠躬','辭駕禮畢鞠躬':'辭駕禮畢鞠躬','兩邊排班':'兩邊排班','對面作揖':'對面作揖','就拜位':'就拜位','前進就獻位':'前進就獻位',
  '後二位跪':'後二位跪','作揖，三叩首':'作揖，三叩首','獻':'獻','舉眉齊':'舉眉齊','雙手接':'雙手接','雙手奉行':'雙手奉行',
  '誠敬奉獻':'誠敬奉獻','上清下濁':'上清下濁','上首居中':'上首居中','下首居中':'下首居中','各歸拜位':'各歸拜位',
  '兩邊歸班':'兩邊歸班','獻供茶菓禮畢鞠躬':'獻供茶菓禮畢鞠躬','獻茶禮畢鞠躬':'獻茶禮畢鞠躬','三叩首':'三叩首','一叩、再叩、三叩首':'一叩再叩三叩首',
  '同作揖':'同作揖','鞠躬':'鞠躬','一叩首':'一叩首'
};

const PINYIN = {
  '向老母參駕':'Xiang Laomu Canjia','向老母辭駕':'Xiang Laomu Cijia','作揖':'Zuoyi','跪':'Gui','明明上帝':'Mingming Shangdi','五叩首':'Wu Koushou','三叩首':'San Koushou',
  '一叩、再叩、三叩、四叩、五叩首':'Yi Kou, Zai Kou, San Kou, Si Kou, Wu Koushou','諸天神聖':'Zhutian Shensheng','三叩':'San Kou',
  '一叩、再叩、三叩':'Yi Kou, Zai Kou, San Kou','一叩、再叩、三叩首':'Yi Kou, Zai Kou, San Koushou','彌勒祖師':'Mile Zushi','南海古佛':'Nanhai Gufo','一叩':'Yi Kou','活佛師尊':'Huifo Shizun',
  '月慧菩薩':'Yuehui Pusa','師尊':'Shizun','師母':'Shimu','點傳師':'Dianchuanshi','引保師':'Yinbaoshi','前人大眾':'Qianren Dazhong',
  '一禮':'Yi Li','起':'Qi','老前人':'Lao Qianren','前人':'Qianren','求':'Qiu','感謝':'Ganxie','護路菩薩':'Hulu Pusa','保佑':'Baoyou','參駕禮畢鞠躬':'Canjia Libi Jugong','辭駕禮畢鞠躬':'Cijia Libi Jugong',
  '兩邊排班':'Liangbian Paiban','對面作揖':'Duimian Zuoyi','就拜位':'Jiu Baiwei','前進就獻位':'Qianjin Jiu Xianwei','後二位跪':'Hou Erwei Gui',
  '作揖，三叩首':'Zuoyi, San Koushou','獻':'Xian','舉眉齊':'Jumeiqi','雙手接':'Shuangshou Jie','雙手奉行':'Shuangshou Fengxing',
  '誠敬奉獻':'Chengjing Fengxian','上清下濁':'Shang Qing Xia Zhuo','上首居中':'Shangshou Juzhong','下首居中':'Xiashou Juzhong',
  '各歸拜位':'Ge Gui Baiwei','兩邊歸班':'Liangbian Guiban','獻茶禮畢鞠躬':'Xiancha Libi Jugong',
  '同作揖':'Tong Zuoyi','鞠躬':'Jugong','一叩首':'Yi Koushou','獻供茶禮畢鞠躬':'Xiangong Cha Libi Jugong',
  '獻香全柱':'Xianxiang Quanzhu','全獻':'Quanxian','十叩首':'Shi Koushou',
  '一叩、再叩、三叩、四叩、五叩、六叩、七叩、八叩、九叩、十叩首':'Yi Kou, Zai Kou, San Kou, Si Kou, Wu Kou, Liu Kou, Qi Kou, Ba Kou, Jiu Kou, Shi Koushou',
  '天地君親師':'Tiandi Junqinshi','一叩、再叩、三叩、四叩、五叩':'Yi Kou, Zai Kou, San Kou, Si Kou, Wu Kou','五叩':'Wu Kou',
  '五教聖人':'Wujiao Shengren','各位法律主':'Gewei Falüzhu','長生大帝':'Changsheng Dadi',
  '灶君':'Zaojun','鎮殿元帥':'Zhendian Yuanshuai','鎮殿將軍':'Zhendian Jiangjun','教化菩薩':'Jiaohua Pusa','各位大仙':'Gewei Daxian',
  '道長':'Daozhang','自己祖先':'Ziji Zuxian','跪讀':'Guidu','愿懺文':'Yuan Chanwen',
  '餘蘊弟子':'Yuyun Dizi','餘蘊信士':'Yuyun Xinshi','餘蘊信女':'Yuyun Xinnü',
  '虔心跪在':'Qianxin Guizai','蓮下':'Lianxia','幸受真傳':'Xingshou Zhenchuan',
  '妙法無邊':'Miaofa Wubian','護庇眾生':'Hubi Zhongsheng','懺悔佛前':'Chanhui Foqian','改過自新':'Gaiguo Zixin','同註天盤':'Tongzhu Tianpan',
  '凡係佛堂':'Fanxi Fotang','顛倒錯亂':'Diandao Cuoluan','望祈祖師':'Wangqi Zushi','赦罪容寬':'Shezui Rongkuan',
  '南無阿彌':'Namo Ami','十佛天元':'Shi Fo Tianyuan','金公祖師':'Jingong Zushi','天然恩師':'Tianran Enshi',
  '慈母大人':'Cimu Daren','院長':'Yuanzhang','老母':'Laomu','大慈大悲':'Daci Dabei','無魔無考':'Wumo Wukao','免劫平安':'Mianjie Pingan',
  '百叩首':'Bai Koushou','一再三四五六七八九一':'Yi Zai San Si Wu Liu Qi Ba Jiu Yi',
  '一再三四五六七八九再':'Yi Zai San Si Wu Liu Qi Ba Jiu Zai','一再三四五六七八九三':'Yi Zai San Si Wu Liu Qi Ba Jiu San',
  '一再三四五六七八九四':'Yi Zai San Si Wu Liu Qi Ba Jiu Si','一再三四五六七八九五':'Yi Zai San Si Wu Liu Qi Ba Jiu Wu',
  '一再三四五六七八九六':'Yi Zai San Si Wu Liu Qi Ba Jiu Liu','一再三四五六七八九七':'Yi Zai San Si Wu Liu Qi Ba Jiu Qi',
  '一再三四五六七八九八':'Yi Zai San Si Wu Liu Qi Ba Jiu Ba','一再三四五六七八九九':'Yi Zai San Si Wu Liu Qi Ba Jiu Jiu',
  '一再三四五六七八九':'Yi Zai San Si Wu Liu Qi Ba Jiu','感恩':'Gan’en','成道理事':'Chengdao Lishi','成道點傳師':'Chengdao Dianchuanshi',
  '獻香禮畢鞠躬':'Xianxiang Libi Jugong'
};

const DESCRIPTIONS={
  '向老母參駕':'進入佛堂或開始禮節時，向老母參駕致敬。','向老母辭駕':'離開佛堂或結束禮節時，向老母辭駕告退。',
  '作揖':'雙手依禮作揖，表示恭敬。','同作揖':'上禮與下禮同時依禮作揖。','跪':'依禮跪下，準備進行後續叩首或獻供動作。','鞠躬':'依禮彎身鞠躬，表示恭敬。',
  '明明上帝':'禮節中稱頌明明上帝的聖號。','五叩首':'依禮完成五次叩首。','三叩首':'依禮完成三次叩首。','三叩':'依禮完成三叩。','一叩':'依禮完成一次叩首。','一叩首':'依禮完成一次叩首。',
  '一叩、再叩、三叩、四叩、五叩首':'依口令順序完成五次叩首；整句是一個按鈕。','一叩、再叩、三叩':'依口令順序完成三叩；整句是一個按鈕。','一叩、再叩、三叩首':'依口令完成三次叩首，第三次以「三叩首」收尾；整句是一個按鈕。','作揖，三叩首':'先作揖，再完成三叩首；整句是一個按鈕。',
  '諸天神聖':'向諸天神聖行禮致敬。','彌勒祖師':'向彌勒祖師行禮致敬。','南海古佛':'向南海古佛行禮致敬。','活佛師尊':'向活佛師尊行禮致敬。','月慧菩薩':'向月慧菩薩行禮致敬。','師尊':'向師尊行禮致敬。','師母':'向師母行禮致敬。','點傳師':'向點傳師行禮致敬。','引保師':'向引師、保師行禮致敬。','前人大眾':'向前人及在場大眾行禮致敬。','老前人':'向老前人行禮致敬。','前人':'向前人行禮致敬。',
  '一禮':'依禮行一次禮。','起':'依口令起身。','參駕禮畢鞠躬':'參駕禮完成後恭敬鞠躬。','辭駕禮畢鞠躬':'辭駕禮完成後恭敬鞠躬。','求':'恭敬祈求護路菩薩護佑。','感謝':'恭敬感謝護路菩薩一路護佑。','護路菩薩':'護佑行路者一路平安的神靈。','保佑':'祈求護佑、一路平安。',
  '兩邊排班':'參禮人員依規定在兩側排列就位。','對面作揖':'面向對面的人員，彼此依禮作揖。','就拜位':'進入指定的拜位站好。','前進就獻位':'向前行進，到指定的獻供位置就位。','後二位跪':'後方兩位人員依口令跪下。','各歸拜位':'各人返回原來的拜位。','兩邊歸班':'兩側人員返回原來的班位。',
  '獻':'開始進行獻供動作。','舉眉齊':'將供品恭敬舉至眉毛的高度。','雙手接':'以雙手恭敬接取供品。','雙手奉行':'以雙手恭敬捧著供品，依照禮節進行。','誠敬奉獻':'以真誠恭敬之心奉獻供品。','上清下濁':'上禮與下禮同時掀起杯蓋，使茶香向上飄揚，以達於天。','上首居中':'上禮將供品放置於供桌中央的位置。','下首居中':'下禮將供品放置於供桌中央的位置。',
  '獻茶禮畢鞠躬':'獻茶禮節完成後，由獻供人員依禮鞠躬。','獻供茶禮畢鞠躬':'獻供茶禮節完成後，由獻供人員依禮鞠躬。'
};

const ENGLISH_DESCRIPTIONS={
  "向老母參駕": "Pay respects to Laomu when entering the Fotang.",
  "向老母辭駕": "Bid farewell to Laomu respectfully when leaving the Fotang.",
  "作揖": "Perform the traditional hand salute to show respect.",
  "同作揖": "All offering participants perform the hand salute together.",
  "跪": "Kneel respectfully.",
  "鞠躬": "Bow respectfully from the waist.",
  "起": "Rise upon receiving the instruction.",
  "明明上帝": "Recite the sacred name of Mingming Shangdi during the ritual.",
  "諸天神聖": "Pay respects to all heavenly deities and saints.",
  "彌勒祖師": "Pay respects to Patriarch Maitreya.",
  "南海古佛": "Pay respects to Nanhai Gufo.",
  "活佛師尊": "Pay respects to Huifo Shizun.",
  "月慧菩薩": "Pay respects to Yuehui Pusa.",
  "師尊": "Pay respects to Shizun.",
  "師母": "Pay respects to Shimu.",
  "點傳師": "Pay respects to the Dianchuanshi.",
  "引保師": "Pay respects to the Sponsor and Guarantor.",
  "前人大眾": "Pay respects to elders and everyone present.",
  "老前人": "Pay respects to Lao Qianren.",
  "前人": "Pay respects to Qianren.",
  "一禮": "Perform one respectful bow.",
  "求": "Humbly pray for the protection of Hulu Pusa.",
  "感謝": "Humbly thank Hulu Pusa for protection throughout the journey.",
  "護路菩薩": "A divine being who protects travellers and keeps them safe throughout their journey.",
  "保佑": "Pray for protection and a safe journey.",
  "一叩": "Perform one prostration.",
  "一叩首": "Perform one prostration.",
  "三叩": "Perform three prostrations according to the ritual.",
  "三叩首": "Perform three prostrations according to the ritual.",
  "五叩首": "Perform five prostrations according to the ritual.",
  "一叩、再叩、三叩": "Follow the instructions and perform three prostrations in sequence.",
  "一叩、再叩、三叩首": "Follow the instructions and perform three prostrations in sequence, ending with “San Koushou.”",
  "一叩、再叩、三叩、四叩、五叩首": "Follow the instructions and perform five prostrations in sequence.",
  "作揖，三叩首": "First perform the traditional hand salute, then complete three prostrations.",
  "兩邊排班": "The participants line up in their assigned positions on both sides.",
  "對面作揖": "Face the participants opposite you and perform the traditional hand salute to each other.",
  "就拜位": "Proceed to the assigned worship position and stand in place.",
  "前進就獻位": "Move forward to the assigned offering position.",
  "後二位跪": "The two participants at the back kneel as instructed.",
  "獻": "Begin the offering action.",
  "舉眉齊": "Respectfully raise the offering to eyebrow level.",
  "雙手接": "Respectfully receive the offering with both hands.",
  "雙手奉行": "Respectfully hold the offering with both hands and proceed according to the ritual.",
  "誠敬奉獻": "Present the offering with sincerity and reverence.",
  "上清下濁": "The upper and lower ritual participants lift the cup lids together, allowing the aroma of the tea to rise toward Heaven.",
  "上首居中": "The upper ritual participant places the offering in the centre of the offering table.",
  "下首居中": "The lower ritual participant places the offering in the centre of the offering table.",
  "各歸拜位": "Each participant returns to their original worship position.",
  "兩邊歸班": "The participants on both sides return to their original positions.",
  "獻茶禮畢鞠躬": "After the tea-offering ritual is completed, the offering participants bow respectfully.",
  "獻供茶禮畢鞠躬": "After the offering ritual is completed, the offering participants bow respectfully."
};

const CELL_AUDIO={
  '作揖|跪':'cell-01-zuoyi-gui.mp3',
  '明明上帝|五叩首':'cell-02-mingming-shangdi-wu-koushou.mp3',
  '諸天神聖|三叩':'cell-03-zhutian-shensheng-san-kou.mp3',
  '彌勒祖師|三叩':'cell-04-mile-zushi-san-kou.mp3',
  '南海古佛|一叩':'cell-05-nanhai-gufo-yi-kou.mp3',
  '前人大眾|一禮':'cell-06-qianren-dazhong-yi-li.mp3',
  '老前人|五叩首':'cell-07-lao-qianren-wu-koushou.mp3',
  '前人|五叩首':'cell-08-qianren-wu-koushou.mp3',
  '感謝|護路菩薩|保佑|五叩首':'cell-09-ganxie-hulu-pusa-baoyou-wu-koushou.mp3',
  '求|護路菩薩|保佑|五叩首':'cell-10-qiu-hulu-pusa-baoyou-wu-koushou.mp3',
  '兩邊排班|對面作揖|就拜位':'cell-11-liangbian-paiban-duimian-zuoyi-jiu-baiwei.mp3',
  '作揖|跪|三叩首':'cell-12-zuoyi-gui-san-koushou.mp3',
  '起|作揖|前進就獻位':'cell-13-qi-zuoyi-qianjin-jiu-xianwei.mp3',
  '作揖|各歸拜位':'cell-14-zuoyi-ge-gui-baiwei.mp3',
  '同作揖|跪|三叩首':'cell-15-tong-zuoyi-gui-san-koushou.mp3',
  '起|作揖|兩邊歸班':'cell-16-qi-zuoyi-liangbian-guiban.mp3',
  '舉眉齊|雙手接':'cell-17-jumeiqi-shuangshou-jie.mp3',
  '起|作揖|各歸拜位':'cell-18-qi-zuoyi-ge-gui-baiwei.mp3'
};

const AUDIO_KEYS=Object.keys(AUDIO_NAMES);
const SPECIAL_AUDIO={
  '獻供茶禮畢鞠躬':'audio/replacements-v049/獻供茶禮畢鞠躬.mp3',
  '參駕禮畢鞠躬':'audio/replacements-v051/參駕禮畢鞠躬.mp3',
  '辭駕禮畢鞠躬':'audio/replacements-v051/辭駕禮畢鞠躬.mp3',
  '一叩、再叩、三叩、四叩、五叩':'audio/daily/1-5kou.mp3'
};
const P=(text,color='',english='',description='')=>{const i=AUDIO_KEYS.indexOf(text);return {text,color,english:english||ENGLISH_DESCRIPTIONS[text]||'',description:description||DESCRIPTIONS[text]||'',pinyin:PINYIN[text]||'',audio:SPECIAL_AUDIO[text]||(i>=0?'audio/recorded/a'+String(i+1).padStart(3,'0')+'.mp3':'')}};
const LESSONS={menu:[
  {id:'arrival',label:'1. 參駕、辭駕',labelEn:'1. Arrival and Farewell',ready:true},
  {id:'three',label:'2. 獻供三人式',labelEn:'2. Three-Person Offering',ready:true},
  {id:'five',label:'3. 獻供五人式',labelEn:'3. Five-Person Offering',ready:true},
  {id:'daily',label:'4. 平常日獻香',labelEn:'4. Daily Incense Offering',ready:true},
  {id:'newmoon',label:'5. 朔望日獻香',labelEn:'5. First and Fifteenth-Day Incense Offering',ready:false}
]};
function sequenceAudio(items){if(items.length<2)return '';const file=CELL_AUDIO[items.map(x=>x.text).join('|')];return file?'audio/cells/'+file:''}
function R(upper=[],lower=[],note='',options={}){return {block:options.block||'',blockCode:options.blockCode||'',row:{upper,lower,note,cellAudio:sequenceAudio(upper)}}}

function buildArrival(mode){
  const first=mode==='arrival'?P('向老母參駕','blue'):P('向老母辭駕','red');
  const last=mode==='arrival'?P('感謝','blue'):P('求','red');
  const five=P('一叩、再叩、三叩、四叩、五叩首'),fiveWithoutShou=P('一叩、再叩、三叩、四叩、五叩'),three=P('一叩、再叩、三叩');
  return [R([first]),R([P('作揖'),P('跪')]),
    R([P('明明上帝'),P('五叩首')],[fiveWithoutShou],'',{block:'block-blue',blockCode:'cc1'}),
    R([P('諸天神聖'),P('三叩')],[three],'',{block:'block-blue',blockCode:'cc1'}),
    R([P('彌勒祖師'),P('三叩')],[three],'',{block:'block-blue',blockCode:'cc1'}),
    R([P('南海古佛'),P('一叩')],[P('一叩')],'',{block:'block-blue',blockCode:'cc1'}),
    R([P('活佛師尊')],[P('一叩')],'',{block:'block-blue',blockCode:'cc1'}),R([P('月慧菩薩')],[P('一叩')],'',{block:'block-blue',blockCode:'cc1'}),
    R([P('師尊')],[P('一叩')],'',{block:'block-blue',blockCode:'cc1'}),R([P('師母')],[P('一叩')],'',{block:'block-blue',blockCode:'cc1'}),
    R([P('點傳師')],[P('一叩')],'',{block:'block-blue',blockCode:'cc1'}),R([P('引保師')],[P('一叩')],'',{block:'block-blue',blockCode:'cc1'}),
    R([P('前人大眾'),P('一禮')],[P('一禮')],'',{block:'block-blue',blockCode:'cc1'}),R([P('起')]),R([P('作揖'),P('跪')]),
    R([P('老前人'),P('五叩首')],[fiveWithoutShou],'',{block:'block-orange',blockCode:'cc2'}),R([P('前人'),P('五叩首')],[five],'',{block:'block-orange',blockCode:'cc2'}),
    R([P('起')]),R([P('作揖'),P('跪')]),R([last,P('護路菩薩'),P('保佑'),P('五叩首')],[five],'',{block:'block-red'}),
    R([P('起')]),R([P('作揖')]),R([mode==='arrival'?P('參駕禮畢鞠躬'):P('辭駕禮畢鞠躬')])];
}

function buildFive(mode){
  const a=[],three=P('一叩、再叩、三叩首');
  [[[P('兩邊排班'),P('對面作揖'),P('就拜位')],[],'' ],[[P('作揖'),P('跪'),P('三叩首')],[three],'' ],[[P('起'),P('作揖'),P('前進就獻位')],[],'' ],
    [[P('作揖')],[P('後二位跪')],'' ],[[P('作揖，三叩首')],[three],'' ],[[P('獻')],[],'端菓者前進'],[[P('跪')],[],'端菓者單膝下跪'],
    [[P('舉眉齊'),P('雙手接')],[],'後兩位接菓'],[[P('舉眉齊')],[P('作揖')],'上下禮作揖'],[[P('雙手奉行')],[],'上下禮接菓'],
    [[P('舉眉齊')],[P('一叩首')],'後兩位一叩首'],[[P('誠敬奉獻')],[P('上清下濁')],'']].forEach(x=>a.push(R(x[0],x[1],x[2],{block:'block-blue',blockCode:'xg1'})));
  if(mode==='offering')[[[P('作揖')],[P('一叩首')],''],[[P('獻')],[],'' ],[[P('跪')],[],'' ],[[P('舉眉齊'),P('雙手接')],[],'' ],
    [[P('舉眉齊')],[P('作揖')],'' ],[[P('雙手奉行')],[],'' ],[[P('舉眉齊')],[P('一叩首')],'' ],[[P('誠敬奉獻')],[P('上首居中'),P('下首居中')],'']]
    .forEach(x=>a.push(R(x[0],x[1],x[2],{block:'block-gray',blockCode:'xg2'})));
  const finalCode=mode==='tea'?'xc3':'xg3';
  [[[P('作揖，三叩首')],[three],''],[[P('起'),P('作揖'),P('各歸拜位')],[],'' ],[[P('同作揖'),P('跪'),P('三叩首')],[three],''],
    [[P('起'),P('作揖'),P('兩邊歸班')],[],'' ],[[P('對面作揖')],[],'' ],[[mode==='tea'?P('獻茶禮畢鞠躬','red'):P('獻供茶禮畢鞠躬')],[],'' ]]
    .forEach(x=>a.push(R(x[0],x[1],x[2],{block:'block-orange',blockCode:finalCode})));
  return a;
}

function buildThree(mode){
  const a=[],three=P('一叩、再叩、三叩首');
  [[[P('兩邊排班'),P('對面作揖'),P('就拜位')],[],'' ],[[P('作揖'),P('跪'),P('三叩首')],[three],'' ],[[P('起'),P('作揖'),P('前進就獻位')],[],'' ],
    [[P('作揖')],[],'' ],[[P('獻')],[],'端菓者前進'],[[P('跪')],[],'端菓者單膝下跪'],[[P('舉眉齊')],[P('作揖')],'上下禮作揖'],
    [[P('雙手奉行')],[],'上下禮接菓'],[[P('舉眉齊')],[P('鞠躬')],'' ],[[P('誠敬奉獻')],[P('上清下濁')],'']]
    .forEach(x=>a.push(R(x[0],x[1],x[2],{block:'block-blue',blockCode:'3pxg1'})));
  if(mode==='offering')[[[P('作揖')],[],'' ],[[P('獻')],[],'端菓者前進'],[[P('跪')],[],'端菓者單膝下跪'],[[P('舉眉齊')],[P('作揖')],'上下禮作揖'],
    [[P('雙手奉行')],[],'上下禮接菓'],[[P('舉眉齊')],[P('鞠躬')],'' ],[[P('誠敬奉獻')],[P('上首居中'),P('下首居中')],'']]
    .forEach(x=>a.push(R(x[0],x[1],x[2],{block:'block-gray',blockCode:'3pxg2'})));
  const finalCode=mode==='tea'?'3pxc3':'3pxg3';
  [[[P('作揖'),P('各歸拜位')],[],'' ],[[P('同作揖'),P('跪'),P('三叩首')],[three],'' ],[[P('起'),P('作揖'),P('兩邊歸班')],[],'' ],
    [[P('對面作揖')],[],'' ],[[mode==='tea'?P('獻茶禮畢鞠躬','red'):P('獻供茶禮畢鞠躬')],[],'' ]]
    .forEach(x=>a.push(R(x[0],x[1],x[2],{block:'block-orange',blockCode:finalCode})));
  return a;
}

const DAILY_AUDIO_FILES={
  '獻香全柱':'獻香全柱.mp3','全獻':'全獻.mp3','十叩首':'十叩首.mp3',
  '一叩、再叩、三叩、四叩、五叩、六叩、七叩、八叩、九叩、十叩首':'1-10koushou.mp3',
  '一叩、再叩、三叩、四叩、五叩':'1-5kou.mp3','五叩':'五叩.mp3',
  '天地君親師':'天地君親師.mp3','五教聖人':'五教聖人.mp3','各位法律主':'各位法律主.mp3','長生大帝':'長生大帝.mp3',
  '灶君':'灶君.mp3','鎮殿元帥':'鎮殿元帥.mp3','鎮殿將軍':'鎮殿將軍.mp3','教化菩薩':'教化菩薩.mp3','各位大仙':'各位大仙.mp3',
  '道長':'道長.mp3','自己祖先':'自己祖先.mp3','跪讀':'跪讀.mp3','愿懺文':'愿懺文.mp3',
  '餘蘊弟子':'餘蘊弟子.mp3','餘蘊信士':'餘蘊信士.mp3','餘蘊信女':'餘蘊信女.mp3',
  '虔心跪在':'虔心跪在.mp3','蓮下':'蓮下.mp3','幸受真傳':'幸受真傳.mp3',
  '妙法無邊':'妙法無邊.mp3','護庇眾生':'護庇眾生.mp3','懺悔佛前':'懺悔佛前.mp3','改過自新':'改過自新.mp3','同註天盤':'同註天盤.mp3',
  '凡係佛堂':'凡係佛堂.mp3','顛倒錯亂':'顛倒錯亂.mp3','望祈祖師':'望祈祖師.mp3','赦罪容寬':'赦罪容寬.mp3',
  '南無阿彌':'南無阿彌.mp3','十佛天元':'十佛天元.mp3','金公祖師':'金公祖師.mp3','天然恩師':'天然恩師.mp3',
  '慈母大人':'慈母大人.mp3','院長':'院長.mp3','大慈大悲':'大慈大悲.mp3','無魔無考':'無魔無考.mp3','免劫平安':'免劫平安.mp3',
  '百叩首':'百叩首.mp3','一再三四五六七八九一':'10-100.mp3','一再三四五六七八九再':'20-100.mp3',
  '一再三四五六七八九三':'30-100.mp3','一再三四五六七八九四':'40-100.mp3','一再三四五六七八九五':'50-100.mp3',
  '一再三四五六七八九六':'60-100.mp3','一再三四五六七八九七':'70-100.mp3','一再三四五六七八九八':'80-100.mp3',
  '一再三四五六七八九九':'90-100.mp3','一再三四五六七八九':'100-100.mp3',
  '感恩':'感恩.mp3','老母':'老母.mp3','成道理事':'成道理事.mp3','成道點傳師':'成道點傳師.mp3','獻香禮畢鞠躬':'獻香禮畢鞠躬.mp3'
};

function dailyPhrase(text){
  const common=P(text),file=DAILY_AUDIO_FILES[text];
  if(file) common.audio='audio/daily/'+file;
  return common;
}

function dailyStyle(row){
  if(row>=2&&row<=4)return 'daily-red';
  if(row>=7&&row<=15)return 'daily-yellow';
  if(row>=17&&row<=23)return 'daily-green';
  if(row>=25&&row<=29)return 'daily-sky';
  if(row>=33&&row<=35)return 'daily-sky';
  if(row>=38&&row<=40)return 'daily-purple';
  if(row>=43&&row<=44)return 'daily-pink';
  if(row>=50&&row<=53)return 'daily-salmon';
  if(row>=55&&row<=56)return 'daily-red';
  if(row>=58&&row<=67)return 'daily-blue';
  if(row>=70&&row<=73)return 'daily-yellow';
  return '';
}

function buildDaily(){
  const source=window.DAILY_INCENSE_RITUAL||[],segments=[
    [2,4,'dxx1'],[6,15,'dxx2'],[17,23,'dxx3'],[25,29,'dxx4'],[31,35,'dxx5'],[37,40,'dxx6'],
    [42,44,'dxx8'],[46,53,'dxx9'],[55,56,'dxx10'],[58,67,'dxx11'],[69,73,'dxx12']
  ];
  const rows=[];
  source.filter(x=>x.row>1&&x.type!=='block').forEach(x=>{
    const segment=segments.find(s=>x.row>=s[0]&&x.row<=s[1]);
    const upper=(x.upper||[]).map(dailyPhrase),lower=(x.lower||[]).map(dailyPhrase);
    const row={upper,lower,note:'',cellAudio:sequenceAudio(upper),styleClass:dailyStyle(x.row),cellPlayable:x.cellPlayable!==false,prompt:x.prompt||''};
    rows.push({block:segment?'daily-group':'',blockCode:segment?segment[2]:'',row});
  });
  return rows;
}
