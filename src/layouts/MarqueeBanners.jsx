export default function MarqueeBanners() {
  const banners = [
    { src: "banner_gifs/1_Enterprise.gif", alt: "Enterprise banner" },
    { src: "banner_gifs/2_Exxon.gif", alt: "Exxon banner" },
    { src: "banner_gifs/3_Hilton.gif", alt: "Hilton banner" },
    { src: "banner_gifs/4_Healthcare.gif", alt: "Healthcare banner" },
    { src: "banner_gifs/5_Lactaid.gif", alt: "Lactaid banner" },
    { src: "banner_gifs/6_Morgan.gif", alt: "Morgan banner" },
    { src: "banner_gifs/7_SAP.gif", alt: "SAP banner" },
    { src: "banner_gifs/8_SF.gif", alt: "State Farm banner" },
  ];
  // optimize by looping through an array of different src for each item
  return (
    <div className="marquee fadeout-horizontal" style={{ "--numItems": 8 }}>
      <div className="marquee-track">
        {/* loop through banners array */}
        {banners.map((banner, index) => (
          <div
            className="marquee-item"
            style={{ "--item-position": index + 1 }}
            key={index}
          >
            <div className="banner-container">
              <img src={banner.src} alt={banner.alt} className="banner-gif" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
