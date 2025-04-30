type Params = {
    params: {
      id: string;
    };
  };
  
  export default function UserPage({ params }: Params) {
    return <h1>유저 ID: {params.id}</h1>;
  }