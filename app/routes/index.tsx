import styles from "~/styles/login.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div className="wrapper">
      <h1 className="text-6xl font-bold text-red-700">Welcome to Remix</h1>
    </div>
  );
}
