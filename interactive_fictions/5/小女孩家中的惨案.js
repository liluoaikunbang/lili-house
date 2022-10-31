var storyContent = ﻿{"inkVersion":19,"root":[["^由童年阴影《小女孩家中的惨案》改编而成的互动小说。","\n","^主要改动：","\n","^1.将原游戏惨死的爸爸妈妈换成了被绑架的大姐（25岁）和二姐（24岁）；","\n","^2.将原游戏所有bad end换成了带有致命性紧缚的bad end；","\n","^3.将原游戏中的罪犯老头改成了一个年轻女孩的形象；","\n","^4.将原游戏最终向罪犯开枪的happy end换成了最终抓捕敌人的结局；","\n","^5.加入隐藏的“警惕”机制，并根据该机制，修改了达到happy end的条件。","\n","^说明：","\n","^这次尝试一种新的思路，在表达清楚意思的情况下尽量简化其他内容，删掉了对于璃落行为的多余描述和解释，将大部分文字用于kb部分，玩家的不同选择可以解锁不同的kb场景和结局。","\n","^背景：这一次，璃落将在游戏中扮演一个放学后从学校回家的18岁小女孩，除了这个女孩的性格和每天回家后的习惯外，其余信息一概没有给，需要璃落自己去探索。","\n","ev","str","^开始游戏","/str","/ev",{"*":"0.c-0","flg":4},{"c-0":["^ ",{"->":"start"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"start":[["^璃落放学后回到了家中，发现家里的大门竟然开着……","\n",["ev",{"^->":"start.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“姐姐又忘记锁门了……” ",{"->":"$r","var":true},null]}],["ev",{"^->":"start.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^“难道家里进小偷了？” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"start.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"not_vigilant1"},"\n",{"#f":5}],"c-1":["ev",{"^->":"start.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"vigilant1"},"\n",{"#f":5}]}],{"#f":1}],"vigilant1":["ev",1,"/ev",{"VAR=":"vigilant","re":true},{"->":"drawing_room"},{"#f":1}],"not_vigilant1":["ev",-1,"/ev",{"VAR=":"vigilant","re":true},{"->":"drawing_room"},{"#f":1}],"drawing_room":["^璃落来到了客厅。","\n","ev",{"VAR?":"vigilant"},0,">","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^打电话报警","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^打开收音机","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^走向其他房间","/str","/ev",{"*":".^.c-2","flg":4},{"->":".^.^.^.8"},{"c-0":["^ ",{"->":"end1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"radio"},"\n",{"#f":5}],"c-2":["^ ",{"->":"other_room"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"vigilant"},0,"<","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^坐上沙发","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^打开收音机","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^走向其他房间","/str","/ev",{"*":".^.c-2","flg":4},{"->":".^.^.^.16"},{"c-0":["^ ",{"->":"sofa"},"\n",{"#f":5}],"c-1":["^ ",{"->":"radio"},"\n",{"#f":5}],"c-2":["^ ",{"->":"other_room"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"sofa":[["^璃落坐在沙发上。","\n","ev","str","^有点困了","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^有点无聊","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^回退","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ",{"->":"sofa.sleepy"},"\n",{"#f":5}],"c-1":["^ ",{"->":"sofa.boring"},"\n",{"#f":5}],"c-2":["^ ",{"->":"drawing_room"},"\n",{"#f":5}]}],{"sleepy":["ev",{"CNT?":".^"},"/ev",{"VAR=":"end_conditions","re":true},"^璃落躺在沙发上，很快睡着了。","\n",{"->":"end1"},{"#f":1}],"boring":["ev",{"CNT?":".^"},"/ev",{"VAR=":"end_conditions","re":true},"^璃落打开了电视，随后被身后靠近的","ev",{"CNT?":"paper"},"/ev",[{"->":".^.b","c":true},{"b":["^女逃犯",{"->":".^.^.^.9"},null]}],"nop","ev",{"CNT?":"paper"},"!","/ev",[{"->":".^.b","c":true},{"b":["^陌生女人",{"->":".^.^.^.15"},null]}],"nop","^打晕。","\n",{"->":"end1"},{"#f":1}],"#f":1}],"radio":["^璃落打开了收音机。","\n","ev",{"VAR?":"vigilant"},0,">","/ev",[{"->":".^.b","c":true},{"b":["\n","^随后，听到脚步声的璃落躲到了窗帘后面。不久，声音远去，璃落走了出来。","\n","ev","str","^走向其他房间","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^打电话报警","/str","/ev",{"*":".^.c-1","flg":4},{"->":"radio.8"},{"c-0":["^ ",{"->":"other_room"},"\n",{"#f":5}],"c-1":["^ ",{"->":"radio.phone"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"VAR?":"vigilant"},0,"<","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"CNT?":"radio"},"/ev",{"VAR=":"end_conditions","re":true},"^随后被身后靠近的","ev",{"CNT?":"paper"},"/ev",[{"->":".^.b","c":true},{"b":["^女逃犯",{"->":".^.^.^.10"},null]}],"nop","ev",{"CNT?":"paper"},"!","/ev",[{"->":".^.b","c":true},{"b":["^陌生女人",{"->":".^.^.^.16"},null]}],"nop","^打晕。","\n",{"->":"end1"},{"->":"radio.16"},null]}],"nop","\n",{"phone":["^璃落按动拨号键，随后被赶来的","ev",{"CNT?":"paper"},"/ev",[{"->":".^.b","c":true},{"b":["^女逃犯",{"->":".^.^.^.5"},null]}],"nop","ev",{"CNT?":"paper"},"!","/ev",[{"->":".^.b","c":true},{"b":["^陌生女人",{"->":".^.^.^.11"},null]}],"nop","^打晕。","\n",{"->":"end2"},{"#f":1}],"#f":1}],"other_room":["^璃落来到走廊，向前向左向右都有房间。","\n","ev",{"CNT?":"washroom"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^向左走","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^向前走","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^回退","/str","/ev",{"*":".^.c-2","flg":4},{"->":".^.^.^.6"},{"c-0":["^ ",{"->":"corridor"},"\n",{"#f":5}],"c-1":["^ ",{"->":"kitchen"},"\n",{"#f":5}],"c-2":["^ ",{"->":"drawing_room"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"CNT?":"washroom"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","ev","str","^向右走","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^向左走","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^向前走","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^回退","/str","/ev",{"*":".^.c-3","flg":4},{"->":".^.^.^.13"},{"c-0":["^ ",{"->":"washroom"},"\n",{"#f":5}],"c-1":["^ ",{"->":"corridor"},"\n",{"#f":5}],"c-2":["^ ",{"->":"kitchen"},"\n",{"#f":5}],"c-3":["^ ",{"->":"drawing_room"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"washroom":[["^璃落来到了卫生间","\n","ev","str","^打开浴帘","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^回退","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"curtain"},"\n",{"#f":5}],"c-1":["^ ",{"->":"other_room"},"\n",{"#f":5}]}],{"#f":1}],"curtain":[["^璃落拉开浴帘，映入眼帘的却是面前浴缸中全身赤裸的一个年轻女孩，她是璃落的二姐，现在正在读大学，正好最近放假回家。璃落看到女孩被无数细铁链捆紧在浴缸中，双脚被锁链捆紧后锁在一个正在不断注水的水龙头上，浴缸中的水早已没过女孩的口鼻。","\n","ev",{"VAR?":"vigilant"},0,"<","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"CNT?":"curtain"},"/ev",{"VAR=":"end_conditions","re":true},"^毫无心理防备的璃落一下子叫出了声，随后被赶来的","ev",{"CNT?":"paper"},"/ev",[{"->":".^.b","c":true},{"b":["^女逃犯",{"->":".^.^.^.10"},null]}],"nop","ev",{"CNT?":"paper"},"!","/ev",[{"->":".^.b","c":true},{"b":["^陌生女人",{"->":".^.^.^.16"},null]}],"nop","^打晕。","\n",{"->":"end3"},{"->":".^.^.^.8"},null]}],"nop","\n","^看到已经窒息昏迷的女孩，璃落赶紧关掉水管，然后抱起女孩的身体让她离开水面，放掉了浴缸中的水。探了一下鼻息，璃落发现女孩还有微弱的呼吸，赶紧撕掉女孩嘴上沾着的粉色粘性胶带，随后从女孩的嘴里掏出了两双长筒袜。","\n","^“塞得这么满，怪不得之前一点声音也听不到……”虽然自己的小嘴也经常受到同样的待遇，看到从女孩不大的嘴里掏出两双吸满唾液充分胀大的长筒袜，璃落还是一阵惊讶——果然就像姐姐说的，女孩的嘴巴虽然看起来都不大，但是潜力可是非常大的。","\n","^像小仓鼠那样鼓鼓的两颊是璃雪最喜欢的萌点，所以姐姐在的时候也总是会用丝袜和胶带把璃落的小嘴这样封死起来，想到这里，璃落有些脸红，赶紧摇摇头将这种胡思乱想甩出脑海，继续给她解缚。","\n","^璃落首先想要解开女孩脚上的束缚，将她高高抬起的脚丫从水管上放下来，然而一把大大的挂锁马上便让璃落放弃了这个想法。","\n","^璃落有一种不好的预感，她翻动女孩的身体，拨开女孩被后密密麻麻将她双手紧缚在身后的锁链，果然在几个锁链连接的关键位置都挂着小锁。","\n","^“只能先委屈你一下了……”璃落叹了口气，这个女孩全身缠满锁链，她根本无从下手，只好先让她接着在这里休息一下了，好在璃落及时感到，至少保住了二姐的性命。","\n","^璃落正准备离开，余光突然瞥到了女孩身下压着的一把钥匙，璃落拿起钥匙跟女孩身上的十几把锁比对了一下，摇了摇头，收起钥匙站起身来。","\n","ev","str","^走出浴室","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"other_room"},"\n",{"#f":5}]}],{"#f":1}],"corridor":["ev",{"CNT?":"curtain"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^璃落来到一个走廊，向前向右都有房间。","\n","ev","str","^向前走","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^向右走","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^回退","/str","/ev",{"*":".^.c-2","flg":4},{"->":".^.^.^.4"},{"c-0":["^ ",{"->":"corridor.utility_room"},"\n",{"#f":5}],"c-1":["^ ",{"->":"bedroom"},"\n",{"#f":5}],"c-2":["^ ",{"->":"other_room"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"CNT?":"curtain"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","^房间的门锁了，璃落现在还没法进去。","\n","ev","str","^回退","/str","/ev",{"*":".^.c-0","flg":4},{"->":".^.^.^.11"},{"c-0":["^ ",{"->":"other_room"},"\n",{"#f":5}]}]}],"nop","\n",{"utility_room":["ev",{"CNT?":".^"},"/ev",{"VAR=":"end_conditions","re":true},"^璃落推开杂物间的门，随后被早已等候在此的","ev",{"CNT?":"paper"},"/ev",[{"->":".^.b","c":true},{"b":["^女逃犯",{"->":".^.^.^.9"},null]}],"nop","ev",{"CNT?":"paper"},"!","/ev",[{"->":".^.b","c":true},{"b":["^陌生女人",{"->":".^.^.^.15"},null]}],"nop","^打晕。","\n",{"->":"end3"},{"#f":1}],"#f":1}],"kitchen":[["^璃落来到了厨房。","\n","ev","str","^打开微波炉","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^阅读报纸","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^回退","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ",{"->":".^.^.^.microwave_oven"},"\n",{"#f":5}],"c-1":["^ ",{"->":"paper"},"\n",{"#f":5}],"c-2":["^ ",{"->":"other_room"},"\n",{"#f":5}]}],{"microwave_oven":["ev",{"CNT?":".^"},"/ev",{"VAR=":"end_conditions","re":true},"^璃落打开了微波炉，随后被赶来的","ev",{"CNT?":"paper"},"/ev",[{"->":".^.b","c":true},{"b":["^女逃犯",{"->":".^.^.^.9"},null]}],"nop","ev",{"CNT?":"paper"},"!","/ev",[{"->":".^.b","c":true},{"b":["^陌生女人",{"->":".^.^.^.15"},null]}],"nop","^打晕。","\n",{"->":"end2"},{"#f":1}],"#f":1}],"paper":[["^报纸上的新闻说本市有一名女性杀人犯最近刚刚越狱，请公民发现逃犯的踪迹后马上汇报。","\n","ev","str","^回退","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"kitchen"},"\n",{"#f":5}]}],{"#f":1}],"bedroom":["ev",{"CNT?":"radio"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^璃落走进卧室，看到床边正躺着一个被麻绳五花大绑，不断挣扎的女孩，这是璃落那个已经工作的大姐。女孩的嘴上也和浴室中的二姐一样沾着粘性胶带，无法发出声音，她一边“呜呜”地冲璃落叫着，一边用穿着肉色丝袜的脚丫从床底下踢出一个电棍。","\n","^璃落心领神会，赶紧抓起电棍，正好此时外面传来一阵急促的脚步声，璃落赶紧转过身朝向门口，如临大敌。","\n","^然而冲进门的不是璃落预想中的猥琐老男人，而是一个穿着黑色皮衣皮靴的年轻女孩。璃落定了定神，看着冲自己扑过来的女孩，瞅准机会将电棍顶了上去……","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"->":".^.^.^.4"},{"c-0":["^ ",{"->":"happy_end"},"\n",{"#f":5}]}]}],"nop","\n","ev",{"CNT?":"radio"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","^璃落走进卧室，马上便看到了床边趴着的被麻绳四马攒蹄捆成一团的大姐，赶紧上去帮忙解缚。女孩的双手背在身后，被紧紧的五花大绑起来，随后她穿着肉色丝袜的双脚也被麻绳交叉捆紧后跟手腕上的绳索连接起来，连接的绳索非常短，让女孩只有肚子能够着地，膝盖和肩膀全部悬空，这样的极限驷马姿势彻底剥夺了女孩移动的能力。","\n","^璃落尝试解缚时才发现绳索捆得非常紧，而且都打了好几个死结，女孩胳膊上被绳索缠绕过的地方已经开始发紫。绳结太紧了，仿佛这一次捆绑本就不打算再解开，璃落没有工具解不开绳索，只好说道：“大姐，绳子捆得太紧了，我解不开，我去找小刀帮你割开。”","\n","^“呜呜呜！！”女孩挣扎着摆脱了璃落，眼神盯着璃落身后，被胶带封死的小嘴不断地发出紧张的“呜呜”声。","\n","^“怎么了？”璃落很快反应过来女孩是让自己注意身后，她赶紧扭头看向门口，然而迎接她的却是一个陌生女人的手刀，璃落眼前一黑晕了过去……","\n",{"->":"end4"},{"->":".^.^.^.11"},null]}],"nop","\n",{"#f":1}],"end1":["^璃落缓缓睁开眼睛，熟悉的场景让她知道自己正趴在客厅里的沙发上，然而映入眼帘的却是一阵刺眼的火光。","\n","^“呜呜呜！！着火了？！”","\n","^璃落一下子清醒过来，客厅中不知道什么时候被人堆放了大量可燃物，现在燃烧的火焰已经彻底包围了她。璃落挣扎着想要起身逃离，然而她的手脚却牢牢地背在身后紧缚在一起无法动弹。","\n","^“呜呜~~”挣扎无用，璃落想要呼救，然而嘴里塞满了柔软的织物，外面也被胶带封死，璃落只能发出微弱的“呜呜”声，根本不可能将声音传到外面。","\n","^手脚被缚，无法呼救，身边还有随时可能燃烧到自己身边的火舌，璃落不得不强迫自己平静下来，现在只能依靠自己了。","\n","^璃落拼命挣扎起来，这才发现自己的双手已经被紧紧五花大绑在背后，粗糙的麻绳狠狠勒入璃落柔软的身体，让她的胳膊将绳子完全吃进肉中，双手丝毫动弹不得。而且璃落发现自己的双手已经开始失去知觉，看来她应该已经被绑在这里有一段时间了。","\n","^双手被吊在后心处动弹不得，手指虽然没有被束缚，然而有限的活动空间内找不到任何一个绳结，而且璃落的手指也已经几乎失去知觉，完全使不上力气。","\n","^上半身被五花大绑动弹不得，璃落不得不将注意力放在双腿，然而结果让她更加绝望——璃落那双穿着黑色中筒袜的双腿从大腿根部到脚掌被足足捆缚了8道绳索，紧密的捆缚将她肉肉的大腿绑成了一串糖葫芦，而小腿，脚踝，脚掌也无法逃脱麻绳的紧缚，就连袜子包裹的脚趾也被细绳强行将大脚趾捆了起来。璃落的双腿已经完全被捆成了一体，一点分开的机会都没有。","\n","^这还不算完，为了防止璃落逃跑，那个人还将璃落脚踝和手腕上的绳索用一根短绳链接起来，将她捆成了极限驷马的姿势趴在沙发上，丝毫动弹不得。","\n","^“呜呜！！”火势越来越近，浓烟已经让璃落无法呼吸，绝望的璃落只能选择了强制退出游戏。","\n","^“希望在被火焰吞噬之前，那个女孩已经被浓烟弄晕过去了吧。”离开之前，璃落在心里暗暗想到，那样至少不用承受太大的痛苦。","\n","end",{"#f":1}],"end2":[["^“呜呜！！”璃落缓缓睁开眼睛，然而四周一片黑暗，嘴里塞着的大号口球让她的下巴非常疼，也第一时间吸引了璃落的注意力。","\n","^璃落摇了摇头，然而口球两侧的皮带紧紧捆在璃落的后脑，让她只能咬着嘴里的口球说不出话来。璃落又想要用手拿出堵嘴，然而她的双手已经被五花大绑在背后，粗糙的麻绳狠狠勒入璃落柔软的身体，让她的胳膊将绳子完全吃进肉中，双手丝毫动弹不得。而且璃落发现自己的双手已经开始失去知觉，看来她应该已经被绑在这里有一段时间了。","\n","^双手被吊在后心处动弹不得，手指虽然没有被束缚，然而有限的活动空间内找不到任何一个绳结，而且璃落的手指也已经几乎失去知觉，完全使不上力气。","\n","^上半身被五花大绑动弹不得，璃落不得不将注意力放在双腿，然而结果让她更加绝望——璃落那双穿着黑色中筒袜的双腿从大腿根部到脚掌被足足捆缚了8道绳索，紧密的捆缚将她肉肉的大腿绑成了一串糖葫芦，而小腿，脚踝，脚掌也无法逃脱麻绳的紧缚，就连袜子包裹的脚趾也被细绳强行将大脚趾捆了起来。璃落的双腿已经完全被捆成了一体，一点分开的机会都没有。","\n","^而且，璃落感觉自己的双腿不仅被绳索紧缚，小腿以下似乎被死死地嵌入什么东西中，四号动弹不得。","\n","^“轰隆！”一声响雷的声音在璃落耳边炸起，伴随着突然的亮光，璃落终于看到了的状况——现在她被绑在了一个比她深得多的坑洞下，她的小腿以下不仅被绳捆索绑，还被已经凝固的水泥覆盖。","\n","^“呜呜！！”仅仅是双腿的束缚就让璃落陷入了绝望，这可是凝固的水泥，就算她的手脚自由也根本不可能离开这个大坑，更不用说现在她的双手被五花大绑，双脚也已经被并拢捆成了美人鱼尾巴，而且嘴里堵着那么大的口球，连呼救别人帮忙都变得不可能。","\n","^绝望的璃落发泄搬的拼命挣扎，然而不出所料，不管是身上打了无数死结，明显不打算再解开的绳索，还是脚下坚固的水泥束缚，都不是璃落这样一个普通的女孩可以撼动的。","\n","^然而璃落的境遇还没有达到最坏，豆大的雨点落在璃落不断挣扎的身体上时，璃落稍微愣了愣，继而更加拼命地扭动起来——这场雨显然很大，璃落感觉覆盖到自己小腿的水泥平面上已经开始积水，而且水位在以肉眼可见的速度上涨，再这样下去她很快就会被淹没……","\n","^虽然明知道自己已经不可能逃脱，跟放置在这里几天直到饿死相比，溺水恐怕已经是一种比较仁慈的方法了，然而求生的本能依然让女孩拼命挣扎，哪怕等待她的可能是更痛苦的折磨。","\n","^半个小时后……","\n","^璃落拼命仰着头，不知道是幸运还是不幸，水位刚刚好让璃落仰起头能勉强呼吸到空气，大雨已经停止，至少短时间内璃落已经没有了生命危险，虽然现在的状况依然绝望，她也不知道自己还能坚持多长时间，只能麻木的保持着这样一个别扭的姿势，奢望着奇迹的出现。","\n","^一个小时后……","\n","^似乎有脚步声传来，已经快要坚持不住的璃落终于看到了救命稻草，疯狂地叫喊着，希望那个人能来帮忙，果然，脚步声越来越近。璃落心里一下子有了希望，她靠在坑洞边缘，一边“呜呜”地向那个人求救，一边幻想着自己的新生活。","\n","^“不知道两位姐姐怎么样了……”想到其他两个女孩，璃落的心里一阵紧张，她的境况已经无比绝望，那两个女孩肯定也差不多，但是根据自己这里的情况来看，那个人肯定要让她们受尽折磨，也就是说她们虽然你处在危险中，但很可能还活着。","\n","^想到这里，璃落坚定了信念，自己出去后一定要赶紧报警，想办法救出两位姐姐。","\n","ev","str","^继续","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"continue1"},"\n",{"#f":5}]}],{"#f":1}],"continue1":["^“哗啦……”","\n","^湿润的土壤从璃落头顶落下，让璃落一下子愣住了，似乎不敢相信。","\n","^然而更多沙土裹挟着石块从上方落下，璃落如坠冰窖……","\n","^饥饿，溺水，绝望，这些都一一坚持下来了，然而璃落终究还是逃不出去……","\n","end",{"#f":1}],"end3":["^璃落缓缓睁开眼睛，然而刺眼的阳光让她又赶紧闭上了眼睛。","\n","^“呜呜！！”璃落的嘴里塞满了柔软的织物，外面也被胶带封死，她只能发出可爱的“呜呜”声，嘴里的异物一下子惊醒了璃落，她赶紧查看了一下自己的身体，果然已经被紧紧捆缚起来动弹不得。","\n","^璃落拼命挣扎，然而她的双手已经被紧紧五花大绑在背后，拇指粗的锁链狠狠勒入璃落柔软的身体，让她的胳膊将锁链完全吃进肉中，双手丝毫动弹不得。而且璃落发现自己的双手已经开始失去知觉，看来她应该已经被绑在这里有一段时间了。","\n","^双手被吊在后心处动弹不得，手指虽然没有被束缚，然而全身的锁链都被挂锁锁住，没有钥匙她根本没法解开，而且璃落的手指也已经几乎失去知觉，完全使不上力气。","\n","^上半身被五花大绑动弹不得，璃落不得不将注意力放在双腿，然而结果让她更加绝望——璃落那双穿着黑色中筒袜的双腿从大腿根部到脚掌被足足捆缚了8道锁链，紧密的捆缚将她肉肉的大腿绑成了一串糖葫芦，而小腿，脚踝，脚掌也无法逃脱锁链的紧缚，就连袜子包裹的脚趾也被细绳强行将大脚趾捆了起来。璃落的双腿已经完全被捆成了一体，一点分开的机会都没有。","\n","^而且璃落的脖子，胸部上下，腹部，大腿小腿脚踝等部位都用锁链和身后的一根铁柱捆绑在一起，让璃落只能背靠着身后的铁柱一点也动弹不了。","\n","^此时璃落也终于适应了刺眼的阳光，睁开眼看着自己周围，她现在被捆在一个山泉中的铁柱上，清凉的泉水刚好没过璃落的膝盖，与之相对的，璃落赤裸的上半身则被炎炎烈日炙烤。","\n","^“这是想把我做成烤肉干吗……”璃落拼命挣扎着，然而坚固的锁链根本不是她这样手无缚鸡之力的女孩可以撼动的。","\n","^一天后……","\n","^早已无力挣扎的璃落低着头，呆呆地望着脚下清澈的泉水，明明近在咫尺，身上坚固的束缚却让她完全没有办法喝到水。","\n","^又半天后……","\n","^“这就是那个人的目的吗？明明半身都浸泡在水中，却只能绝望地看着而喝不到，让我最终缺水而死？”璃落的思维已经几乎停滞，汗水已经流干，阳光的暴晒下璃落感觉自己正在逐渐失去意识。","\n","^这样也好，总算可以解脱了，就是有些对不起自己扮演的这个女孩，还有她的两个姐姐。这大概是璃落最后的想法了。","\n","end",{"#f":1}],"end4":["^璃落被一阵窒息的感觉弄醒，她睁开眼睛，试图摆脱让自己呼吸困难的东西，然而璃落随即感觉到头皮一阵疼痛，原来有两根绳索将她的双马尾辫绑在了她现在坐着的椅背上，让璃落只能保持着抬头后仰的姿势，一点也移动不了。","\n","^“呜呜！”又一滴水滴下来，正好滴在璃落被袜子堵死，还戴着几层口罩的嘴上，现在显然已经过了很久，口罩已经全部湿透了，让璃落感到一阵阵窒息。","\n","^璃落看着上方那个正在不断滴水的水管，虽然现在还能勉强呼吸，但是窒息的感觉显然不好受，璃落拼命挣扎着想要让自己离开那个水管，然而只是徒劳。","\n","^璃落的双手已经被紧紧五花大绑在背后，拇指粗的麻绳狠狠勒入璃落柔软的身体，让她的胳膊将绳子完全吃进肉中，双手丝毫动弹不得。而且璃落发现自己的双手已经开始失去知觉，看来她应该已经被绑在这里有一段时间了。","\n","^双手被吊在后心处动弹不得，手指虽然没有被束缚，然而全身的麻绳都在她手指无法够到的地方打着死结，而且璃落的手指也已经几乎失去知觉，完全使不上力气。","\n","^上半身被五花大绑动弹不得，璃落不得不将注意力放在双腿，然而结果让她更加绝望——璃落那双穿着黑色中筒袜的双腿从大腿根部到脚掌被足足捆缚了8道锁链，紧密的捆缚将她肉肉的大腿绑成了一串糖葫芦，而小腿，脚踝，脚掌也无法逃脱麻绳的紧缚，就连袜子包裹的脚趾也被细绳强行将大脚趾捆了起来。璃落的双腿已经完全被捆成了一体，一点分开的机会都没有。","\n","^而且璃落的脖子，胸部上下，腹部等部位都用麻绳和身后的椅子捆绑在一起，让璃落只能背靠着身后的椅子一点也动弹不了，被绳索并拢捆绑的脚踝也跟一面的椅子腿捆绑在一起，将璃落所有的自由全部剥夺。","\n","^一天后……","\n","^“呜呜！！”水滴不断滴下，时刻带给璃落窒息的痛苦，却又不让她失去意识，身上绝望的束缚又让璃落只能保持在这种痛苦的折磨下无法解脱。","\n","^又过了一天后……","\n","^实在忍受不了的璃落只能选择了强制退出游戏，当她大口呼吸着新鲜空气摘下头盔时，游戏界面显示出了女孩最后的结局……","\n","^直到三周后警察才在家中发现了女孩的尸体，经过检查发现女孩最后是因为没有食物而被饿死的，在这之前，她至少在窒息和饥饿的折磨中度过了一周……","\n","^想到自己刚刚经过两天就无法忍受，璃落不禁打了个寒颤……","\n","end",{"#f":1}],"happy_end":["^“大姐二姐，这家伙怎么处置呀？”璃落看着面前被自己电得不省人事的女孩，抬起头问道，此时她的两位姐姐已经都恢复了自由。","\n","^“既然你她是个通缉犯，那就把她捆紧了交给警察吧。”","\n","^“她可是差点杀了我！怎么能就这么放过她呢！”二姐不满地说道。","\n","^“那就把她交给你了。”大姐笑着说道，“我明天报警，今晚怎么玩随你，不过别让她发出太大声音。”","\n","^“嘿嘿~~姐姐最好了！”","\n","^因为后面的画面少儿不宜，璃落被大姐领着走出了房间，没有看到那个可恶的家伙会受到什么惩罚。","\n","^第二天警察过来时，璃落看到二姐牵着那个浑身赤裸的年轻女孩从房间里走了出来，路过璃落身边时，女孩身上嗡嗡的响声一下子让璃落羞红了脸，不过她还是抑制不住心中的好奇，一直盯着面前被紧缚的女孩。","\n","^只见面前的女孩穿着铁质的贞操带和铁质胸罩，从里面延伸出来的电线可以看出她的双乳和下体里面肯定都塞满了震动玩具，除此之外，女孩的手肘在背后被一个手铐锁在一起，双手又在身前被一个中间没有链条的土铐铐紧，几乎让她的上半身完全无法动弹。","\n","^再向下看，璃落发现女孩大腿根部的贞操带连接着并拢锁死的大腿环，膝盖上方也有着一个距离不到5厘米的膝铐，脚踝上同样锁着一个距离大概20厘米的脚铐，让这个女孩的步伐只能限制在一个脚掌左右。","\n","^二姐正在跟警察说明女孩身上的束缚，而这个女孩也只是安静地低着头呆在旁边，不敢挣扎也不敢出声，看来昨天晚上被调教地很惨……","\n","^“这些是她贞操带和手铐脚镣的钥匙，鉴于她有过越狱的前科，我建议这些束具就跟着她到服刑结束比较好。”二姐坏笑着介绍起来，“这个遥控器可以控制她上下三个震动玩具的强度，还附带了高潮封闭模式，如果她不听话可以用这种模式惩罚哦……”","\n","^看着旁边一动不敢动的女孩，虽然她的所作所为不值得同情，璃落还是默默在心中替她点了根蜡……","\n","^不过，看二姐对这些束具如数家珍的样子，肯定是对拘束和调教很在行，如果有机会的话……璃落赶紧低下头捂住脸颊，不让回头的二姐看到她羞红的脸颊……","\n","end",{"#f":1}],"global decl":["ev",-1,{"VAR=":"vigilant"},0,{"VAR=":"end_conditions"},"/ev","end",null],"#f":1}],"listDefs":{}};