export default function VideoPlayer() {
  return (
    <iframe
      style={{ borderRadius: "1.5em" }}
      width="350"
      height="200"
      src="https://www.youtube.com/embed/oN6doVEr1XM?si=b8lAK1rA3TxaOjsg&amp;start=17"
      title="YouTube video player"
      frameborder="8"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen="true"
    ></iframe>
  );
}
