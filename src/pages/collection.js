import { useEffect, useState } from "react";
import styled from "styled-components";

import { CardS, CCenter } from "../context/styleTheme";
import DefaultLayout from "../layout/DefaultLayout";
import { HeroSecBCollection } from "../layout/HeroSecB";
import ButtonCTA from "../component/button/hoverBtn/BtnCTA";
import BtnTOP from "../component/button/hoverBtn/BtnTOP";

// 樣式
const SearchDivXL = styled.div`
    background-color: black;
    color: white;
    /* border: 1px solid white; */
    text-align: center;
    padding: 40px 00 100px 0;
`;

// const SearchDiv = styled.div`

//     height: 100px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 100px;
// `;

// const SearchInput = styled.input`
//     padding: 8px 12px;
//     height:40px;
//     border-radius:12px ;
//     background-color: rgba(255,255,255,0.1);
//     border: 1px solid white;
//     `;

// const BTNDiv = styled.div`
//     margin: 12px;
//     width: 24px;
// `;

// const ResultDiv = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     border: 1px solid yellow;
//     padding: 40px 100px;
//     line-height: 40px;
// `;

// const ResultCard = styled.div`
//     min-width: 136px;
//     height: 200px;
//     margin: 12px 16px;
//     border: 1px solid white;
//     width: 10%;
// `;

        
        
//-------------------------------------------------- 完整頁面元件
// const Collection = () =>{

//     const [cards, setCard] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [input, setInput] = useState([]);

//     const SearchBtn = () => {

//         setLoading(true);
//         setCard([]);
//         setTimeout(()=>{
//             fetch('./cards.json')
//             .then(res=>res.json())
//             .then(data=>{
//                 setCard(data);
//                 setLoading(false);
//                 setInput(input.trim);
//             })
//             .catch(error=>{
//                 console.log("錯誤" + error)
//                 setLoading(false);
//             });
//         },2000);     
//     }

//     return(
//         <DefaultLayout>
//             <CCenter>
//                 <HeroSecBCollection />
//             </CCenter>
//             <SearchDivXL>
//                 <SearchDiv>
//                         <SearchInput 
//                         type="text"
//                         placeholder="...搜尋命運的卡牌"
//                         value={input}/>
//                         <BTNDiv>
//                             <ButtonCTA onClick={SearchBtn}>查詢</ButtonCTA>
//                         </BTNDiv>
//                 </SearchDiv>

//                 <ResultDiv id="result">
//                     {loading ? (
//                         <p>查詢中...</p>    
//                     ): input >2? (
//                         cards.map((item,index) =>(
//                             <ResultCard key={index}>
//                                         <h3>{item}</h3>
//                             </ResultCard>
//                         ))                    
//                     ):(
//                         cards.map((item,index) =>(
//                             <ResultCard key={index}>
//                                         <h3>{item.name}</h3>
//                                         <p>{item.description}</p>
//                             </ResultCard>
//                         ))                    
//                     )}
//                 </ResultDiv>
//             </SearchDivXL>
//         </DefaultLayout>
//     )
// }

// //----------------------------------------------------gpt版本
// // --- debounce ---
// function useDebounce(value, delay = 300) {
//     const [debounced, setDebounced] = useState(value);

//     useEffect(() => {
//         const timer = setTimeout(() => setDebounced(value), delay);
//         return () => clearTimeout(timer);
//     }, [value, delay]);

//     return debounced;
// }

// // --- highlight matched keyword ---
// function highlightMatch(text, keyword) {
//     if (!keyword) return text;
//     const regex = new RegExp(`(${keyword})`, "gi");
//     return text.replace(regex,
//        "<mark style=' background: rgba(165, 84, 227, 0.67); padding: 2px 2px; border-radius: 4px;' >$1</mark>"
//       );
// }




// export default function Collection() {
//   const [data, setData] = useState([]);
//   const [input, setInput] = useState("");

//   const keyword = useDebounce(input, 250).toLowerCase();

//   // 載入 JSON
//   useEffect(() => {
//     fetch("./cards.json")
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, []);

//   // ---- 直接 filter，不用 useMemo ----
//   const results = data.filter((item) => {
//     if (!keyword) return true;
//     return (
//       item.name.toLowerCase().includes(keyword) ||
//       String(item.id).toLowerCase().includes(keyword) ||
//       item.description.toLowerCase().includes(keyword)
//     );
//   });

