import styles from "~/styles/login.css";
// import stylesapp from "~/styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    // { rel: "stylesheet", href: stylesapp },
  ];
}

export default function Index() {
  return (
    <div className="wrapper --bs-secondary-color">
      <h2 className="postcss-text">POSTCSS</h2>
      <h1 className="text-6xl font-bold text-red-700 ">Welcome to Remix</h1>
    </div>
  );
}
