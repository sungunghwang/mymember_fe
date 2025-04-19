function MemberItem({ member }) {
   return (
      <tr>
         <td>{member.name}</td>
         <td>{member.email}</td>
         <td>{member.joinDate}</td>
         <td>{member.gender}</td>
         <td>{member.nationality}</td>
      </tr>
   );
}

export default MemberItem;
