dictwords = ["longest 0 40 224 1 40 192",
	"substring 0 40 224 1 40 192",
	"without 0 40 224",
	"repeating 0 40 224",
	"characters 0 40 224",
	"click 0 10 64 1 10 64 2 10 16 3 10 64",
	"display 0 10 64 1 10 64 2 10 16 3 10 64",
	"table 0 10 64 1 10 64 2 10 16 3 10 64",
	"contents 0 10 64 1 10 64 2 10 16 3 10 64",
	"navigation 0 10 64 1 10 64 2 10 8 3 10 64",
	"introduction 0 16 192 1 16 192 2 28 148 3 16 192",
	"brute 0 17 96",
	"force 0 17 96",
	"最简单最暴力的解法就是用两重循环 0 15 96",
	"外层循环逐个遍历字符串数组的每个元素 0 15 96",
	"然后再用内层循环向后探索寻找无重复字符的子串 0 15 96",
	"这种做法的时间复杂度为o 0 15 96",
	"此处使用容器vector来保存找到的不重复字符 0 10 32",
	"c++ 0 18 40 1 10 8 3 10 16",
	"code 0 40 56 1 10 8 3 10 16",
	"class 0 18 40 1 10 8 3 10 16",
	"solution 0 18 40 1 10 8 3 10 16",
	"public 0 18 40 1 10 8 3 10 16",
	"int 0 89 56 1 60 8 3 60 24",
	"lengthoflongestsubstring 0 18 40",
	"string 0 18 40",
	"max_len 0 60 40",
	"for 0 18 40",
	"s.length 0 26 40",
	"vector 0 10 32 1 33 8 3 33 24",
	"vec 0 10 32",
	"while 0 10 32",
	"find 0 10 32",
	"vec.begin 0 10 32",
	"vec.end 0 18 32",
	"vec.push_back 0 10 32",
	"max 0 33 40",
	"vec.size 0 10 32",
	"return 0 18 40 1 66 12 3 66 24",
	"优化算法 0 12 32",
	"在求最长的无重复字母的子串过程中自然是希望在一次数组的遍历之后就可以得到答案也就是希望时间复杂度为o 0 10 32",
	"这样的要求就需要作为路径记录的容器能够记录更多的信息 0 10 32",
	"在下图的示例中我们使用了hashmap 0 10 32",
	"存放的键值对是字符本身和字符在字符串中出现的位置 0 10 32",
	"那么当重复字符出现的时候map能明确的给出重复字符第一次的出现位置 0 10 16",
	"我们要求的不重复子串的长度就可以通过重复字符当前下标减去重复字符前一次下标求得 0 10 16",
	"所以你肯定期待以下的代码 0 10 16",
	"hashmap.find 0 26 24",
	"hashmap.end 0 26 24",
	"len 0 33 24 1 40 12 3 40 8",
	"hashmap 0 60 24",
	"那这就是最后的解答吗 0 10 16",
	"考虑这样一个问题 0 10 16",
	"如果输入字符串本身就没有重复字符 0 10 16",
	"那如何相减 0 10 16",
	"e这样的字符串 0 10 16",
	"你会发现根本没有机会执行长度的计算 0 10 16",
	"那如果要将两个情况合并的话 0 10 16",
	"只能采用以下的方式 0 10 16",
	"这种方式的目的是为了适应没有重复元素的情况下的长度计算 0 10 16",
	"所以在每一个点都要计算一次该点到某个起点的距离 0 10 16",
	"没有重复的情况下该起点就是第一个字符的下标位置 0 10 16",
	"如果重复的话就是重复字符第一次出现位置 0 10 16",
	"为什么 0 10 16",
	"1是为了保证这个点是指向一个新的无重复字符串的起始位置 0 10 16",
	"所以这个地方val的含义已经很明确了 0 10 16",
	"就是一个无重复字符串子串的首字符下标 0 10 16",
	"val 0 40 24",
	"以上的解答还有一个方面没有考虑到 0 10 16",
	"如下图所示当访问到第二个a的时候按照上面的算法val的值将被更新成0 0 10 16",
	"这直接导致计算出的长度值变为3 0 10 16",
	"仔细分析原因就会发现在更新ⅴal值的时候发生了回退 0 10 16",
	"也就是说新的ⅴal的值比原来的值还小 0 10 16",
	"这是导致错误的根源 0 10 16",
	"要避免这样的问题其实很简单只需要在更改val的值的时候确认不会回退 0 10 16",
	"map 0 10 8",
	"char 0 10 8",
	"start 0 33 8",
	"此处使用容.. 0 6 64",
	"longest-substring-without-r.html 0 6 64",
	"palindromic 1 40 192",
	"manacher算法 1 17 64",
	"最自然的解法就是以一个字符为中点依次左右展开对比 1 15 64",
	"但是这样的做法面临奇数偶数的问题 1 15 64",
	"也就是回文串存在以下的两种形式 1 15 64",
	"在这种情况下面临着使用两套算法来判断的向题 1 15 64",
	"极大的增加了解答问题的难度那么此处使用一种更灵巧的方法.在每个字符之间增加一个分割符 1 10 64",
	"需要将输入的字符串用特殊字符分割.但是分割的形式如何 1 10 64",
	"出现在新字符串的首尾吗 1 10 64",
	"还是说仅仅起到字符串中间的分割功能 1 10 64",
	"先讨论第一种情况 1 10 32",
	"在这种情况下如何判断回文 1 10 32",
	"从左向右逐个遍历在遍历过程中左右对比的方式寻找最长回文串 1 10 32",
	"在这种处理方式中最重要的就是将带 1 10 32",
	"的字符串映射回以前的字符串 1 10 32",
	"以字符串bcadacdegh为例 1 10 32",
	"由图中的颜色区分可以得知.每一个井的下标除以2就可以得到其后的字符在源串中的位置 1 10 32",
	"所以可以得到公式 1 10 32",
	"有了以上的基础之后 1 10 32",
	"便有了manacher&#39;s算法 1 10 32",
	"上一个算法最没有效率的地方就是没有选择的在每一个点进行了展开 1 10 32",
	"如下图所示其中对红色标注的点并没有太多展开的必要 1 10 32",
	"那么我们是否有办法可以跳过这些点的展开呢 1 10 32",
	"是的manacher算法通过mirroring中的镜像特征可以预知中心点之后的点的p数组的值情况 1 10 32",
	"从而可以跳过一些不可能的中心点 1 10 32",
	"该算法的第一步自然还是用 1 10 32",
	"来分割字符串以排除字符串的奇偶问题 1 10 32",
	"这个算法的另外一个重要特性就是mirroring 1 10 32",
	"我们可以定义一个非常重要的整形数组p用来存放以每个字符为中心的回文串的长度 1 10 32",
	"这个数组的重要性在于它可以帮助我们跳过一些不必要的点 1 10 32",
	"而直奔最有可能成为最长回文串的下一个中心点 1 10 32",
	"我们注意第一个b对应的值在p中是3如果从b这个点向左向右展开的话 1 10 32",
	"所谓的展开就是指以b为中心出发向左向右去寻找回文串 1 10 32",
	"可以得到回文串 1 10 32",
	"如果仔细观察我们会发现b左边和右边的字符串相互之间互成镜像关系 1 10 32",
	"这就给了我们一些灵感 1 10 32",
	"这就是这个算法所利用的重要原理 1 10 32",
	"之前的展开算法使用穷举式的对比方法其时间复杂度很明显是o 1 10 32",
	"的而manacher算法可以将时间复杂度降低到o 1 10 32",
	"而它的核心思想就是要减少对center点的展开 1 10 32",
	"也就是想办法在遍历各点的过程中跳过一些点 1 10 32",
	"避免将其做为center点展开 1 10 32",
	"那么如何选择这些center点 1 10 32",
	"这些点必须是很有可能成为下一个最长回文串的点 1 10 32",
	"如何判断有这样细潜力点呢 1 10 32",
	"这个口诀便是 1 10 32",
	"寻找这样的一个中心点 1 10 32",
	"使以它为中心的回文串扩充到刚刚访问过的中心点的右边界 1 10 32",
	"举例如下 1 10 32",
	"从中查找最长的回文子串 1 10 32",
	"这里面的回文子串包含中心点1 1 10 32",
	"aba 1 10 32",
	"中心点3 1 10 32",
	"abaxaba 1 10 32",
	"中心点5 1 10 32",
	"baxabaxab 1 10 32",
	"中心点7 1 10 32",
	"baxab 1 10 32",
	"那么现在按照新的算法进行推导 1 10 32",
	"前四个点同样的是按照前面的穷举算法进行推导到中心点3也就是x 1 10 32",
	"的时候 1 10 32",
	"我们已经访问了0 1 10 32",
	"6的字符区间 1 10 32",
	"哪个点成为下一个中心点呢 1 10 32",
	"如果这样做那么就失去了以b5为中心的回文串 1 10 32",
	"那我们是否又应该直接查找a 1 10 32",
	"当然我们可以这样做 1 10 32",
	"但这样就回到了穷举算法 1 10 32",
	"说好的不一样呢 1 10 32",
	"那到底谁是下一个中心点呢 1 10 32",
	"按照前面的口诀观察a 1 10 32",
	"发现它并没有扩展到以x 1 10 32",
	"为中心的回文串的右边界a 1 18 48",
	"所以a 1 18 32",
	"不可能成为下一个中心 1 10 32",
	"原因是以a 1 10 32",
	"为中心的回文串必然包含在以x 1 10 32",
	"为中心的回文串之中 1 10 32",
	"必然得不到比x 1 10 32",
	"更长的回文串 1 10 32",
	"那么b 1 10 32",
	"又如何呢 1 10 32",
	"为中心的回文串的确可以的确可以扩展到以x 1 10 32",
	"所以b 1 18 16",
	"很有潜力 1 10 16",
	"可以做为下一个中心点的候选 1 10 16",
	"本身呢 1 10 16",
	"同理a 1 10 16",
	"也是x 1 10 16",
	"的右边界所以a 1 10 16",
	"本身也是下一个中心点的候选 1 10 16",
	"但是b 1 10 16",
	"更有可能成为下一个候选 1 10 16",
	"因为子回文串扩充到至少是x 1 10 16",
	"的右边界 1 10 16",
	"那么就有很大可能继续扩充 1 10 16",
	"突破右边界的a 1 10 16",
	"方面的字符串内容还没有访问 1 10 16",
	"所以这句话很容易理解 1 10 16",
	"就自然是下一个选择 1 10 16",
	"解释到这理就自然产生一个疑问 1 10 16",
	"你是如何知道a 1 10 16",
	"到底能不能扩展到x 1 10 16",
	"为中心的回文串的右边界的 1 10 16",
	"我们刚刚还说过不能分别去扩展a 1 10 16",
	"到这理就该讲解manacher算法的核心理念mirroring 1 10 16",
	"因为在已知是回文串的时候 1 10 16",
	"中心点两边的项是相互对应的 1 10 16",
	"也就是说其p数组的值是相互对应的 1 10 16",
	"有了这个特性我们就可以预先得知右边项的p数组值的一些特征 1 10 16",
	"而这些特征可以很好的帮助我们为选取下一个中心点做出决策 1 10 16",
	"为了说明这个问题我们重新看一个例子 1 10 16",
	"有以下的字符串以及其对应的p数组 1 10 16",
	"如果我们以b 1 10 16",
	"为中心折叠的话 1 10 16",
	"我们可以发现其实a 1 10 16",
	"的p数组的值其实和左边的值是一样的 1 10 16",
	"也就是说以中心点为轴左右两部分的p数组值也是对称的 1 10 16",
	"这也是mirroring 1 10 16",
	"的一个理论基础 1 10 16",
	"但这不是全部而只是一个开始 1 10 16",
	"上面的例子没有考虑左右两边的还可能有其它字符的情况 1 10 16",
	"那现在我们来假设左右都可以扩展的情况 1 10 16",
	"若右边是可以括展的 1 10 16",
	"所以在扩展计算以后可以知道右边p数组的值可能比其左边的相对项的p数组的值大 1 10 16",
	"但其值可以确认至少与左边的相对项的值相等 1 10 16",
	"实际是多少还需要展开后才能知道 1 10 16",
	"若左边是可以扩展的 1 10 16",
	"扩展左边可以得到p数组的值 1 10 16",
	"但对于右边的相对项而言 1 10 16",
	"这个值是不真实的 1 10 16",
	"右边项的值其实还是扩展到右边界的值 1 10 16",
	"由上面的左右扩展情况其实我们可以得到一个估算p数组值的规律 1 10 16",
	"如果p 1 18 16",
	"b-mirror 1 33 16",
	"跨越了l边界那么p 1 10 16",
	"的值就不能由p 1 10 16",
	"的值来决定此时的公式应该是p 1 10 16",
	"r-b 1 10 16",
	"index 1 10 16",
	"在l边界之内 1 10 16",
	"那么p 1 10 16",
	"由此我们得到选取下一个中心点的 1 10 16",
	"4个原则 1 10 16",
	"一选择三拒绝 1 10 16",
	"一个选择 1 10 16",
	"palindrome 1 40 16",
	"expands 1 33 16",
	"till 1 26 16",
	"right 1 18 16",
	"edge 1 26 24",
	"its 1 18 16",
	"mirror 1 18 16",
	"prefix 1 10 16",
	"prefix的意思 1 10 16",
	"就是指p 1 10 16",
	"mⅰrror 1 10 16",
	"的值正好到l边界 1 10 16",
	"没有超出l边界 1 10 16",
	"三放弃 1 10 16",
	"totally 1 10 16",
	"contained 1 10 16",
	"under 1 10 16",
	"current 1 26 16",
	"end 1 10 16",
	"input 1 10 16",
	"beyond 1 10 8",
	"left 1 10 8",
	"这一点特别的重要 1 10 8",
	"仔细想想可以明白 1 10 8",
	"不选择这点的原因就是r边界后面的点必然不能与前面的点形成回文 1 10 8",
	"如果形成了那意味着其实r边界应该继续向右扩充 1 10 8",
	"这与已知的事实冲突 1 10 8",
	"典型的反证思路 1 10 8",
	"那么最后我们从头到尾用一个例子来说明该算法 1 10 8",
	"前4项我们都需要进行无选择的展开 1 10 8",
	"之后的逻辑按照下面推进 1 10 8",
	"double 1 18 8 3 18 24",
	"findkth 1 60 12 3 60 24",
	"nums1 1 84 12 3 84 24",
	"num1_pos 1 72 8 3 72 24",
	"nums2 1 84 12 3 84 24",
	"num2_pos 1 72 8 3 72 24",
	"nums1.size 1 26 8 3 26 24",
	"nums2.size 1 26 8 3 26 24",
	"min 1 10 8 3 10 16",
	"else 1 18 12 3 18 8",
	"findmediansortedarrays 1 10 8 3 10 8",
	"2.0 1 10 4 3 10 8",
	"动态规划 1 12 4",
	"动态规划就是将复杂的问题分解为更为简单的子问题的集合 1 10 4",
	"将这些子问题的解存放在一个数据结构中 1 10 4",
	"每个子问题只解决一次 1 10 4",
	"不重复计算 1 10 4",
	"存储它们的解多是采用数组 1 10 4",
	"并没有使用太复杂的数据结构 1 10 4",
	"在本题中 1 10 4",
	"我们采用一个二维数组 1 10 4",
	"这个二维数组用行来代表子串的起始位置 1 10 4",
	"用列来代表子串的结束位置而用具体的一个cell来代表这个行起列止的子串是否是回文串 1 10 4",
	"行和列的大小都是整个输入字符串的长度 1 10 4",
	"所以如果字符串 1 10 4",
	"是回文串的话cell 1 10 4",
	"true 1 10 4",
	"否则cell 1 10 4",
	"false 1 10 4",
	"有了这个数据结构的帮助之后 1 10 4",
	"就可以讨论具体的解答步骤了 1 10 4",
	"可以看出无论奇偶回文串都可以按照一定的方式递归的进行判断 1 10 4",
	"字符串首字母和字符串最后一个字母是否相等 1 10 4",
	"如果相等 1 10 4",
	"那么去掉字符串的首尾字符 1 10 4",
	"取其中的子串按照同样的方法递归的进行判断 1 10 4",
	"这是一种递归的方式是由大到小的一种处理方式 1 10 4",
	"而动态规划则是逆向行驶 1 10 4",
	"由一个一个字符开始 1 10 4",
	"到两个字符 1 10 4",
	"到三个字符 1 10 4",
	"再到整个字符串 1 10 4",
	"一个字符的判断结果为两个字符的判断提供信息 1 10 4",
	"而两个字符的判断则为三个字符的判断提供信息 1 10 4",
	"以此类推 1 10 4",
	"中间所有结果或者信息都由二维数组保存 1 10 4",
	"极大的增加了解答问题的难度那么此处使用.. 1 6 64",
	"longest-palindromic-substri.html 1 6 64",
	"topics 2 10 8",
	"above 2 10 8",
	"this 2 10 8",
	"level 2 10 8",
	"enter 2 15 66",
	"topic 2 15 66",
	"text 2 15 66",
	"here 2 15 66",
	"introduction.html 2 6 64",
	"median 3 40 192",
	"two 3 40 192",
	"sorted 3 40 224",
	"arrays 3 40 224",
	"本题的难度在于需要在logn的时间复杂度内完成.而能在logn的时间复杂度内完成的解法一般就是二分法 3 15 96",
	"可以使用主定理推导得出.由如下公式可以看出 3 15 96",
	"的时间内将问题的规模减少了一半 3 15 96",
	"在这种情况下 3 15 96",
	"时间复杂度就可以达到logn 3 10 32",
	"可以将问题改变为寻找第k大的数 3 10 32",
	"根据题意采用递归的二分法 3 10 32",
	"现在要求第k大的数 3 10 32",
	"如果每次能够排除k 3 10 32",
	"2个元素那相当于在o 3 10 32",
	"的时间内将问题的规模缩小了一半 3 10 32",
	"那么这个思路用到这道题上具体应该怎么做呢 3 10 32",
	"有下图的例子 3 10 32",
	"现在求a和b两个数组所有元素的的中间数 3 10 32",
	"也就是第5大的数 3 10 32",
	"也就是k 3 10 32",
	"那么k 3 10 32",
	"在这个情况下比较a 3 10 32",
	"2-1 3 33 32",
	"的大小 3 10 32",
	"也就是a 3 10 32",
	"可知a 3 10 32",
	"所以可以确定第5大的数肯定不在b的 3 10 32",
	"而应该在a 3 10 32",
	"中产生 3 10 32",
	"由此排除了2个数 3 10 32",
	"接下来就可以用相同的方法求剩下的数中的第3大的数 3 10 32",
	"由此我们将求第5个大的数的问题通过o 3 10 32",
	"的时间缩减为求第3个大的数的问题 3 10 32",
	"成功将问题规模缩减了差不多一半 3 10 32",
	"但我们还需要考虑一些特殊情况 3 10 32",
	"以下例为说明 3 10 32",
	"此时k是5 3 10 32",
	"2是2 3 10 32",
	"要想在a 3 10 32",
	"中取a 3 10 32",
	"很不幸不存在a 3 10 32",
	"a取不到这个数 3 10 32",
	"但很明显我们不能冒然将a 3 10 32",
	"而应该拋弃b 3 10 32",
	"然后在如下的救组中求第3大的数 3 10 32",
	"现在k 3 10 32",
	"8此时显然应该抛弃a 3 10 32",
	"抛弃a 3 10 32",
	"a这个数组就彻底消失了 3 10 32",
	"所以剩下的第2大的数就只能在b中获取 3 10 32",
	"那就只能是b 3 10 32",
	"在上面的例子中有两个不存在需要仔细分析区别 3 10 32",
	"这两种情况在代码中有所不同 3 10 32",
	"a数组存在的情况下取第k 3 10 32",
	"2个元素越界 3 10 32",
	"a数组所有元素均已抛弃的情况下取第k 3 10 32",
	"2个元素 3 10 32",
	"时间复杂度就可以达.. 3 6 64",
	"second-topic.html 3 6 64"];
