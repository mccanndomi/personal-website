import "./Pill.css";

export const Pill = ({ info }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "red",
        fontSize: 10,
        color: "white",
        margin: 4,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        height: 12,
      }}
    >
      <p
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        {info}
      </p>
    </div>
  );
};
