import styles from "~/styles/login.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div className="wrapper">
      <h1>Welcome to Remix</h1>
    </div>
  );
}
