import React,{useState} from "react";
import {FaSyncAlt} from "react-icons/fa";

const digests = [
    '投资者常常不愿意止损，总想等价格回到成本之上。他们其实更应该思考的是,股票此刻的内在价值到底是多少？--- 锚定效应',
    '公司不喜欢员工远程工作，因为觉得员工像在兼职，而公司却支付了全职的薪水。公司的想法是，既然我支付了全职薪水，那么从早上9点到下午5点，我对你的所有时间、注意力和精力拥有所有权。这种所有权的体现就是，这段时间你需要到我指定的办公场所，让我看着你在工作',
    '世界上每个程序员一觉醒来，都会有"我应该开发一个 Todo 清单程序的想法"，人们喜欢开发生产力工具。所以，你应该尽量避免将生产力工具作为创业项目，那类软件根本没有护城河',
    '旅行不是为了看到不同的事物，而是为了学会不同地看待事物',
    '入职以后，公司给每位员工发了一台电脑，表面上看是每个人拥有了一台电脑，其实是给每个电脑配了一个人',
    '任何软件工具都应该遵循一个原则：做对的操作应该很容易，做错的操作应该很难',
    '一种普遍存在的误解是，不应该吃过期食物。但是实际上，保质期大多数时候只表示食物何时最新鲜，而不是何时不可食用，跟食品安全关系不大。刚刚过期的食品就扔掉，会造成很大的浪费',
    '生命太短暂，不能花在那些不值得阅读的内容上面。我们一生中能够阅读的书籍其实很少。因此，关键技能不是多读，而是跳过那些不值得读的内容',
    '你应该开始写博客，如果不知道写什么，就写你学到的东西，以及写下你创造或建立的东西',
];

export default function RandomDigest() {
    const [index, setIndex] = useState(Math.floor((Math.random() * digests.length)));
    const handleClick = () => setIndex(Math.floor((Math.random() * digests.length)));
    return (
        <div style={{fontStyle: 'italic'}}
             onMouseOver={() => setIndex(-1)}
             onMouseLeave={() => handleClick()}
						 >
            {index === -1
                ? <FaSyncAlt onClick={() => handleClick()}/>
                : digests[index]
            }
        </div>
    );
};
