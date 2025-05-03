//유저 데이터 반환 + (추가 처리도 가능)

let userList = [
    { id: 1, name: '지현' },
    { id: 2, name: '철수' }
  ];
  
  export async function GET() {
    return Response.json(userList);
  }