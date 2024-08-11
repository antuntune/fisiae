export default function VideoPlayer() {
  return (
    <iframe
      style={{ borderRadius: "1.5em" }}
      width="354"
      height="200"
      src="https://www.youtube.com/embed/PcR8I-7oCnU?si=RfcnO4tBCU-1zaNH"
      title="YouTube video player"
      frameborder="8"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen="true"
    ></iframe>
  );
}
