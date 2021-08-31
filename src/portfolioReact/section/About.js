import styled from "styled-components";

const HeaderP = styled.p`
  color: #ff8c00;
`;

export default function About() {
  return (
    <div
      className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto pt-20 border-b-2 pb-10 border-gray-300"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src="images/aboutMe/myPictureVertical.jpg"
          alt=""
          className="mb-5 md:mb-0 w-11/12 md:w-5/12 h-full rounded-md"
        />
        <div className="ml-5 md:ml-10 lg:ml-16">
          <h4 className="text-2xl md:text-4xl lg:text-5xl text-yellow-600 font-bold mb-3 md:mb-4 lg:pb-5">
            About Me
          </h4>
          <p className="text-base">
            <label className="md:text-xl text-yellow-600 font-bold mr-1">
              "สวัสดีพี่ๆจาก Dek-D ทุกคนครับ"
            </label>
            ผมบราวน์ (Brown) นะครับ ปัจจุบันเป็นนักศึกษาชั้นปีที่ 3
            คณะเทคโนโลยีสารสนเทศ สาขาวัตกรรมบริการดิจิทอล
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ถึงจะเป็นคณะ IT
            แต่ก็อยู่สาขาธุกิจครับ เลยไม่ได้แตะ code สักเท่าไหร่
            แต่ผมพึ่งจะมารู้จัก code ได้ไม่นานครับ
            และสนใจจึงศึกษาด้วยตัวเองมาตลอด จนได้รู้จักกับ React js
            เมื่อเร็วๆนี้เองครับ ซึ่งเว็ปไซต์นี้เป็นเว็ปที่รวบรวม Web
            Application ที่ผมพัฒนาด้วย React เพื่อให้ทางทีมงานเห็นว่าผมมีพื้นฐาน
            React ตรงตามเงื่อนไขพิเศษของการรับเข้าฝึกงานครับ
          </p>
          <div className="font-bold mt-5 text-sm lg:text-lg flex justify-between">
            <div>
              <HeaderP>Age</HeaderP>
              <p>21</p>
            </div>
            <div>
              <HeaderP>Gender</HeaderP>
              <p>Male</p>
            </div>
            <div>
              <HeaderP>Student</HeaderP>
              <p>Third Years</p>
            </div>
            <div>
              <HeaderP>College</HeaderP>
              <p>KMUTT / SIT / DSI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
