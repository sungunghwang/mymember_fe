import { useState } from 'react';
import axios from 'axios';
import MemberItem from './MemberItem';

function MemberList() {
   const [members, setMembers] = useState([]);

   const fetchMembers = async () => {
      try {
         const response = await axios.get('http://localhost:3000/api/members');
         setMembers(response.data); // 예: [{ name, email, joinDate, gender, nationality }, ...]
      } catch (error) {
         console.error('회원 목록 가져오기 실패:', error);
      }
   };

   return (
      <div>
         <h2>회원 목록</h2>
         <button onClick={fetchMembers}>회원 목록 불러오기</button>
         {members.length > 0 && (
            <table>
               <thead>
                  <tr>
                     <th>회원명</th>
                     <th>이메일</th>
                     <th>가입일시</th>
                     <th>성별</th>
                     <th>국적</th>
                  </tr>
               </thead>
               <tbody>
                  {members.map((member, index) => (
                     <MemberItem key={index} member={member} />
                  ))}
               </tbody>
            </table>
         )}
      </div>
   );
}

export default MemberList;
