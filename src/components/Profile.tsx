// interface ProfileProps {
//     name: string;
//     age: number;
// }
type ProfileProps = {
    name?: string;
    age: number;
    status: "Engineer" | "Contractor" | "Student";
    children?: React.ReactNode;
}
const Profile = ({name,age, status, children}:ProfileProps) => {
  return (
    <div style={{ border:"3px solid", margin:"3px" }}>
        <h1>Name : {name || "User"}</h1>
        <h2>Age : {age}</h2>
        <h3>Status : {status}</h3>
        <h3>Salary : {children}</h3>
    </div>
  )
}

export default Profile