//    return (
//     <DefaultLayout>
//         <CCenter>
//               <HeroSecBCollection />
//         </CCenter>
//         <SearchDivXL>
//           <SearchInput
//             type="text"
//             placeholder="搜尋卡牌名稱 / 描述…"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             >
//           </SearchInput>


//         {/* 符合條件清單DIV */}
//           <ul style={{ marginTop: "15px" }}>
//             {results.map((item) => (
//               <li
//                 key={item.id}
//                 style={{ marginBottom: "12px", lineHeight: "1.5" }}
//                 dangerouslySetInnerHTML={{
//                   __html: `
//                     <strong>${highlightMatch(item.name, keyword)}</strong><br />
//                     <small>${highlightMatch(item.description, keyword)}</small>
//                   `,
//                 }}
//               />
//             ))}
//           </ul>
//         </SearchDivXL>
//     </DefaultLayout>

//   );
// }

// const Collection = () => {
//   const [allCards, setAllCards] = useState([]);
//   const [keyword, setKeyword] = useState("");
//   const [results, setResults] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null); // ← 目前選取的卡


//   const publicUrl = process.env.PUBLIC_URL;

//   // 載入資料
//   useEffect(() => {
//     fetch(`${publicUrl}/cards.json`)
//       .then((res) => res.json())
//       .then((data) => setAllCards(data));
//   }, [publicUrl]);

//   // 搜尋
//   useEffect(() => {
//     if (!keyword) {
//       setResults(allCards);
//       return;
//     }

//     const k = keyword.toLowerCase();
//     const filtered = allCards.filter(
//       (item) =>
//         item.title.toLowerCase().includes(k) ||
//         item.isntReserve.toLowerCase().includes(k)
//     );

//     setResults(filtered);
//   }, [keyword, allCards]);

//   // highlight
//   const highlightMatch = (text, keyword) => {
//     if (!keyword) return text;
//     const regex = new RegExp(`(${keyword})`, "gi");

//     return (
//       <span
//         dangerouslySetInnerHTML={{
//           __html: text.replace(
//             regex,
//             `<span style="
//               background: rgba(162, 85, 220, 0.86);
//               color: white;
//               padding: 2px 4px;
//               border-radius: 4px;
//             ">${"$1"}</span>`
//           ),
//         }}
//       />
//     );
//   };

//   return (

//     <DefaultLayout>
//         <CCenter>
//                <HeroSecBCollection />
//         </CCenter>
//         <BtnTOP />

//          <SearchDivXL>

//             <div style={{ display: "flex", height: "100vh" }}>
//               {/* 左側區域 */}
//               <div style={{ width: "350px", padding: "20px", borderRight: "1px solid #ddd" }}>
//                 <h2>塔羅搜尋</h2>

//                 <input
//                   type="text"
//                   value={keyword}
//                   onChange={(e) => setKeyword(e.target.value)}
//                   placeholder="輸入關鍵字..."
//                   style={{ width: "100%", padding: "10px", marginBottom: "20px",backgroundColor:"rgba(74, 68, 78, 0.86)" }}
//                 />

//                 <ul style={{ listStyle: "none", padding: 0 }}>
//                   {results.map((item) => (
//                     <li
//                       key={item.title}
//                       onClick={() => setSelectedCard(item)} // ← 點擊後展開右側 panel
//                       style={{
//                         padding: "10px",
//                         borderBottom: "1px solid #eee",
//                         cursor: "pointer",
//                       }}
//                     >
//                       <strong>{highlightMatch(item.major.title, keyword)}</strong>
//                       <br />
//                       <small>{highlightMatch(item.major.id, keyword)}</small>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* 右側滑出的 Side Panel */}
//               <div
//                 style={{
//                   width: selectedCard ? "350px" : "0px",
//                   transition: "0.3s",
//                   overflow: "hidden",
//                   background: "#8e60ea46",
//                   padding: selectedCard ? "20px" : "0px",
//                   boxShadow: selectedCard ? "-4px 0 8px rgba(0,0,0,0.1)" : "none",
//                 }}
//               >
//                 {selectedCard && (
//                   <>
//                     <button
//                       onClick={() => setSelectedCard(null)}
//                       style={{
//                         float: "right",
//                         border: "none",
//                         background: "transparent",
//                         fontSize: "20px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       ✕
//                     </button>

//                     <h3>{selectedCard.major.title}</h3>
//                     <p>{selectedCard.major.id}</p>
//                     <img src={selectedCard.major.image} alt="" />
//                   </>
//                 )}
//               </div>
//             </div>
//          </SearchDivXL>
//     </DefaultLayout>
//   );
// };

