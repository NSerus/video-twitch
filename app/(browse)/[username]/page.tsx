interface UserPageProps {
  params: {
    username: string;
  };
}

function UserPage({ params }: UserPageProps) {
  return <div>User: {params.username}</div>;
}

export default UserPage;
