import { v4 as uuidv4 } from "uuid";

const dataCard = [
  {
    title: "Album Natural Wonder",
    description:
      "เว็ปไซต์รวบรวมรูปภาพ สามารถพิมพ์ในช่อง search เพื่อค้รหารูปฟาพที่ต้องการ และคลิกดูแต่ละรูปได้",
    url: "images/workShopImg/Album.png",
    toWeb: "/AppAlbum",
    toCode:
      "https://github.com/PharadolBrown/portfolio_react/tree/main/src/AllApp/AppAlbum",
    id: uuidv4(),
  },
  {
    title: "Treatise Center",
    description:
      "รวบรวมบทความ และ comment โดย fetch ข้อมูลจาก API มาแสดง และใช้ Dynamic Routing",
    url: "images/workShopImg/AppTreatise.png",
    toWeb: "/AppTreatise",
    toCode:
      "https://github.com/PharadolBrown/portfolio_react/tree/main/src/AllApp/AppTreatise",
    id: uuidv4(),
  },
  {
    title: "Note Story",
    description:
      "App ที่สามารถ Note บันทึกเรื่องราวต่างๆของคุณได้ และสามารถลยหรือแก้ได้ Post ที่คุณบันทึกไปแล้วได้",
    url: "images/workShopImg/AppNote.png",
    toWeb: "/AppNote",
    toCode:
      "https://github.com/PharadolBrown/portfolio_react/tree/main/src/AllApp/AppNoteStory",
    id: uuidv4(),
  },
  {
    title: "Record of Income and Expenses",
    description:
      "App ที่สามารถคำนวณรายรับรายจ่ายของคุนได้ จากการเพิ่มรายการรายรับหรือรายจ่ายของคุณ",
    url: "images/workShopImg/AppFinancial.png",
    toWeb: "https://financial-app-log.netlify.app/",
    toCode: "https://github.com/PharadolBrown/financial-app-react",
    id: uuidv4(),
  },
  {
    title: "To Do List",
    description:
      "บันทึกสิ่งที่คุณต้องทำแต่ละวันที่นี่สิ คุณจะได้ไม่ลืมมัน และรายการไหนที่เสร็จสิ้นแล้วคุณสามารถกด completeพอลบออกไปได้",
    url: "images/workShopImg/AppToDoList.png",
    toWeb: "/AppToDoList",
    toCode:
      "https://github.com/PharadolBrown/portfolio_react/tree/main/src/AllApp/AppToDoList",
    id: uuidv4(),
  },
  {
    title: "Typing Speed Test Game",
    description:
      "App นี้สามารถ ตรวจสอบความไวของคุณจากการพิมพ์ตามประโยคที่กำหนด และคำนวณผลลัพธ์ออกมาเป็น Word per minutes",
    url: "images/workShopImg/AppTypingTest.png",
    toWeb: "/AppTypingTest",
    toCode:
      "https://github.com/PharadolBrown/portfolio_react/tree/main/src/AllApp/AppTypingTest",
    id: uuidv4(),
  },
];

export default dataCard;