skipwords = ["and,or,the,it,is,an,on,we,us,to,of,"];
var STR_FORM_SEARCHFOR = "Search for:";
var STR_FORM_SUBMIT_BUTTON = "Submit";
var STR_FORM_RESULTS_PER_PAGE = "Results per page:";
var STR_FORM_MATCH = "Match:";
var STR_FORM_ANY_SEARCH_WORDS = "any search words";
var STR_FORM_ALL_SEARCH_WORDS = "all search words";
var STR_NO_QUERY = "No search query entered.";
var STR_RESULTS_FOR = "Search results for:";
var STR_NO_RESULTS = "No results";
var STR_RESULT = "result";
var STR_RESULTS = "results";
var STR_PHRASE_CONTAINS_COMMON_WORDS = "Your search query contained too many common words to return the entire set of results available. Please try again with a more specific query for better results.";
var STR_SKIPPED_FOLLOWING_WORDS = "The following word(s) are in the skip word list and have been omitted from your search:";
var STR_SKIPPED_PHRASE = "Note that you can not search for exact phrases beginning with a skipped word";
var STR_SUMMARY_NO_RESULTS_FOUND = "No results found.";
var STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS = "found containing all search terms.";
var STR_SUMMARY_FOUND_CONTAINING_SOME_TERMS = "found containing some search terms.";
var STR_SUMMARY_FOUND = "found.";
var STR_PAGES_OF_RESULTS = "pages of results.";
var STR_POSSIBLY_GET_MORE_RESULTS = "You can possibly get more results searching for";
var STR_ANY_OF_TERMS = "any of the terms";
var STR_DIDYOUMEAN = "Did you mean:";
var STR_SORTEDBY_RELEVANCE = "Sorted by relevance";
var STR_SORTBY_RELEVANCE = "Sort by relevance";
var STR_SORTBY_DATE = "Sort by date";
var STR_SORTEDBY_DATE = "Sorted by date &#9660;";
var STR_RESULT_TERMS_MATCHED = "Terms matched: ";
var STR_RESULT_SCORE = "Score: ";
var STR_RESULT_URL = "URL:";
var STR_RESULT_PAGES = "Result Pages:";
var STR_RESULT_PAGES_PREVIOUS = "Previous";
var STR_RESULT_PAGES_NEXT = "Next";
var STR_FORM_CATEGORY = "Category:";
var STR_FORM_CATEGORY_ALL = "All";
var STR_FORM_DATE_FROM = "From:";
var STR_FORM_DATE_TO = "To:";
var STR_FORM_DATE_BUTTON = "&laquo;";
var STR_RESULTS_IN_ALL_CATEGORIES = "in all categories";
var STR_RESULTS_IN_CATEGORY = "in category";
var STR_POWEREDBY = "Search powered by";
var STR_MORETHAN = "More than";
var STR_ALL_CATS = "all categories";
var STR_CAT_SUMMARY = "Refine your search by category:";
var STR_OR = "or";
var STR_RECOMMENDED = "Recommended links";
var STR_SORTEDBY_DATE_ASC = "Sorted by date &#9650;";
var STR_SEARCH_TOOK = "Search took";
var STR_SECONDS = "seconds";
var STR_MAX_RESULTS = "You have requested more results than served per query. Please try again with a more precise query.";
