export default function Gif({ link }) {
  return (
    <div
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "111%",
        position: "relative",
      }}>
      <iframe
        title="mario-coin-block-gif"
        src={link}
        width="432"
        height="200"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen></iframe>
    </div>
  );
}
