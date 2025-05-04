let users = [
  { name: '지현', id: 1 },
  { id: 2, name: '철수' },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(req: Request) {
  const data = await req.json();
  users.push(data);
  return Response.json({ message: '추가 완료', data });
}