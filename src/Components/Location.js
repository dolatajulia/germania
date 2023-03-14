import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Location = () => {

  const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;

  // return (
  //   <div>
  //     {/* <iframe
  //       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1217.606173568815!2d16.865784603587553!3d52.38470076827121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704453cd9072901%3A0xc80d75b7d2d48168!2sGermania.%20Dolata%20T.%2C%20mgr%2C%20t%C5%82umacz%20przysi%C4%99g%C5%82y%20j%C4%99z.%20niemieckiego!5e0!3m2!1sen!2spl!4v1677522368289!5m2!1sen!2spl"
  //       width="600"
  //       height="450"
  //       style={{ border: "0" }}
  //       allowFullScreen=""
  //       loading="lazy"
  //       referrerPolicy="no-referrer-when-downgrade"
  //     ></iframe> */}
      
  //     <a href="https://goo.gl/maps/8AeJWUxtJs2fGiQC9" target="_blank">
  //       Open in Google Maps
  //     </a>
  //   </div>
  // );
};

const Map = () => {
return (
  <div>Map</div>
)
};

export default Location;

