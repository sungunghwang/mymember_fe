import { useState } from 'react';
import MemberItem from './MemberItem';
import membersData from '../data/members';

function MemberList() {
   const [members, setMembers] = useState([]);

   const loadMembers = () => {
      // axios 요청 대신 로컬 데이터를 사용
      setMembers(membersData);
   };

   return (
      <div>
         <h2>회원 목록</h2>
         <button onClick={loadMembers}>회원 목록 불러오기</button>
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
                  {members.map((member, idx) => (
                     <MemberItem key={idx} member={member} />
                  ))}
               </tbody>
            </table>
         )}
      </div>
   );
}

export default MemberList;