const Collection = () => {
  const [allCards, setAllCards] = useState({ major: [], minor: {} }); // 初始化結構
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]); // 這裡存過濾後的「大牌」陣列
  const [selectedCard, setSelectedCard] = useState(null);

  const publicUrl = process.env.PUBLIC_URL;

  // 1. 載入資料
  useEffect(() => {
    fetch(`${publicUrl}/cards.json`)
      .then((res) => res.json())
      .then((data) => {
        setAllCards(data);
        setResults(data.major); // 預設顯示全部大牌
      });
  }, [publicUrl]);

  // 2. 搜尋邏輯 (針對大牌)
  useEffect(() => {
    if (!allCards.major) return;

    if (!keyword.trim()) {
      setResults(allCards.major);
      return;
    }

    const k = keyword.toLowerCase();
    const filtered = allCards.major.filter((item) =>
      item.title.toLowerCase().includes(k) ||
      item.id.toLowerCase().includes(k) ||
      // item.isntReserve.some(tag => tag.toLowerCase().includes(k)) // tags 是陣列，要用 some
      (item.isntReserve && item.isntReserve.some(tag => tag.toLowerCase().includes(k)))
    );

    setResults(filtered);
  }, [keyword, allCards]);

  // ... highlightMatch 函數保持不變 ...
  const highlightMatch = (text, keyword) => {
    if (!text) return ""; // 防錯：確保 text 存在
    if (!keyword) return text;
    
    const regex = new RegExp(`(${keyword})`, "gi");
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: text.toString().replace(
            regex,
            `<span style="background: rgba(162, 85, 220, 0.86); color: white; padding: 2px 4px; border-radius: 4px;">$1</span>`
          ),
        }}
      />
    );
  };
  return (
    <DefaultLayout>
      <CCenter><HeroSecBCollection /></CCenter>
      <BtnTOP />

      <SearchDivXL>
        <div style={{ display: "flex", height: "80vh" }}>
          {/* 左側區域 */}
          <div style={{ width: "350px", padding: "20px", borderRight: "1px solid #ddd", overflowY: "auto" }}>
            <h2>塔羅搜尋</h2>

            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="搜尋名稱或關鍵字..."
              style={{ width: "100%", padding: "10px", marginBottom: "20px", backgroundColor: "rgba(74, 68, 78, 0.86)", color: "white" }}
            />

            <ul style={{ listStyle: "none", padding: 0,color:"white" }}>
              {results.map((item) => (
                <li
                  key={item.id} // 使用唯一的 id 作為 key
                  onClick={() => setSelectedCard(item)}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    backgroundColor: selectedCard?.id === item.id ? "#f0f0f06e" : "transparent"
                  }}
                >
                  {/* 注意這裡：直接用 item.title */}
                 <strong>{highlightMatch(item.title, keyword)}</strong>
                <br />
                <small>{highlightMatch(item.id, keyword)}</small>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側滑出的 Side Panel */}
          <div
            style={{
              width: selectedCard ? "450px" : "0px", // 稍微加寬一點放圖
              transition: "0.3s",
              overflowY: "auto",
              background: "#555", // 內容區建議背景亮一點，或是依據你的設計調整
              padding: selectedCard ? "20px" : "0px",
              boxShadow: selectedCard ? "-4px 0 8px rgba(0,0,0,0.1)" : "none",
              color: "#333"
            }}
          >
            {selectedCard && (
              <>
                <button
                  onClick={() => setSelectedCard(null)}
                  style={{ float: "right", border: "none", background: "transparent", fontSize: "24px", cursor: "pointer" }}
                >✕</button>

                {/* 詳細資料顯示 */}
                <h3>{selectedCard.title}</h3>
                <p>ID: {selectedCard.id}</p>
                
                {/* 圖片路徑確認：你的 JSON 中 key 是 "img" */}
                <CardS
                  src={`${publicUrl}${selectedCard.img}`}
                  alt={selectedCard.title} 
                  style={{ width: "20%", borderRadius: "8px", marginBottom: "15px" }} 
                /> 

                <h4>正位關鍵字：</h4>
                <p>{selectedCard.isntReserve.join("、")}</p>
                
                <h4>逆位關鍵字：</h4>
                <p>{selectedCard.Reserve.join("、")}</p>
              </>
            )}
          </div>
        </div>
      </SearchDivXL>
    </DefaultLayout>
  );
};

export default Collection
