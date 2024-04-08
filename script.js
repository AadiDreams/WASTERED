
import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}

function value(){
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const users=["admin","user1"];
    const passwords=["admin","user1"];
    if(user==users[0] && pass==passwords[0]){
        window.open("./loged.html");
    }
    else{
        window.alert("Invalid Credential");
    }
}