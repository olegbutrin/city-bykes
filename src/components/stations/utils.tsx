interface IGoogleMapLink {
  name: string;
  latitude: number;
  longitude: number;
}

const GoogleMapLink = ({ name, latitude, longitude }: IGoogleMapLink) => {
  return (
    <a
      href={`http://www.google.com/maps/place/${latitude},${longitude}`}
      target={"_blank"}
      rel={"noreferrer"}
    >
      {name}
    </a>
  );
};

export { GoogleMapLink };
